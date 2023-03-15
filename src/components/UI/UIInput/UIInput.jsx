import React, {useRef} from "react";
import cn from "classnames";
import s from "./UIInput.module.scss";

import closeIcon from "./closeIcon.svg";

export const UIInput = ({
  searchInputValue,
  setSearchInputValue,
  handleInputChange,
  placeholder,
	classes,
	getResponse
}) => {
  const inputRef = useRef(null);
  const clearInput = () => {
	  setSearchInputValue("");
	  getResponse('')
	  inputRef.current.focus();
  };

  return (
    <form className={cn(s.wrapper, classes)}>
      {searchInputValue && (
        <img className={s.closeIcon} src={closeIcon} alt='close' onClick={clearInput} />
      )}
      <input
        ref={inputRef}
        className={s.input}
        placeholder={placeholder}
        type='text'
        value={searchInputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
