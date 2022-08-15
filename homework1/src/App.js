import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>{props.name}</p>        
      </header>
    </div>
  );
}

export default App;
