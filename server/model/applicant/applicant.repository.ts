import mongoose, {Document, Schema} from "mongoose"

import {ApplicantInfo} from "../../../common/model/applicant/types"

type ApplicantInfoDocument = Document & ApplicantInfo

const applicantInfoSchema: Schema<ApplicantInfo> = new Schema({
  name: String,
  email: String,
  phone: String,
  career: String,
  skillStack: [String]
}, {
  collection: "applicantInfo",
  toJSON: {
    getters: true
  }
})

export const applicantInfoRepository = mongoose.model<ApplicantInfoDocument>("applicantInfo", applicantInfoSchema)
