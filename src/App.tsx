import ThemeButton from "./use-context/use-context-one/ThemeButton";
import { ThemeProvider } from "./use-context/use-context-one/ThemeProvider";

function App() {
  return (
    <>
      <h1>UseContext</h1>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
    </>
  );
}

export default App;
