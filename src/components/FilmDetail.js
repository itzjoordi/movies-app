import React from 'react'

export default function FilmDetail (props) {
    const {className,trigger, data, onCloseModal} = props;
    
    function handleOnClose() {
        onCloseModal();
    }

    return ( trigger && 
        <div id={className} className="modal is-active">
            <div className="modal-background" onClick={handleOnClose}></div>
            <div className="modal-content">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                <img src={data.Poster} alt={data.Title}/>
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{data.Title}</p>
                                <p class="subtitle is-6">{data.Country} - {data.Released}</p>
                            </div>
                            <div class="media-right">
                                <span class="tag is-success is-large">{data.imdbRating} / 10</span>
                            </div>
                        </div>

                        <div class="content">
                            {data.Plot}
                        </div>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={handleOnClose}></button>
        </div>
    )
}