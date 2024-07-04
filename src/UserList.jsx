import React, { useState, useEffect } from "react";
import "./UserList.css";
import axios from "axios";
import ErrorPage from "./ErroPage";
import { Card, Col, Container, ListGroup, Row, Spinner, Image } from "react-bootstrap";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const startIndex = 9;

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
        .then(response => {
            setUsers(response.data);
            setLoading(false);
        })
        .catch(error => {
            setError(<ErrorPage/>);
            setLoading(false);
        });
  }, []);

const handleUserClick = (user) => {
    setSelectedUser(user);
};

  if (loading) {
    return (
      <Spinner
        animation="border"
        role="status"
        className=" text-white d-block mx-auto"
        style={{ marginTop: "250px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
   <>
    <Container fluid className="py-lg-4 py-3 user-list">
      <Row>
        <p className="text-light fs-5">
            <span> Please select a user from list to see details </span>
            <i className="fa-solid fa-chevron-right fs-6"></i>
            <i className="fa-solid fa-chevron-right fs-6"></i>
        </p> 
        <Col xl={3} md={5}>
          <Card className=" border-0 mb-3" >
            <Card.Body className="shadow p-0">
              <Card.Title className="bg-dark text-light border-0 p-3 d-flex justify-content-start">
                <span>All Users</span> 
                </Card.Title>
              <ListGroup>
                {users.slice(startIndex).map(function (user, index) {
                  return (
                    <ListGroup.Item
                      className="border-0 list-items"
                      key={index}
                      onClick={() => handleUserClick(user)}
                    >
                      <Image
                        src={user.avatar}
                        roundedCircle
                        onClick={({ e }) => alert(e)}
                        width={40}
                        height={40}
                        className="me-xl-2 me-1"
                      />
                      <span>
                        &nbsp; {user.profile.firstName}&nbsp;
                        {user.profile.lastName}
                      </span>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9} md={7}>
          {selectedUser ? (
            <>
              <Card className="shadow border-0">
                <Card.Body className="p-0 ">
                  <div>
                    <div>
                      <Card.Title className="bg-dark text-light p-3 w-100">
                        @{selectedUser.profile.username}
                      </Card.Title>
                    </div>
                    <div className="d-sm-flex justify-content-start d-wrap p-lx-3 p-lg-2 p-1">
                      <div className="px-2">
                        <Image
                          src={selectedUser.avatar}
                          className="mb-3 shadow user-image"
                        />
                      </div>
                      <div className="px-lg-4 px-2">
                        <Card.Text>
                          <strong className="text-dark">
                            {selectedUser.profile.firstName}&nbsp;
                            {selectedUser.profile.lastName}
                          </strong>
                        </Card.Text>
                        <Card.Text className="pt-2">
                          {selectedUser.jobTitle}
                        </Card.Text>
                        <Card.Text>
                          <b> Bio :</b> {selectedUser.Bio}
                        </Card.Text>
                        <Card.Text>
                            <b>Email :</b> {selectedUser.profile.email}
                        </Card.Text>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </>
          ) : (
            <>
              <Card className="shadow border-0">
                <Card.Body className="p-0 ">
                  <div>
                    <div>
                      <Card.Title className="bg-dark text-light p-3 w-100">
                       @username
                      </Card.Title>
                    </div>
                    <div className="d-sm-flex justify-content-start d-wrap p-lx-3 p-lg-2 p-1">
                      <div className="px-2">
                      <Image
                          src="/user-logo.jpg"
                          className="mb-3 shadow user-image"
                        />
                      </div>
                      <div className="px-lg-4 px-2">
                        <Card.Text>
                          <strong className="text-dark">Full Name</strong>
                        </Card.Text>
                        <Card.Text className="pt-2">
                          Job Position
                        </Card.Text>
                        <Card.Text>
                          Bio : Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Ullam ex dolor culpa eius dicta
                          deleniti quae? Non veritatis culpa laborum aspernatur!
                        </Card.Text>
                        <Card.Text>
                            user@gmail.com
                        </Card.Text>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </>
          )}
        </Col>
      </Row>
    </Container>
   </>
  );
};

export default UserList;
