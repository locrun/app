import * as yup from "yup";

export const userProfileSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Введите номер телефона")
    .matches(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Введите номер телефона полностью"
    ),
  email: yup.string().email("Невалидный email").required("Введите email"),
});

export const createFormSchema = yup.object().shape({
  nickname: yup
    .string()
    .max(30, "Максимальная длина 30 символов")
    .required("Обязательное поле")
    .matches(
      /^[a-zA-Z0-9а-яА-Я]+$/,
      "Никнейм может содержать только буквы и цифры"
    ),
  name: yup
    .string()
    .max(50, "Максимальная длина 50 символов")
    .required("Обязательное поле")
    .matches(/^([a-zA-Zа-яА-ЯёЁ]+)$/, "Может содержать только буквы"),

  surname: yup
    .string()
    .max(50, "Максимальная длина 50 символов")
    .required("Обязательное поле")
    .matches(/^([a-zA-Zа-яА-ЯёЁ]+)$/, "Может содержать только буквы"),

  sex: yup
    .object({
      value: yup.string().oneOf(["man", "woman"]),
      label: yup.string().oneOf(["man", "woman"]),
    })
    .required("Выберите один из вариантов")
    .test("is-one-option-selected", "Выберите один из вариантов", (option) => {
      return option && (option.value === "man" || option.value === "woman");
    }),
});

const checkboxGroupArraySchema = yup.array().min(1, "Выберите вариант");

const radioGroupSchema = yup.string().required("Выберите вариант");

export const advFormSchema = yup.object().shape({
  advantages: yup.array().of(
    yup.object().shape({
      name: yup
        .string()
        .required("Поле обязательно для заполнения")
        .matches(
          /^[a-zA-Z0-9а-яА-Я]+$/,
          "Может содержать только буквы и цифры"
        ),
    })
  ),
  checkboxGroup: checkboxGroupArraySchema,
  radioGroup: radioGroupSchema,
});
export const aboutSchema = yup.object().shape({
  about: yup
    .string()
    .min(40, "Минимальная длина 40 символов")
    .max(200, "Максимальная длина 200 символов")
    .required("Обязательное поле"),
});
