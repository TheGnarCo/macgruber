import * as React from 'react'

import { VideoContext } from '../shared/VideoContext'
import MacgruberTrailer from '../shared/MacgruberTrailer.mp4'

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
          src={MacgruberTrailer}
        >
          <track />
        </video>
      )}
    </VideoContext.Consumer>
  )
}
