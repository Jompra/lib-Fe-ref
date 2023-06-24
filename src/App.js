import React, { useState } from 'react'
import AuthorList from './author/AuthorList'
import Signup from './user/Signup'
import Signin from './user/Signin'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Axios from 'axios'
import jwt_decode from 'jwt-decode'

export default function App() {

    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState({});  
  
    const registerHandler = (user) => {
      Axios.post("auth/signup", user)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
  
    const loginHandler = (cred) => {
      Axios.post("auth/signin", cred)
      .then(res => {
        console.log(res.data.token)
        // Save the token into Local Storage
        let token = res.data.token
        if(token != null){
          localStorage.setItem("token", token)
          let user = jwt_decode(token);
          setIsAuth(true)
          setUser(user)
        }
      })
      .catch(err => {
        console.log(err)
        setIsAuth(false)
      })
    }
  
  
    return (
      <div>
          <Router>
            <div>
            <nav>
                <div>
                  <Link to="/">Home</Link> &nbsp;
                  <Link to="/signup">Signup</Link> &nbsp;
                  <Link to="/signin">Signin</Link> &nbsp;
                </div>
              </nav>
            </div>
  
            <div>
              <Routes>
  
                <Route path="/" element={
                  isAuth ? 
                  <AuthorList /> 
                  : 
                  <Signin login={loginHandler}></Signin>}>
                </Route>
  
                <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
  
                <Route path="/signin" element={
                  isAuth ? 
                  <AuthorList />
                  : 
                  <Signin login={loginHandler}></Signin>}>
                </Route>
              </Routes>
            </div>
          </Router>
      </div>
    )
  }
  
