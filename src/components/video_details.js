import React from 'react'

const VideoDetails = ({ video = {} }) => {
  const { snippet = {} } = video
  const { title, description } = snippet
  const { videoId } = video.id || {}
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className='view-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{ title }</div>
        <div>{ description }</div>
      </div>
    </div>
  )
}

export default VideoDetails