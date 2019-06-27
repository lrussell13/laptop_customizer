import React from 'react';
import Feature from './Feature/Feature';

function Features(props){
    return (
        <div>
            {Object.keys(props.features).map(key => (< Feature state={props.state} features={props.features} updateFeature={props.updateFeature} key={key} index={key}/>))}
        </div>
    )
}

export default Features;