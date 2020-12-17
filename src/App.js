import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import JQGrid from './JQGrid/JQGrid';
import'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <Header></Header>
      <JQGrid></JQGrid>
      <Footer></Footer>
    </div>
  );
}

export default App;
