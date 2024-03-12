import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    axios.post('https://btpeel.com/back/test/auth', {
      login,
      password
    })
    .then(res => {
      if(res.data.data) {
        sessionStorage.setItem('isLoggedIn', true);
        navigate('/users');
      } else {
        setError('неверные логин и пароль')
      }
    })
  };

  if (!login && error) {
    setError(false);
  }

  return (
    <div>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={login} 
            onChange={(e) => setLogin(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Войти</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export { LoginPage }
