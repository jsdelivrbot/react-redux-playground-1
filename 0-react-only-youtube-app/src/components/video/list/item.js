import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {

    const thumbnail = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-thumbnail">
                    <img className="media-object" src={thumbnail} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
