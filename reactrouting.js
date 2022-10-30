//REACT ROUTING
//RUN THESE COMMAND = npm i -D react-router-dom@latest
//MAKE FOLDER PAGES IN SRC WITH FILES LAYOUT,HOME,BLOGS,CONTACT

//APP.JS
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
export default App;

//LAYOUT.JS
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};
export default Layout;

//HOME.JS
const Home = () => {
    return <h1>Home</h1>;
  };
  
  export default Home;
//BLOGS.JS
const Blogs = () => {
    return <h1>Blog Articles</h1>;
  };
  
  export default Blogs;
//CONTACT.JS
const Contact = () => {
    return <h1>Contact Me</h1>;
  };
  
  export default Contact;
