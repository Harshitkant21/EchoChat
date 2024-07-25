export const loadAuthUserFromLocalStorage = () => {
  try {
    const authUser = localStorage.getItem("authUser");
    return authUser ? JSON.parse(authUser) : null;
  } catch (e) {
    console.error("Could not load authUser from local storage:", e);
    return null;
  }
};

export const setFirstVisit = () => {
  localStorage.setItem("hasVisited", "true");
};

export const checkFirstVisit = () => {
  return localStorage.getItem("hasVisited") === null;
};

export const clearVisit = () => {
  localStorage.removeItem("hasVisited");
};
