'use client';

import { Col, Container, Row } from 'react-bootstrap';

export default function QQFooter() {
  const sections = [
    { title: '功能特权', desc: '超级会员 特权王者' },
    { title: '装扮特权', desc: '超级会员 我有我风采' },
    { title: '游戏特权', desc: '游戏礼包 专属福利' },
    { title: '生活特权', desc: '超多优惠福利' },
  ];

  return (
    <footer className="footer" style={{ backgroundColor: '#2c2c2c', padding: '20px 0' }}>
      <Container>
        <Row className="text-center text-white">
          {sections.map(({ title, desc }) => (
            <Col
              md={3}
              key={title}
              className="footer-box"
              style={{ backgroundColor: '#2c2c2c', padding: '10px', borderRadius: '10px' }}
            >
              <h4>{title}</h4>
              <p>{desc}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
}
