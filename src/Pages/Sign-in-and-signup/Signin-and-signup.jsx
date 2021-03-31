import React from 'react'
import '../Sign-in-and-signup/Signin-and-signup.scss'
import Signin from '../../components/Signin/Signin'
import SignUp from '../../components/SignUp/Signup'
const SignInAndSignup =()=>{
    return(
       <div className="sign-in-and-sign-up">
           <Signin/>
           <SignUp/>
       
       </div>
    )
}
export default SignInAndSignup;