import React from 'react'
import * as PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles'

const $NAME$ = ({
  className,
  style
}) => {
  const c = styles()
  return <div className={clsx(c.root, className)} style={style}>

  </div>
}

$NAME$.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

$NAME$.defaultProps = {

}

export default $NAME$
