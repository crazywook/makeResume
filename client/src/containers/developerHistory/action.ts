import {createAction} from "redux-actions"

import {AchievementDto} from "./types"

export const DEVELOPER_HISTORY_RECEIVED = "DEVELOPER_HISTORY/RECEIVED";
export const DEVELOPER_HISTORY_REQUEST = "DEVELOPER_HISTORY/REQUEST";
export const DEVELOPER_HISTORY_REQUEST_FAIL = "DEVELOPER_HISTORY/REQUEST_FAIL";
export const DEVELOPER_HISTORY_REQUEST_FINISH = "DEVELOPER_HISTORY/REQUEST_FINISH";
export const DEVELOPER_HISTORY_REQUEST_START = "DEVELOPER_HISTORY/REQUEST_START";

export const DeveloperHistoryAction = {
  receiveDeveloperHistory: createAction<{developerHistory: AchievementDto[]}>(DEVELOPER_HISTORY_RECEIVED),
  requestDeveloperHistory: createAction<{name: string}>(DEVELOPER_HISTORY_REQUEST),
  requestDeveloperHistoryFail: createAction(DEVELOPER_HISTORY_REQUEST_FAIL),
  requestDeveloperHistoryFinish: createAction(DEVELOPER_HISTORY_REQUEST_FINISH),
  requestDeveloperHistoryStart: createAction(DEVELOPER_HISTORY_REQUEST_START),
};
