import React from "react";
import LangSelect from "../LangSelect/LangSelect";
import s from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.mark}>© PAY2ME 2023</div>
      <div className={s.address}>
        <p>ООО «Куарми» ИНН 7743364603</p>
        <p>
          Юридический адрес 125445, Г. Москва, Ул. Беломорская, Д. 11, К. 1/290
        </p>
      </div>
      <div className={s.policy}>
        <a href="#"> Политика конфиденциальности</a>
        <a href="#">Пользовательское соглашение</a>
        <LangSelect />
      </div>
    </footer>
  );
};

export default Footer;
