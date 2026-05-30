import Router from "@/routing/Router"
import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    import('./scripts/observer.js')
  }, [])

  return (
    <Router />
  );
}

export default App;
