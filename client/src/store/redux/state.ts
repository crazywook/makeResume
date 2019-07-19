import {ApplicantInfoState} from "../../containers/applicantInfo/types";
import {ProjectsState} from "../../containers/project/reducer";

export default interface RootState {
  applicantInfoState: ApplicantInfoState;
  projectsState: ProjectsState;
}
