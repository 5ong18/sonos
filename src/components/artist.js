import React, { Component } from 'react';

// import components
import Header from './header';
import AlbumList from './albumList';

// const REQ_URL = 'http://localhost:3004/artists'
const REQ_URL = 'https://achowba.github.io/sonos/db.json';

class Artist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artist: ''
        }

        // this.getArtist = this.getArtist.bind(this)
    }

    getArtist () {
        let artistID = this.props.match.params.artistid;
        fetch (`${REQ_URL}/${artistID}`, {
            method: 'GET'
        })
        .then (response => response.json())
        .then (json => {
            // console.log(json)
            this.setState ({
                artist: json
            })
        }).catch(function (error){
            console.log(error.message);
        })
    }

    searchArtist (event) {

    }

    componentDidMount () {
        // console.log(this.props.match.params.artistid);
        this.getArtist();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="artist_bio">
                    <div className="avatar">
                        <span style={{background: `url('../assets/img/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                    <AlbumList albumList={this.state.artist.albums}/>
                </div>
            </div>
        )
    }
}

export default Artist;