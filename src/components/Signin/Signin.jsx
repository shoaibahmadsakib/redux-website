import React from "react";
import "../Signin/Signin.scss";
import FormInput from "../Form-input/FormInput";
import CustomButton from "../../components/Button/Custombutton";
import { auth, signInWithGoogle } from "../../Firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit =async (e) => {
    e.preventDefault();
    const {email ,password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email,password)
      this.setState({ email: "", password: "" });
    } catch(error){
      console.log(error);
    }
    
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              signin google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
