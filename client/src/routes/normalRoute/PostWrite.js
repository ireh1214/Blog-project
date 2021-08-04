import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Col,
  Progress,
  Container,
} from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react"; // CKEditor 설정 변경됨
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import { editorConfiguration } from "../../components/editor/EditorConfig";
import Myinit from "../../components/editor/UploadAdapter";
import { POST_UPLOADING_REQUEST } from "../../redux/types";

import dotenv from "dotenv";
dotenv.config();

const PostWrite = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [form, setValues] = useState({ title: "", contents: "", fileUrl: "" });
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    await e.preventDefault();
    const { title, contents, fileUrl, category } = form;
    const token = localStorage.getItem("token");
    const body = { title, contents, fileUrl, category, token };
    dispatch({
      type: POST_UPLOADING_REQUEST,
      payload: body,
    });
  };

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getDataFromCKEditor = (event, editor) => {
    const data = editor.getData();
    console.log(data);

    if (data && data.match("<img src=")) {
      const whereImg_start = data.indexOf("<img src=");
      console.log(whereImg_start);
      let whereImg_end = "";
      let ext_name_find = "";
      let result_Img_Url = "";

      const ext_name = ["jpeg", "png", "jpg", "gif", "pdf", "zip"];

      for (let i = 0; i < ext_name.length; i++) {
        if (data.match(ext_name[i])) {
          console.log(data.indexOf(`${ext_name[i]}`));
          ext_name_find = ext_name[i];
          whereImg_end = data.indexOf(`${ext_name[i]}`);
        }
      }
      console.log(ext_name_find);
      console.log(whereImg_end);

      if (ext_name_find === "jpeg") {
        result_Img_Url = data.substring(whereImg_start + 10, whereImg_end + 4);
      } else {
        result_Img_Url = data.substring(whereImg_start + 10, whereImg_end + 3);
      }

      console.log(result_Img_Url, "result_Img_Url");
      setValues({
        ...form,
        fileUrl: result_Img_Url,
        contents: data,
      });
    } else {
      setValues({
        ...form,
        fileUrl: process.env.REACT_APP_BASIC_IMAGE_URL,
        contents: data,
      });
    }
  };

  return (
    <Container style={{ width: "960px" }} id="postContainer">
      {isAuthenticated ? (
        <Form onSubmit={onSubmit}>
            <Input
              type="text"
              name="title"
              id="title"
              className="form-control mb-3"
              placeholder="제목을 입력하세요"
              onChange={onChange}
            />
          <FormGroup className="mb-3">
            <Input
              type="text"
              name="category"
              id="category"
              className="form-control"
              placeholder="#카테고리"
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <CKEditor
              editor={ClassicEditor}
              config={editorConfiguration}
              oninit={Myinit}
              onBlur={getDataFromCKEditor}
            />
            <CKEditor editor={getDataFromCKEditor} />
            <Button
              block
              className="mt-3 col-md-2 offset-md-10 mb-3 goWrite"
            >
              제출하기
            </Button>
          </FormGroup>
        </Form>
      ) : (
        <Col width={50} className="p-5 m-5">
          <Progress animated color="info" value={100} />
        </Col>
      )}
    </Container>
  );
};

export default PostWrite;
