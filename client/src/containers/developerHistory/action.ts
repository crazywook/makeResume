import {createAction} from "redux-actions";

export const DEVELOPER_HISTORY_RECEIVED = "DEVELOPER_HISTORY_RECEIVED";
export const DEVELOPER_HISTORY_REQUEST = "DEVELOPER_HISTORY_REQUEST";
export const DEVELOPER_HISTORY_REQUEST_FAIL = "DEVELOPER_HISTORY_REQUEST_FAIL";
export const DEVELOPER_HISTORY_REQUEST_FINISH = "DEVELOPER_HISTORY_REQUEST_FINISH";
export const DEVELOPER_HISTORY_REQUEST_START = "DEVELOPER_HISTORY_REQUEST_START";

export const DeveloperHistoryAction = {
  receiveDeveloperHistory: createAction(DEVELOPER_HISTORY_RECEIVED),
  requestDeveloperHistoryFail: createAction(DEVELOPER_HISTORY_REQUEST_FAIL),
  requestDeveloperHistoryFinish: createAction(DEVELOPER_HISTORY_REQUEST_FINISH),
  requestDeveloperHistoryStart: createAction(DEVELOPER_HISTORY_REQUEST_START),
};

export const requestDeveloperHistory = () => createAction(DEVELOPER_HISTORY_REQUEST)();
