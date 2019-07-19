import {produce} from "immer";
import {handleActions} from "redux-actions";

import {DEVELOPER_HISTORY_RECEIVED} from "./action";
import {DeveloperHistoryState} from "./types";

export const initialState: DeveloperHistoryState = {
  isDeveloperHistoryLoading: true,
  developerHistory: [],
};

const reducer = handleActions({
  [DEVELOPER_HISTORY_RECEIVED]: (state, action) =>
    produce(state, draft => {
      draft.developerHistory = action.payload.developerHistory;
    })
}, initialState);

export default reducer;
