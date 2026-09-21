import { useContext, useState } from "react";
import { AiFillDelete, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  
  const initialLikes = typeof post.reactions === "object" ? (post.reactions?.likes || 0) : post.reactions;
  const [likesCount, setLikesCount] = useState(initialLikes || 0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
      setIsLiked(false);
    } else {
      setLikesCount(likesCount + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        
        {post.tags?.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="badge text-bg-primary hashtag"
          >
            {tag}
          </span>
        ))}

        {}
        <div className="reactions py-2 mt-2">
          <button 
            className={`btn btn-sm ${isLiked ? "btn-danger" : "btn-outline-danger"} d-inline-flex align-items-center gap-1`}
            onClick={handleLikeClick}
          >
            {isLiked ? <AiFillHeart /> : <AiOutlineHeart />} 
            <span>{likesCount}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Post;