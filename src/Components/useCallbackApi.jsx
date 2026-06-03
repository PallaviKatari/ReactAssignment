import React, { useState, useEffect, useCallback } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    setUsers(data);
    console.log("Rendered");
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;