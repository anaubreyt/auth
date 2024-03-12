import React from 'react'
import { useLocation, Navigate } from "react-router-dom";


const RequireAuth = ({children}) => {
    const location = useLocation();
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

        if ((location.pathname === '/') && !isLoggedIn) {
        return <Navigate to="/login" />;
      }
    
      if (!isLoggedIn) {
          return <Navigate to='/login' state={{from: location}}/>
      }

    return children;
}

export { RequireAuth }
