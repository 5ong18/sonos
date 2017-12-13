import React from 'react';
import { Link } from 'react-router-dom';

// import functions
import shuffleArray from '../functions';

const ArtistsList = (props) => {

    /* const searchArtist = (event) => {
        console.log(event.target.value);
    } */

    const list = ({allArtists, error}) => {
        // props.allArtists can be used instead of destructuring
        if (allArtists) {
            return shuffleArray(allArtists).map((item) => {

                const style = {
                    background: `url(/assets/img/covers/${item.cover}.jpg) no-repeat`
                }

                return (
                    <div key={item.id} className="artist_info">
                        <Link to={`/artist/${item.id}`} className="artist_item" style={style} />
                        <div className="artist_name">
                            {item.name}
                        </div>
                    </div>
                )
            })
        } else {
            return (
                <div className="error_message">
                    {error}
                </div>
            )
        }
    }

    return (
        <div className="artists_list">
            <h4>Browse the artists</h4>
            {/* <input className="search_artist" type="text" onChange={searchArtist} placeholder="Search for Artists"/> */}
            {list(props)}
        </div>
    )
}

export default ArtistsList;