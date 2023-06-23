import { useState, useEffect } from "react"
import axios from "../api/axios"
import useRefreshToken from '../hooks/useRefreshToken'

export const Users = () => {
  
    const [users, setUsers] = useState()
    const refresh = useRefreshToken()

    //get all users from backend when component mounts
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getUsers = async () => {
            try {
                const response = await axios.get('/admin', {
                    signal: controller.signal
                })
                console.log(response.data)
                isMounted && setUsers(response.data)
            } catch (err) {
                console.log(err)
            }
        }

        getUsers()

        //unmount component and cancel any pending functions or requests
        return () => {
            isMounted = false
            controller.abort()
        }

    }, [])
   
    return (
    <div>
        <h2>Users list:</h2>
        {users?.length ? (
            <ul>
                {users.map((user, i) => <li key={i}>{user?.username}</li>)}
            </ul>
        )
            : <p>No users to display</p>
        }
        <button onClick={() => refresh()}>Refresh Token</button>
        <br />
    </div>
  )
}
