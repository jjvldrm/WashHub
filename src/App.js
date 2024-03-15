import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';


function App() {
  return (
    <>
    <Header />
    <div className="App">
      <Home />
      <About />
      <Services />
    </div>
    </>
  );
}

export default App;
