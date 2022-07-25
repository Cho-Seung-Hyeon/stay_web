import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import {Modal, Button, Form, Container} from 'react-bootstrap'
function App() {

  let [side, setside] = useState(false)
  
  return (
    <div className="App">
      
      <header>
        <div className="inner">
          <h2 className="logo"><a href="#">LOGO</a></h2>
          <div className="search-bar">
            <button className="where">Where</button>
            <button className="when">When</button>
            <button className="guest" >Guest</button>
          </div>
          <button className="user_icon" onClick={() => {setside(!side)}} ></button>
          
        </div>
        { side == true ? <Side/> : null}
     </header>
     

    </div>
  );
}
function Side() {
  const [signUpModal, setsignUpModal] = React.useState(false);
  const [signInModal, setsignInModal] = React.useState(false);
  return (
    <div className="sidemenu">
      <button className="login" onClick={() => setsignInModal(true)}>
             SignIn
          </button>
          <SignInModal
             show={signInModal}
             onHide={() => setsignInModal(false)}
          />
      <button className="signup" onClick={() => setsignUpModal(true)}>
             SignUp
          </button>
          <SignUpModal
             show={signUpModal}
             onHide={() => setsignUpModal(false)}
          />
      <button className="host">Hosting</button>
      <button className="help">Help</button>
      
    </div>
  )
}

function SignUpModal(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [nickname, setNickname] = useState("")
  const [confirmPaswword, setConfirmPassword] = useState("")
  const [birth, setBirth] = useState("")

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onNicknameHandler = (e) => {
    setNickname(e.currentTarget.value);
  };
  
  const onBirthHandler = (e) => {
    setBirth(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };


  return (
    <Modal
      {...props}
      size="mid"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        회원가입
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your name" value={name} onChange={onNameHandler}/>
        {console.log(name)}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nick Name</Form.Label>
        <Form.Control placeholder="Enter your nickname"  value={nickname} onChange={onNicknameHandler}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={onEmailHandler} />
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordHanlder}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" value={confirmPaswword} onChange={onConfirmPasswordHandler}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Birth</Form.Label>
        <Form.Control type="date" placeholder="Confirm Password" value={birth} onChange={onBirthHandler}/>
      </Form.Group>
      
         
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" type="button" onClick={() => {
        axios.post("http://localhost:8080/user-service/register", {
          
            "email" : email,
            "password" : password,
            "confirmpassword" : confirmPaswword,
            "name" : name,
            "nickname": nickname,
            "birth": birth,
        })
      }}>
        Submit
      </Button>
      
    </Modal.Footer>
    </Container>
    </Modal>
  );
}

function SignInModal(props) {
  return (
    <Modal
      {...props}
      size="mid"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        로그인
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

     
    </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="primary" type="button"
    //  onClick={() => {
    //     axios.post("http://localhost:8080/user-service/login", {
    //         "email" : email,
    //         "password" : password,
    //     })
    //   }}
      >
        Submit
      </Button>
    </Modal.Footer>
    </Container>
    </Modal>
  );
}


export default App;
