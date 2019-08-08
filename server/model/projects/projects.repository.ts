import mongoose, {Document, Schema} from "mongoose"

import {ProjectDto} from "../../../common/model/projects/types"

type ProjectDocument = ProjectDto & Document

const ProjectHistorySchema: Schema = new Schema({
  id: Number,
  title: String,
  owns: String,
  startedAt: Date,
  finishedAt: Date,
  description: String,
  iosUrl: String,
  androidUrl: String,
  webUrl: String,
  implement: String,
  businessLogics: {
    type: [{
      title: String,
      contents: [Schema.Types.Mixed]
    }]
  }
})

const ProjectSchema: Schema = new Schema({
  id: Number,
  name: String,
  projects: {
    type: [ProjectHistorySchema]
  },
}, {
  collection: "projectHistory"
})

export const ProjectRepository = mongoose.model<ProjectDocument>("project", ProjectSchema)
