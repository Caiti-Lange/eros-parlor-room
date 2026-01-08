
const API = "http://localhost:8080";

/** Fetches an array of activities from the API. */
export async function getUser(token) {
  try {
    const response = await fetch(API + "/user", {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        }
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

/**
 * Sends a new user to the API to be registered.
 * A valid token is required.
 */
export async function createUser(user) {
  

  const response = await fetch(API + "/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }

  return response.json();
}
