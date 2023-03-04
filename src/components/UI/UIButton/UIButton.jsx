import React from "react";
import s from "./UIButton.module.scss";

export const UIButton = ({onClick, text, disabled}) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick} className={s.button}>
        {text}
      </button>
    </>
  );
};
