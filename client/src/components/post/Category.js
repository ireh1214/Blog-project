import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Badge, Avatar } from 'antd';

const Categroy = ({ posts }) => {


const colors = [
  'red',

];

  console.log(posts);
  return (
    <>
      {Array.isArray(posts)
        ? posts.map(({ _id, categoryName, posts }) => (
              <Link
                to={`/post/category/${categoryName}`}
                className="text-dark text-decoration-none"
              >
                  <Button>
                    {categoryName} 
                    {" "} <Badge count={posts.length} overflowCount={10}>
                      <Avatar shape="square" size="large" />
                    </Badge>
                  </Button>
              
              </Link>
          ))
        : ""}
    </>
  );
};

export default Categroy;