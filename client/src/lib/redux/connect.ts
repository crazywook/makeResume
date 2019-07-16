/**
 *   @author lyuighan
 *   @since 2018. 5. 25.
 */
import {ComponentType} from "react";
import {connect, MapDispatchToPropsNonObject} from "react-redux";
import {Dispatch, Action} from "redux";

import RootState from "../../store/redux/state";

type MapPropsParam<TProps> = (state: RootState, ownProps?: TProps) => TProps;

export type ConnectedComponent<TProps> = <
  TComponent extends ComponentType<TProps>
>(
  component: TComponent
) => TComponent;

function connectToAppState<TProps, TDispatchProps = {}>(
  mapProps: MapPropsParam<TProps>,
  mapDispatch: MapDispatchToPropsNonObject<TDispatchProps, TProps>
  // mapDispatch: MapDispatchParam<TProps, TDispatchProps>
): ConnectedComponent<TProps> {
  return connect<TProps, TDispatchProps, TProps>(
    mapProps,
    mapDispatch
  ) as ConnectedComponent<TProps & TDispatchProps>;
}

// export {connectToAppState as connect};

type MapPropsParamV2<Props, OwnProps, T = RootState> = (
  state: T,
  ownProps?: OwnProps
) => Props;

type MapDispatchParamV2<Props, DispatchProps> = (
  dispatch: Dispatch<Action<any>>,
  ownProps?: Props
) => DispatchProps;

type ConnectedComponentV2<Props> = (
  component: ComponentType<Props>
) => ComponentType<Props>;

function connectToAppStateV2<
  PropertyProps,
  DispatchProps,
  Props extends PropertyProps & DispatchProps,
  OwnProps = Omit<Props, keyof (PropertyProps & DispatchProps)>
>(
  givenMapProps: MapPropsParamV2<PropertyProps, OwnProps> | null,
  mapDispatch: MapDispatchToPropsNonObject<DispatchProps, OwnProps>
  // mapDispatch: MapDispatchParamV2<OwnProps, DispatchProps>
): ConnectedComponentV2<OwnProps> {
  const mapProps =
    givenMapProps &&
    /* tslint:disable */
    function(store, ownProps) {
      const props = givenMapProps(store, ownProps);
      if (!ownProps) {
        return props;
      }

      return {
        ...(props as any),
        ...ownProps,
      };
    };

  return connect<PropertyProps, DispatchProps, OwnProps>(
    mapProps,
    mapDispatch
  ) as ConnectedComponentV2<OwnProps>;
}

export {connectToAppStateV2 as connect};
