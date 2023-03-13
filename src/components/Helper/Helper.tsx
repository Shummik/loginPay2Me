import React from "react";
import s from "./style.module.scss";
import HelperIcon from "../../assets/images/helperIcon.svg";

const Helper = () => {
  return (
    <div className={s.helper}>
      <span>Нужна помощь?</span>
      <div className={s.helperImage}>
        <img src={HelperIcon} alt="HelperIcon" />
      </div>
    </div>
  );
};

export default Helper;
