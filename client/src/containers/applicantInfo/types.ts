import {any} from "prop-types";

export interface ApplicantInfo {
  name: string;
  email: string;
  phone: string;
  career: string;
  // TODO: 이미지 같은게 들어갈 수 있으니 확장성 고려해서 객체 배열로
  skillStack: string[];
}

export interface ApplicantInfoState {
  isApplicantInfoLoading: boolean;
  applicantInfo: ApplicantInfo;
}
