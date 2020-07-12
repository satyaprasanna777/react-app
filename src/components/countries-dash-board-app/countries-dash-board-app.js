/*global fetch*/
import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import { withRouter } from 'react-router-dom'
import { Header } from './countries-dash-board-app-header.js'
import { CountriesFilterBar } from './country-filter-bar.js'
class CountriesDashboardApp extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         countries: [],
         searchText: '',
         selectedRegion: 'All'
      }
   }
   componentDidMount = () => {
      fetch('https://restcountries.eu/rest/v2/all')
         .then(response => response.json())
         .then(json => this.getCountries(json))
   }
   getCountries = json => {
      this.setState({ countries: json })
   }
   countryDetails = obj => {
      this.props.history.push({
         pathname: `/countriesDashboardApp/${obj.alpha3Code}`,
         state: [obj]
      })
   }
   displayCountries = () => {
      let filteredCountriesList = this.filterCountriesBySearchText()
      let countries = filteredCountriesList.map(eachObj => (
         <div
            key={eachObj.alpha3Code}
            onClick={() => this.countryDetails(eachObj)}
            className='shadow-xl my-2 w-64 '
            id={eachObj.name}
         >
            <img
               loading='lazy'
               src={eachObj.flag}
               alt='flag'
               style={{ width: '300px' }}
               id={eachObj.name}
            />
            <b id={eachObj.name}>{eachObj.name}</b>
            <br />
            <p id={eachObj.name}>
               <b id={eachObj.name}>Population:</b>
               {eachObj.population}
            </p>
            <p id={eachObj.name}>
               <b id={eachObj.name}>Region:</b>
               {eachObj.region}
            </p>
            <p id={eachObj.name}>
               <b id={eachObj.name}>Capital:</b>
               {eachObj.capital}
            </p>
         </div>
      ))
      if (countries.length > 0) return countries
      else return <p>Result not found</p>
   }
   loading = () => {
      return <p className='font-black text-3xl text-center'>Loading...</p>
   }
   onChangeSearchText = value => {
      this.setState({ searchText: value })
   }
   onChangeSelectedRegion = value => {
      this.setState({ selectedRegion: value })
   }
   filterCountriesBySelectedRegion = () => {
      let dupCountries = this.state.countries.slice(0)
      if (this.state.selectedRegion === 'All') {
         return dupCountries
      } else {
         dupCountries = dupCountries.filter(
            eachObj => eachObj.region === this.state.selectedRegion
         )
         return dupCountries
      }
   }
   filterCountriesBySearchText = () => {
      let dupFilteredCountries = this.filterCountriesBySelectedRegion()
      let searchedCountries = dupFilteredCountries.filter(eachObj =>
         eachObj.name
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase())
      )
      return searchedCountries
   }
   render() {
      return (
         <div
            className={
               this.props.selectedTheme === 'Light mode'
                  ? 'bg-white m-5'
                  : 'bg-gray-800 text-white m-5'
            }
         >
            <Header
               selectedTheme={this.props.selectedTheme}
               onChangeTheme={this.props.onChangeTheme}
            />
            <div>
               <CountriesFilterBar
                  onChangeSearchText={this.onChangeSearchText}
                  onChangeSelectedRegion={this.onChangeSelectedRegion}
                  selectedTheme={this.props.selectedTheme}
               />
               {this.state.countries.length > 0 ? (
                  <div className='flex justify-between flex-wrap'>
                     {this.displayCountries()}
                  </div>
               ) : (
                  this.loading()
               )}
            </div>
         </div>
      )
   }
}
export default withRouter(CountriesDashboardApp)
