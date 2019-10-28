import React from 'react';

const VideoDetail = ({ video }) => {
    return(
        <div>
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        frameBorder='0' 
                        allow='autoplay; encrypted-media'
                        title={video.snippet.title}
                        allowFullScreen/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;