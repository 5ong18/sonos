import React, {Component} from 'react';

// import components
import Banner from '../components/banner'
import ArtistsList from '../components/artistList'

const URL_ARTISTS = 'http://localhost:3004/artists';

class Home extends Component {

    constructor (props) {
        super(props);

        this.state = {
            artists: '',
            error: ''
        }

        this.getAllArtist = this.getAllArtist.bind(this);
        this.searchArtist = this.searchArtist.bind(this);
    }

    getAllArtist() {
        fetch(URL_ARTISTS, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState ({
                artists: json
            })
        }).catch(error => {
            // console.log (error.message + " list of artists")
            this.setState({
                error: error.message + " the lists of artist ☹️"
            })
        })
    }

    searchArtist(event) {
        console.log(event.target.value);
        // this.getAllArtist();
    }

    componentDidMount() {
        this.getAllArtist();
    }

    render() {

        return (
            <div>
                <Banner/>
                {/* <input className="search_artist" type="text" onChange={this.searchArtist} placeholder="Search for Artists"/> */}
                <ArtistsList allArtists={this.state.artists} error={this.state.error}/>
            </div>
        )
    }
}

export default Home;