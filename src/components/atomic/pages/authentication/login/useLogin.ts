import { useDispatch } from "react-redux";
import { handleLogin } from "@/redux/auth";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";

import { LoginValidationSchema } from "./Login.validationSchema";
import { auth } from "@/services/Firebase.service";
import { CONSTANTS, CookieUtil } from "@/utils/index";

const useLogin = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();

  const sigin = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const token = await response.user.getIdTokenResult();
      CookieUtil.setCookie(CONSTANTS.TOKEN_KEY, token.token);
      CookieUtil.setCookie(
        CONSTANTS.REFRESH_TOKEN_KEY,
        response.user.refreshToken
      );
      dispatch(
        handleLogin({
          user: response.user,
        })
      );
      router.replace("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      //TODO show error
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      terms: false,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      sigin(values.email, values.password);
    },
    validationSchema: LoginValidationSchema,
  });

  return { t, formik };
};

export default useLogin;
