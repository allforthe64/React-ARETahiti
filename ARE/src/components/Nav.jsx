import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="text-white flex bg-neutral-900 h-14 pt-4" id="nav">
            <Link className="navbar-brand text-white text text-xl pl-[3%] hover:underline" href="/">ARE Tahiti</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <ul className="flex w-[70%] justify-around ml-[3%] border">
                <li className="nav-item active">
                    <Link className="nav-link text-white text text-base hover:underline" href="{% url 'order' %}" >Order A Canoe <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text hover:underline" href="{% url 'about' %}">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text hover:underline" href="{% url 'canoes' %}">The Canoes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white text hover:underline" href="{% url 'reps' %}">Our Representatives</Link>
                    </li>
                <li className="nav-item dropdown">
                </li>
            </ul>
        </nav>
    )
}

export default Nav