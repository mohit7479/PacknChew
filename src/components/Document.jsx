import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import pdffile from "../pdf/menu.pdf";

function Document() {
  const docs = [
    {
      uri: pdffile,
      fileType: "pdf",
      fileName: "PackNChew Menu",
    },
  ];

  return (
    <DocViewer
      documents={docs}
      config={{
        header: {
          disableHeader: true,
          disableFileName: true,
          retainURLParams: true,
        },
        footer: {
          disableFooter: true,
        },
        csvDelimiter: ",", // "," as default,
        pdfZoom: {
          defaultZoom: 1, // 1 as default,
          zoomJump: 0.2, // 0.1 as default,
        },
        pdfVerticalScrollByDefault: false, // false as default
      }}
    />
  );
}

export default Document;
