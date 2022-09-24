import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Works from './Components/Works/Works';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
function App() {

  return (
    <div className="App" >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/works" element={<Works/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<Skills/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );


}

export default App;
