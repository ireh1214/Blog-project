import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import {
  POST_DETAIL_LOADING_REQUEST,
  POST_DELETE_REQUEST,
  USER_LOADING_REQUEST,
} from "../../redux/types";
import { Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Comments from "../../components/comments/Comments";

import GrowingSpinner from "../../components/spinner/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faCommentDots,
  faMouse,
} from "@fortawesome/free-solid-svg-icons";

import { CKEditor } from "@ckeditor/ckeditor5-react"; // CKEditor 설정 변경됨
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import { editorConfiguration } from "../../components/editor/EditorConfig";
import swal from 'sweetalert';

import '../../assets/postDetail.scss';


const PostDetail = (req) => {
  const dispatch = useDispatch();
  const { postDetail, creatorId, title, loading } = useSelector(
    (state) => state.post
  );
  const { userId, userName } = useSelector((state) => state.auth);
  const { comments } = useSelector((state) => state.comment);

  console.log(req);
  useEffect(() => {
    dispatch({
      type: POST_DETAIL_LOADING_REQUEST,
      payload: req.match.params.id,
    });
    dispatch({
      type: USER_LOADING_REQUEST,
      payload: localStorage.getItem("token"),
    });
  }, [dispatch, req.match.params.id]);




  const onDeleteClick = () => {
    swal({
 title: "포스팅이 삭제되었습니다!",
  icon: "success",
 timer: 3000,
});
    dispatch({
      type: POST_DELETE_REQUEST,
      payload: {
        id: req.match.params.id,
        token: localStorage.getItem("token"),
      },
    });
  };

  const EditButton = (
    <div className="topCont">
      <Row>
        <Col>
          <Link
            to={`/post/${req.match.params.id}/edit`}>
            수정할래
          </Link>
        </Col>
        <Col>
          <span onClick={onDeleteClick}>
            삭제할래
          </span>
        </Col>
      </Row>
    </div>
  );

 

  const Body = (
    <>
      <Row className="TopButton">
        {(() => {
          if (postDetail && postDetail.creator) {
            return (
              <div id="postTop">
                <h3 classname="postTitle">
                  {postDetail.title}
                </h3>
                <div className="postTopCont">
                <div className="creator">{postDetail.creator.name} 
                    <Button>
                      {postDetail.category.categoryName}
                    </Button>
                </div>
                <div> {userId === creatorId ? EditButton : null} </div>
              </div>
              </div>
            );
          }
        })()}
      </Row>
      {postDetail && postDetail.comments ? (
        <div className="PostDetail">
          <div className="rightCont">
            <FontAwesomeIcon icon={faPencilAlt} />
            &nbsp;
            <span> {postDetail.date}</span>
            &nbsp;&nbsp;
            |
            &nbsp;&nbsp;
            <FontAwesomeIcon icon={faCommentDots} />
            &nbsp;
            <span>{postDetail.comments.length}</span>
            &nbsp;&nbsp;
            <FontAwesomeIcon icon={faMouse} /> &nbsp;
            <span>{postDetail.views}</span>
          </div>
          <Row className="m-3 pb-3 pt-3">
        <CKEditor
            editor={ClassicEditor}
            data={postDetail.contents}
            config={editorConfiguration}
            disabled="true"
            toolbar = "false"
            />
          </Row>
          <Row>
            <Container>
              {Array.isArray(comments)
                ? comments.map(
                    ({ contents, creator, date, _id, creatorName }) => (
                      <div key={_id}>
                        <div className="creatorCont">
                          <div className="creatorName">
                            {creatorName ? creatorName : creator}
                          </div>
                          <div className="creatorDate">
                            <span>
                              {date.split(" ")[0]}
                            </span>
                            <span>
                              {" "}
                              {date.split(" ")[1]}
                            </span>
                          </div>
                        </div>
                        <Row className="pb-1 pt-3 commentW">
                          <pre className="commentWidth">{contents}</pre>
                        </Row>
                        <hr />
                      </div>
                    )
                  )
                : "Creator"}
              <Comments
                id={req.match.params.id}
                userId={userId}
                userName={userName}
              />
            </Container>
          </Row>
        </div>
      ) : (
        <h1>hi</h1>
      )}
    </>
  );

  console.log(comments, "Comments");
  return (
    <div>
      <Helmet title={`Post | ${title}`} />
      {loading === true ? GrowingSpinner : Body}
    </div>
  );
};

export default PostDetail;