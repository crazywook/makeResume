import {produce} from "immer"
import {handleActions} from "redux-actions"

import {DeveloperHistoryState} from "../../../../common/model/developerHistory/types"
import {DEVELOPER_HISTORY_RECEIVED, DEVELOPER_HISTORY_REQUEST} from "./action"

export const initialState: DeveloperHistoryState = {
  isDeveloperHistoryLoading: true,
  developerHistory: [],
};

const reducer = handleActions({
  [DEVELOPER_HISTORY_RECEIVED]: (state, action) =>
    produce(state, draft => {
      console.log("action", action);
      draft.developerHistory = action.payload.developerHistory;
    }),
  [DEVELOPER_HISTORY_REQUEST]: (state, action) =>
    produce(state, draft => {
      draft.isDeveloperHistoryLoading = false;
    }),
}, initialState);

export default reducer;
