import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className='mt-20' style={{ textAlign: 'center', backgroundColor: '#f0f2f5', padding: '20px', borderTop: '1px solid #ddd' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src="https://w7.pngwing.com/pngs/535/915/png-transparent-house-real-estate-ewing-township-property-house.png"
          alt="Logo"
          className="navbar-logo-image"
          style={{ width: '100px', marginBottom: '10px' }} 
        />
        <div>
          Emlak Otomasyonu &copy;2024
        </div>
        <div style={{ marginTop: '10px', fontSize: '12px', color: '#888' }}>
          İletişim: info@emlakotomasyonu.com
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
