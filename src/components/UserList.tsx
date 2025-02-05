import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";

interface UserListProps {
  orgId: string;
}

export const UserList: React.FC<UserListProps> = ({ orgId }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/orgs/${orgId}/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5">Users</Typography>
      {loading && <p>Loading...</p>}
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <span dangerouslySetInnerHTML={{ __html: user.name }} />
            <Button onClick={() => alert(user.email)} sx={{ marginLeft: 1 }}>
              Contact
            </Button>
          </li>
        ))}
      </ul>
    </Box>
  );
};
