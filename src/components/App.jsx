import Layout from './Layout'
import About from "../pages/about";
import Home from "../pages/home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
        <Layout>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/accommodation/:id"} element={<About />} />
            </Routes>
        </Layout>
    </div>
  );
}

export default App;
