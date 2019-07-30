import * as React from 'react'

import { VideoContext } from '../shared/VideoContext'

export const VideoPlayer = ({
  autoplay = false,
  children,
  startAt = 0,
  style,
}) => {
  const video = React.useRef()
  const [isPlaying, setIsPlaying] = React.useState()
  const pause = () => {
    setIsPlaying(false)
    video.current.pause()
  }
  const play = () => {
    setIsPlaying(true)
    video.current.play().catch(() => false)
  }
  const setVideoRef = ref => {
    video.current = ref

    if (autoplay && video.current) {
      video.current.currentTime = startAt
      video.current.muted = true

      play()
    }
  }
  const togglePlaying = () => {
    if (!video.current) return false

    isPlaying ? pause() : play()
  }
  const currentContext = {
    currentTime: video.current ? video.current.currentTime : 0,
    duration: video.current ? video.current.duration : 1,
    isPlaying,
    setVideoRef,
    togglePlaying,
  }

  React.useEffect(() => {
    if (video.current) {
      video.current.currentTime = startAt
    }
  }, [startAt])

  return (
    <VideoContext.Provider value={currentContext}>
      <div style={style}>{children}</div>
    </VideoContext.Provider>
  )
}
