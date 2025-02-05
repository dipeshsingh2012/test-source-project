import React from "react";
import { UserList } from "./components/UserList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Test Source Project</h1>
      <UserList orgId="org-123" />
    </div>
  );
};

export default App;
