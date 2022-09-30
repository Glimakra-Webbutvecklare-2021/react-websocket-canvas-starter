import './App.css';

function App() {
  const ws = new WebSocket("ws://localhost:8080");
  ws.onclose = (evt) => console.log("closing", evt);
  ws.onopen = (evt) => console.log("open", evt);
  ws.onmessage= (evt) => console.log("message", evt);

  return (
    <div className="App">
          <h1>Hello World</h1>
          <canvas></canvas>
    </div>
  );
}

export default App;
