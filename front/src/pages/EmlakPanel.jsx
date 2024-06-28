  import React, { useState, useEffect } from 'react';
  import { Layout, Button, List, Card, message } from 'antd';
  import axios from 'axios';
  import IlanSil from '../components/IlanSil';
  import IlanGuncelle, { handleUpdate } from '../components/IlanGuncelle';
  import IlanEkle, { handleAddIlan } from '../components/IlanEkle';
  import IlanDetay from '../components/IlanDetay';
  import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons'; 
  import './css/EmlakPanel.css';
  import Navbar from '../components/Navbar';

  const { Content } = Layout;

  const EmlakPanel = () => {
    const [ilanListesi, setIlanListesi] = useState([]);
    const [selectedIlan, setSelectedIlan] = useState(null);
    const [showIlanDetailModal, setShowIlanDetailModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5005/api/realEstate');
        setIlanListesi(response.data);
      } catch (error) {
        console.error('Veri getirme hatası: ', error);
        message.error('İlanlar yüklenirken bir hata oluştu!');
      }
    };

    const toggleSelectIlan = (ilan) => {
      if (selectedIlan && selectedIlan._id === ilan._id) {
        setSelectedIlan(null);
      } else {
        setSelectedIlan(ilan);
      }
    };

    const showIlanDetails = (ilan) => {
      setSelectedIlan(ilan);
      setShowIlanDetailModal(true);
    };

    const closeModal = () => {
      setShowIlanDetailModal(false);
      setShowUpdateModal(false);
      setShowAddModal(false);
    };

    const handleUpdateIlan = () => {
      setShowUpdateModal(true);
    };

    const handleAddNewIlan = () => {
      setShowAddModal(true);
    };

    return (
      <>
        <div className='navbar'>
          <Navbar />
        </div>
        <Layout className=''>
          <Content className="emlak-panel">
            <Card title={<div className="card-title">Emlakçı Paneli</div>} className="card-content">
              <div>
                <div className="action-buttons">
                  <Button
                    type="primary"
                    style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
                    onClick={handleAddNewIlan} 
                    icon={<PlusCircleOutlined />}
                  >
                    İlan Ekle
                  </Button>
                  <Button
                    type="primary"
                    style={{ marginLeft: '10px', borderColor: '#1890ff' }}
                    onClick={handleUpdateIlan}
                    icon={<EditOutlined />} 
                  >
                    İlan Güncelle
                  </Button>
                  <IlanSil
                    selectedIlan={selectedIlan}
                    ilanListesi={ilanListesi}
                    setIlanListesi={setIlanListesi}
                  />
                </div>
                <List
                  grid={{ gutter: 16, column: 1, xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
                  dataSource={ilanListesi}
                  renderItem={(ilan) => (
                    <List.Item className="list-item">
                      <Card
                        hoverable
                        cover={<img alt="ilan resmi" src={ilan.resimUrl} className="card-image" />}
                        actions={[
                          <Button
                            type={selectedIlan && selectedIlan._id === ilan._id ? "primary" : "default"}
                            onClick={() => toggleSelectIlan(ilan)}
                          >
                            Seç
                          </Button>,
                          <Button type="default" onClick={() => showIlanDetails(ilan)}>İlan Detayları</Button>
                        ]}
                        className="card-item"
                      >
                        <Card.Meta
                          title={<span style={{ fontWeight: 'bold' }}>{ilan.başlık}</span>}
                        />
                        <p style={{ margin: '10px 0', fontSize: '14px' }}><strong>Fiyat:</strong> {ilan.fiyat} TL</p>
                      </Card>
                    </List.Item>
                  )}
                />
                <IlanDetay
                  selectedIlan={selectedIlan}
                  visible={showIlanDetailModal}
                  onClose={closeModal}
                />
                <IlanEkle
                  visible={showAddModal}
                  onCancel={closeModal}
                  onFinish={(values, form) => handleAddIlan(values, ilanListesi, setIlanListesi, setShowAddModal, message, form)}
                />
                <IlanGuncelle
                  visible={showUpdateModal}
                  onCancel={closeModal}
                  onFinish={(values) => handleUpdate(values, selectedIlan, ilanListesi, setIlanListesi, setShowUpdateModal, setSelectedIlan, message)}
                  initialValues={selectedIlan}
                />
              </div>
            </Card>
          </Content>
        </Layout>
      </>
    );
  };

  export default EmlakPanel;
