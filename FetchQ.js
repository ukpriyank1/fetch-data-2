import React, { useEffect, useState } from "react";

const FetchQ = () => {
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts/1/comments";
    const getData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setComment(data))
        .catch((error) => console.log("Error Occur", error))
        .finally(setLoading(false));
    };
    getData();
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "pink",
          color: "white",
          padding: "30px",
          width: "100%",
          height: "100vh",
        }}
        key="value"
      >
        {loading ? <p>Loading...</p> : <pre>{comment.postId}</pre>}
      </div>
    </>
  );
};

export default FetchQ;
