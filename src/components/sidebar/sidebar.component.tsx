import * as React from 'react';
import {  Row, Col } from 'reactstrap';

class Sidebar extends React.Component<any, any> {
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
         <nav id="sidebar" className={this.props.sidebarOpen === true ? 'active' : ''}>

            <div className="sidebar-header">
                <h3>ArchaicQuest</h3>
                <strong>AQ</strong>
            </div>
            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                        <i className="glyphicon glyphicon-home"/>
                        Home
                    </a>
                </li>

            </ul>
        </nav>
    );
  }
}

export default Sidebar;
