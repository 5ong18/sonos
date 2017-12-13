import React from 'react';

// import functions
import shuffleArray from '../functions';

const AlbumList = (props) => {

    const showList = ({albumList}) => {
        // console.log(albumList);
        if (albumList) {
            return shuffleArray(albumList).map((item, index) => {
                return (
                    <img key={index} alt="Artist Album" src={`../assets/img/albums/${item.cover}.jpg`} />
                )
            })
        }
    }

    return (
        <div className="albums_list">
            {showList(props)}
        </div>
    )
}

export default AlbumList;