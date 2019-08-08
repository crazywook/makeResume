import mongoose, {Document, Schema} from "mongoose"

import {AchievementDto, DeveloperHistory} from "../../../common/model/developerHistory/types"

type DeveloperHistoryDocument = DeveloperHistory & Document

const achievementSchema = new Schema({
  id: String,
  title: String,
  startedAt: Date,
  contents: [String]
})

const developerHistorySchema = new Schema<DeveloperHistory>({
  id: Number,
  name: String,
  achievements: { type: [achievementSchema], default: []}
}, {
  collection: "developerHistory"
})

export const DeveloperHistoryRepository = mongoose.model<DeveloperHistoryDocument>("developerHistory", developerHistorySchema)
