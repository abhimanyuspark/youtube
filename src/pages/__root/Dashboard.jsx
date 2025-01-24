import React from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate(`/watch/${"kJQP7kiw5Fk"}`)}>
        watch
      </button>
    </div>
  );
};

export default Dashboard;
