export interface ProjectDto {
  id: number;
  title: string;
  startedAt?: Date;
  finishedAt?: Date;
  description: string;
  iosUrl?: string;
  androidUrl?: string;
  webUrl?: string;
  implement: string;
  businessLogics?: {
    title: string;
    contents: string | any[];
  }[];
}
