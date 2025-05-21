import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm";
import Header from "./components/Header";
import UserList from "./components/UserList";
import EditUser from "./pages/EditUser";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* defined muliple route */}
          <Route path="/" element={<UserForm />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/EditUser/:id" element={<EditUser />} />

          {/* Fallback Routing */}
          <Route path="*" element={<UserForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
