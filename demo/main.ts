import { PreviewController } from "..";

const files = {
  "index.html": "Hello world!",
};

function makeAnIframe(url: string) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", url);
  iframe.style.width = "1000px";
  iframe.style.height = "1000px";
  document.body.appendChild(iframe);
}

async function run() {
  const previewController = new PreviewController({
    baseUrl: "https://wigg3b-3000.preview.csb.app/",
    getFileContent: (filepath) => {
      console.log("request file content", filepath);
      return files["index.html"];
    },
  });

  const previewUrl = await previewController.initPreview();
  makeAnIframe(previewUrl);
}

run().catch(console.error);
