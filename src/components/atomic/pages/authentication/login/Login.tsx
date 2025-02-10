"use client";

import { Box, Typography } from "@mui/material";

import {
  CheckboxTitle,
  Container,
  MainWrapper,
  Title,
  Wrapper,
  SubTitle,
} from "./Login.style";
import useLogin from "./useLogin";
import { Button, Checkbox, Input } from "../../../atoms";

const Login = () => {
  const { t, formik } = useLogin();
  const { handleSubmit, values, handleBlur, handleChange, errors, isValid } =
    formik;

  return (
    <form noValidate onSubmit={handleSubmit} autoComplete="off">
      <Container>
        <MainWrapper>
          <Wrapper>
            <Typography component={Title} className="uppercase">
              {t("labels.login")}
            </Typography>
            <Box marginTop={3} display="flex" flexDirection="column" gap={2}>
              <Input
                value={values.email}
                name="email"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={t("labels.email")}
                title={t("labels.email")}
                error={Boolean(errors.email)}
                errorMessage={errors.email}
              />
              <Input
                required
                value={values.password}
                name="password"
                type="password"
                placeholder="*********"
                onBlur={handleBlur}
                onChange={handleChange}
                title={t("labels.password")}
                error={Boolean(errors.password)}
                errorMessage={errors.password}
              />

              <SubTitle href="#">{t("labels.forgot password")}</SubTitle>
            </Box>

            <Box
              marginTop={3}
              display="flex"
              flexDirection="row"
              gap={1}
              alignItems="center"
            >
              <Checkbox
                name="terms"
                sx={{ padding: 0 }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.terms}
                checked={values.terms}
              />
              <Typography component={CheckboxTitle}>
                {t("labels.accept terms")}
              </Typography>
            </Box>

            <Box
              marginTop={3}
              display="flex"
              justifyContent="space-between"
              flexDirection={{
                xs: "column",
                lg: "row",
              }}
              alignItems={{
                xs: "start",
                lg: "center",
              }}
              gap={{
                xs: 3,
                lg: 0,
              }}
            >
              <Button
                variant="contained"
                onClick={() => handleSubmit()}
                disabled={!isValid}
                size="large"
                fullWidth
              >
                {t("labels.login")}
              </Button>
            </Box>
          </Wrapper>
        </MainWrapper>
      </Container>
    </form>
  );
};

export default Login;
