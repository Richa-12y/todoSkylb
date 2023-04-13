import React from "react";
import style from "./logo.module.css";
import LogoImage from "../../assets/icons8-todo-list-50.png";

const Logo = ({ width = 50, height = 50, text = "Todo" }) => {
  return (
    <div className={style["logo_cotianer"]}>
      <div>
        <img src={LogoImage} alt="todologo" width={width} height={height} />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default Logo;
