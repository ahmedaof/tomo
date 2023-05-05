import { Spinner } from "flowbite-react";
import React from "react";

const SecondaryButton = ({
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
      className={`scd-btn bg-white text-active rounded-lg border border-active border-solid cursor-pointer ${classes}`}
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

export default SecondaryButton;
