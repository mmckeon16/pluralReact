import React, { Component } from 'react';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseDetail from '../house';
import Header from './header';

const AppPresentation = (props) => {
    let activeComponent = null;
    if(props.country)
        activeComponent = <SearchResults country = {props.country}
            filteredHouses={props.filteredHouses} setActiveHouse = {props.setActiveHouse}/>;
    if(props.activeHouse)
        activeComponent = <HouseDetail house = {props.activeHouse}/>
    if(!activeComponent)
        activeComponent = <FeaturedHouse house = {props.featuredHouse} />
    return (
        <div className="container">
            <Header subtitle = "Providing Houses world wide baby!"/>
            <HouseFilter countries={props.countries} filterHouses={props.filterHouses} />
            {activeComponent}
        </div>
    );
}

export default AppPresentation;