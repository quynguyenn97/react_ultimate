import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../services/apiServices";
import { toast } from "react-toastify";
const ModalDeleteQuiz = (props) => {
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are your sure to delete this user. email ={" "}
                    <b>
                        {dataDelete && dataDelete.email ? dataDelete.email : ""}
                    </b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleSubmitDeleteUser();
                        }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalDeleteQuiz;