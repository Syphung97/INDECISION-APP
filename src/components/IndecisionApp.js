import React from 'react';
import Header from './Header'
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const subtitle = 'Put your life in the hands of a computer';
        return(
            <div>
                <Header subtitle={subtitle}/>
            </div>
        )
    }
}