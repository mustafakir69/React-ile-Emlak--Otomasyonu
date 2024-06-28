import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Button, List, Card, Row, Col } from 'antd';
import { DownSquareOutlined, FileSearchOutlined } from '@ant-design/icons'; 
import IlanDetay from '../components/IlanDetay';
import Filtrele from '../components/Filtrele'; 
import './css/Anasayfa.css';
import Navbar from '../components/Navbar';

const { Content } = Layout;
const { Item } = List;

const formatCurrency = (value) => {
  return new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value) + ' TL';
};

const Anasayfa = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIlan, setSelectedIlan] = useState(null);
  const [ilanListesi, setIlanListesi] = useState([]);
  const [visibleIlanCount, setVisibleIlanCount] = useState(6);

  useEffect(() => {
    axios.get('http://localhost:5005/api/realEstate')
      .then(response => {
        setIlanListesi(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleDetailsClick = (ilan) => {
    setSelectedIlan(ilan);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedIlan(null); 
    setModalVisible(false);
  };

  const handleLoadMore = () => {
    setVisibleIlanCount(prevCount => prevCount + 6);
  };

  return (
    <>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Layout>
          <Content>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={6}>
                <Filtrele setIlanListesi={setIlanListesi} />
              </Col>
              <Col xs={24} md={18}>
                <List
                  grid={{ gutter: 16, column: 1, xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
                  dataSource={ilanListesi.slice(0, visibleIlanCount)}
                  renderItem={item => (
                    <Item>
                      <Card
                        hoverable
                        className="ilan-kart"
                        cover={<img alt={item.başlık} src={item.resimUrl} className="ilan-kart-resim" />}
                        onClick={() => handleDetailsClick(item)}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <h3 style={{ margin: 0 }}>{item.başlık}</h3>
                          <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#1890ff' }}>{formatCurrency(item.fiyat)}</span>
                        </div>
                        <Button type="primary" onClick={() => handleDetailsClick(item)} icon={<FileSearchOutlined />} className="detaylar-button">
                          Detaylar
                        </Button>
                      </Card>
                    </Item>
                  )}
                />
                {visibleIlanCount < ilanListesi.length && (
                  <div className="show-more-container">
                    <Button type="primary" danger  onClick={handleLoadMore} icon={<DownSquareOutlined />}
                      style={{ backgroundColor: '#001529', borderColor: '#001529' }}>
                      Daha Fazla Yükle
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
            <IlanDetay
              selectedIlan={selectedIlan}
              visible={modalVisible}
              onClose={handleCloseModal}
            />
          </Content>
        </Layout>
      </div>
    </>
  );
};

export default Anasayfa;
