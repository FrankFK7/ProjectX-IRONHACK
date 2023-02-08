import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";

//components
import NavBar from "./components/Navbar/Navbar";
import TodoForm from "./components/TodoForm";
import UserForm from "./components/UserForm";

//pages
import Login from "./pages/LogIn";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import TodoProfile from "./pages/TodoProfile";
import Signup from "./pages/Signup";
import AddTask from "./pages/AddTask";
import CreateUser from "./pages/CreateUser";
import Search from "./pages/Search";
import MyTask from "./pages/Mytasks";

//providers
import { UserProvider } from "./contexts/UserContext";
import { TodoProvider } from "./contexts/TodoContext";
import ProtectedRoute from "./routeGuard/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      {/* Wrapping our entire App here, so that we can use context values anywhere (components, pages) */}
      <UserProvider>
        <TodoProvider>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="user/:id" element={<UserProfile />} />
                <Route path="todo/:id" element={<TodoProfile />} />
                {/* <Route path="addtodo" element={<AddTodo />} /> */}
              <Route path="createuser" element={<CreateUser />} />
              <Route path="search" element={<Search />} />
              {/* <Route path="mytasks" element={<MyTasks />} /> */}
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
          </div>
        </TodoProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;