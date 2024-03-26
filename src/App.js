import { NavigationProvider } from "./context/navigation";
import Link from "./components/Link";

function App() {
  return (
    <NavigationProvider>
      <div>
        <Link to="/accordion">Go to accordion</Link>
        <Link to="/dropdown">Go to dropdown</Link>
      </div>
    </NavigationProvider>
  );
}

export default App;
