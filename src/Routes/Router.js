import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Dashboard from "../pages/Dashboard";
import User from "../pages/user";
import MainLayout from "../Layout/MainLayout";
import Auth from "../components/Auth/auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route element={<Auth> <MainLayout/></Auth>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
          </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
