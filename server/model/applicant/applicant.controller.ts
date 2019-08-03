import {Get, JsonController, Param, Post, QueryParam} from "routing-controllers"

import {applicantInfoRepository} from "."
import {ApplicantInfo} from "../../../common/model/applicant/types"

@JsonController("/applicant")
export class ApplicantController
{
  @Get("/")
  "get all applicant info"()
  {
    console.log("applicant")
    return applicantInfoRepository.find()
  }

  @Get("/:name")
  "get one applicant info"(
    @Param("name") name: string
  )
  {
    return applicantInfoRepository.findByName(name)
  }

  @Post("/")
  "create applicant info"()
  {
    const applicantInfoMock: ApplicantInfo = {
      name: "김성욱",
      email: "wook9898@hanmail.net",
      phone: "01090860572",
      career: "3년",
      skillStack: ["NodeJs", "Typescript", "React", "Java", "Spring"],
      githubUrl: "https://github.com/crazywook/makeResume",
    }

    return applicantInfoRepository.insert(applicantInfoMock)
  }
}
