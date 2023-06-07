import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import CardList from '../components/CardList';

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

  render() {
    return(
      <div className='text-center'>
        <h1 className='heading fw-bolder fs-1 text-uppercase mt-4 py-5 border-bottom border-primary'>Starwars Armoury</h1>
        <CardList heading="Vehicles" elements={this.state.vehicles}/>
        <CardList heading="Starships" elements={this.state.starships}/>
      </div>
    );
  }
}

export default App;
