import React from "react";
import { FastField, Form, Formik } from "formik";
import Styles from "../auth/login/Login.module.css";
import { Button, Col, Row } from "react-bootstrap";
import InputElement from "../inputs/InputElement";
import { Modal } from "@mui/material";
import { actionUpdateList } from "../../redux/lists/actionUpdateList";
import { useDispatch } from "react-redux";

const ModalCustom = ({ handleClose, open, handleOpen, item }) => {
  const dispatch = useDispatch();
  const handleSubmit = (vals) => {
    let body = JSON.stringify(vals);
    dispatch(actionUpdateList(body));
    handleClose();
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="d-flex justify-content-center align-items-center"
      >
        <Formik
          initialValues={{
            userId: item?.userId,
            title: item?.title,
            body: item?.body,
            id: item?.id,
          }}
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
                <h3 className="mb-3">Edit</h3>
                <Col xs={12} className="mb-2">
                  <FastField
                    as={InputElement}
                    type="text"
                    name="userId"
                    label="userId"
                  />
                </Col>
                <Col xs={12} className="mb-2">
                  <FastField
                    as={InputElement}
                    type="text"
                    name="title"
                    label="title"
                  />
                </Col>

                <Col xs={12} className="mb-2">
                  <FastField
                    as={InputElement}
                    textarea
                    name="body"
                    label="description"
                    rows={5}
                  />
                </Col>

                <Row>
                  <Col
                    xs={3}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Button
                      // disabled={!(isValid && dirty)}
                      type="submit"
                      className="btn w-100 justify-content-center mb-3 btn-success  w-75 d-flex align-items-center"
                    >
                      edit
                    </Button>
                  </Col>
                  <Col xs={3} className="d-flex  align-items-center">
                    <Button
                      // disabled={!(isValid && dirty)}
                      onClick={handleClose}
                      type="submit"
                      className="btn w-100 mb-3 btn-danger justify-content-center w-75 d-flex align-items-center"
                    >
                      cansel
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default ModalCustom;
