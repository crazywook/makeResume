import {Collection, Db, MongoClient} from "mongodb"

import {ApplicantInfo} from "../../../common/model/applicant/types"

export class ApplicantInfoRepository {

  private collection: Collection<ApplicantInfo>

  constructor(
    private readonly dbSet: Promise<Db>
  ) {
    process.nextTick(async () => {
      this.collection = (await dbSet).collection("applicantInfo")
    })
  }

  async insert(applicantInfo: ApplicantInfo) {
    const result = this.collection.insert(applicantInfo)
    return result
  }

  find() {
    const result = this.collection.find({})
    return result
  }

  async findByName(name: string) {
    const result = await this.collection.find({name}).toArray()
    return result[0]
  }

  findOne(applicantInfo: Partial<ApplicantInfo>) {
    return this.collection.findOne(applicantInfo)
  }
}
