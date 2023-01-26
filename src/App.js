import EffectHook from "./hooks/useEffect";
import StateHook from "./hooks/useState";

function App() {
  return (
    <div className="App">
      <h3>Hooks</h3>
      <StateHook />
      <EffectHook />
    </div>
  );
}

export default App;
