import React from 'react';
import { Modal, Form, Input, Select, Card, Button, Checkbox } from 'antd';

const { Option } = Select;

const IlanForm = ({ form, onFinish, initialValues = {}, title, submitText, visible, onCancel }) => (
  <Modal
    title={title}
    visible={visible}
    onCancel={onCancel}
    footer={null}
  >
    <Card>
      <Form form={form} name="ilan-form" onFinish={onFinish} layout="vertical" initialValues={initialValues}>
        <Form.Item
          name="başlık"
          label="Başlık"
          rules={[{ required: true, message: 'Lütfen başlık girin!' }]}
        >
          <Input placeholder="Başlık girin" />
        </Form.Item>
        <Form.Item
          name="açıklama"
          label="Açıklama"
          rules={[{ required: true, message: 'Lütfen açıklama girin!' }]}
        >
          <Input.TextArea placeholder="Açıklama girin" />
        </Form.Item>
        <Form.Item
          name="il"
          label="İl"
          rules={[{ required: true, message: 'Lütfen il bilgisini girin!' }]}
        >
          <Select placeholder="İl seçiniz">
            <Option value="İstanbul">İstanbul</Option>
            <Option value="Ankara">Ankara</Option>
            <Option value="İzmir">İzmir</Option>
            <Option value="Bursa">Bursa</Option>
            <Option value="Antalya">Antalya</Option>
            <Option value="Konya">Konya</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="fiyat"
          label="Fiyat"
          rules={[{ required: true, message: 'Lütfen fiyat bilgisini girin!' }]}
        >
          <Input type="number" placeholder="Fiyat girin" />
        </Form.Item>
        <Form.Item
          name="odaSayısı"
          label="Oda Sayısı"
          rules={[{ required: true, message: 'Lütfen oda sayısı bilgisini girin!' }]}
        >
          <Select placeholder="Oda sayısını seçin">
            <Option value="1+1">1+1</Option>
            <Option value="2+1">2+1</Option>
            <Option value="3+1">3+1</Option>
            <Option value="4+1">4+1</Option>
            <Option value="5+1">5+1</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="resimUrl"
          label="Ev Resmi URL"
          rules={[{ required: true, message: 'Lütfen ev resmi URL adresini girin!' }]}
        >
          <Input placeholder="Ev resmi URL adresini girin" />
        </Form.Item>
        <Form.Item name="özellikler" label="Özellikler">
          <Checkbox.Group>
            <Checkbox value="havuz">Havuz</Checkbox>
            <Checkbox value="garaj">Garaj</Checkbox>
            <Checkbox value="bahçe">Bahçe</Checkbox>
            <Checkbox value="doğalgaz">Doğalgaz</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {submitText}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </Modal>
);

export default IlanForm;
