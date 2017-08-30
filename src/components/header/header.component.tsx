import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
         <Navbar className="navbar-expand-sm" color="faded" light={true} toggleable={true}>
        <button type="button" className="sidebar-toggler navbar-toggler-left" onClick={this.props.handleClick}>
          <span className="navbar-toggler-icon"/>
        </button>
         <NavbarBrand href="/">Dashboard</NavbarBrand>

        </Navbar>
    );
  }
}

export default Header;
