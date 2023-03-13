import React from "react";
import s from "./style.module.scss";
import LayoutImg from "../../assets/images/layoutImg.png";

const Layout = ({ children }: any) => {
  return (
    <main className={s.layout}>
      <div className={s.layoutContent}>{children}</div>

      <div className={s.layoutImg}>
        <img src={LayoutImg} alt="" />
      </div>
    </main>
  );
};

export default Layout;
