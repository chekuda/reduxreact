import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = props => {

  return (
    <ul className="col-md-4 list-group">
      { props.videos.map( video => {
        return <VideoListItem
          key={ video.etag }
          video={ video }
          selectVideo={ props.selectVideo }
        />
      })
    }
    </ul>
  )
}

export default VideoList