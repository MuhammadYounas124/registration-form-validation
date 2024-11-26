import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Login from './LoginScreen';
import RegistrationForm from './App.tsx';
// import './index.css'; (Optional: if you have styles)

const rootElement = document.getElementById('root');
if (rootElement) {
  const handleLogin = (email: string) => {
    console.log("User logged in with email:", email);
  };

  createRoot(rootElement).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/homescreen" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}




