import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import Placeholder_pascalComponent from './component';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    push,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Placeholder_pascalComponent);
