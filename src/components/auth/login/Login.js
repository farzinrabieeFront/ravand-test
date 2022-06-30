import React from "react";
import { Formik, Form, FastField } from "formik";
import { Col } from "react-bootstrap";
import InputElement from "../../inputs/InputElement";
import Styles from "./Login.module.css";
import * as yup from "yup";
import Toastify from "../../../utils/tostify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (vals) => {
    if (vals.email && vals.password && vals.name) {
      Toastify.success("با موفقیت وارد شدید");
      sessionStorage.setItem(
        "auth",
        JSON.stringify([{ user: vals.email, name: vals.name }])
      );
      navigate("/");
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
        }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .required("این فیلد الزامی است.")
            .email("ایمیل وارد شده معتبر نیست"),
          password: yup.string().required(`این فیلد الزامی است.`),
          name: yup.string().required(`این فیلد الزامی است.`),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <div
            className="d-flex align-items-center justify-content-center
          "
          >
            <div
              className={`${Styles.box} p-2 row d-flex align-items-center justify-content-center shadow  `}
            >
              <h2>login</h2>
              <Col xs={12} className="mb-4">
                <FastField
                  as={InputElement}
                  type="text"
                  name="name"
                  label="name"
                />
              </Col>
              <Col xs={12} className="mb-4">
                <FastField
                  as={InputElement}
                  type="email"
                  name="email"
                  label="email"
                />
              </Col>

              <Col xs={12} className="mb-4">
                <FastField
                  as={InputElement}
                  type="password"
                  name="password"
                  label="password"
                />
              </Col>

              <Col
                xs={12}
                className="d-flex justify-content-center align-items-center"
              >
                <button
                  // disabled={!(isValid && dirty)}
                  type="submit"
                  className="btn mb-3 btn-success justify-content-center w-75 d-flex align-items-center"
                >
                  ورود
                </button>
              </Col>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
