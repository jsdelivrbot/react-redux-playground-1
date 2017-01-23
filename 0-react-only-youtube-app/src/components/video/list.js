import React from 'react';
import VideoListItem from './list/item';

const VideoList = ({ videos, onVideoSelect }) => {

    const videoItems = videos.map(video => {
        return (
            <VideoListItem
                onVideoSelect={onVideoSelect}
                key={video.etag}
                video={video} />
        )
    });

    return (
        <ul className="col col-sm-4 list-group list-unstyled">
            {videoItems}
        </ul>
    );
};

export default VideoList;
