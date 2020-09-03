import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Placeholder_pascalComponent from './Placeholder_pascal'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Placeholder_pascalComponent)
