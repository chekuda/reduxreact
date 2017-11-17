import React from 'react'

export default ({ video = {} , selectVideo }) => {
  const { snippet = {} } = video
  const { description, thumbnails, title } = snippet || {}
  const imageUrl = ((thumbnails || {}).default || {}).url

  return (
      <li className='list-group-item' onClick={ () => selectVideo(video) }>
        <div className='video-list media'>
          <div className='media-left'>
            <img className='media-object' src={ imageUrl }/>
          </div>

          <div className='media-body'>
            <div className='media-heading'>{ title }</div>
          </div>
        </div>
      </li>
  )
}