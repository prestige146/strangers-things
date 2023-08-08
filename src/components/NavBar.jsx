import{Link} from "react-router-dom";

 const Navbar = () => {
return (
    <nav>
        <Link className="navLink" to="/">Home</Link>

        <Link className="navLink" to="/">Post</Link>
        <Link className="navLink" to="/">Login</Link>
    </nav>
)
}

export default Navbar;