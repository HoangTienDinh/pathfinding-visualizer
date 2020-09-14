import React from 'react'
import './Node.css'

const Node = ({ node, nodeInd }) => {
    return (
        <div className='node'>
            {node}
        </div>
    )
}

export default Node
