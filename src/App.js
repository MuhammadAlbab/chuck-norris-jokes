import { JokesProvider } from "./context";
import Router from "./router";
import "./styles/main.scss";

function App() {
  return (
    <JokesProvider>
      <Router />
    </JokesProvider>
  );
}

export default App;
