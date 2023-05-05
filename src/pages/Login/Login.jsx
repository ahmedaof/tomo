import "./login.scss";
// Components
import LoginForm from "../../components/Form/LoginForm";
// Images
import LogoImage from "../../assets/images/Login/logo 2.png";
import Quotes from "../../assets/images/Login/quotes.png";

const Login = () => {
  return (
    <section className="login flex flex-col sm:flex-row items-center justify-between">
      <div className="login-form flex-grow order-2 sm:order-1">
        <p className="welcome text-login mb-4">مرحبا بعودتك !</p>
        <p className="sign mb-8">تسجيل الدخول لتومو</p>
        <LoginForm />
      </div>
      <div className="login-image relative flex flex-col justify-between order-1 sm:order-2">
        <div className="logo flex justify-end gap-4">
          <img src={LogoImage} alt="logo" />
        </div>
        <div className="text-section">
          <div className="flex justify-end mb-9">
            <img src={Quotes} alt="quotes" />
          </div>
          <p className="text-center">
            <q>أنجز كل شيء بسهولة مع تومو!</q>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
