import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_ERROR_REQUEST, REGISTER_REQUEST } from "../../redux/types";
import {
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import PetsIcon from "@material-ui/icons/Pets";
import swal from "@sweetalert/with-react";

const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [form, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [localMsg, setLocalMsg] = useState("");
  const { errorMsg } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch({
      type: CLEAR_ERROR_REQUEST,
    });
    setModal(!modal);
  };

  useEffect(() => {
    try {
      setLocalMsg(errorMsg);
    } catch (e) {
      console.error(e);
    }
  }, [errorMsg]);

  const onChange = (e) => {
    setValue({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = form;
    const newUser = { name, email, password };
    console.log(newUser, "newUser");
    dispatch({
      type: REGISTER_REQUEST,
      payload: newUser,
    });
  };

  // eslint-disable-next-line
  // let closeClick = () => {
  //   document.getElementById("ModalClick").click();
  // };

  const RegisterAlert = () => {
    swal({
      title: "정말 회원가입 하시겠어요?",
      text: "적어주신 정보가 확실한 거죠? 해당 정보는 안전하게 데이터베이스에 보관됩니다. ",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("회원가입이 완료되었어요!", {
          icon: "success",
        });
        // closeClick();
      } else {
        swal("다시 한번 체크해봅시다!");
      }
    });
  };

  return (
    <div>
      <NavLink
        onClick={handleToggle}
        href="#"
        style={{ color: "#333", fontSize: "12px" }}
      >
        회원가입
      </NavLink>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>
          {" "}
          <PetsIcon />
        </ModalHeader>

        <ModalBody>
          <h5 style={{ textAlign: "center", margin: "36px 0 24px" }}>
            회원가입을 원하세요?
          </h5>
          <p
            style={{
              textAlign: "center",
              margin: "0 0 36px",
              fontSize: "14px",
            }}
          >
            간단한 정보만 입력해 주세요. <br /> 오래 걸리지 않습니다 :>{" "}
          </p>
          {localMsg ? <Alert color="yellow">{localMsg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label
                for="name"
                style={{ fontSize: "12px", color: "#aaa", marginBottom: "8px" }}
              >
                닉네임을 적어주세요!
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={onChange}
              />

              <Label
                for="email"
                style={{
                  fontSize: "12px",
                  color: "#aaa",
                  margin: "16px 0 8px",
                }}
              >
                Email
              </Label>
              <Input
                type="text"
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
                {" "}
                Password
              </Label>
              <Input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                onChange={onChange}
              />
              <Button
                style={{ marginTop: "3rem", padding: "8px 26px" }}
                className="loginBtn"
                id="ModalClick"
              >
                완료!
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default RegisterModal;
