import {ApplicantInfoState} from "../../containers/applicantInfo/types";
import {DeveloperHistoryState} from "../../containers/developerHistory/types";
import {ProjectsState} from "../../containers/project/reducer";

export default interface RootState {
  applicantInfoState: ApplicantInfoState;
  projectsState: ProjectsState;
  developerHistoryState: DeveloperHistoryState;
}
