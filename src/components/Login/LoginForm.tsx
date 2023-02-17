import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import ThreeDotsLoader from "../Loaders/ThreeDots";
import GoogleLogo from "../../resources/images/GoogleLogo.svg";
import AppleLogo from "../../resources/images/AppleLogo.svg";
import Image from "next/image";

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

  return (
    <>
      <div className="">
        <div className="p-10">
          <form onSubmit={handleSubmit(submit)}>
            <div className="grid overflow-hidden grid-rows-1 gap-4 pb-2">
              {/* Titulo */}
              <p className="text-2xl font-bold flex text-white justify-start pb-3">
                Sign in to NoCap
              </p>
              {/* google */}
              <div className="flex justify-center pb-1">
                <Button
                  disabled={isSubmitting}
                  className="w-full bg-white rounded-full p-2 flex justify-center "
                >
                  <Image
                    src={GoogleLogo}
                    alt="Google Logo"
                    width={15}
                    height={15}
                  />

                  <span className="font-bold text-black text-sm capitalize ml-2">
                    Sign in with Google
                  </span>
                </Button>
              </div>
              {/* apple */}
              <div className="flex justify-center ">
                <Button
                  disabled={isSubmitting}
                  className="w-full bg-white rounded-full p-2 flex justify-center"
                >
                  <Image
                    src={AppleLogo}
                    alt="Google Logo"
                    width={25}
                    height={25}
                  />
                  <span className="font-bold text-black text-sm capitalize ">
                    Sign in with Apple
                  </span>
                </Button>
              </div>
              <div className="grid grid-cols-3 items-center">
                <div className="col-span-1 h-0.5 bg-gray-600"></div>
                <div className="col-span-1 text-center text-gray-600">or</div>
                <div className="col-span-1 h-0.5 bg-gray-600"></div>
              </div>
              {/* input para correo o user */}
              <div className="pb-8">
                <Input
                  id="username"
                  name="username"
                  type="username"
                  placeholder="Phone, email, or username"
                  layout="basic"
                  onChange={() => {}}
                  value=""
                  register={register}
                  registerOptions={{ required: true }}
                  autoComplete="username"
                  labelClassName="text-md p-1 text-white"
                  inputClassName="text-input px-3 py-2 w-full h-full border-[1px] border-gray-600 bg-gray-800 rounded-lg text-gray-600 text-lg outline-none transition duration-300"
                  containerClassName="flex flex-col text-gray-600"
                />

                <div className="relative">
                  {errors.username && errors.username.type === "required" && (
                    <span className="absolute top-0 left-0 w-full text-red-500">
                      Username is required
                    </span>
                  )}
                </div>
              </div>
              {/* boton de ingresar */}
              <div className="flex justify-center ">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white rounded-full p-1"
                >
                  {!isSubmitting ? (
                    <span className="font-bold text-black text-sm capitalize">
                      Next
                    </span>
                  ) : (
                    <ThreeDotsLoader />
                  )}
                </Button>
              </div>
              {/* boton de olvidar contraseña */}
              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black border-white border-[0.1rem] rounded-full p-1"
                >
                  {!isSubmitting ? (
                    <span className="font-bold text-white text-sm capitalize">
                      Forgot password?
                    </span>
                  ) : (
                    <ThreeDotsLoader />
                  )}
                </Button>
              </div>
              <div className="pt-6 text-gray-600 text-sm flex">
                <p>Dont have an account?</p>
                <p className="text-blue-500 pl-1"> Sign up</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
