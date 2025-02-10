import { t } from "i18next";
import * as Yup from "yup";

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .max(255)
    .email(t("errors.Field must be valid email address"))
    .required(t("errors.Required!")),
  password: Yup.string().min(6).required(t("errors.Required!")),
  terms: Yup.boolean()
    .required(t("errors.Required!"))
    .oneOf([true], t("errors.Required!")),
});
