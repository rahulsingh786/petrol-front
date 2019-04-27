import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor () {
    super()

    this.state = {
      'username' : '',
      'password' : ''
    }

    this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }
  
  componentDidMount() {
    if(localStorage.getItem("petrol_api_token")){
      window.location.href = '/about';
    }
  }

  onSubmitButtonClick()  {
    var loginPayload = {
      "email" : this.state.username ,
      "password" : this.state.password  
    }

    axios.post('http://localhost:8000/api/login', loginPayload)
    .then(function (response) {
      if(response && response.status === 200){
        let token = response && response.data && response.data.success && response.data.success.token;
        if(token){
          localStorage.setItem("petrol_api_token", token);
          window.location.reload();
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  updateValue(ele) {
    if(ele && ele.currentTarget.id && ele.currentTarget.id === 'username'){
      this.setState ({
        'username' : ele.currentTarget.value
      })
    } else if(ele && ele.currentTarget.id && ele.currentTarget.id === 'password'){
      this.setState ({
        'password' : ele.currentTarget.value
      })
    }
  }

  render() {
    return (
      <div>
        <div>
        Email: <input value={ this.state.username } type="text" id="username" onChange = {this.updateValue} />
        Password: <input value={ this.state.password } type="password" id="password" onChange = {this.updateValue} />
        <button onClick = { this.onSubmitButtonClick }  >Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
