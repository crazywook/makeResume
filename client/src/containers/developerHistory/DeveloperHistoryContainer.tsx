import * as React from "react"
import {bindActionCreators} from "redux"

import {FunctionChildrenComponent} from "../../components/common/ParentComponent"
import {connect} from "../../lib/redux/connect"
import RootState from "../../store/redux/state"
import {DeveloperHistoryAction} from "./action"
import {DeveloperHistoryState} from "./types"

type PropertyProps = DeveloperHistoryState;

interface DispatchProps {
  requestDeveloperHistory: typeof DeveloperHistoryAction.requestDeveloperHistory;
}

interface RouterComponentProps {
  children: (props: DeveloperHistoryState) => React.ReactNode;
}

type PropsType = DispatchProps & RouterComponentProps & PropertyProps;

class DeveloperHistoryContainerComponent extends FunctionChildrenComponent<PropsType> {

  componentDidMount() {
    this.props.requestDeveloperHistory({name: "김성욱"});
  }
}

const connectedContainer = connect<PropertyProps, DispatchProps, PropsType, RouterComponentProps>(
  ({developerHistoryState}: RootState) => ({
    ...developerHistoryState
  }),
  dispatch => bindActionCreators({
    requestDeveloperHistory: DeveloperHistoryAction.requestDeveloperHistory,
  }, dispatch)
)(DeveloperHistoryContainerComponent);

export {connectedContainer as DeveloperHistoryContainer};
