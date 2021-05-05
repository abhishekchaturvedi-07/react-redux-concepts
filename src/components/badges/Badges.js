import React from 'react'
//Green Badge
import BasicQuesntions from '../basicQuestions'
//Higher Order Component
import Hello from '../highOrderComponent/Hello'
//Routing Demo
import RoutingDemo from '../routingDemo/RoutingDemo'
// import Routed from '../routingDemo/Routed'
//Dyanamic Style Demo
import DyanamicStyle from '../dyanamicStyle/DyanamicStyle'
//Context API & Hooks Demo
import Context from '../context/Context'

function Badges() {
    return (
        <div>
             <BasicQuesntions />
            <Hello propsFromAppJs="propsFromAppJs" />
            <DyanamicStyle />
            <Context />
            <RoutingDemo />
            
        
        </div>
    )
}

export default Badges
