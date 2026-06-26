import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");
  // comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  // affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        required
        placeholder="Entre ton prénom..."
        onChange={handleChange}
      />
      <button>Accédez à votre espace</button>
      <Link to="/order">Vers OrderPage</Link>
    </form>
  );
}
