import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useStyles from './styles'

const Placeholder_pascalComponent = props => {
  const [state, setState] = useState({})
  const { className } = props

  const c = useStyles()

  return (
    <div className={`${c.root} ${className}`}>

    </div>
  )
}

Placeholder_pascal.propTypes = {
  className: PropTypes.string
}

Placeholder_pascal.defaultProps = {
  className: ''
}

export default Placeholder_pascal
