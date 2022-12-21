import download from "image-downloader";
import MDAST from "mdast";
import path from "path";
import sharp from "sharp";
import type { VisitorResult } from "unist-util-visit";
import { visit } from "unist-util-visit";

interface Node extends MDAST.Parent {
  tagName: string;
  properties: { [key: string]: any };
}

function rehypeDownloadImages() {
  return async (tree: MDAST.Root) => {
    const downloadImagePromises: any[] = [];

    const visitor = (node: Node): VisitorResult => {
      if (node.tagName === "img") {
        const src = node.properties.src;
        const fileName = (Math.random() + 1).toString(36).substring(7);

        const downloadDirectory = path.join(
          process.cwd(),
          "public/images/content"
        );

        const downloadImagePromise = download
          .image({
            url: src,
            dest: `${downloadDirectory}/${fileName}.png`,
          })
          .then(() => {
            sharp(`${downloadDirectory}/${fileName}.png`)
              .toFile(`${downloadDirectory}/${fileName}.webp`)
              .catch((err) =>
                console.error(
                  `Error: ${err} when converting ${downloadDirectory}/${fileName}.webp`
                )
              );
          })
          .catch((err) =>
            console.error(
              `Error: ${err} when saving ${downloadDirectory}/${fileName}.png`
            )
          );

        downloadImagePromises.push(downloadImagePromise);

        node.properties.src = `/images/content/${fileName}.png`;
        node.properties.loading = "lazy";
      }
    };

    visit(tree, "element", visitor);

    await Promise.all(downloadImagePromises);

    return null;
  };
}

export default rehypeDownloadImages;
