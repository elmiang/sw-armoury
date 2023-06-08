import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
      starships: [],
      searchField: '',
    }
  }

  async componentDidMount() {
    const vehiclesResponse = await axios.get('https://swapi.dev/api/vehicles');
    
    const starshipsResponse = await axios.get('https://swapi.dev/api/starships');

    this.setState({ vehicles: vehiclesResponse.data.results, starships: starshipsResponse.data.results});
  }

  //Arrow function uses value from outer function (event from onChange in SearchBox.js)
  //Traditional function will not work here
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { vehicles, starships, searchField } = this.state; 

    const filteredVehicles = vehicles.filter(vehicle => {
      return vehicle.name.toLowerCase().includes(searchField.toLowerCase());
    });

    const filteredStarships = starships.filter(starship => {
      return starship.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return(
      <div className='text-center bg-dark'>
        <h1 className='heading fw-bolder fs-1 text-uppercase mt-4 py-5 border-bottom border-primary text-light'>Starwars Armoury</h1>
        <div className='d-flex justify-content-center'>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <CardList heading="Vehicles" elements={filteredVehicles}/>
        <CardList heading="Starships" elements={filteredStarships}/>
      </div>
    );
  }
}

export default App;
