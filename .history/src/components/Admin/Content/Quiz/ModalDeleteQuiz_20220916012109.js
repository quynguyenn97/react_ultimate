import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../services/apiServices";
import { toast } from "react-toastify";
const ModalDeleteQuiz = (props) => {
    const { show, setShow } = props;
    return (
        <>
            <Modal show={show} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are your sure to delete this quiz</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Cancle</Button>
                    <Button variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalDeleteQuiz;
