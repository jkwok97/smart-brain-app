import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name,
            age: this.props.user.age,
            email: this.props.user.email
        }
    }
    onFormChange = (event) => {
        switch(event.target.name) {
            case 'user-name':
                this.setState({name: event.target.value})
                break;
            case 'user-age':
                this.setState({age: event.target.value})
                break;
            case 'user-email':
                this.setState({email: event.target.value})
                break;
            default:
                return;
        }
    }
    onProfileUpdate = (data) => {
        fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
            method: 'post',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({ formInput: data })
        }).then(resp => {
            this.props.toggleModal();
            this.props.loadUser({...this.props.user, ...data});
        }).catch(console.log);
    }
    render() {
        const { user } = this.props;
        const { name, age, email } = this.state;
        return (
            <div className='profile-modal'>
                <article className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-gray">
                <main className="pa4 white-80 w-80">
                    <img
                        src="http://tachyons.io/img/logo.jpg"
                        className="h3 w3 dib" alt="avatar" />
                    <h1>{this.state.name}</h1>
                    <h4>{`Images Submitted: ${user.entries}`}</h4>
                    <p>{`Member Since: ${new Date(user.joined).toLocaleDateString()}`}</p>
                    <hr />
                    <label className='mt2 fw6' htmlFor="user-name">Name:</label>
                        <input onChange={this.onFormChange} className="pa2 ba w-100 black" placeholder={user.name} type="text" name="user-name"  id="name" />
                    <label className='mt2 fw6' htmlFor="user-age">Age:</label>
                        <input onChange={this.onFormChange} className="pa2 ba w-100 black" placeholder={user.age}type="text" name="user-age"  id="age" />
                    <label className='mt2 fw6' htmlFor="user-email">Email:</label>
                        <input onChange={this.onFormChange} className="pa2 ba w-100 black" placeholder={user.email} type="text" name="user-email"  id="email" />
                    <div className="mt4" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <button className="b pa2 grow pointer hover-white w-40 bg-dark-gray b--white-20 white"
                            onClick={()=>this.onProfileUpdate({ name, age, email })}>
                            Save
                        </button>
                        <button className="b pa2 grow pointer hover-white w-40 bg-dark-gray b--white-20 white"
                            onClick={this.props.toggleModal}>
                            Cancel
                        </button>
                    </div>  
                </main>
                <div className='modal-close' onClick={this.props.toggleModal}>&times;</div>
                </article>
            </div>
        )}
    }
    
export default Profile;