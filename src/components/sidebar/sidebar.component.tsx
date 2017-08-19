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
                <strong>AQ Admin</strong>
            </div>
            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                        <i className="glyphicon glyphicon-home"/>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="glyphicon glyphicon-briefcase"/>
                        About
                    </a>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                        <i className="glyphicon glyphicon-duplicate"/>
                        Pages
                    </a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i className="glyphicon glyphicon-link"/>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="glyphicon glyphicon-send"/>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Sidebar;
