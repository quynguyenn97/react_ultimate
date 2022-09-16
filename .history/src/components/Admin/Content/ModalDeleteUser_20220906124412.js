import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDeleteUser = () => {
    const { show, setShow } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are your sure to delete this user. email ={" "}
                    <b>abc@gmail.com</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDeleteUser;