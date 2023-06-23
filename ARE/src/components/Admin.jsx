import React from 'react'
import AuthContext from '../context/authProvider'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Users } from './Users'

const Admin = () => {

    //create the navigate hook
    const navigate = useNavigate()

    const { auth } = useContext(AuthContext)
    
    /* useEffect(() => {
        //check to see if the user has logged in and is an admin
        if (!auth || !auth.length) {
            alert("Oops! Looks like you tried to access a page that you don't have access too! Redirecting you back to the page you came from...")
            navigate(-1)
        }
    }, [])
     */

    console.log(auth)

  return (
    <div>
        <Users />
    </div>
  )
}

export default Admin