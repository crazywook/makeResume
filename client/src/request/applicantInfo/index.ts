import {ApplicantInfo} from "../../../../common/model/applicant/types"
import {http} from "../../lib/http"

export function fetchApplicantInfo() {
  return http<ApplicantInfo>("/applicant");
}
