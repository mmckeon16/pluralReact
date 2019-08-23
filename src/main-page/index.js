import React from 'react';
import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';

function App() {
  state = {};
  
  componentDidMount() {
    this.fetchHouses();
  };

  fetchHouses = () => {
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
    })
  }

  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Mth.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    };
  }

  render() {
    return (
      <div className="container">
        <Header subtitle = "Providing Houses world wide baby!"/>
        <FeaturedHouse house={this.state.featuredHouse} />
      </div>
    );
    }
}

export default App;
