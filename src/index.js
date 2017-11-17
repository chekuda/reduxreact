import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideDetails from './components/video_details'
import SearchBar from './components/searchbar'

const API_KEY = 'AIzaSyB5zRc94xj9Td_Dp-59AmKSgR77w9Hbs68'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: {} };

    this.videoSearch('surfboards')
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  videoSearch = term => {
    YTSearch({ key: API_KEY, term: term }, videos => {
      console.log(videos)
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce( term => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideDetails video={ this.state.selectedVideo }/>
        <VideoList videos={ this.state.videos } selectVideo={ this.onVideoSelect }/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));