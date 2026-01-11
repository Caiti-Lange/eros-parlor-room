//Form to add a new Muse to your Parlor Room

import { useState } from "react";
import { createMuse } from "../api/muses";
import { useAuth } from "../auth/AuthContext";
import { NavLink } from "react-router-dom";

/** Form for a user to create a new Muse with a name and description. */
export default function museForm({ syncMuses }) {
  const { token } = useAuth();

  const [error, setError] = useState(null);
  const clickSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await tryCreateMuse(formData);
  }


  const tryCreateMuse = async (formData) => {
    setError(null);

    const name = formData.get("name");
    const origin = formData.get("origin");
    const media_type = formData.get("media_type");
    const portrait = formData.get("portrait");

    try {
      await createMuse(token, { name, origin, media_type, portrait });
      syncMuses();
    } catch (e) {
      setError(e.message);
    }
  };



  return (
    <>
      <h2>🕯️Add a new Muse to your Parlor Room🕯️</h2>
      <form onSubmit={clickSubmit}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Origin
          <input type="text" name="origin" />
        </label>
        <label>
          Media Type
          <input type="text" name="media_type" />
        </label>
        <label>
          Potrait
          <input type="file" name="portrait" />
        </label>
        <button type="submit">Add Muse</button>
      </form>
      <nav>
        <NavLink to="/parlor-room">🕯️Back to your Parlor Room🕯️</NavLink>
      </nav>
      {error && <p role="alert">{error}</p>}
    </>
  );
}