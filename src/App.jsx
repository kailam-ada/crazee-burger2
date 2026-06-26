import { useState } from "react";
import LoginPage from "./components/pages/login/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
