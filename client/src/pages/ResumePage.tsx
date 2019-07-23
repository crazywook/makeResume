import html2canvas from "html2canvas";
import * as html2pdf from "html2pdf";
import jsPDF from "jspdf";
import * as React from "react";

import {Contact} from "../components/applicantInfo/Contact";
import {Name} from "../components/applicantInfo/Name";
import {ResumeBody} from "../components/applicantInfo/ResumeBody";
import {Spec} from "../components/applicantInfo/Spec";
import {LoadingBlock} from "../components/common/loading/LoadingBlock";
import {DeveloperHistory} from "../components/developerHistory";
import {Project} from "../components/project/Project";
import {ApplicantInfoContainer} from "../containers/applicantInfo/ApplicantInfoContainer";
import {DeveloperHistoryContainer} from "../containers/developerHistory/DeveloperHistoryContainer";
import {ProjectContainer} from "../containers/project/ProjectContainer";

function buildOnPrintPdfClick(targetId: string) {

  return () => {
    const element: HTMLElement | null = document.querySelector(targetId);

    if (!element) {
      alert(`${targetId} does not exist`);
      return;
    }

    html2canvas(element).then(canvas => {
        canvas.id = "canvasToPdf";
        document.body.appendChild(canvas);
        const c = document.querySelector("#canvasToPdf");
        console.log("canvas", c);
        doc.html(
          canvas,
          {
            callback: myDoc => {
              // myDoc.save("resume.pdf");
            }
          }
        );
    });
    // {
    //   format: [4, 2]
    // }
    const doc = new jsPDF();
    // doc.text("test", 10, 10);
    // doc.save("a4.pdf");
  };
}

function buildOnPrintPdfClick2(selector) {
  return () => {
    const element = document.querySelector(selector);
    html2pdf(element);
  };
}

export const ResumePage: React.SFC<{}> = () =>
  <ResumeBody>
    <button onClick={buildOnPrintPdfClick2("#react-root")} >pdf</button>
    <ApplicantInfoContainer>
      {props => props.isApplicantInfoLoading
          ? <LoadingBlock />
          : <>
            <Name name={props.applicantInfo.name} />
            <Contact
              email={props.applicantInfo.email}
              phone={props.applicantInfo.phone}
            />
            <Spec
              career={props.applicantInfo.career}
              skillStack={props.applicantInfo.skillStack}
            />
          </>
      }
    </ApplicantInfoContainer>
    <hr />
    <ProjectContainer >
      {props => props.isProjectLoading
        ? <LoadingBlock />
        : <Project projects={props.projects} />
      }
    </ProjectContainer>
    <DeveloperHistoryContainer>
      {props => props.isDeveloperHistoryLoading
        ? <LoadingBlock />
        : <DeveloperHistory developerHistory={props.developerHistory} />
      }
    </DeveloperHistoryContainer>
      <h3
          className="">학력</h3>
      <p
        className="">서강 대학교 컴퓨터 공학과 1998 ~ 2001 ( 4학기 중퇴)</p>
      <p
        className="">
      </p>
  </ResumeBody>;
