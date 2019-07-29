import * as React from 'react'

const initialContext = {
  currentTime: 0,
  duration: 1,
  isPlaying: false,
  setVideoRef: () => undefined,
  togglePlaying: () => undefined,
}

export const VideoContext = React.createContext(initialContext)
