import React from 'react';
import { CheckboxWithLabel } from '../../../common/component/check-box/check-box.js'
let state = { count: 0 }
class VisitedCities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visitedCities: [],
            selectedCities: [],
            cityOptions: this.listOfCities()
        }
    }
    listOfCities = () => {
        let dupList = this.props.visitedCities.slice(0)
        let newCitiesList = [];
        dupList.map((eachCity, index) => {
            newCitiesList.push({ id: index, city: eachCity, isChecked: false })
        })
        return newCitiesList;
    }
    handleCheckboxClick = (eachObj) => {
        let dupList = this.state.cityOptions.slice(0)
        let index = dupList.indexOf(eachObj)
        dupList[index].isChecked = !dupList[index].isChecked
        let visitedCities = dupList.filter(eachEl => eachEl.isChecked === true)
        this.setState({ cityOptions: dupList, visitedCities: visitedCities })
        console.log(visitedCities)
    }
    handleSubmit = () => {
        this.setState({ selectedCities: this.state.visitedCities })
    }
    displayVisitedCitiesMessage = () => {
        return <p>I have visited these cities {this.state.selectedCities.map(eachEl=>{
            return <span>{eachEl.city}</span>
        }).reduce((prev,current)=>[prev,',',current])}</p>
    }
    renderCityOptions = () => {
        return this.state.cityOptions.map(eachObj => <CheckboxWithLabel key={eachObj.id} handleCheckboxClick={this.handleCheckboxClick} eachObj={eachObj}/>)
    }
    render() {
        return (
            <div>
                <p>Which of the following cities you have visited?</p>
                {this.renderCityOptions()}
                <input type="submit" value="Make your choice" onClick={this.handleSubmit}/>
                {this.state.selectedCities.length>0?this.displayVisitedCitiesMessage():null}
            </div>)
    }
}
export { VisitedCities }
