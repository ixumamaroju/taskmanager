import { Link, Outlet } from "react-router-dom";
import { MdDashboard, MdTask, MdDone, MdPendingActions, MdGroup, MdDelete, MdSettings } from "react-icons/md";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <div className="w-64 bg-white shadow-lg p-6 relative">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">TaskMe</h2>

        <nav className="space-y-2 text-gray-700">
          <Nav to="/admin" icon={<MdDashboard />} text="Dashboard" />
          <Nav to="/admin/tasks" icon={<MdTask />} text="Tasks" />
          <Nav to="/admin/completed" icon={<MdDone />} text="Completed" />
          <Nav to="/admin/progress" icon={<MdPendingActions />} text="In Progress" />
          <Nav to="/admin/todo" icon={<MdTask />} text="To Do" />
          <Nav to="/admin/team" icon={<MdGroup />} text="Team" />
          <Nav to="/admin/trash" icon={<MdDelete />} text="Trash" />
        </nav>

        <div className="absolute bottom-6 left-6 text-gray-500 flex gap-3 items-center">
          <MdSettings /> Settings
        </div>
      </div>

      <div className="flex-1 p-8">
        <Outlet />
      </div>

    </div>
  );
}

function Nav({ to, icon, text }) {
  return (
    <Link to={to} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-100">
      {icon} {text}
    </Link>
  );
}
