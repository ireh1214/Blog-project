import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SEARCH_REQUEST } from "../../redux/types";
import { Row } from "reactstrap";
import PostCardOne from "../../components/post/PostCardOne";

const Search = () => {
  const dispatch = useDispatch();
  let { searchTerm } = useParams();
  const { searchResult } = useSelector((state) => state.post);

  console.log(searchResult, "useParams");

  useEffect(() => {
    if (searchTerm) {
      dispatch({
        type: SEARCH_REQUEST,
        payload: searchTerm,
      });
    }
  }, [dispatch, searchTerm]);

  return (
    <div className="Search">
        <h6 className="CategoryResultCont">이거 찾아? <br /> <span> ⇢ {searchTerm} </span> </h6>
      <Row>
        <PostCardOne posts={searchResult} />
      </Row>
    </div>
  );
};

export default Search;