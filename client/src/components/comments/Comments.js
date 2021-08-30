import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  COMMENT_UPLOADING_REQUEST,
  COMMENT_LOADING_REQUEST,
  COMMENT_DELETE_REQUEST,
} from "../../redux/types";
import { Form, FormGroup, Input, Button, Row } from "reactstrap";

const Comments = ({ id, userName, userId }) => {
  const dispatch = useDispatch();
  const [form, setValues] = useState({ contents: "" });

  const onSubmit = async (e) => {
    await e.preventDefault();
    const { contents } = form;
    const token = localStorage.getItem("token");
    const body = {
      contents,
      token,
      id,
      userId,
      userName,
    };

    console.log(body);
    dispatch({
      type: COMMENT_UPLOADING_REQUEST,
      payload: body,
    });
    resetValue.current.value = "";
    setValues("");
  };

  const resetValue = useRef(null);

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form.contents);
  };

  useEffect(() => {
    dispatch({
      type: COMMENT_LOADING_REQUEST,
      payload: id,
    });
  }, [dispatch, id]);
  return (
    <>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Row className="p-3 m-3">
        
            <div className="my-1" />
            <div className="commentFlex mb-3">
            <Input
              innerRef={resetValue}
              type="textarea"
              name="contents"
              id="contents"
              className="Comment"
              onChange={onChange}
              size="2" 
              maxlength="1200"
              placeholder="지금 당신의 생각은?"
            />
            <Button>
             완료
            </Button>
            </div>
          </Row>
        </FormGroup>
      </Form>
    </>
  );
};

export default Comments;