export interface AchievementDto {
  id: number
  title: string
  startedAt: Date
  contents: string | string[]
}

export interface DeveloperHistory {
  id: number
  name: string
  achievements: AchievementDto[]
}
