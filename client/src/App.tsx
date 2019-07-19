import * as React from "react";
import {Provider} from "react-redux";
import {ResumePage} from "./pages/ResumePage";
import {configure} from "./store/redux/reduxStore";

export const App: React.SFC<{}> = () =>
  <Provider store={configure({})}>
    <ResumePage />
  </Provider>;
