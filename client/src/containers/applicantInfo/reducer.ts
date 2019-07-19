import {produce} from "immer";
import {handleActions} from "redux-actions";

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

const reducer = handleActions({
  [APPLICANT_INFO_RECEIVED]: (state, action) =>
    produce(state, draft => {
      draft.applicantInfo = action.payload.applicantInfo;
    }),
  [APPLICANT_INFO_REQUEST_FINISH]: state =>
    produce(state, draft => {
      draft.isApplicantInfoLoading = false;
    }),
  [APPLICANT_INFO_REQUEST_START]: state =>
    produce(state, draft => {
      draft.isApplicantInfoLoading = true;
    }),
}, initialState);

export default reducer;
