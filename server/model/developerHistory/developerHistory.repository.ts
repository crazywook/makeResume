import mongoose, {Document, Schema} from "mongoose"

import {AchievementDto} from "../../../common/model/developerHistory/types"

type AchievementDocument = AchievementDto & Document

const achievementSchema = new Schema<AchievementDto>({
  id: Number,
  title: String,
  startedAt: Date,
  contents: [String]
}, {
  collection: "developerHistory"
})

export const developerHistoryRepository = mongoose.model<AchievementDocument>("developerHistory", achievementSchema)
