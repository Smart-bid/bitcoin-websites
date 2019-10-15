import React, { Component } from 'react'
import ReactQueryParams from 'react-query-params'
import SecondTopSection from './TopSection/SecondTopSection'
import SecondMidSection from './MidSection/SecondMidSection'
import BottomSection from './BottomSection/BottomSection'

export default class SecondPage extends Component {

    render() {
        console.log(this.props)

        return (
            <div className='MainPage'>
                <SecondTopSection
                    countryCode={this.props.countryCode}
                    handleStep={this.props.handleStep}
                    handleSubmit={this.props.onSubmit}
                    pageHandler={this.props.pageHandler}
                    handleForward={this.props.handleForward}
                    languageManager={this.props.languageManager}
                    validateParams={this.props.validateParams}/>

                <SecondMidSection languageManager={this.props.languageManager}/>

                <BottomSection
                    languageManager={this.props.languageManager}
                    pageHandler={this.props.pageHandler}
                    handleForward={this.props.handleForward}/>
            </div>
        )
    }

}