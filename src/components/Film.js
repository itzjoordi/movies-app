import React, {Component} from 'react'
import FilmDetail from './FilmDetail'

class Film extends Component{

    state = { 
        movieDetail : "",
        modal: false,
    }   
    
    classModal = "modal-js-"+this.props.id;

    handleOnClick = (e) => {
        this.setState({modal: true})
    }

    handleOnCloseModal = (e) => {
        this.setState({modal: false})
    }

    handleExtraInfo = () => {
        const url = `http://www.omdbapi.com/?apikey=8415a21f&i=${this.props.id}&type=movie`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
               console.log(data);   
               this.handleOnClick();
               this.setState({movieDetail: data});
            });
    }
    
    render() {  
        return (  
            <div className={this.props.className}>
                <div className="card">
                    <div className="card-image js-modal-trigger" data-target={this.classModal} >
                        <figure className="image">
                            <img onClick={this.handleExtraInfo} src={this.props.poster} alt={this.props.title}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{this.props.title}</p>
                                <p className="subtitle is-6">{this.props.year}</p>
                            </div>
                        </div>     
                    </div>
                </div>
                <FilmDetail className={this.classModal} data={this.state.movieDetail} onCloseModal={this.handleOnCloseModal} trigger={this.state.modal} />
            </div>
        )
    }
}

export default Film;