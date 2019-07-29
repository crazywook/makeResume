import {ApplicantInfo} from "../../containers/applicantInfo/types"
import {http} from "../../lib/http"

export function fetchApplicantInfo() {
  return http<ApplicantInfo>("http://localhost:9090/api/applicant");
}
