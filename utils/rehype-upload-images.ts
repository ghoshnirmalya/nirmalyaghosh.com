import ImageKit from "imagekit";
import MDAST from "mdast";
import { IArticle } from "types/article";
import type { VisitorResult } from "unist-util-visit";
import { visit } from "unist-util-visit";

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_API_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_API_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

interface Node extends MDAST.Parent {
  tagName: string;
  properties: { [key: string]: any };
}

function rehypeUploadImages(articleSlug: IArticle["slug"]) {
  return async (tree: MDAST.Root) => {
    const uploadImagePromises: any[] = [];
    let fileNumber = 1;

    const visitor = (node: Node): VisitorResult => {
      if (node.tagName === "img") {
        const src = node.properties.src;
        const fileName = `${articleSlug}-${fileNumber}`;

        const uploadImagePromise = imagekit.upload(
          {
            file: src,
            fileName: `${fileName}.png`,
            useUniqueFileName: false,
          },
          function (error: unknown) {
            if (error) {
              console.log(error);
            }
          }
        );

        uploadImagePromises.push(uploadImagePromise);

        node.properties.src = `${process.env.IMAGEKIT_URL_ENDPOINT}/${fileName}.png`;
        node.properties.loading = "lazy";

        fileNumber++;
      }
    };

    visit(tree, "element", visitor);

    await Promise.all(uploadImagePromises);

    return null;
  };
}

export default rehypeUploadImages;
