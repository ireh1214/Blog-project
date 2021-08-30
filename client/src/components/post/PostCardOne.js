import React, { Fragment } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Badge,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse, faCommentDots, } from "@fortawesome/free-solid-svg-icons";


const PostCardOne = ({ posts }) => {
  return (
    <Fragment>
      {Array.isArray(posts)
        ? posts.map(({ _id, title, fileUrl, comments, views, userName, date }) => {
            return (
              <div key={_id} className="col-md-4 p-2 postCardOneWrap">
                <Link
                  to={`/post/${_id}`}
                  className="text-dark text-decoration-none"
                >
                  <Card>
                    <CardImg top alt="카드이미지" src={fileUrl} />
                    <CardBody>
                      <CardTitle className="text-truncate cardCont">
                        <Col className="text-truncate cardTitle">{title} </Col>
                        <Col>
                        <span>
                          <FontAwesomeIcon icon={faMouse} />
                          &nbsp;&nbsp;
                          <span>{views}</span>
     &nbsp; &nbsp;
     |
     &nbsp; &nbsp;

                           <FontAwesomeIcon icon={faCommentDots} />
                                &nbsp;&nbsp;
                          <span>{comments.length}</span>

   &nbsp; &nbsp;
     |
     &nbsp; &nbsp;

     <span> {date} </span>

                        </span>
                        </Col>
                      </CardTitle>
                    </CardBody>
                  </Card>
                </Link>
              </div>
            );
          })
        : ""}
    </Fragment>
  );
};

export default PostCardOne;