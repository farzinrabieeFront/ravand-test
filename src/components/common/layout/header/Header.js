import React, { useEffect, useState } from "react";
import Style from "./Header.module.css";
import { PersonCircle, Search } from "react-bootstrap-icons";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionLists } from "../../../../redux/lists/actionLists";
const Header = () => {
  ////////////////////////////////////////////////////////////////////states
  const data = useSelector((state) => state.listsState);
  const [state, setState] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  ////////////////////////////////////////////////////////////////////hooks
  const dispatch = useDispatch();
  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      const auth = JSON.parse(sessionStorage.getItem("auth"));
      console.log("auth", auth);
      setState(auth[0]);
    }
  }, []);

  ////////////////////////////////////////////////////////////////////functions
  const handleClick = () => {
    setShowSearch(!showSearch);
  };
  const handleChangeSearch = (value) => {
    setSearch(value);
  };
  const handleSubmitSearch = () => {
    dispatch(actionLists(search));
  };
  return (
    <>
      <header className={`${Style.header} shadow`}>
        <Container className="h-100">
          <div className="w-100 h-100 d-flex justify-content-between align-items-center position-relative ">
            <div>
              <span className="me-3">{data?.lists?.length}</span>
              <Search
                size={20}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
                className={showSearch ? "text-success" : ""}
              />
              <div
                className={`${Style.searchInput} px-3 shadow ${
                  showSearch ? Style.searchInputActive : ""
                }`}
              >
                {" "}
                <Form.Group
                  className="mb-3 d-flex "
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className={Style.input}
                    type="email"
                    placeholder={"userID?"}
                    onChange={(e) => handleChangeSearch(e.target.value)}
                  />

                  <div
                    className="py-3 px-1 justify-content-center text-dark   rounded-3 d-flex align-items-center"
                    style={{ height: "36px", cursor: "pointer" }}
                    onClick={handleSubmitSearch}
                  >
                    <Search />
                  </div>
                </Form.Group>
              </div>
            </div>
            <div className="d-flex align-items-center h-100 ">
              <span className="me-3">{state?.name}</span>
              <PersonCircle size={20} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
