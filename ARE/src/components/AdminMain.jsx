import React, {useState} from 'react'

//component imports
import AdminAuthComponent from './adminComponents/AdminAuthComponent'
import AdminDashboard from './adminComponents/AdminDashboard'

//firebase auth imports
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'

const AdminMain = () => {

    const [isAuthUser, setIsAuthUser] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async (loginEmail, loginPassword) => {
        setIsLoading(true)

        //sign in user with email and password
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then(() => {
            setIsAuthUser(true)
            setIsLoading(false)
        })
        .catch((error) => {
            setIsLoading(false)
            if (error.code === 'auth/invalid-credential') alert('Incorrect email/password')
            else alert(error)
        })
    }

  return (
    <main className='w-full'>
        {isLoading &&
            <p>insert dialog</p>
        }
        {!isAuthUser ?
            <AdminAuthComponent handleLogin={handleLogin}/>
        :
            <AdminDashboard />
        }
    </main>
  )
}

export default AdminMain