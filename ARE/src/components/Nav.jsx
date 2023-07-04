import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useLogout from "../hooks/useLogout"

const Nav = () => {

    const { auth } = useAuth()

    const logout = useLogout()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate('/');
    }

    console.log(auth?.accessToken)

    return (
        <nav className="text-white flex bg-neutral-900 h-14 pt-4" id="nav">
            <Link className="navbar-brand text-white text text-xl pl-[3%] nav-link transition-color ease-in-out duration-200" to={"/"}>ARE Tahiti</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <ul className="flex w-[70%] justify-around ml-[3%]">
                <li className="nav-item active">
                    <Link to={'/order'} className="nav-link text-white text text-base nav-link transition-color ease-in-out duration-200" >Order A Canoe <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={'/about'} className="nav-link text-white text nav-link transition-color ease-in-out duration-200">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/canoes'} className="nav-link text-white text nav-link transition-color ease-in-out duration-200">The Canoes</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link text-white text nav-link transition-color ease-in-out duration-200" href="{% url 'reps' %}">Our Representatives</Link>
                </li> */}
                {/* {auth?.accessToken ? (
                    <li className="nav-link text-white text nav-link transition-color ease-in-out duration-200 hover:cursor-pointer" onClick={() => handleLogout()}>
                    Logout
                    </li>
                ) :
                (
                    <li className="nav-item">
                    <Link to={'/login'} className="nav-link text-white text nav-link transition-color ease-in-out duration-200">Rep Login</Link>
                    </li>
                )
                }
                {auth?.accessToken && 
                    <li className="nav-item">
                        <Link to={'/admin'} className="nav-link text-white text nav-link transition-color ease-in-out duration-200">Admin Page</Link>
                    </li>
                } */}
            </ul>
        </nav>
    )
}

export default Nav