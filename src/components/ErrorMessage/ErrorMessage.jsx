import React from "react";
import s from "./ErrorMessage.module.scss";

export const ErrorMessage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>404</h1>
      <span className={s.text}>
        You lost your own way <br /> my son
      </span>
    </div>
  );
};
