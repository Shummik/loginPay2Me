import React, { FormEvent, useState } from "react";
import s from "./style.module.scss";
import ArrowBackImg from "../../assets/images/arrowBack.png";
import ArrowForwardImg from "../../assets/images/arrowForward.png";
import LogoImg from "../../assets/images/logo.png";
import PasswordIcon from "../../assets/images/passwordIcon.png";
import PasswordShowIcon from "../../assets/images/passwordShowIcon.png";
import {
  userLoginSchema,
  userPassSchema,
  userRegisterSchema,
} from "../../validations/UserValidation";
import Helper from "../../components/Helper/Helper";

type FormData = {
  login: string;
  password: string;
};

const INITIAL__USER__DATA: FormData = {
  login: "",
  password: "",
};

const LogForm = () => {
  const [userData, setUserData] = useState(INITIAL__USER__DATA);
  const [formError, setFormError] = useState(null);
  const [formErrorLog, setFormErrorLog] = useState(null);
  const [formErrorPass, setFormErrorPass] = useState(null);
  const [formStep, setFormStep] = useState(1);
  // 1 - login, 2 - pass, 3 - registrate
  const [passwordInputType, setPasswordInputType] = useState(true);

  const userTest = {
    name: "Вадим",
    login: "+7 (988) 888-88-45",
    password: "123456",
  };

  function updateFields(fields: Partial<FormData>) {
    setUserData((prev) => {
      setFormError(null);
      setFormErrorLog(null);
      setFormErrorPass(null);
      return { ...prev, ...fields };
    });
  }

  const checkUserData = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (formStep === 1) {
        const isValid = await userLoginSchema.validate(userData);
        if (isValid.login) {
          setFormStep(2);
        }
      }
      if (formStep === 2) {
        const isValid = await userPassSchema.validate(userData);
        if (isValid.password) {
          if (userData.password === userTest.password) {
            console.log("step 2 success");
          } else {
            setFormStep(3);
          }
        }
      }
      if (formStep === 3) {
        const isValid = await userRegisterSchema.validate(userData, {
          abortEarly: false,
        });
      }
    } catch (err: any) {
      console.log(err.errors);

      if (err.errors.length > 1) {
        setFormErrorLog(err.errors[0]);
        setFormErrorPass(err.errors[1]);
      } else if (err.errors[0] === "Необходимо ввести пароль") {
        setFormErrorPass(err.errors[0]);
      } else {
        setFormErrorLog(err.errors[0]);
      }

      setFormError(err.errors);
    }
  };

  return (
    <section className={s.main}>
      <button
        className={`${s.arrowBack} textPurple`}
        onClick={() => setFormStep(formStep > 1 ? formStep - 1 : formStep)}
      >
        <img src={ArrowBackImg} alt="Назад" /> <span>Назад</span>
      </button>
      <div className={s.formWrap}>
        <img src={LogoImg} alt="logo" className={s.formLogo} />
        {formStep === 1 && (
          <>
            <h1>Войти в личный кабинет</h1>
            <p>Войдите, чтобы начать использовать платёжные решения PAY2ME.</p>
          </>
        )}
        {formStep === 2 && (
          <>
            <h1>Здравствуйте, {userTest.name}!</h1>
            <p>
              Введите пароль для номера{" "}
              {userData.login.substring(0, 5) +
                "*".repeat(userData.login.length - 8) +
                userData.login.substring(userData.login.length - 3)}
            </p>
          </>
        )}
        {formStep === 3 && (
          <>
            <h1>Что-то пошло не так</h1>
            <p>Вы ввели неверный логин или пароль.</p>
          </>
        )}

        <form className={s.formBlock} onSubmit={checkUserData}>
          {formStep === 1 && (
            <div
              className={`${s.formInput} ${s.LogPhone} ${formError && s.error}`}
            >
              <div className={s.inputWrap}>
                <input
                  type="text"
                  value={userData.login}
                  onChange={(e) => updateFields({ login: e.target.value })}
                  placeholder="Введите номер телефона или электронную почту"
                />
                <p className={s.errorMsg}>{formError}</p>
              </div>
              <button type="submit">
                <span>Далее</span>
                <img src={ArrowForwardImg} alt="Далее" />
              </button>
            </div>
          )}
          {formStep === 2 && (
            <div
              className={`${s.formInput} ${s.LogPass} ${formError && s.error}`}
            >
              <div className={s.inputWrap}>
                <input
                  type={passwordInputType ? "password" : "text"}
                  value={userData.password}
                  onChange={(e) => updateFields({ password: e.target.value })}
                  placeholder="Введите пароль"
                />
                <p className={s.errorMsg}>{formError}</p>
                <img
                  className={s.passwordIcon}
                  src={passwordInputType ? PasswordIcon : PasswordShowIcon}
                  alt="пароль"
                  onClick={() => {
                    setPasswordInputType(!passwordInputType);
                  }}
                />
              </div>

              <button type="submit">
                <span>Далее</span>
                <img src={ArrowForwardImg} alt="Далее" />
              </button>
            </div>
          )}
          {formStep === 3 && (
            <>
              <div
                className={`${s.formInput} ${s.LogReg} ${
                  formErrorLog && s.error
                }`}
              >
                <div className={s.inputWrap}>
                  <input
                    type="text"
                    value={userData.login}
                    onChange={(e) => updateFields({ login: e.target.value })}
                    placeholder="Введите номер телефона или электронную почту"
                  />
                  <p className={s.errorMsg}>{formErrorLog}</p>
                </div>
              </div>
              <div
                className={`${s.formInput} ${s.LogReg} ${
                  formErrorPass && s.error
                }`}
              >
                <div className={s.inputWrap}>
                  <input
                    type={passwordInputType ? "password" : "text"}
                    value={userData.password}
                    onChange={(e) => updateFields({ password: e.target.value })}
                    placeholder="Введите пароль"
                  />
                  <p className={s.errorMsg}>{formErrorPass}</p>
                  <img
                    className={s.passwordIcon}
                    src={passwordInputType ? PasswordIcon : PasswordShowIcon}
                    alt="пароль"
                    onClick={() => {
                      setPasswordInputType(!passwordInputType);
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className={s.regBtn}
                disabled={formErrorPass !== null && formErrorPass !== null}
              >
                <span>Далее</span>
              </button>
            </>
          )}
        </form>
        {formStep === 1 && (
          <>
            <p className={s.extraLinks}>
              <span className={s.mobileHide}>У вас </span> ещё нет аккаунта?
              <button className="textPurple" onClick={() => setFormStep(3)}>
                Зарегистрироваться
              </button>
            </p>
            <p className={s.extraLinks}>
              <span className={s.mobileHide}>Возникли </span>проблемы со входом?
              <button className="textPurple" onClick={() => setFormStep(3)}>
                Восстановить доступ
              </button>
            </p>
          </>
        )}
        {formStep === 2 && (
          <>
            <p className={s.extraLinks}>
              Это не мой номер.
              <button className="textPurple" onClick={() => setFormStep(1)}>
                Сменить пользователя
              </button>
            </p>
            <p className={s.extraLinks}>
              <span className={s.mobileHide}>Возникли </span>проблемы со входом?
              <button className="textPurple" onClick={() => setFormStep(3)}>
                Восстановить доступ
              </button>
            </p>
          </>
        )}
        {formStep === 3 && (
          <>
            <p className={s.extraLinks}>
              <span className={s.mobileHide}>Возникли </span>проблемы со входом?
              <button className="textPurple">Восстановить доступ</button>
            </p>
            <p className={s.extraLinks}>
              У вас ещё нет аккаунта?
              <button className="textPurple">Зарегистрироваться</button>
            </p>
          </>
        )}
      </div>
      
      <Helper />
    </section>
  );
};

export default LogForm;
