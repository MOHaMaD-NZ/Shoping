import "./CSS/LoginSignUp/loginsignup.css";



const LoginSinup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="نام و نام خانوادگی" />
          <input type="email" placeholder="ایمیل" name="" id="" />
          <input type="password" placeholder="رمز" name="" id="" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          می خوای به جمع ما بپیوندی؟<span>Login</span>

        </p>
        <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSinup;
