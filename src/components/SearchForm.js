import React, {Component} from 'react'

class SearchForm extends Component{
    state = { inputMovie : "" }

    handleInput = (e) => {
        this.setState({inputMovie: e.target.value});
    }

    handleButton = () => {
        const url = `http://www.omdbapi.com/?apikey=8415a21f&s=${this.state.inputMovie}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.props.onMoviesResult(data);   
            });
    }

    render() {
      return (
        <div className="field has-addons">
            <div className="control">
                <input className="input is-success" onChange={this.handleInput} type="text" placeholder="Find your film here!"/>
            </div>
            <div className="control">
                <button onClick={this.handleButton} className="button is-success">
                    Search
                </button>
            </div>
        </div>
      );
    }  
  }
  
  export default SearchForm;
  