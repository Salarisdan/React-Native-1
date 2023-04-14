import React, { Component } from 'react';
import { View, TextInput, Button, Keyboard } from 'react-native';

class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleNameChange = (name) => {
    this.setState({ name });
  }

  handleEmailChange = (email) => {
    this.setState({ email });
  }

  handlePasswordChange = (password) => {
    this.setState({ password });
  }

  handleSubmit = () => {
    const { name, email, password } = this.state;
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    Keyboard.dismiss();
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Name"
          value={this.state.name}
          onChangeText={this.handleNameChange}
        />
        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
        />
        <TextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          secureTextEntry={true}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default RegistrationScreen;
