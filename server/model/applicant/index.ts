import {MongoClient} from "mongodb"

import {dbSet} from "../../persistence/mongo"
import {ApplicantInfoRepository} from "./applicant.repository"

export const applicantInfoRepository = new ApplicantInfoRepository(dbSet)
