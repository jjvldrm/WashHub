import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';


function App() {
  return (
    <>
    <Header />
    <div className="App">
      <Home />
      <About />
    </div>
    </>
  );
}

export default App;
