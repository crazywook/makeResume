import {ApplicantInfo} from "../../../../common/model/applicant/types"
import {http} from "../../lib/http"

export function fetchApplicantInfo(name: string = "김성욱") {
  return http<ApplicantInfo>(`/applicant/${name}`);
}
