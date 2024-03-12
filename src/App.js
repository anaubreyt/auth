import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./app/routing/RequireAuth";
import { LoginPage } from "./pages/LoginPage";
import { UsersPsge } from "./pages/UsersPsge";
import { CategoriesPage } from "./pages/CategoriesPage";
import { ProductPage } from "./pages/ProductPage";
import { ErrorPage } from "./pages/ErrorPage";
import { Layout } from "./app/routing/Layout";

import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";



function App() {
  
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const location = useLocation();

  if (location.pathname === '/') {
    return <Navigate to="/users" />;
  }

  if (isLoggedIn && location.pathname.toLowerCase() === '/login') {
    return <Navigate to='/users' />
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='users' element={<RequireAuth><UsersPsge /></RequireAuth>} />
          <Route path='categories' element={<RequireAuth><CategoriesPage /></RequireAuth>} />
          <Route path='product' element={<RequireAuth><ProductPage /></RequireAuth>} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
