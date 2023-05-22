import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ErrorPage from "../views/error/ErrorPage";
import Default from "../views/default/Default";
import Login from "../views/login/Login";
import HomePage from "../views/homePage/HomePage";
import CancelacionCurso from "../views/cancenlacionCurso/CancelacionCurso";
import CancelacionesPendientes from "../views/cancelacionesPendientes/CancelacionesPendientes";
import DocentesCancelaciones from "../views/docentesCancelaciones/DocentesCancelaciones";
import DocenteRevisionCancelaciones from "../views/docenteRevisionCancelaciones/DocenteRevisionCancelaciones";
export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="default" element={<Default />} />
          <Route path="login" element={<Login />} />
          <Route path="cancelacionCurso/:user" element={<CancelacionCurso />} />

          <Route
            path="docentesCancelaciones"
            element={<DocentesCancelaciones />}
          />

          <Route
            path="cancelacionesPendientes"
            element={<CancelacionesPendientes />}
          />
          <Route
            path="docenteRevisionCancelaciones"
            element={<DocenteRevisionCancelaciones />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
