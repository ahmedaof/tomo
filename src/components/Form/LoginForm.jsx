import { useState } from "react";
import "./login-form.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
// Components
import MainButton from "../Buttons/MainButton";
// Images
import VisibilityOff from "../../assets/images/Login/visibility_off.png";
import { getAccessToken } from "../../services/getAccessToken";

const LoginForm = () => {
  const [togglePass, setTogglePass] = useState("password");
  const [dots, setDots] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Toggle Password Dots
  const handleDots = (e) => {
    return e.target.value === "" ? setDots(true) : setDots(false);
  };

  // Toggle Show and Hide Password
  const showPassword = (e) => {
    setTogglePass("text");
  };
  const hidePassword = (e) => {
    setTogglePass("password");
  };

  // On Submit Function
  const onSubmit = (data) => {
    const { email, password } = data;
    getAccessToken(email, password).then((resp) => {
      if (resp) {
        navigate("/dashboard", { replace: true });
      }
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Phone Number */}
      <label className="text-login">رقم الجوال</label>
      <div
        className={`phone flex items-center mt-3 p-4 gap-2 rounded-xl mb-8 ${
          errors.email?.type ? "error" : ""
        }`}
      >
        <input
          type="email"
          name="email"
          placeholder="ادخل رقم الهاتف"
          className="text-primary border-none w-full focus:ring-0 px-0"
          {...register("email", {
            required: true,
          })}
        />
      </div>
      {errors.email?.type === "required" ? (
        <p className="validation mb-8 px-4 text-lg">من فضلك أدخل رقم الهاتف</p>
      ) : (
        ""
      )}
      {/* Password */}
      <label className="text-login">كلمة المرور</label>
      <div
        className={`password flex items-center mt-3 gap-2 p-4 rounded-xl mb-2 ${
          errors?.password?.type ? "error" : ""
        }`}
      >
        <input
          type={togglePass}
          name="password"
          onInput={handleDots}
          className={`pass-input font-normal text-primary px-0 w-full border-none focus:ring-0 ${
            dots ? "show" : ""
          }`}
          {...register("password", {
            required: true,
          })}
        />
        <div className="toggle-pass">
          {togglePass === "password" ? (
            <img
              src={VisibilityOff}
              alt="showPass"
              className="cursor-pointer"
              onClick={showPassword}
            />
          ) : (
            <AiOutlineEye className="cursor-pointer" onClick={hidePassword} />
          )}
        </div>
      </div>
      {errors.password?.type === "required" ? (
        <p className="validation font-normal mb-8 px-4 mt-6 text-lg">
          من فضلك أدخل كلمة المرور
        </p>
      ) : (
        ""
      )}
      <div className="checkbox flex items-center mb-16 px-1">
        <input type="checkbox" className="ml-3 focus:ring-0" />
        <label className="font-normal text-base text-login">تذكرنى</label>
      </div>
      <MainButton context="تسجيل الدخول" type="submit" />
    </form>
  );
};

export default LoginForm;
