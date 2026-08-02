import { createContext, useState, useCallback } from "react";

export const RequestsContext = createContext(null);

let idCounter = 0;

export function RequestsProvider({ children }) {
  const [requests, setRequests] = useState([]);

  const addRequest = useCallback((data) => {
    const newRequest = {
      id: `req-${idCounter++}`,
      submittedAt: new Date().toISOString(),
      status: "Submitted",
      ...data,
    };
    setRequests((prev) => [newRequest, ...prev]);
    return newRequest;
  }, []);

  return (
    <RequestsContext.Provider value={{ requests, addRequest }}>
      {children}
    </RequestsContext.Provider>
  );
}