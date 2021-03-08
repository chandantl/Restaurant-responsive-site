
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Menu from './Menu';
import Section from './Section';
import Secondarysection from './Secondarysection';

function App() {
  return (
    <div className="App">
      <div className="wrapper container ">
        <Menu />
        <Secondarysection />
        <Section />
      </div>
    </div>
  );
}

export default App;
