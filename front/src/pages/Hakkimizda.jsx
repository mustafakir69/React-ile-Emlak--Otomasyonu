import React from "react";
import { Row, Col, Card } from "antd";
import Navbar from "../components/Navbar";

const { Meta } = Card;

const Hakkimizda = () => {
  return (
    <>
    <div className='navbar '>
        <Navbar />
      </div>
    <div style={{ padding: '20px 100px 100px 100px' }} className="container-fliud"> 
      <Row gutter={[16, 16]} align="middle">
        <Col span={24}>
          <h1 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '20px' }}>Hakkımızda</h1>
        </Col>
        <Col span={24}>
          <Card
            style={{ backgroundColor: '#f0f2f5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            cover={
              <img
                alt="Hakkımızda"
                src="https://cdn.myportfolio.com/961159439564362cb916646676dbfc39/4caf39f2-622c-44d9-b99c-00154ae04512_rw_1920.png?h=acac8aecb6f5f4cadd52df0b2b806449"
                style={{ height: 'auto', maxHeight: '600px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
              />
            }
          >
            <Meta
              title={<h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Emlak Otomasyonu</h2>}
              description={
                <div>
                  <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                    Emlak Otomasyonu, sektördeki uzun yıllara dayanan deneyimi ve güçlü iş ağıyla, müşterilerine benzersiz bir emlak deneyimi sunmaktadır. Şirketimiz, gayrimenkul ihtiyaçlarınızı karşılamak için geniş bir portföye sahip olup, satış, kiralama ve danışmanlık hizmetlerinde uzmanlaşmıştır.
                  </p>
                  <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                    Müşteri memnuniyeti odaklı çalışma prensibimizle, her adımda müşterilerimizin yanında yer alıyoruz. Profesyonel ekibimiz, sektördeki güncel gelişmeleri yakından takip ederek size en doğru bilgiyi sunmayı amaçlamaktadır. Emlak ihtiyaçlarınızı anlamak, gereksinimlerinize uygun çözümler üretmek ve işlemlerinizi sorunsuz bir şekilde tamamlamanızı sağlamak için buradayız.
                  </p>
                  <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                    Şeffaf ve güvenilir bir yaklaşımla, sizlere mülk satın alırken veya kiralarınızı yönetirken gereken tüm bilgiyi sağlamaktan gurur duyuyoruz. Ayrıca, yatırım yapmayı düşünen müşterilerimize de uzman danışmanlık hizmeti sunarak en doğru kararları vermelerine yardımcı oluyoruz. Emlak sektöründeki yenilikleri ve fırsatları yakından takip eden ekibimiz, size en iyi hizmeti sunmak için sürekli olarak çalışmaktadır.
                  </p>
                  <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                    Emlak Otomasyonu olarak, size özel çözümler sunmaktan ve hayallerinizi gerçeğe dönüştürmek için yanınızda olmaktan mutluluk duyarız. Sizleri doğru mülklerle buluşturarak, emlak deneyiminizi kolaylaştırmak ve memnuniyetinizi sağlamak için varız.
                  </p>
                </div>
              }
            />
          </Card>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default Hakkimizda;
