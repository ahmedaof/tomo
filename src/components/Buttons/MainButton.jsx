import { Spinner } from "flowbite-react";
import React from "react";

const MainButton = ({
  context,
  image,
  type = "button",
  classes,
  loading,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`main-btn bg-active text-white rounded-lg cursor-pointer ${classes}`}
    >
      {loading ? (
        <Spinner aria-label="Medium sized spinner example" size="md" />
      ) : (
        <>
          {image && <img src={image} alt={`${image && "icon"}`} />}
          {context}
        </>
      )}
    </button>
  );
};

export default MainButton;
