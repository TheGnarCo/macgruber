import * as React from 'react'
import { VideoContext } from '../shared/VideoContext'

const baseClass = 'timeline'

export class Timeline extends React.Component {
  onMouseMove = duration => evt => {
    const mouseWidth = evt.pageX
    const elementWidth = evt.target.clientWidth
    const percentWidth = mouseWidth / elementWidth
    const startAt = Math.floor(duration * percentWidth)

    return this.props.onMouseMove(startAt, mouseWidth - 100)
  }

  render() {
    return (
      <VideoContext.Consumer>
        {({ currentTime, duration }) => {
          const percentComplete = Math.floor((currentTime / duration) * 100)

          return (
            <div
              onMouseMove={this.onMouseMove(duration)}
              onMouseLeave={this.props.onMouseExit}
            >
              <div className={`${baseClass}__progress-bar-wrapper`}>
                <div
                  className={`${baseClass}__progress-bar-meter`}
                  style={{ width: `${percentComplete}%` }}
                />
              </div>
            </div>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}
