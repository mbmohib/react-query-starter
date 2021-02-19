import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Box, Container } from "../components";
import { useAuth } from "../hooks";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const { login, isLoading, isAuth } = useAuth();

  const onSubmit = data => {
    login({
      ...data,
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });
  };

  useEffect(() => {
    if (isAuth) {
      history.push("/users");
    }
  }, [isAuth, history]);

  return (
    <Container>
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box borderColor="grey.500" border={1} px={4} py={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              label="Email"
              name="email"
              ref={register}
              error={errors.email}
            />
            <input
              label="Password"
              name="password"
              type="password"
              ref={register}
              error={errors.password}
            />
            <Button
              variant="contained"
              color="primary"
              mt={2}
              disabled={isLoading}
              loading={isLoading}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
