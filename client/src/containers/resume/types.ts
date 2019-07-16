import {any} from "prop-types";

export interface ApplicantInfo {
  name: string;
  email: string;
  phone: string;
  career: string;
  skillStack: string[];
}

export interface ApplicantInfoState {
  isApplicantInfoLoading: boolean;
  applicantInfo: ApplicantInfo;
}
