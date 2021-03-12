import React, { useDebugValue } from "react"

const HomeShowCard = props => {
    const { show } = props  
    return (
            <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{show.title}</h5>
                    <p class="card-text">{show.description}</p>
                    {show.bands.map((band) => <p>{band.band.band_name}</p> )}
                </div>
            </div>
    )
}

export default HomeShowCard
