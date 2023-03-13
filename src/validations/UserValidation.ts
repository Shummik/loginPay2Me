import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  login: yup
    .string()
    .required("Необходимо ввести логин")
    .matches(
      /^((\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}|\w+@\w+\.\w{2,3})$/,
      "Почта / телефон введена некорректно. Попробуйте ещё раз."
    ),
});

export const userPassSchema = yup.object().shape({
  password: yup.string().required("Необходимо ввести пароль"),
});

export const userRegisterSchema = yup.object().shape({
  login: yup
    .string()
    .required("Необходимо ввести логин")
    .matches(
      /^((\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}|\w+@\w+\.\w{2,3})$/,
      "Возможно, электронная почта введена некорректно. Попробуйте ещё раз."
    ),
  password: yup.string().required("Необходимо ввести пароль"),
});
