export interface Achievement {
  id: number;
  startedAt: Date;
  contents: string | string[];
}

export interface DeveloperHistoryState {
  isDeveloperHistoryLoading: boolean;
  developerHistory: Achievement[];
}
