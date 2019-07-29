import * as React from 'react'

import { VideoContext } from '../shared/VideoContext'

export class VideoPlayer extends React.Component {
  video = null

  state = { isPlaying: false }

  static defaultProps = {
    autoplay: false,
  }

  componentDidUpdate = prevProps => {
    if (!this.video) return

    if (prevProps.startAt !== this.props.startAt) {
      this.video.currentTime = this.props.startAt
    }
  }

  pause = () => this.setState({ isPlaying: false }, () => this.video.pause())
  play = () =>
    this.setState({ isPlaying: true }, () =>
      this.video.play().catch(() => false)
    )

  setVideoRef = video => {
    this.video = video

    if (this.props.autoplay && video) {
      video.currentTime = this.props.startAt
      video.muted = true

      this.play()
    }
  }

  togglePlaying = () => {
    if (!this.video) return false

    this.state.isPlaying ? this.pause() : this.play()
  }

  currentContext = () => ({
    currentTime: this.video ? this.video.currentTime : 0,
    duration: this.video ? this.video.duration : 1,
    isPlaying: this.state.isPlaying,
    setVideoRef: this.setVideoRef,
    togglePlaying: this.togglePlaying,
  })

  render() {
    return (
      <VideoContext.Provider value={this.currentContext()}>
        <div style={this.props.style}>{this.props.children}</div>
      </VideoContext.Provider>
    )
  }
}
