import * as Yup from "yup";

export const SigninSchema = Yup.object().shape({
  password: Yup.string()
    .min(9, "Password must be more than 8 characters")
    .max(50, "Too Long!")
    .required("Please enter the password"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter the email")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      "Invalid email format"
    ),
});
