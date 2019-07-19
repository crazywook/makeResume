import * as React from "react";
import Styled from "styled-components";

import {DeveloperHistoryState} from "../../containers/developerHistory/types";

type PropsType = {
  className?: string;
} & Pick<DeveloperHistoryState, "developerHistory">;

export const DeveloperHistory: React.FunctionComponent<PropsType> = ({className = ""}) => {
  return (
    <div className={className} >

    </div>
  );
};
