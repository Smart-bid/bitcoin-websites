import React, { Component } from 'react'

import Header from './Header/Header'
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Regform  from './Regform/Regform'



export default class TopSection extends Component {
    constructor(props) {
        super(props)

        this.regPanel = React.createRef();
    }
    

    handleScroll() {

        let panel = this.regPanel.current;

        window.scrollTo({
            top: panel.offsetTop,
            left: 0,
            behavior: 'smooth'
        })

    }

    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className='TopSection'>
                <Header languageManager={this.props.languageManager} handleScroll={this.handleScroll.bind(this)}/>
                <div className="headline">
                    <div className="title">
                        <h1>{languageManager.title}</h1>
                    </div>
                    <div className="subtitle">
                        <h2>{languageManager.subtitle}</h2>
                        <h4>{languageManager.subtitle2[0]} <span>{languageManager.subtitle2[1]}</span>{languageManager.subtitle2[2]} <span>{languageManager.subtitle2[3]}</span> {languageManager.subtitle2[4]}</h4>
                    </div>
                </div>
                <div className="top-reg" id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-7 col-sm-12">
                                <VideoPlayer link={"https://player.vimeo.com/video/359534572?title=0&amp;byline=0&amp;portrait=0&amp;transparent=0&amp;autoplay=1&amp;sidedock=0&amp;controls=0"} />
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12">
                                <div className="regform" ref={this.regPanel}>
                                    <div className="reg-title"><span>{languageManager.topreg1}</span><br/>{languageManager.topreg2}</div>
                                    <Regform {...this.props} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
