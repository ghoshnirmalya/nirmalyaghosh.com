import download from "image-downloader";
import path from "path";
import { visit } from "unist-util-visit";
import sharp from "sharp";

function rehypeDownloadImages() {
  function transformer(tree) {
    visit(tree, "element", visitor);
    function visitor(node) {
      if (node.tagName === "img") {
        const src = node.properties.src;
        const fileName = src.split("/")[4];
        const downloadDirectory = path.join(
          process.cwd(),
          "public/images/content"
        );

        download
          .image({
            url: src,
            dest: `${downloadDirectory}/${fileName}.png`,
          })
          .then(({ filename }) => {
            console.log("Saved to", filename);

            sharp(`${downloadDirectory}/${fileName}.png`).toFile(
              `${downloadDirectory}/${fileName}.webp`
            );
          })
          .catch((err) => console.error(err));

        node.properties.src = `/images/content/${fileName}.webp`;
        node.properties.loading = "lazy";
      }
    }
  }

  return transformer;
}

export default rehypeDownloadImages;
