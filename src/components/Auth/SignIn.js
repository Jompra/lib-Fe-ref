import React, { useState } from 'react'

export default function Signin(props) {

    const [newUser, setNewUser] = useState({});

    const ChangeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user)
    }

    const handleSubmit = () => {
        props.login(newUser)
    }

  return (
    <div>
        <h1>Sign In</h1>

        <form>
            <div>
                <label>Email Address</label>
                <input type="text" name="emailAddress" onChange={ChangeHandler}></input>
            </div>

            <div>
                <label>Password</label>
                <input type="text" name="password" onChange={ChangeHandler}></input>
            </div>

            <div>
                <input type="submit" value="Add" onSubmit={handleSubmit}></input>
            </div>
        </form>
        
    </div>
  )
}
