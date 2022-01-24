import { AppProvider } from "./Contexts/AppContext";
import Main from "./Pages/Main";

function App() {
  return (
    <AppProvider >
    <div className="App">
     <Main />
    </div>
    </AppProvider>
  );
}

export default App;
