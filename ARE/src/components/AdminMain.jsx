import React, {useState} from 'react'

//component imports
import AdminAuthComponent from './adminComponents/AdminAuthComponent'
import AdminDashboard from './adminComponents/AdminDashboard'

//firebase auth imports
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { Dialog } from '@mui/material'
import LoadingIcons from 'react-loading-icons'

const AdminMain = () => {

    const [isAuthUser, setIsAuthUser] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async (loginEmail, loginPassword) => {
        setIsLoading(true)

        //sign in user with email and password
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then(() => {
            setIsAuthUser(true)
            setTimeout(() => setIsLoading(false), 500)
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
            <Dialog open={isLoading} fullScreen>
                <div className='w-full h-full bg-white flex justify-center items-center space-x-4'>
                    <LoadingIcons.TailSpin stroke='#FF3C00' className='w-[50px] h-[50px]'/>
                    <p className='text-4xl heading text-[#FF3C00] font-semibold'>Loading...</p>
                </div>
            </Dialog>
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