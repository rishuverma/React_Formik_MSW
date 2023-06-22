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
    .oneOf([yup.ref("passwordInput"), undefined], "Passwords must match")
    .required("Required"),
  field1Input: yup
    .number()
    .min(1, "field1 must be more than 1")
    .max(3500, "field1 must be less than or equal to 3500"),
  field2Input: yup
    .number()
    .min(1, "field2 must be more than or equal to 1")
    .max(yup.ref("field1Input"), " field2 must be lesser than field1"),
  field3Input: yup
    .number()
    .min(1, "field3 must be more than or equal to 1")
    .max(yup.ref("field2Input"), " field3 must be lesser than field2"),
});
