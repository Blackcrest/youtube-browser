import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList  from './VideoList';

import youtube from '../api/youtube';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items, selectedVideo: null });
    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    }

    onBackClick = () => {
        this.setState({ selectedVideo: null })
    }

    renderVideos() {
        if(this.state.selectedVideo){
            return (
                <div>
                    <button onClick={this.onBackClick} className="ui button blue">Back</button>
                    <VideoDetail video={this.state.selectedVideo} />
                </div>
            );
        }

        if(this.state.videos.length > 0){    
            return <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        }

        return (
            <div className="ui large message">
                <p>Use the search to find you video!</p>
            </div>
        )

    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                {this.renderVideos()}
            </div>
        )
    };
}

export default App;