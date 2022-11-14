import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SoftwareEngineeringPage } from "./pages/SoftwareEngineeringPage/SoftwareEngineeringPage";
import HomePage from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { ROUTES } from "./constants/routes";
import { MainLayout } from "./components/Container/MainLayout";
import { JavaScriptPage } from "./pages/JavaScriptPage/JavaScriptPage";

function App() {
  return (
    <div className="App">
      <Header />
      <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={ROUTES["Software Engineering"].path} element={<SoftwareEngineeringPage />} />
        <Route path={ROUTES["JavaScript"].path} element={<JavaScriptPage />} />
      </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
