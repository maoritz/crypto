import Desktop from './components/Desktop'
import './App.css'

function App() {
  return (
    <div className="App">
      <Desktop />
      <div className="mobile-app">
        <img className='logo' src="logo.png" alt="Logo" />
      </div>
    </div>
  );
}

export default App;
