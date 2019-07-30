import {ApplicantInfo} from "../../containers/applicantInfo/types"
import {http} from "../../lib/http"

export function fetchApplicantInfo() {
  return http<ApplicantInfo>("/applicant");
}
