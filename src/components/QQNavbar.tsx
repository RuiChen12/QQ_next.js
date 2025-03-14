'use client';

import Image from 'next/image';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

export default function QQNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrMxUCof6ESYXujD_CSWMyWrxefhxxI7IRQ&s"
            alt="QQ会员"
            width={30}
            height={30}
            className="me-2"
          />
          QQ会员
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#">靓号站</Nav.Link>
            <NavDropdown title="功能特权" id="featureDropdown">
              <NavDropdown.Item href="#">全部特权</NavDropdown.Item>
              <NavDropdown.Item href="#">分等级特权</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">游戏特权</Nav.Link>
            <NavDropdown title="成长体系" id="growthDropdown">
              <NavDropdown.Item href="#">任务中心</NavDropdown.Item>
              <NavDropdown.Item href="#">排名中心</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">年费专区</Nav.Link>
            <Nav.Link href="#">免流量特权</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-light" className="me-2">登录</Button>
        <Button variant="warning">开通超级会员</Button>
      </Container>
    </Navbar>
  );
}
