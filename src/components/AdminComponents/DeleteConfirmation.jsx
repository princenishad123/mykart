import React, { useState } from "react";
import { Button, Modal } from "keep-react";
import { CloudArrowUp, Trash } from "phosphor-react";
import services from "../../firebase/service";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";

const DeleteConfirmation = ({ id }) => {
  const [showErrorModalX, setShowErrorModalX] = useState(false);

  const onClickErrorModal = () => {
    setShowErrorModalX(!showErrorModalX);
  };

  const deleteDoc = () => {
    services.deleteDoc(id).then((res) => {
      onClickErrorModal();
      toast.success("Product Delete");
    });
  };

  return (
    <>
      <ToastContainer />
      <Button
        className="w-8 h-8 bg-red-100 text-red-500"
        onClick={onClickErrorModal}
      >
        <AiOutlineDelete />
      </Button>

      <Modal
        icon={<Trash size={28} color="#E92215" />}
        size="md"
        show={showErrorModalX}
        onClose={onClickErrorModal}
      >
        <Modal.Header>Do you want to delete this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">{id}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickErrorModal}>
            Cancel
          </Button>
          <Button type="primary" color="error" onClick={deleteDoc}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteConfirmation;
