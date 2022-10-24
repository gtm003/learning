import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PositionPage } from "./pages/PositionPage/PositionPage";
import HomePage from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { MainLayout } from "./components/Container/MainLayout";

function App() {
  return (
    <div className="App">
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/position" element={<PositionPage />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
