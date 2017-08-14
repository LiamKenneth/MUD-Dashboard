import * as React from "react";

interface IHelloProps {
  name: string;
}

class Hello extends React.Component<IHelloProps, {}> {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

export default Hello;