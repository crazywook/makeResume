import * as React from 'react';

interface RouteComponentProps<T> {
  children: (props: T) => React.ReactNode;
}

export class ParentComponent<T> extends React.Component<RouteComponentProps<T> & T> {
  render() {
    return this.props.children(this.props);
  }
}
