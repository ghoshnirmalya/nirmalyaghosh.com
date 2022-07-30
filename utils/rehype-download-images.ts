import download from "image-downloader";
import MDAST from "mdast";
import path from "path";
import sharp from "sharp";
import { visit } from "unist-util-visit";

interface ShortCode extends MDAST.Parent {
  tagName: string;
  properties: { [key: string]: any };
}

function rehypeDownloadImages() {
  return async (tree: MDAST.Root) => {
    const downloadImagePromises: any[] = [];

    const visitor = (node: ShortCode) => {
      if (node.tagName === "img") {
        const src = node.properties.src;
        const fileName = src.split("/")[4];

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

        node.properties.src = `/images/content/${fileName}.webp`;
        node.properties.loading = "lazy";
      }
    };

    visit(tree, "element", visitor);

    await Promise.all(downloadImagePromises);

    return null;
  };
}

export default rehypeDownloadImages;
