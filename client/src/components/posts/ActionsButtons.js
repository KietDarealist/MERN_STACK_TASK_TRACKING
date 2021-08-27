import React from "react";
import Button from "react-bootstrap/Button";
import playIcon from "../../assets/play-btn.svg";
import editIcon from "../../assets/pencil.svg";
import deleteIcon from "../../assets/trash.svg";
import { FaPencilAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { PostContext } from "../../contexts/PostContext";
import { useContext } from "react";
const ActionsButtons = ({ url, _id }) => {
  const { deletePost, findPost, setShowUpdatePostModal } =
    useContext(PostContext);

  const choosePost = (postId) => {
    findPost(postId);
    setShowUpdatePostModal(true);
  };

  return (
    <>
      <Button
        className="post-button"
        href={url}
        target="_blank"
        variant="light"
      >
        <img src={playIcon} alt="play" width="32" height="32" />
      </Button>
      <Button
        className="post-button"
        variant="light"
        onClick={choosePost.bind(this, _id)}
      >
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>
      <Button
        className="post-button"
        variant="light"
        onClick={deletePost.bind(this, _id)}
      >
        <img src={deleteIcon} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};

export default ActionsButtons;
