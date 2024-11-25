import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Login from './LoginScreen';
import RegistrationForm from './App';
//import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />  {/* Ensure this route is correct */}
      </Routes>
    </BrowserRouter>
  );
}

