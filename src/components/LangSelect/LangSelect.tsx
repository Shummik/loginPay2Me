import React, { useRef, useState } from "react";
import s from "./style.module.scss";
import FlagRu from "../../assets/images/FlagRu.png";
import FlagUsa from "../../assets/images/FlagUsa.png";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const LangSelect = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [curLang, setCurLang] = useState(0);
  const [langListActive, setLangListActive] = useState(false);

  useOnClickOutside(ref, () => setLangListActive(false));

  const languageOptions = [
    {
      id: "ru",
      name: "Русский",
      flagImg: FlagRu,
    },
    {
      id: "en",
      name: "Английский",
      flagImg: FlagUsa,
    },
  ];

  const changeLang = () => {};

  return (
    <div ref={ref} className={s.langSelect}>
      <button
        onClick={() => {
          setLangListActive(!langListActive);
        }}
      >
        <img
          src={languageOptions[curLang].flagImg}
          alt={languageOptions[curLang].name}
        />
        <span>{languageOptions[curLang].id}</span>
      </button>
      {langListActive && (
        <div className={s.langList}>
          {languageOptions.map((item, index) => {
            return (
              <button
                key={item.id}
                className={`${s.langItem} ${index === curLang && s.active}`}
                onClick={() => {
                  setCurLang(index);
                  setLangListActive(false);
                }}
              >
                <img src={item.flagImg} alt={item.name} />
                <span className={s.listId}>{item.id}</span>
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LangSelect;
