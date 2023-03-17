import "./SinglePost.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
export default function SinglePost() {
  const location = useLocation();
  // console.log(location);
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      // console.log(res);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span> {new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
