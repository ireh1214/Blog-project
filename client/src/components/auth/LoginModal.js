import React, { useState, useEffect } from "react";
import {
  Modal,
  NavLink,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import { CLEAR_ERROR_REQUEST, LOGIN_REQUEST } from "../../redux/types";
import { useDispatch, useSelector } from "react-redux";
import PetsIcon from "@material-ui/icons/Pets";

const LoginModal = () => {
  const [modal, setModal] = useState(false);
  const [localMsg, setLocalMsg] = useState("");
  const [form, setValues] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { errorMsg } = useSelector((state) => state.auth);
  useEffect(() => {
    try {
      setLocalMsg(errorMsg);
    } catch (e) {
      console.log(e);
    }
  }, [errorMsg]);

  const handleToggle = () => {
    dispatch({
      type: CLEAR_ERROR_REQUEST,
    });
    setModal(!modal);
  };

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    const user = { email, password };
    console.log(user);
    dispatch({
      type: LOGIN_REQUEST,
      payload: user,
    });
  };

  return (
    <div>
      <NavLink onClick={handleToggle} href="#" id="AppNavBar-Button">
        로그인
      </NavLink>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>
          <PetsIcon />
        </ModalHeader>
        <ModalBody>
          {localMsg ? (
            <Alert color="warning" id="localMsgAlert">
              {localMsg}
            </Alert>
          ) : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label
                for="email"
                style={{ fontSize: "12px", color: "#aaa", marginBottom: "8px" }}
              >
                이메일을 적어주세요
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={onChange}
              />

              <Label
                for="password"
                style={{
                  fontSize: "12px",
                  color: "#aaa",
                  margin: "16px 0 8px",
                }}
              >
                패스워드를 입력해주세요
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={onChange}
              />
              <Button
                variant="outlined"
                style={{ marginTop: "4rem", padding: "8px 26px" }}
                className="loginBtn"
              >
                로그인!
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
