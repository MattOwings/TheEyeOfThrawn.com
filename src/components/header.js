import "../styles/header/header.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand home-btn" href="#">
                    TheEyeOfThrawn.com
                </a>
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
                            <a className="nav-link active" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                About Me
                            </a>
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
                                Websites
                            </a>
                            <ul
                                className="dropdown-menu"
                                area-labelledby="navbarDropdown"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
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
