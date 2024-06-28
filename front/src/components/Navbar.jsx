import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import logo from './img/img2.png';
import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('posUser'));

  const handleSignOut = () => {
    localStorage.removeItem('posUser');
    navigate('/signin');
  };

  return (
    <Menu  mode="horizontal" className="navbar-menu" selectedKeys={[location.pathname]}
    >
      <Link to="/" >
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="navbar-logo-image" />
          <span className="navbar-logo-text">Emlakcı</span>
        </div>
      </Link>

      <div className="navbar-links">
        <Menu.Item key="/">
          <Link to="/" >Anasayfa</Link>
        </Menu.Item>
        <Menu.Item key="/emlakPanel">
          <Link to="/emlakPanel" >Emlakçı Paneli</Link>
        </Menu.Item>
        <Menu.Item key="/iletisim">
          <Link to="/iletisim" >İletişim</Link>
        </Menu.Item>
        <Menu.Item key="/hakkimizda">
          <Link to="/hakkimizda" >Hakkımızda</Link>
        </Menu.Item>
      </div>

      <div className="navbar-actions">
        {user ? (
          <>
            <UserOutlined  />{' '}
            <span  style={{ marginRight: 8 }}>{user.username}</span>
            <LogoutOutlined  onClick={handleSignOut} />
          </>
        ) : (
          <Link to="/signin" ><LoginOutlined /></Link>
        )}
      </div>
    </Menu>
  );
};

export default Navbar;
