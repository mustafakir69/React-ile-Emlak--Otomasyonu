import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import SignIn from './pages/SignIn';
import Anasayfa from './pages/Anasayfa';
import SignUp from './pages/SignUp';
import Hakkimizda from './pages/Hakkimizda';
import IletisimFormu from './pages/Iletisim';
import AppFooter from './components/AppFooter';

import EmlakPanel from './pages/EmlakPanel';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/emlakPanel" element={<ProtectedRoute><EmlakPanel /></ProtectedRoute>} />
          <Route path="/iletisim" element={<IletisimFormu />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          
        </Routes>
        <AppFooter/>
      </Layout>
    </Router>
  );
};

export default App;
