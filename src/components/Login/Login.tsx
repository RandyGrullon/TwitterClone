import React from "react";
import { useLoading } from "../../hooks/useLoading";
import LoginForm from "./LoginForm";
import { accountApi } from "../../api";

let attempts = 0;
let attemptsLimit = 2;

const Login = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();

  const onSubmit = async (formData: { username: string; password: string }) => {
    // console.log(formData);
    startLoading();
    const { username, password } = formData;
    let result;
    if (attempts <= attemptsLimit) {
      result = await accountApi.signIn(username, password);
      stopLoading();
    }
    // console.log("result",result);
  };

  return (
    <>
      <div>
        <LoginForm onSubmit={onSubmit} isSubmitting={isLoading} />
      </div>
    </>
  );
};

export default Login;
