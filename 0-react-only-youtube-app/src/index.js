import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search/bar';
import VideoList from './components/video/list';
import VideoDetails from './components/video/details';

const API_KEY = 'AIzaSyARmfFeLZDSacozmqlxcvoonAG7ztKsfpY';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('cats');
    }

    videoSearch = (term) => {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    };

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="row">
                    <VideoDetails video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
