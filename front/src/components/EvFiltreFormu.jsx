import React from 'react';
import { Card, Form, InputNumber, Select, Checkbox, Button } from 'antd';
import { ClearOutlined, FilterOutlined } from '@ant-design/icons';
import '../css/button.css';

const { Option } = Select;

const EvFiltreFormu = ({ filtre, handleFilterChange, applyFilters, clearFilters }) => {
  const ozellikler = ['havuz', 'garaj', 'bahçe', 'doğalgaz']; 
  return (
    <Card title="Filtrele">
      <Form layout="vertical">
        <Form.Item label="Şehir">
          <Select
            style={{ width: '100%' }}
            placeholder="Şehir Seçin"
            value={filtre.il}
            onChange={value => handleFilterChange('il', value)}
          >
            <Option value="İstanbul">İstanbul</Option>
            <Option value="Ankara">Ankara</Option>
            <Option value="İzmir">İzmir</Option>
            <Option value="Antalya">Antalya</Option>
            <Option value="Konya">Konya</Option>
            <Option value="Bursa">Bursa</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Oda Sayısı">
          <Select
            style={{ width: '100%' }}
            placeholder="Oda Sayısı Seçin"
            value={filtre.odaSayisi}
            onChange={value => handleFilterChange('odaSayisi', value)}
          >
            <Option value="1+1">1+1</Option>
            <Option value="2+1">2+1</Option>
            <Option value="3+1">3+1</Option>
            <Option value="4+1">4+1</Option>
            <Option value="5+1">5+1</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Minimum Fiyat">
          <InputNumber
            style={{ width: '100%' }}
            placeholder="Min"
            value={filtre.minFiyat}
            onChange={value => handleFilterChange('minFiyat', value)}
          />
        </Form.Item>
        <Form.Item label="Maksimum Fiyat">
          <InputNumber
            style={{ width: '100%' }}
            placeholder="Max"
            value={filtre.maxFiyat}
            onChange={value => handleFilterChange('maxFiyat', value)}
          />
        </Form.Item>
       
        <Form.Item label="Mutlaka Olmalı">
          <Checkbox.Group
            options={ozellikler}
            value={filtre.ozellikler}
            onChange={checkedList => handleFilterChange('ozellikler', checkedList)}
          />
        </Form.Item>
        <Form.Item label="Mutlaka Olmamalı">
          <Checkbox.Group
            options={ozellikler}
            value={filtre.olmamaliOzellikler}
            onChange={checkedList => handleFilterChange('olmamaliOzellikler', checkedList)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={applyFilters} className="button-css" icon={<FilterOutlined />}>Filtrele</Button>
          <Button onClick={clearFilters} icon={<ClearOutlined />}>Temizle</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default EvFiltreFormu;
