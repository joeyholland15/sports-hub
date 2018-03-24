import React from 'react';
import './Sidebar.scss';

class Sidebar extends React.Component {
  render() {
    return (
      <div styleName="container">
        {this.props.children}
      </div>
    );
  }
}

export default Sidebar;
