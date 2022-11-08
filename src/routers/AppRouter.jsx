import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { DashboardRoutes } from "./DashboardRoutes"
import { Login } from "../pages/Login"



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ 
          <PublicRoutes>
            {/* Colocar el componente a proteger */}
            <Login/>

          </PublicRoutes>
        } />

        <Route path='/*' element={
          <PrivateRoutes>

            <DashboardRoutes/>

          </PrivateRoutes>
        } />

      </Routes>
    </BrowserRouter>
  )
}
