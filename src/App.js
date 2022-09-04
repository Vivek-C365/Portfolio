import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Nav from './Components/Nav';
import Contentprofile from './Components/Contentprofile';
import ProjectWork from './Components/ProjectWork';
import Education from './Components/Education';
import Experience from './Components/Experience';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Error from './Components/Error';


function App() {
  return (
    <>
    <Router>


    
    <Nav/>
    
    <Routes>
    <Route path = '*' element={<Error/>}/>
    <Route path = '/Portfolio' element={<Contentprofile/>}/>
    <Route path = '/Work' element={<ProjectWork/>}/>
    <Route path = '/Education' element={<Education/>}/>
    <Route path = '/Experience' element={<Experience/>}/>
    <Route path = '/About' element={<About/>}/>
    <Route path = '/Contact' element={<Contact/>}/>
    </Routes>


    <Footer/>
    
    </Router>

    </>
  );
}

export default App;
