import React from "react"

const BandShows = props => {
    const { show } = props  
    return (
            <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{show.show.title}</h5>
                    <p class="card-text">{show.show.date}</p>
                    <p className="card-text">{show.show.venue}</p>
                </div>
            </div>
    )
}


export default BandShows
