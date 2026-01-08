import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import AdminDashboard from "./pages/AdminDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
// import UserDashboard from "./pages/UserDashboard";
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="completed" element={<Completed />} />
          <Route path="progress" element={<Progress />} />
          <Route path="todo" element={<Todo />} />
          <Route path="team" element={<Team />} />
          <Route path="trash" element={<Trash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
