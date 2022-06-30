import { Route, Routes, Navigate } from "react-router-dom";
import List from "./components/List";
import Login from "./components/auth/login/Login";
import PrivateRoute from "./routes/PublciRoutes";
import Layout from "./components/common/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/lists" element={<PrivateRoute Component={List} />} />
          <Route path="/" element={<Navigate to="/lists" />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
