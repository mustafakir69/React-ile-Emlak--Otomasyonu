import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography, message } from "antd";
import { MailOutlined ,LockOutlined} from '@ant-design/icons';
import Navbar from "../components/Navbar";
import '../css/button.css';

const { Title } = Typography;

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5005/api/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      const user = await res.json();

      if (res.status === 200) {
        localStorage.setItem(
          "posUser",
          JSON.stringify({
            username: user.username,
            email: user.email,
          })
        );
        message.success("Giriş işlemi başarılı.");
        navigate("/emlakPanel");
      } else if (res.status === 404) {
        message.error("Kullanıcı bulunamadı!");
      } else if (res.status === 403) {
        message.error("Şifre yanlış!");
      } else {
        message.error("Bir şeyler yanlış gitti.");
      }
      setLoading(false);
    } catch (error) {
      message.error("Bir şeyler yanlış gitti.");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="navbar">
        <Navbar/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ width: 500, padding: 30, border: '1px solid #ccc', borderRadius: 8 }}>
          <Title level={2} style={{ textAlign: 'center' }}>Giriş Yap</Title>
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              remember: false,
            }}
          >
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                {
                  required: true,
                  message: "E-mail Alanı Boş Bırakılamaz!",
                },
              ]}
            >
              <Input prefix={<MailOutlined />}  />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Şifre Alanı Boş Bırakılamaz!",
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
                loading={loading}
                style={{ backgroundColor: '#001529', borderColor: '#001529' }}
              >
                Giriş Yap
              </Button >
            </Form.Item>
            <Form.Item>
              <Button
                type="link"
                onClick={() => navigate("/signup")}
                className="w-full"
                size="large"  
              >
                Üye Ol
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
