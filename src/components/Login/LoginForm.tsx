import { useForm } from "react-hook-form";
import logoTap from "../../resources/images/LogoTap.png";
import Input from "../Input";
import Button from "../Button";
import Checkbox from "../Checkbox";
import ThreeDotsLoader from "../Loaders/ThreeDots";
import Image from "next/image";
import { useState, useEffect } from "react";
import { taskApi } from "../../api";

interface LoginFormProps {
  onSubmit: (formData: any) => void;
  isSubmitting: boolean;
}

const LoginForm = ({ onSubmit, isSubmitting }: LoginFormProps) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const submit = (formData: any) => {
    // console.log(formData);
    onSubmit(formData);
  };

  const [task, setTask] = useState([]);

  const getTask = async () => {
    const result = await taskApi.getAllTask();
    // console.log("result", result);
  };

  useEffect(() => {
    getTask();
  }, []);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  //entrar lo sacado del fetch en setTask
  fetch("http://localhost:8000/api/task")
    .then((response) => response.json())
    .then((result) => setTask(result))
    // .catch((error) => console.log("error", error));




  return (
    <>
      <div className=" bg-white w-[450px] h-auto p-6 rounded-lg">
        {task.map(
          (task: { id: number; title: string; description: string }) => (
            <div key={task.id}>
              <p>{task.title}</p>
              <p>{task.description}</p>
            </div>
          )
        )}
      </div>
      <div className="text-4xl p-2 flex justify-center">
        <Image src={logoTap} alt="" width={150} height={150} />
      </div>
      <div className=" bg-white w-[450px] h-auto p-6 rounded-lg">
        <form onSubmit={handleSubmit(submit)}>
          <div className="grid overflow-hidden grid-rows-1 gap-4 pb-2">
            <p className="text-4xl font-bold flex justify-center">Login</p>
            <div className="pb-2">
              <Input
                id="username"
                name="username"
                type="username"
                placeholder="username"
                label="Username"
                layout="basic"
                onChange={() => {}}
                value=""
                register={register}
                registerOptions={{ required: true }}
                autoComplete="username"
                labelClassName="text-md p-1 "
                inputClassName="border-2 rounded-md p-2 focus:outline-none"
                containerClassName="flex flex-col"
              />

              <div className="relative">
                {errors.username && errors.username.type === "required" && (
                  <span className="absolute top-0 left-0 w-full text-red-500">
                    Username is required
                  </span>
                )}
              </div>
            </div>
            <div className="pb-2">
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                layout="basic"
                label="Password"
                onChange={() => {}}
                labelClassName="text-md p-1 "
                value=""
                register={register}
                registerOptions={{ required: true }}
                inputClassName="border-2 rounded-md p-2 focus:outline-none"
                containerClassName="flex flex-col"
                autoComplete="password"
              />
              <div className="relative">
                {errors.password && errors.password.type === "required" && (
                  <span className="absolute top-0 left-0 w-full text-red-500">
                    Password is required
                  </span>
                )}
              </div>
            </div>
            <div>
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checkboxClassName="flex items-center"
                label="Remember me"
                onChange={() => {}}
              />
            </div>
            <div className="flex justify-center ">
              <Button type="submit" disabled={isSubmitting}>
                {!isSubmitting ? (
                  <span className="font-bold bg-orange-600 px-5 py-2 rounded-xl text-white text-lg uppercase hover:bg-orange-900 duration-500">
                    Sign in
                  </span>
                ) : (
                  <ThreeDotsLoader />
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
