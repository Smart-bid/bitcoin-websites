import React, { Component } from 'react'
import logo from '../../BottomSection/logo.png'
import {Link, withRouter} from 'react-router-dom'
import {UserContext} from '../../../helpers/dataContext';


class FirstRegform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            email: "",
            first_name: ""
        }

    }
    static contextType = UserContext;

    emailValidate = (value) => {
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    nameValidate = (value) => {
        return !/^([^0-9]*)$/.test(value);
    };

    pushToState = (name, value) => {
        if (name === 'firstName') {

            let firstNameValue = value.trim();
            if(firstNameValue.length === 0) {
                this.setState({
                    errors: ['Enter Name']
                });
                return this.state.errors
            }else if(this.nameValidate(firstNameValue)) {
                this.setState({
                    errors: ['Please enter name without digits']
                });
                return this.state.errors

            } else {
                this.setState({first_name: firstNameValue});
            }

        } else if (name === 'email') {

            let emailValue = value.trim();
            if(emailValue.length === 0) {
                this.setState({
                    errors: ['Enter Email']
                });
                return this.state.errors
            }else if(this.emailValidate(emailValue)) {
                this.setState({
                    errors: ['Invalid email format']
                });
                return this.state.errors

            } else {
                this.setState({email: emailValue});
            }
        } else {

        }
    };

    saveData = (e) => {
        e.preventDefault();

        let form = e.target.parentElement;
        let firstName = form.querySelector('.fname').value.trim();
        let email = form.querySelector('.email').value.trim();

        if(firstName.length === 0) {
            this.setState({
                errors: ['Enter Name']
            });
            return this.state.errors
        }
        else if(email.length === 0) {
            this.setState({
                errors: ['Enter Email']
            });
            return this.state.errors
        } else if(this.nameValidate(firstName)) {
            this.setState({
                errors: ['Please enter name without digits']
            });
            return this.state.errors
        } else if(this.emailValidate(email)) {
            this.setState({
                errors: ['Invalid email format']
            });
            return this.state.errors
        } else {
            let paramsToValidate = {
                email: this.state.email,
                first_name: this.state.first_name,
            };
            console.log(paramsToValidate);
            this.props.handleForward(paramsToValidate);
            this.props.history.push('/members');
        }
    };

    componentDidMount() {
        this.setState({
            email: this.context.email,
            first_name: this.context.firstName
        })
    }

    render() {

        let languageManager = this.props.languageManager();

        return (
            <div className="FirstRegform">
                <img src={logo} alt="logo" className="logo"/>
                <div className='inner'>
                    <div className='form-wrapper'>
                        {this.state.errors && <div className="errors">
                            {this.state.errors[0]}
                        </div>}
                        <input className="inputfield fname" type="text" name="firstName" defaultValue={this.context.firstName} onChange={(e) => {this.context.getValueFromInputs(e); this.pushToState(e.target.name, e.target.value)}} placeholder={languageManager.fname} />
                        <input className="inputfield email" type="text" name="email" defaultValue={this.context.email} onChange={(e) => {this.context.getValueFromInputs(e);  this.pushToState(e.target.name, e.target.value)}} placeholder={languageManager.email} />
                        <Link to="/members" onClick={this.saveData} className='start'>{languageManager.button}</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(FirstRegform);
