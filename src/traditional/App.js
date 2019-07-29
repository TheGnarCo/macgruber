import * as React from 'react'

import '../shared/App.css'
import { Timeline } from './Timeline'
import { Video } from '../shared/Video'
import { VideoPlayer } from './VideoPlayer'

const baseClass = 'app'

export class App extends React.Component {
  state = {
    showMiniPlayer: false,
    startAt: 0,
    left: 0,
  }

  hideMiniPlayer = () => {
    this.setState({ showMiniPlayer: false })
  }

  showMiniPlayer = (startAt, left) => {
    this.setState({ showMiniPlayer: true, startAt, left })
  }

  render() {
    return (
      <div className={baseClass}>
        <h1 className={`${baseClass}__header`}>GnarTube</h1>

        <VideoPlayer style={{ position: 'relative' }}>
          <Video size="large" />

          {this.state.showMiniPlayer && (
            <VideoPlayer
              autoplay
              startAt={this.state.startAt}
              style={{
                position: 'absolute',
                bottom: 20,
                left: this.state.left,
              }}
            >
              <Video />
            </VideoPlayer>
          )}

          <Timeline
            onMouseMove={this.showMiniPlayer}
            onMouseExit={this.hideMiniPlayer}
          />
        </VideoPlayer>
      </div>
    )
  }
}
