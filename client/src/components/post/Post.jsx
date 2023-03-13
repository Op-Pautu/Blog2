import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/14862953/pexels-photo-14862953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, orem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam,
      </p>
    </div>
  );
}
