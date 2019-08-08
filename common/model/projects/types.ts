export interface ProjectDto {
  id: number
  title: string
  owns: string
  startedAt?: Date
  finishedAt?: Date
  description: string
  iosUrl?: string
  androidUrl?: string
  webUrl?: string
  implement: string
  businessLogics?: {
    title: string
    contents: string | any[]
  }[]
}

export interface ProjectHistory {
  id: number
  name: string
  projects: ProjectDto[]
}
