import { useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);
  return { user, setUser };
}
