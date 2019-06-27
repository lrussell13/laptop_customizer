import React from 'react';
import Options from './Options/Options'

function Feature(props){
    return (
        <div className="feature" key={props.index}>
                <div className="feature__name">{props.index}</div>
                <ul className="feature__list">
                    < Options state={props.state} features={props.features} updateFeature={props.updateFeature} key={props.index} index={props.index} />
                </ul>
        </div> 
    ) 
}

export default Feature;