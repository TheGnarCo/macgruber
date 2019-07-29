import * as React from 'react'

import { VideoContext } from './VideoContext'

const baseClass = 'video'

export const Video = props => {
  const videoClass =
    props.size === 'large'
      ? `${baseClass}__wrapper--large`
      : `${baseClass}__wrapper`

  return (
    <VideoContext.Consumer>
      {({ setVideoRef, togglePlaying }) => (
        <video
          className={videoClass}
          onClick={togglePlaying}
          ref={setVideoRef}
          src={require('../shared/MacgruberTrailer.mp4')}
        >
          <track />
        </video>
      )}
    </VideoContext.Consumer>
  )
}
