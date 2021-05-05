import React from 'react'

const HOC = (Component1) => {
    const Component2 = (props) => {
        return (
            <Component1 propsFromHOC="propsFromHOC" {...props}/>
        )
    }
    return Component2
}

export default HOC
