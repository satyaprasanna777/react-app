import React from 'react'

function CheckboxWithLabel(props) {
    return (
        <div>
    <input type="checkBox" onClick={()=>props.handleCheckboxClick(props.eachObj)}  name="visitedCity" /> 
    <label> { props.eachObj.city } </label>
    </div>)
}
export { CheckboxWithLabel }
