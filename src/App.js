import { JokesProvider } from "./context";
import Router from "./router";

function App() {
  return (
    <JokesProvider>
      <Router />
    </JokesProvider>
  );
}

export default App;
