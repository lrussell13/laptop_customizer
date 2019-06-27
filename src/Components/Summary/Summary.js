import React from 'react';
import SummaryOption from './SummaryOption/SummaryOption';

function Summary(props){
    const total = Object.keys(props.state.selected)
    .reduce((acc, curr) => acc + props.state.selected[curr].cost, 0);    

    return (
        <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            { Object.keys(props.state.selected)
          .map(key => < SummaryOption key={key} index={key} state={props.state}/>)}
            <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(total) }
              </div>
            </div>
        </section>  
    ) 
}

export default Summary;