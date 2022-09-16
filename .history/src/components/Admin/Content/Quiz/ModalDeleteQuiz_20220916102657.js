import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteQuizForAdmin } from "../../../services/apiServices";

const ModalDeleteQuiz = (props) => {
    const { show, setShow } = props;
    const handleClose = () => setShow(false);
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are your sure to delete this quiz</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalDeleteQuiz;