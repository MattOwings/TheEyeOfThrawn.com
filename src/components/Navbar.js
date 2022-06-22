import "../styles/navbar/navbar.css";

import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand home-btn" to="/">
                    TheEyeOfThrawn.com
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    Dropdown
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Blog">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/AboutMe">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                My Pages
                            </a>
                            <ul
                                className="dropdown-menu"
                                area-labelledby="navbarDropdown"
                            >
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="https://www.instagram.com/theeyeofthrawn/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="https://www.youtube.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        YouTube
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="https://discord.gg/eBtnNgnKNq"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Discord
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="https://mistaheye.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        All My Links
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
