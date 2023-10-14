import { Link } from "react-router-dom";


const Header = () => {
  
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container">
                    <a className="navbar-brand" href="#">Products List</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/menu" className="nav-link">Menu</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
};

export default Header