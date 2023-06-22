import { useFormik } from "formik";
import { basicSchema } from "../schemas/yupSchema";
import axios from "axios";
const getUsers = async () => {
  const response = await axios.get("http://localhost:5173/users");
  console.log("axios", response.data);
};
const onSubmit = (values: any, actions: any) => {
  console.log(values, "\n", actions);
  actions.resetForm();
};
const FormComponent = () => {
  getUsers();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailInput: "",
      ageInput: "",
      passwordInput: "",
      confirmPasswordInput: "",
      field1Input: "",
      field2Input: "",
      field3Input: "",
    },
    onSubmit,
    validationSchema: basicSchema,
  });
  console.log("error", formik.errors, "touched: ", formik.touched);
  return (
    <>
      <div className="container mt-4">
        <h2>Formik Form!</h2>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName" className="m-2">
              First Name
            </label>
            <input
              type="text"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              id="firstName"
              placeholder="First Name"
            />
            {formik.touched.firstName ? (
              formik.errors.firstName && formik.touched.firstName ? (
                <div className="invalid-feedback d-block">
                  {formik.errors.firstName}
                </div>
              ) : (
                <div className="valid-feedback d-block">looks good</div>
              )
            ) : null}
          </div>

          <div className="form-group mt-3">
            <label htmlFor="lastName" className="m-2">
              Last Name
            </label>
            <input
              type="text"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              id="lastName"
              placeholder="Last Name"
            />
            {formik.touched.lastName ? (
              formik.errors.lastName && formik.touched.lastName ? (
                <div className="invalid-feedback d-block">
                  {formik.errors.lastName}
                </div>
              ) : (
                <div className="valid-feedback d-block">looks good</div>
              )
            ) : null}
          </div>

          <div className="form-group mt-3">
            <label htmlFor="emailInput" className="m-2">
              Email
            </label>
            <input
              type="email"
              value={formik.values.emailInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              id="emailInput"
              placeholder="Enter Email"
            />
            {formik.touched.emailInput ? (
              formik.errors.emailInput && formik.touched.emailInput ? (
                <div className="invalid-feedback d-block">
                  {formik.errors.emailInput}
                </div>
              ) : (
                <div className="valid-feedback d-block">looks good</div>
              )
            ) : null}
          </div>

          <div className="form-group mt-3">
            <label htmlFor="ageInput" className="m-2">
              Age
            </label>
            <input
              type="number"
              value={formik.values.ageInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              id="ageInput"
              placeholder="Age"
            />
            {formik.touched.ageInput ? (
              formik.errors.ageInput && formik.touched.ageInput ? (
                <div className="invalid-feedback d-block">
                  {formik.errors.ageInput}
                </div>
              ) : (
                <div className="valid-feedback d-block">looks good</div>
              )
            ) : null}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="passwordInput" className="m-2">
              Password
            </label>
            <input
              type="password"
              value={formik.values.passwordInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              id="passwordInput"
              placeholder="Password"
            />
            {formik.touched.passwordInput ? (
              formik.errors.passwordInput && formik.touched.passwordInput ? (
                <div className="invalid-feedback d-block">
                  {formik.errors.passwordInput}
                </div>
              ) : (
                <div className="valid-feedback d-block">looks good</div>
              )
            ) : null}
          </div>

          <div className="form-group mt-3">
            <label htmlFor="confirmPasswordInput" className="m-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={formik.values.confirmPasswordInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              id="confirmPasswordInput"
              placeholder="Confirm Password"
            />
            {formik.touched.confirmPasswordInput ? (
              formik.errors.confirmPasswordInput &&
              formik.touched.confirmPasswordInput ? (
                <div className="invalid-feedback d-block">
                  {formik.errors.confirmPasswordInput}
                </div>
              ) : (
                <div className="valid-feedback d-block">looks good</div>
              )
            ) : null}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="field1Input" className="m-2">
              Field 1
            </label>
            <input
              type="number"
              value={formik.values.field1Input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              id="field1Input"
              placeholder="field1"
            />
            {formik.touched.field1Input ? (
              formik.errors.field1Input && formik.touched.field1Input ? (
                <div className="invalid-feedback d-block">
                  {formik.errors.field1Input}
                </div>
              ) : (
                <div className="valid-feedback d-block">looks good</div>
              )
            ) : null}
          </div>

          <div className="form-group mt-3">
            <label htmlFor="field2Input" className="m-2">
              field2
            </label>
            <input
              type="number"
              value={formik.values.field2Input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              id="field2Input"
              placeholder="field2"
            />
            {formik.touched.field2Input ? (
              formik.errors.field2Input && formik.touched.field2Input ? (
                <div className="invalid-feedback d-block">
                  {formik.errors.field2Input}
                </div>
              ) : (
                <div className="valid-feedback d-block">looks good</div>
              )
            ) : null}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="field3Input" className="m-2">
              field3
            </label>
            <input
              type="number"
              value={formik.values.field3Input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
              id="field3Input"
              placeholder="field3"
            />
            {formik.touched.field3Input ? (
              formik.errors.field3Input && formik.touched.field3Input ? (
                <div className="invalid-feedback d-block">
                  {formik.errors.field3Input}
                </div>
              ) : (
                <div className="valid-feedback d-block">looks good</div>
              )
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormComponent;
