import React from 'react';
import './Video.scss';

function Video(props) {
    return (
        <div className='video'>
            <div className='video_border'>
                <div className='video_tile'>
                    <img className='video_img' src={`https://img.youtube.com/vi/${props.video._id}/mqdefault.jpg`} />
                    <p className='video_blurb'>{props.video.description.substring(0, 70) + '...'}</p>
                </div>
            </div>
        </div>
    );
}

export default Video;