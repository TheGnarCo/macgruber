import * as React from 'react'

import '../shared/App.css'
import { Timeline } from './Timeline'
import { Video } from './Video'
import { VideoPlayer } from './VideoPlayer'

const baseClass = 'app'
const HIDE_MINI_PLAYER = 'HIDE_MINI_PLAYER'
const SHOW_MINI_PLAYER = 'SHOW_MINI_PLAYER'
const initialState = {
  showMiniPlayer: false,
  startAt: 0,
  left: 0,
}

const reducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case SHOW_MINI_PLAYER:
      return {
        ...state,
        left: payload.left,
        showMiniPlayer: true,
        startAt: payload.startAt,
      }
    case HIDE_MINI_PLAYER:
      return initialState
    default:
      return state
  }
}

export const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const hideMiniPlayer = () => dispatch({ type: HIDE_MINI_PLAYER })
  const showMiniPlayer = (startAt, left) =>
    dispatch({
      payload: { left, startAt },
      type: SHOW_MINI_PLAYER,
    })

  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}__header`}>GnarTube</h1>

      <VideoPlayer style={{ position: 'relative' }}>
        <Video size="large" />

        {state.showMiniPlayer && (
          <VideoPlayer
            autoplay
            startAt={state.startAt}
            style={{
              position: 'absolute',
              bottom: 20,
              left: state.left,
            }}
          >
            <Video />
          </VideoPlayer>
        )}

        <Timeline onMouseMove={showMiniPlayer} onMouseExit={hideMiniPlayer} />
      </VideoPlayer>
    </div>
  )
}
