import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          버그 수정 중1 <code>src/App.js</code> and save to reload.
        </p>
        <p>
          버그 수정 중2 <code>src/App.js</code> and save to reload.
        </p>
        <p>
          기능 추가 완료 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
