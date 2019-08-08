import {DeveloperHistory} from "../../../../common/model/developerHistory/types"

export interface AchievementDto {
  id: number;
  title: string;
  startedAt: Date;
  contents: string | string[];
}

export interface DeveloperHistoryState {
  isDeveloperHistoryLoading: boolean;
  developerHistory?: DeveloperHistory;
}
