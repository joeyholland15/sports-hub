import React from 'react';
import { connect } from 'react-redux';
import { fetchCumulativeStats } from '../../actions/MlbActions';

class MlbHome extends React.Component {
  componentDidMount() {
    this.props.fetchCumulativeStats().then((resp) => {
      console.log('HELLOW!')
    });
  }

  render() {
    return (
      <div>
        Mlb Home
      </div>
    )
  }
}

export default connect(null, { fetchCumulativeStats })(MlbHome);
