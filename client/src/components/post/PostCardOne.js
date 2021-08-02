import React, { Fragment } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Badge,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse, } from "@fortawesome/free-solid-svg-icons";

const PostCardOne = ({ posts }) => {
  return (
    <Fragment>
      {Array.isArray(posts)
        ? posts.map(({ _id, title, fileUrl, comments, views }) => {
            return (
              <div key={_id} className="col-md-4 PostCardWrap">
                <Link
                  to={`/post/${_id}`}
                >
                  <Card className="mb-3 PostCard">
                    <CardImg top alt="카드이미지" src={fileUrl} />
                    <CardBody>
                      <CardTitle className="text-truncate d-flex justify-content-between CardTitle">
                        <span className="text-truncate">{title} </span>
                        <span>
                          <FontAwesomeIcon icon={faMouse} />
                          &nbsp;&nbsp;&nbsp;
                          <span>{views}</span>
                        </span>
                      </CardTitle>
                      <Row>
                        <Button color="white" className="btn-block PostCardButton">
                    MORE <Badge color="dark">{comments.length}</Badge>
                        </Button>
                      </Row>
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
