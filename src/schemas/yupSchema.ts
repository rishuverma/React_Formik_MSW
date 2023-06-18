import * as yup from "Yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "first name must be atleast 3 characters")
    .required("First name is required"),
  lastName: yup.string(),
  emailInput: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  ageInput: yup.number().positive().integer().min(12).required("Required"),
  passwordInput: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPasswordInput: yup
    .string()
    .oneOf([yup.ref("passwordInput")], "Passwords must match")
    .required("Required"),
});
