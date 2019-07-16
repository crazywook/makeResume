import {requestResume} from "../../request/resume/requestResume";
import {ApplicantInfo} from "./types";

const PREFIX = "RESUME";
export const LOAD_RESUME = `${PREFIX}/LOAD_RESUME`;
export const LOAD_RESUME_START = `${PREFIX}/LOAD_RESUME_START`;
export const LOAD_RESUME_FINISH = `${PREFIX}/LOAD_RESUME_FINISH`;

export const setLoadResumeStart = dispatch =>
  dispatch({
    type: LOAD_RESUME_START
  });

export const setLoadResumeFinish = dispatch =>
  dispatch({
    type: LOAD_RESUME_FINISH
  });

export const loadResume = () => async dispatch => {

  setLoadResumeStart(dispatch);

  const resumeProps: ApplicantInfo = {
    name: "김성욱",
    email: "wook9898@hanmail.net",
    phone: "01090860572",
    career: "3년",
    skillStack: ["NodeJs", "Typescript", "React", "Java", "Spring"],
  };

  const applicantInfo = await requestResume()
    .catch(e => resumeProps);

  dispatch({
    type: LOAD_RESUME,
    payload: {applicantInfo},
  });

  setLoadResumeFinish(dispatch);
};
