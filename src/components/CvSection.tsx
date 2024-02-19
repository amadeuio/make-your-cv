import { useContext, useRef } from "react";
import { FormDataContext } from "../App";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import HeaderCv from "./HeaderCv";
import EducationCv from "./EducationCv";
import ExperienceCv from "./ExperienceCv";

interface CvProps {
  divRef: React.RefObject<HTMLDivElement>;
}

function Cv({ divRef }: CvProps) {
  return (
    <div className="cv" ref={divRef}>
      <HeaderCv />
      <div className="body-cv">
        <EducationCv />
        <ExperienceCv />
      </div>
    </div>
  );
}

function CvSection() {
  const { headerObject } = useContext(FormDataContext)!;
  const [firstName, lastName] = headerObject.fullName.split(" ");

  const divRef = useRef<HTMLDivElement>(null!);

  const handleDownloadPDF = () => {
    const elementToDownload = divRef.current;
    elementToDownload.style.borderRadius = "0";

    html2canvas(elementToDownload).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${firstName}_${lastName}_CV`);
    });
  };

  return (
    <main className="cv-section">
      <div className="cv-and-download-container">
        <div className="cv-border-radius-wrapper">
          <Cv divRef={divRef} />
        </div>

        <button className="download-button" onClick={handleDownloadPDF}>
          Download PDF
        </button>
      </div>
    </main>
  );
}

export default CvSection;
