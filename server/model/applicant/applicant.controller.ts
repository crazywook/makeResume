import {Get, JsonController} from "routing-controllers"

import {ApplicantInfo} from "../../../common/model/applicant/types"

@JsonController("/applicant")
export class ApplicantController
{
  @Get("/")
  "get applicant info"()
  {
    const applicantInfoMock: ApplicantInfo = {
      name: "김성욱",
      email: "wook9898@hanmail.net",
      phone: "01090860572",
      career: "3년",
      skillStack: ["NodeJs", "Typescript", "React", "Java", "Spring"],
    }

    return applicantInfoMock
  }
}
