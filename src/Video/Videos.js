import React from 'react';
import VideoHero from './VideoHero';
import Video from './Video';
import './Videos.scss';

function Videos(props) {
    let tiles = [];
    if (props.videos != null) {
        tiles = props.videos.map(video => <Video key={video._id} video={video} />);
    }

    return (
        <div>
            <VideoHero />
            <div className='video_reel'>

            {(tiles.length > 0) ? tiles : 'loading'}
            </div>
        </div>
    );
}

export default Videos;