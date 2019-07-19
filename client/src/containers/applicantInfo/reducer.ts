import {produce} from "immer";

import {APPLICANT_INFO_RECEIVED, APPLICANT_INFO_REQUEST_FINISH, APPLICANT_INFO_REQUEST_START} from "./action";
import {ApplicantInfoState} from "./types";

const initialState: ApplicantInfoState = {
  isApplicantInfoLoading: true,
  applicantInfo: {
    name: "",
    email: "",
    phone: "",
    career: "",
    skillStack: [],
  },
};

export default function reducer(state: ApplicantInfoState = initialState, action) {

  switch (action.type) {
    case APPLICANT_INFO_RECEIVED:
      console.log(APPLICANT_INFO_RECEIVED, action.payload);
      return produce(state, draft => {
        draft.applicantInfo = action.payload.applicantInfo;
      });
    case APPLICANT_INFO_REQUEST_FINISH:
      return produce(state, draft => {
        draft.isApplicantInfoLoading = false;
      });
    case APPLICANT_INFO_REQUEST_START:
      return produce(state, draft => {
        draft.isApplicantInfoLoading = true;
      });
    default:
      return state;
  }
}
