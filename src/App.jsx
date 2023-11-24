import Router from "@/routing/Router"
import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/src/scripts/observer.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
      <Router />
  );
}

export default App;
