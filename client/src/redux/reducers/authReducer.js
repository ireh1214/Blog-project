import {
  CLEAR_ERROR_REQUEST,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  CLEAR_ERROR_SUCCESS,
  CLEAR_ERROR_FAILURE,
  USER_LOADING_FAILURE,
  USER_LOADING_REQUEST,
  USER_LOADING_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../types";

// initialState. 가장 초기값을 의미한다.
// 가장 처음의 상태에서 누군가 로그인을 하면, 그 바뀌는 화면과 액션에 대해 적는다.
// 로그아웃을 하면, 다시 원래대로 돌아오거나 그에 따른 인터랙티브를 화면에 반영한다.
// 이런 식으로 리듀서는 할 일을 정의하는 action, 그리고 종류와 상관 없이 객체가 될 수 있는 payload로 이루어진다.

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false, // spinner 얘기하는거임
  user: "",
  userId: "",
  userName: "",
  userRole: "",
  errerMsg: "",
  successMsg: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        errorMsg: "",
        isLoading: true,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        userId: action.payload.user.id,
        userRole: action.payload.user.role,
        errorMsg: "",
      };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        ...action.payload,
        token: null,
        user: null,
        userId: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: null,
        errorMsg: action.payload.data.msg,
      };

    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        token: null,
        user: null,
        userId: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: null,
        errorMsg: "",
      };

    case CLEAR_ERROR_REQUEST:
      return {
        ...state,
        errorMsg: null,
      };
    case CLEAR_ERROR_SUCCESS:
      return {
        ...state,
        errorMsg: null,
      };
    case CLEAR_ERROR_FAILURE:
      return {
        ...state,
        errorMsg: null,
      };

    case USER_LOADING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADING_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        userId: action.payload._id,
        userName: action.payload.name,
        userRole: action.payload.role,
      };
    case USER_LOADING_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: "",
      };

    default:
      return state;
  }
};

export default authReducer;
