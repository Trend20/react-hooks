import EffectHook from "./components/useEffect";
import RefHook from "./components/useRef";
import StateHook from "./components/useState";

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
