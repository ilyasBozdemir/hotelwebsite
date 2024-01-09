import React from "react";

export const getServerSideProps = async ({ res, req }) => {
  res.setHeader("Content-Type", "text/xml");

  //res.write('');
  res.end();
  return {
    props: {},
  };
};

function Blog1() {}

export default Blog1;
