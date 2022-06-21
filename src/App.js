import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/AboutMe" element={<AboutMe />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
