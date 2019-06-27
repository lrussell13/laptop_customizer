import React from 'react';

function Options(props){
    const Options = props.features[props.index].map((item, index) => {
        const selectedClass = item.name === props.state.selected[props.index].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return <li key={index} className="feature__item">
          <div className={featureClass}
          onClick={() => props.updateFeature(props.index, item)}>
              { item.name }
              ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(item.cost) })
          </div>
        </li>});

    return (
        <div>
            {Options}
        </div>
    ) 
}

export default Options;