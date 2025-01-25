import React from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components";
import { data } from "../../data/data";
import SideBar from "../../layout/SideBar";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-[0px_1fr] sm:grid-cols-[80px_1fr]">
      <aside className="sticky top-15 h-[calc(100dvh-60px)] overflow-y-auto bg-gray-300">
        <SideBar />
      </aside>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {data?.contents?.map((d, i) => (
          <li key={i}>
            <Card
              content={d?.video}
              onClick={() => navigate(`/watch/${"jfKfPfyJRdk"}`)}
            >
              Watch
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
