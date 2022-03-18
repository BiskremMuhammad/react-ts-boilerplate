/**
 * @author Muhammad Omran
 * @date 18-03-2022
 * @description Main layout container
 */

import React from "react";
import {
  BrowserRouter,
  Routes as RoutesContainer,
  Route,
} from "react-router-dom";
import { Routes } from "../Navigation/Routes";
import { Home } from "../Pages/Home/Home";
import { Navbar } from "./Navbar/Navbar";

export const MainLayout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesContainer>
        <Route path={Routes.HOME} element={<Home />} />
      </RoutesContainer>
    </BrowserRouter>
  );
};
