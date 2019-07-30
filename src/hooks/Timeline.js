import * as React from 'react'
import { VideoContext } from '../shared/VideoContext'

const baseClass = 'timeline'
const POSITION_BUFFER = 100

export const Timeline = props => {
  const { duration, currentTime } = React.useContext(VideoContext)
  const percentComplete = Math.floor((currentTime / duration) * 100)
  const onMouseMove = evt => {
    const clickPositionX = evt.pageX
    const elementWidth = evt.target.clientWidth
    const percentWidth = clickPositionX / elementWidth
    const startAt = Math.floor(duration * percentWidth)

    return props.onMouseMove(startAt, clickPositionX - POSITION_BUFFER)
  }

  return (
    <div onMouseMove={onMouseMove} onMouseLeave={props.onMouseExit}>
      <div className={`${baseClass}__progress-bar-wrapper`}>
        <div
          className={`${baseClass}__progress-bar-meter`}
          style={{ width: `${percentComplete}%` }}
        />
      </div>
    </div>
  )
}
