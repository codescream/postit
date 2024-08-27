import { TextField, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { Footer } from "../components";
import { signin } from "../../redux/reducers/auth";
import { useNavigate } from "react-router-dom";
import { useAuthenticateMutation } from "../../services/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    recaptchaValue: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [authenticate, result] = useAuthenticateMutation();

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [values, setValues] = useState({
  //   amount: "",
  //   password: "",
  //   weight: "",
  //   weightRange: "",
  //   showPassword: false,
  // });

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    // Your form submission logic here;
    // dispatch(signin({ ...formData, recaptchaValue: recaptchaValue }))
    //   .then((res) => {
    //     console.log(res);
    //     console.log("Form submitted");
    //     console.log(res);
    //     localStorage.setItem("userData", JSON.stringify(res.payload));
    //     navigate("/myparcels");
    //   })
    //   .catch((err) => console.log(err));
    authenticate({ ...formData, recaptchaValue: recaptchaValue })
      .unwrap()
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res));
        navigate("/myparcels");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col justify-between h-screen text-white">
      <div className="flex flex-1">
        <div className="w-1/2 flex items-center justify-end">
          <div className="h-fit">
            <img
              src="/imgs/brand.png"
              alt="brand"
              className="w-[250px] md:w-[400px]"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-3/4 gap-6 md:w-1/2 bg-orange-400 p-4 py-20 rounded-md"
          >
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              type="email"
              size="small"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <TextField
              label="Password"
              name="password"
              value={formData.password}
              type={showPassword ? "text" : "password"}
              size="small"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((prev) => !prev)}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <div
              className="flex lg:justify-end"
              data-theme="light"
              data-sitekey={siteKey}
            >
              <ReCAPTCHA
                sitekey={siteKey}
                onChange={handleRecaptchaChange}
                size="compact"
                theme="dark"
              />
            </div>

            <Button
              endIcon={<IoMdLogIn />}
              type="submit"
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                  borderColor: "black",
                },
              }}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
