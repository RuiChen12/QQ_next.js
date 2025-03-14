'use client';

import { Carousel, Container } from 'react-bootstrap';
import Image from 'next/image';

export default function QQMainSection() {
  const images = [
    'https://res.youxituoluo.com/production/admin/uploads/20230810/1691637404715640+(1).jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGChQEj6W81XcICvacuaZwkMCf3IiaNRr24g&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkW0fctaX3xqtTzCXQ2vvldVDywMmQh7YT4w&s',
    'https://shp.qpic.cn/cfwebcap/0/654ce86b8abe4bce9c93020b9d0f03e5/0?width=800&height=393',
  ];

  return (
    <div className="background-section">
      <div className="background-overlay" />
      <Container className="text-center text-white position-relative">
        <Carousel>
          {images.map((img) => (
            <Carousel.Item key={img}>
              <Image
                src={img}
                alt="QQ会员轮播图"
                width={1920}
                height={700}
                className="d-block mx-auto"
                style={{ objectFit: 'cover', width: '100%', height: '700px' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
