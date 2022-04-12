import React from 'react'
import PropTypes from 'prop-types'

export default function Toolbar(props) {
   const {filters, selected, onSelectFilter} = props;
   return (
     <div class="buttons">
        {filters.map((item, index) =>
          <button 
            onClick={evt => onSelectFilter(evt)}// {() => onSelectfilter(item)}
            key={index}
            value={item}
            type='button'
            className={item===selected ? selected+' active': selected}
            >{item}</button>)}
     </div>
   );
}
Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectfilter: PropTypes.func,
}