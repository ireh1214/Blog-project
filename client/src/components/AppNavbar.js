import React, { Fragment, useEffect, useState, useCallback } from "react";
import {
  Navbar,
  Container,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Form,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import LoginModal from "../components/auth/LoginModal";
import RegisterModal from "./auth/RegisterModal";
import { LOGOUT_REQUEST } from "../redux/types";
import { useSelector, useDispatch } from "react-redux";
import PetsIcon from "@material-ui/icons/Pets";
import BrushIcon from '@material-ui/icons/Brush';
import SearchInput from "./search/searchInput";


const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, userRole } = useSelector(
    (state) => state.auth
  );
  console.log(userRole, "UserRole");

  const dispatch = useDispatch();

  // eslint-disable-next-line
  const onLogout = useCallback(() => {
    swal({
 title: "로그아웃 되었습니다!",
  icon: "success",
 timer: 3000,
});
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);

  useEffect(() => {
    setIsOpen(false);
  }, [user]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const addPostClick = () => {};

  const welcomeWords = [
    "안녕하세요! 오늘도 좋은 날입니다.",
    "오늘 하루도 즐겁게 보냈나요?",
    "허리 쭉쭉! 건강 조심하세요",
    "편안한 하루 되세요",
    "가끔은 쉬면서 일하세요",
    "오늘은 어떤 글을 쓰실 건가요?",
    // "님캐 제꺼예요ㅎㅎ",
    "오늘은 뭔가 영감이 떠오를 것 같죠?",
    "Welcome, ",
    "요즘 기분은 어떠세요?",
  ];
  const randomWelcome =
    welcomeWords[Math.floor(Math.random() * welcomeWords.length)];

  const authLink = (
    <Fragment>
      <NavItem>
        {userRole === "MainJuin" ? (
          <Form className="col mt-2">
            <Link
              to="/post"
              className="btn block px-3 WriteBtn"
              onClick={addPostClick}
            >
          <BrushIcon className="BrushBtn" />
            </Link>
          </Form>
        ) : (
          ""
        )}
      </NavItem>

      <NavItem className="d-flex justify-content-center">
        <Form className="col mt-2">
          {user && user.name ? (
            <Link to={`/user/${user.name}/profile`}>
                <strong className="WelcomeBtn">
                  {user ? `${randomWelcome} ${user.name} 님!` : ""}
                </strong>
            </Link>
          ) : (
            <Button outline color="dark" className="px-3" block>
              <strong>유저를 찾을 수 없는데요!?</strong>
            </Button>
          )}
        </Form>
      </NavItem>
      <NavItem className="NavInput">
        <SearchInput isOpen={isOpen} />
      </NavItem>

<div className="NavIWrap">
  <NavItem>
        <Form className="col logoutBtnForm">
          <Link onClick={onLogout} to="#">
            <Button className="logoutBtn">
              Logout
            </Button>
          </Link>
        </Form>
      </NavItem>
      
      <NavItem className="NavI">
        <Link>
         HOME
        </Link>
      </NavItem>

      <NavItem className="NavI">
        <Link>
         BLOG
        </Link>
      </NavItem>


      <NavItem className="NavI">
        <Link>
         VERSION
        </Link>
      </NavItem>


      <NavItem className="NavI">
        <Link>
         DEV
        </Link>
      </NavItem>
</div>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div id="AppNavBar">
      <Navbar color="#fff" dark expand="lg" className="sticky-top">
        <Container id="AppNavBar-wrap">
          <Link to="/">
            <PetsIcon />
          </Link>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar id="AppNavBar-Button">
            <Nav navbar>{isAuthenticated ? authLink : guestLink}</Nav>
     

          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
