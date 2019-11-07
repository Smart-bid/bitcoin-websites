import React, { Component } from 'react'

 
export default class VideoPlayer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       play: true
    }
  }


  render () {
    return (
      <div className="VideoPlayer">
        <iframe src="https://player.vimeo.com/video/359534572?title=0&amp;byline=0&amp;portrait=0&amp;transparent=0&amp;autoplay=1&amp;sidedock=0&amp;controls=0" width="100%" height="100%" frameBorder="0"></iframe>
      </div>
    )
  }
}