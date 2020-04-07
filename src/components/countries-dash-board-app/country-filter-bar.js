import React from 'react';
import { SearchCountry } from './search-country.js'
import { SelectRegion } from './select-region.js'
class CountriesFilterBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="flex justify-between m-5">
            <SearchCountry onChangeSearchText={this.props.onChangeSearchText} selectedTheme={this.props.selectedTheme}/>
            <SelectRegion onChangeSelectedRegion={this.props.onChangeSelectedRegion}/>
        </div>
    }
}
export { CountriesFilterBar }
