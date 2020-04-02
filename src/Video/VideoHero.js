import React from 'react';
import './VideoHero.scss';

function Video() {
    return (
        <div className="video-hero">
            <div className="row">
                <div className="small-12 columns">
                    <div className="video-hero_player">
                        <div className="iframe-container">
                            <iframe src="https://www.youtube.com/embed/ByISQsgmLD4?html5=1" frameBorder="0" allowFullScreen="">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;