import React, { useState, useEffect } from "react";
import { Box, Card, Typography } from "@mui/material";

interface DashboardProps {
  userId: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ userId }) => {
  const [stats, setStats] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/users/${userId}/stats`)
      .then((res) => res.json())
      .then(setStats)
      .catch((e) => setError(e.message));
  }, []);

  const getColor = (val: number) => {
    if (val > 90) return "green";
    if (val > 50) return "orange";
    return "red";
  };

  return (
    <Box sx={{ display: "flex", gap: 2, padding: 3 }}>
      {error && <div role="alert">{error}</div>}
      {stats &&
        Object.keys(stats).map((key) => (
          <Card sx={{ padding: 2, minWidth: 200 }}>
            <Typography variant="subtitle1">{key}</Typography>
            <Typography
              variant="h4"
              sx={{ color: getColor(stats[key]) }}
            >
              {stats[key]}
            </Typography>
          </Card>
        ))}
    </Box>
  );
};
