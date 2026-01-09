// functions for all muse-related API calls

const API = import.meta.env.VITE_API;

/** Fetches an array of activities from the API. */
export async function getMuse() {
  try {
    const response = await fetch(API + "/muses");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

/**
 * Sends a new Muse to the API to be created.
 * A valid token is required.
 */
export async function createMuse(token, Muse) {
  if (!token) {
    throw Error("Please enter your Parlor Room to add a Muse.");
  }

  const response = await fetch(API + "/parlor-room", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(muse),
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}
