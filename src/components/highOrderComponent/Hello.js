import React from 'react'
import HOC from './HOC'

function Hello(props) {
    const {propsFromHOC, propsFromAppJs} = props
    console.log(props)
    return (
        <div>
            <div class="alert alert-primary" role="alert">
            High Order Component Demo:
            </div>
            <p>Props coming from -  <span class="badge badge-light"> {propsFromHOC}</span></p>
            <p>Props coming from -  <span class="badge badge-light">{propsFromAppJs}</span></p>
        </div>
    )
}

export default HOC(Hello)
