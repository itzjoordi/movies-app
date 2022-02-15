import React, {Component} from 'react';
import './App.css';
import "bulma/css/bulma.css";
import {Title} from './components/Title';
import SearchForm from './components/SearchForm';
import Result from './components/Result';

class App extends Component{

  state = { moviesResults: [] };

  handleMoviesResults = (moviesResults) => {
    this.setState({moviesResults})
  }

  render() {
    return (
        <div className="App">
          <Title>Looking for a Film?</Title>
          <div className='SearchForm-wrapper'>
            <SearchForm getMoviesList={this.handleMoviesResults}/>
          </div>
          <Result data={this.state.moviesResults} />
        </div>
    );
  }  
}

export default App;
