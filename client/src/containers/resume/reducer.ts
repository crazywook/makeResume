import {produce} from "immer";
import {LOAD_RESUME, LOAD_RESUME_FINISH, LOAD_RESUME_START} from "./action";
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

  switch(action.type) {
    case LOAD_RESUME:
      return produce(state, draft => {
        draft.applicantInfo = action.payload.applicantInfo;
      });
    case LOAD_RESUME_FINISH:
      return produce(state, draft => {
        draft.isApplicantInfoLoading = false;
      });
    case LOAD_RESUME_START:
      return produce(state, draft => {
        draft.isApplicantInfoLoading = true;
      });
    default:
      return state;
  }
}
