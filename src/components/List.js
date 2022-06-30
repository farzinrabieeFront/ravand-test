import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionLists } from "../redux/lists/actionLists";
import { Button, Card, Col, Row } from "react-bootstrap";
import Style from "./List.module.css";
import { CircularProgress, Pagination } from "@mui/material";
import ModalCustom from "./modal/ModalCustom";
const List = () => {
  /////////////////////////////////////////////////////////////////////////////////states
  const data = useSelector((state) => state.listsState);
  const [page, setPage] = useState(1);
  const [sliceState, setSliceState] = useState(10);
  const [item, setItem] = useState("");
  const [open, setOpen] = React.useState(false);
  /////////////////////////////////////////////////////////////////////////////////hooks
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionLists());
  }, []);
  useEffect(() => {
    setSliceState(page * 10);
  }, [page]);
  /////////////////////////////////////////////////////////////////////////////////functions

  const handleOpen = (itm) => {
    setOpen(true);
    setItem(itm);
  };
  const handleClose = () => setOpen(false);
  const handleChangePagination = (event, value) => {
    setPage(value);
  };

  return (
    <>
      {data.loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Row className="justify-content-start mb-4">
            {data.lists.length > 0
              ? data.lists
                  .map((itm, ind) => (
                    <Col
                      xs={12}
                      md={6}
                      lg={3}
                      key={ind}
                      className="mb-3 d-flex justify-content-center"
                    >
                      <Card className={`${Style.card} shadow`}>
                        <div className={Style.cardImg}>
                          <Card.Img
                            variant="top"
                            src={"/assset/images/pic.jpg"}
                          />
                        </div>

                        <Card.Body>
                          <Card.Title>
                            <div>userID : {itm.userId}</div>
                            <div className={Style.ellipsis}> {itm.title}</div>
                          </Card.Title>
                          <Card.Text>
                            <div className={Style.ellipsis2}>{itm.body}</div>
                          </Card.Text>
                          <Button
                            className="btn-success"
                            onClick={() => handleOpen(itm)}
                          >
                            details & edit
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                  .slice(sliceState - 10, sliceState)
              : null}
          </Row>
          <Row>
            <Col className="d-flex justify-content-center" xs={12}>
              {data?.lists?.length > 10 && (
                <Pagination
                  count={Math.floor(data?.lists?.length / 10)}
                  page={page}
                  onChange={handleChangePagination}
                />
              )}
            </Col>
          </Row>

          <ModalCustom
            item={item}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </div>
      )}
    </>
  );
};

export default List;
