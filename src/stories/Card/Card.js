import React from 'react'
import PropTypes from 'prop-types'
import { options } from './constants'


export const Card = ({
    children = "Label",
    color = "normal",
    size = "md"
}) => {
    return 
    <div>
        {children}
    </div>
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes),
}

export default Card
