//Form to add a new Muse to your Parlor Room

import { useState } from "react";
import { createMuse } from "./api/muses";
import { useAuth } from "./auth/AuthContext";

/** Form for a user to create a new Muse with a name and description. */
export default function museForm({ syncMuses }) {
  const { token } = useAuth();

  const [error, setError] = useState(null);

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
      <form action={tryCreateMuse}>
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
          <input type="image" name="portrait" />
        </label>
        <button>Add Muse</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </>
  );
}