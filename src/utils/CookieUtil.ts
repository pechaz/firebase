import Cookies from "js-cookie";

export const getCookie = (key: string) => {
  try {
    const val = String(Cookies.get(key));
    return JSON.parse(val);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return undefined;
  }
};

export const setCookie = (
  key: string,
  value: object | string,
  exp: Date | null = null
): boolean => {
  let expires = new Date();
  expires.setDate(expires.getDate() + 360);
  if (exp) {
    expires = exp;
  }
  try {
    const cookieVal = JSON.stringify(value);
    Cookies.set(key, cookieVal, { path: "/", expires });
    return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return false;
  }
};

export const removeCookie = (key: string): boolean => {
  Cookies.remove(key);
  return true;
};
