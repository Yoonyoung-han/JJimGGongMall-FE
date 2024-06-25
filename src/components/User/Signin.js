import React, { useState } from "react";
import { Button, Container, Form,Image } from "react-bootstrap";
import 'components/User/Signin.css'
import kakaoLogo from 'public/img/kakaoLogo.png'
import naverLogo from 'public/img/naverLogo.png'

const Signin = () => {
  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 추가
    console.log("accountId:", accountId);
    console.log("Password:", password);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
      <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text"
            placeholder="아이디를 입력하세요"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <div id="loginButtons">
        <Button as="Input" type="submit" value="로그인 하기" className="loginButton w-100 h-75 mb-1">
          
        </Button>
        <Container id="kakaoLogin" type="button" className="d-flex justify-content-center d-inline-flex align-items-center mb-1">
            <Image src={kakaoLogo} height={38}></Image>
            <span className="">카카오 로그인</span>
        </Container>
        <Container id="naverLogin" type="button" className="d-flex justify-content-center d-inline-flex align-items-center mb-1">
            <Image src={naverLogo} height={38}></Image>
            <span className="">네이버 로그인</span>
        </Container>
        </div>
        <Button variant="link" size="sm" href="/signup">회원 가입하기</Button>
        <Button variant="link" size="sm">회원아이디 / 비밀번호 찾기</Button>
      </Form>
    </Container>
  );
};

export default Signin;
