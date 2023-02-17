import React from "react";
import { useLoading } from "../../hooks/useLoading";
import LoginForm from "./LoginForm";
import { accountApi } from "../../api";
import CloseIconX from "../../resources/images/components/CloseIconX";
import TapLogo from "../../resources/images/LogoTap.svg";
import Image from "next/image";

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
      // console.log("result", result);
      stopLoading();
    }
  };

  return (
    <>
      <div className="bg-black h-screen bg-cover">
        <div className="pb-44">
          {/* coloca el componente CloseIconX arriba a la izquierda, y el TapLogo en el mismo centro */}
          <div className="flex justify-between items-center absolute w-full pt-3 px-4">
            <div className="flex justify-start">
              <button className="flex items-center focus:outline-none">
                <CloseIconX size={10} color="#ffffff" />
              </button>
            </div>
            <div className="flex justify-center">
              <Image src={TapLogo} alt="Tap Logo" width={50} height={50} />
            </div>
            <div></div>
          </div>
        </div>
        <LoginForm onSubmit={onSubmit} isSubmitting={isLoading} />
      </div>
    </>
  );
};

export default Login;
