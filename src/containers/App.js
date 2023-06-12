import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ToggleButton from '../components/ToggleButton';
import { RingLoader } from 'react-spinners';

class App extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
      starships: [],
      searchField: '',
      displayVehicles: true,
      displayStarships: true,
      loading: true,
    }
  }

  async componentDidMount() {
    const vehiclesUrls = 
    [
      './vehicles/Sandcrawler.png',
      './vehicles/t16skyhopper.png',
      './vehicles/x34landspeeder.png',
      './vehicles/tiefighter2.png',
      './vehicles/snowspeeder.png',
      './vehicles/tiebomber.png',
      './vehicles/atat.png',
      './vehicles/at-st.png',
      './vehicles/cloudcar.png',
      './vehicles/sailbarge.png',
    ];
    const starshipUrls = [
      './starships/cr90.png',
      './starships/stardestroyer.png',
      './starships/sentinel.png',
      './starships/deathstar.png',
      './starships/milleniumfalcon.png',
      './starships/ywing.png',
      './starships/xwing.png',
      './starships/tieadvanced.png',
      './starships/executor.png',
      './starships/rebeltransport.png',
    ];

    const vehiclesResponse = await axios.get('https://swapi.dev/api/vehicles');
    const vehiclesData = await vehiclesResponse.data.results.map((vehicle, index) => {
      if (vehiclesUrls[index]) {
        vehicle.imageUrl = vehiclesUrls[index];
      }
      return vehicle;
    });

    const starshipsResponse = await axios.get('https://swapi.dev/api/starships');
    const starshipsData = await starshipsResponse.data.results.map((starship, index) => {
      if (starshipUrls[index]) {
        starship.imageUrl = starshipUrls[index];
      }
      return starship;
    });
    
    this.setState({ vehicles: vehiclesData, starships: starshipsData, loading: false});
  }

  //Arrow function uses value from outer function (event from onChange in SearchBox.js)
  //Traditional function will not work here
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  onVehicleToggle = () => {
    this.setState(prevState => ({
      displayVehicles: !prevState.displayVehicles
    }));
  }

  onStarshipToggle = () => {
    this.setState(prevState => ({
      displayStarships: !prevState.displayStarships
    }));
  }

  render() {
    const { vehicles, starships, searchField } = this.state; 

    const filteredVehicles = vehicles.filter(vehicle => {
      return vehicle.name.toLowerCase().includes(searchField.toLowerCase());
    });

    const filteredStarships = starships.filter(starship => {
      return starship.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (this.state.loading) {
      return(
        <div className='d-flex loading-screen justify-content-center align-items-center'>
          <RingLoader color='#f8f9fa' size='150' loading={this.state.loading}/>
        </div>
      )
    }
    else {
      return(
        <div className='text-center bg-dark'>
          <h1 className='heading fw-bolder fs-1 text-uppercase mt-4 py-5 border-bottom border-white text-light'>Starwars Armoury</h1>
          <div className='d-flex justify-content-center py-3 mx-5'>
            <div className='d-inline-flex me-auto'>
              <ToggleButton name='Vehicles' toggled={this.state.displayVehicles} toggle={this.onVehicleToggle}/>
              <ToggleButton name='Starships' toggled={this.state.displayStarships} toggle={this.onStarshipToggle}/>
            </div>
            <div className='me-auto w-50'>
              <SearchBox searchChange={this.onSearchChange}/>
            </div>
          </div>
          {this.state.displayVehicles && <CardList heading="Vehicles" elements={filteredVehicles}/>}
          {this.state.displayStarships && <CardList heading="Starships" elements={filteredStarships}/>}
        </div>
      );
    }
  }
}

export default App;
