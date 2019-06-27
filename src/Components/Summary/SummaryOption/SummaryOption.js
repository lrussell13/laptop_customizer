import React from 'react';

function SummaryOption(props){
    return (
        <div className="summary__option" key={props.index}>
                <div className="summary__option__label">{props.index}  </div>
                <div className="summary__option__value">{props.state.selected[props.index].name}</div>
                <div className="summary__option__cost">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(props.state.selected[props.index].cost) }
                </div>
            </div>  
    ) 
}

export default SummaryOption;