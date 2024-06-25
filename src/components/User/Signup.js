import React, { useState } from "react";
import { Button, Container, Form ,Image, Col, Row, Modal } from "react-bootstrap";
import 'components/User/Signup.css';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Signup = (props) => {
    const [accountId, setAccountId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const [zonecode, setZonecode] = useState('');
    const [address, setAddress] = useState('');
    const [detailedAddress, setDetailedAddress] = useState('');
    const [isAddressSelected, setIsAddressSelected] = useState(false);
    const [gender, setGender] = useState('nothing');
    const [birthDay, setBirthDay] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const [birthError, setBirthError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const open = useDaumPostcodePopup();

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        setAddress(fullAddress);
        setZonecode(data.zonecode);
        setIsAddressSelected(true);
    };
 
	// 팝업창 관리
    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    // 성별관리
    const handleGender=(e)=>{
        setGender(e.target.value)
    };

    const validateBirthDate = () => {
        const year = parseInt(birthYear);
        const month = parseInt(birthMonth);
        const date = parseInt(birthDate);
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 14;

        if (isNaN(year) || year < 1930 || year > minYear) {
            return "유효한 년도를 입력하세요.";
        }
        if (isNaN(month) || month < 1 || month > 12) {
            return "유효한 월을 입력하세요.";
        }
        if (isNaN(date) || date < 1 || date > 31) {
            return "유효한 일을 입력하세요.";
        }
        setBirthError('');
        setBirthDay(year+'-'+month+'-'+date);
        return "";
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const birthValidationError = validateBirthDate();
        if (birthValidationError) {
            setBirthError(birthValidationError);
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError("비밀번호가 일치하지 않습니다.");
            return;
        }

        setBirthError('');
        setPasswordError('');

        // 로그인 로직 추가
        console.log("accountId:", accountId);
        console.log("Password:", password);
    };


    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <Form onSubmit={handleSubmit} style={{ width: '640px' }}>
                <h2 className="text-center mb-4">회원 가입</h2>
                <Row>
                    <Col sm={9}>
                    </Col>
                    <Col>
                    <p style={{fontSize:14}}><span style={{color:"red"}}>*</span>필수 입력사항</p>
                    </Col>
                    <hr className="solid" />
                </Row>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                    아이디<span style={{color:"red"}}>*</span>
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control 
                        type="text" 
                        placeholder="아이디를 입력해주세요." 
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                        required
                        />
                    </Col>
                    <Col>
                        <Button className="w-100"  variant="outline-success" href="/signup">중복 확인</Button>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    비밀번호<span style={{color:"red"}}>*</span>
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control 
                        type="password" 
                        placeholder="비밀번호를 입력해주세요." 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    <p style={{fontSize:14}}>비밀번호 확인<span style={{color:"red"}}>*</span></p>
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control 
                        type="password" 
                        placeholder="비밀번호를 한번 더 입력해주세요." 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        />
                        {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                    이름<span style={{color:"red"}}>*</span>
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control 
                        type="text" 
                        placeholder="이름을 입력해주세요." 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                    </Col>
                </Form.Group>
            
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    이메일<span style={{color:"red"}}>*</span>
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control 
                        type="email" 
                        placeholder="이메일을 입력해주세요." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </Col>
                    <Col>
                        <Button className="w-100" variant="outline-success" href="/signup">인증 하기</Button>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                    핸드폰<span style={{color:"red"}}>*</span>
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control 
                        type="text" 
                        placeholder="숫자만 입력해주세요." 
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        required
                        />
                    </Col>
                    <Col>
                        <Button className="w-100" variant="outline-success" href="/signup">인증번호 받기</Button>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                    주소<span style={{color:"red"}}>*</span>
                    </Form.Label>
                        {isAddressSelected ? (
                            <>
                            <Col sm={7}>
                                <Form.Control 
                                    type="text" 
                                    placeholder="주소를 입력해주세요." 
                                    value={address} 
                                    readOnly 
                                    required 
                                />
                                <Form.Control 
                                    className="mt-2"
                                    type="text" 
                                    placeholder="상세 주소를 입력해주세요." 
                                    value={detailedAddress}
                                    onChange={(e) => setDetailedAddress(e.target.value)}
                                    required 
                                />
                            </Col>
                            <Col>
                                <Button className="w-100" variant="outline-success" onClick={handleClick}>
                                {<SearchOutlinedIcon />} 재검색
                                </Button>
                            </Col>
                        
                            </>
                        ) : (
                            <Col sm={7}>
                            <Button className="w-100" variant="outline-success" onClick={handleClick}>
                                {<SearchOutlinedIcon />} 주소 찾기
                            </Button>
                            </Col>
                        )}
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                    성별
                    </Form.Label>
                    <Col sm={7}>
                        <div key={`inline-radio`} className="mt-2 mb-2">
                            <Row>
                                <Col>
                            <Form.Check
                                inline
                                label="여성"
                                name="gender"
                                onChange={handleGender}
                                type="radio"
                                id={`inline-radio-1`}
                            />
                            </Col>
                            <Col>
                            <Form.Check
                                inline
                                label="남성"
                                name="gender"
                                onChange={handleGender}
                                type="radio"
                                id={`inline-radio-2`}
                            />
                            </Col>
                            <Col>
                            <Form.Check
                                inline
                                label="선택 안함"
                                name="gender"
                                onChange={handleGender}
                                type="radio"
                                id={`inline-radio-3`}
                            />
                            </Col>
                            </Row>
                        </div>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="2">
                    생년월일
                    </Form.Label>
                    <Col sm={7}>
                         <Row>
                        <Col>
                            <Form.Control 
                            type="text" 
                            maxLength={4}
                            placeholder="YYYY" 
                            value={birthYear}
                            onKeyDown={validateBirthDate}
                            onChange={(e) => setBirthYear(e.target.value)}
                            required
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                            type="text" 
                            maxLength={2}
                            placeholder="MM" 
                            value={birthMonth}
                            onKeyDown={validateBirthDate}
                            onChange={(e) => setBirthMonth(e.target.value)}
                            required
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                            type="text" 
                            maxLength={2}
                            placeholder="DD" 
                            value={birthDate}
                            onKeyDown={validateBirthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required
                            />
                        </Col>
                        </Row>
                        {birthError && <p style={{color: 'red'}}>{birthError}</p>}
                    </Col>
                </Form.Group>
                <br/>
                <br/>
                <br/>
                <Button className="w-100" variant="outline-success" type="summit"> <h3>가입하기</h3> </Button>
            </Form>
        </Container>

    );
};

export default Signup;