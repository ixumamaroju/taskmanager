import { useEffect, useState } from "react";
import axios from "axios";

import {
  MdDashboard,
  MdTask,
  MdDone,
  MdPendingActions,
  MdGroup,
  MdDelete,
  MdSettings
} from "react-icons/md";

export default function AdminDashboard() {

  const [stats, setStats] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admin/stats")
      .then(res => setStats(res.data));

    axios.get("http://localhost:5000/admin/tasks")
      .then(res => setTasks(res.data));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 relative">

        <h2 className="text-2xl font-bold text-blue-600 mb-8">TaskMe</h2>

        <nav className="space-y-2 text-gray-700">

          <Menu icon={<MdDashboard size={20} />} label="Dashboard" to="/admin" />
          <Menu icon={<MdTask size={20} />} label="Tasks" to="/admin/tasks" />
          <Menu icon={<MdDone size={20} />} label="Completed" to="/admin/completed" />
          <Menu icon={<MdPendingActions size={20} />} label="In Progress" to="/admin/progress" />
          <Menu icon={<MdTask size={20} />} label="To Do" to="/admin/todo" />
          <Menu icon={<MdGroup size={20} />} label="Team" to="/admin/team" />
          <Menu icon={<MdDelete size={20} />} label="Trash" to="/admin/trash" />

        </nav>


        <div className="absolute bottom-6 left-6 text-gray-500 flex items-center gap-3">
          <MdSettings size={20} />
          Settings
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <input
            placeholder="Search..."
            className="border p-2 rounded w-1/3"
          />
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full">
            A
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Task" value={stats.total} />
          <StatCard title="Completed" value={stats.completed} />
          <StatCard title="In Progress" value={stats.progress} />
          <StatCard title="Todos" value={stats.todo} />
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h3 className="mb-4 font-semibold">Chart by Priority</h3>
          <div className="h-48 bg-blue-100 rounded flex items-center justify-center text-gray-600">
            (Chart Coming Soon)
          </div>
        </div>

        {/* Task List */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="mb-4 font-semibold">Tasks</h3>

          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-2">Title</th>
                <th className="pb-2">Priority</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map(task => (
                <tr key={task.id} className="border-b">
                  <td className="py-3">{task.title}</td>
                  <td>{task.priority}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

/* --- Reusable Components --- */

function Menu({ icon, label, active }) {
  return (
    <div className={`flex items-center gap-3 ${active ? "text-blue-600 font-semibold" : ""}`}>
      {icon}
      {label}
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h4 className="text-gray-500">{title}</h4>
      <p className="text-3xl font-bold">{value || 0}</p>
    </div>
  );
}
