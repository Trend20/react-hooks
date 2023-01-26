import EffectHook from "./hooks/useEffect";
import RefHook from "./hooks/useRef";
import StateHook from "./hooks/useState";

function App() {
  return (
    <div className="App">
      <h3>Hooks</h3>
      <StateHook />
      <EffectHook />
      <RefHook />
    </div>
  );
}

export default App;
