import '../css/App.css';
import Layout from './Layout'
import About from "../pages/about";
import Home from "../pages/home";
function App() {
  return (
    <div className="">
        <Layout>
            <Home />
            <About />
        </Layout>
    </div>
  );
}

export default App;
