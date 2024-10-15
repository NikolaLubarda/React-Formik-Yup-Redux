import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerUserAction } from "../Store/userSlice";
import { FileParser } from "../Utilis/fileParser";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const VALID_TYPE = ["image/png", "image/jpg", "image/jpeg"];
  const KB = 1024;
  const MB = KB * 1024;

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      email: "",
      password: "",
      image: "",
      birthData: "",
    },
    // validationSchema: Yup.object({
    //   firstname: Yup.string().required("You must enter name"),
    //   lastname: Yup.string().required("You must enter surname"),
    //   gender: Yup.string().required("You must choose gender"),
    //   email: Yup.string().required("You must enter your email"),
    //   password: Yup.string().required("You must enter password"),
    //   birthData: Yup.string().required("You must enter your birth date"),
    //   image: Yup.mixed()
    //     .required("You must pick an image")
    //     .test("fileType", "Wrong type image", (value) =>
    //       VALID_TYPE.includes(value.type)
    //     )
    //     .test("fileSize", "Wrong file size", (value) => value.size < 2 * MB),
    // }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      FileParser(values.image)
        .then((res) => {
          dispatch(registerUserAction({ ...values, image: res }));
        })
        .catch((err) => console.log(err));
      console.log(values);

      setSubmitting(false);
      resetForm();
    },
  });

  const showError = (name) => {
    return formik.errors[name] && formik.touched[name]
      ? formik.errors[name]
      : null;
  };

  return (
    <div className="container mx-auto">
      <h2>RegisterPage</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="w-[50%] border border-blue-500 mx-auto rounded-lg p-[15px] flex flex-col"
      >
        <label htmlFor="firstname" className="text-[14px]">
          FirstName
          <span className="text-[13px] text-red-400">
            {showError("firstname")}
          </span>
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Insert name"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          className="px-[12px] py-[6px] border-rounded-lg"
        />

        <label htmlFor="lastname" className="text-[14px]">
          LastName
          <span className="text-[13px] text-red-400">
            {showError("lastname")}
          </span>
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Insert last name"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          className="px-[12px] py-[6px] border-rounded-lg"
        />

        <label htmlFor="gender" className="text-[14px]">
          Gender
          <span className="text-[13px] text-red-400">
            {showError("gender")}
          </span>
        </label>
        <select
          id="gender"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          className="px-[12px] py-[6px] border-rounded-lg"
        >
          <option disabled={true} value="">
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="email" className="text-[14px]">
          Email
          <span className="text-[13px] text-red-400">{showError("email")}</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Insert email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="px-[12px] py-[6px] border-rounded-lg"
        />

        <label htmlFor="password" className="text-[14px]">
          Password
          <span className="text-[13px] text-red-400">
            {showError("password")}
          </span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Insert password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="px-[12px] py-[6px] border-rounded-lg"
        />

        <label htmlFor="image" className="text-[14px]">
          Image
          <span className="text-[13px] text-red-400">{showError("image")}</span>
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={(event) => {
            formik.setFieldValue("image", event.currentTarget.files[0]);
          }}
          className="px-[12px] py-[6px] border-rounded-lg"
        />

        <label htmlFor="birthData" className="text-[14px]">
          BirthData
          <span className="text-[13px] text-red-400">
            {showError("birthData")}
          </span>
        </label>
        <input
          type="date"
          id="birthData"
          name="birthData"
          value={formik.values.birthData}
          onChange={formik.handleChange}
          className="px-[12px] py-[6px] border-rounded-lg"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-[6px] px-[12px] rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
