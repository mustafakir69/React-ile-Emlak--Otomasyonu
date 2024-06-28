import React from 'react';
import { Card, Form, Input, Button, Space, message } from 'antd';
import { MailOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import '../css/button.css';

const { TextArea } = Input;

const IletisimFormu = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
  
    message.success('Mesajınız başarıyla gönderildi!');

    form.resetFields();
  };
  return (
    <>
      <div className='navbar'>
        <Navbar />
      </div>
      <center>
        <Card
          className='mt-20'
          title="İletişim Formu"
          style={{
            width: '100%',
            maxWidth: 450,
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            borderRadius: 8,
          }}
        >
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              label="Adınız"
              name="ad"
              rules={[{ required: true, message: 'Lütfen adınızı giriniz!' }]}
            >
              <Input size="middle" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              label="Soyadınız"
              name="soyad"
              rules={[{ required: true, message: 'Lütfen soyadınızı giriniz!' }]}
            >
              <Input size="middle" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              label="E-posta"
              name="email"
              rules={[
                { required: true, message: 'Lütfen e-posta adresinizi giriniz!' },
                { type: 'email', message: 'Geçerli bir e-posta adresi giriniz!' }
              ]}
            >
              <Input size="middle" type="email" prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item
              label="Telefon"
              name="telefon"
              rules={[{ required: true, message: 'Lütfen mesajınızı giriniz!' }]}
            >
              <Input size="middle" type="tel" prefix={<PhoneOutlined />} />
            </Form.Item>
            <Form.Item
              label="Mesajınız"
              name="mesaj"
              rules={[{ required: true, message: 'Lütfen mesajınızı giriniz!' }]}
            >
              <TextArea rows={4}  />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit" className='button-css'>
                  Gönder
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </center>
    </>
  );
};

export default IletisimFormu;
