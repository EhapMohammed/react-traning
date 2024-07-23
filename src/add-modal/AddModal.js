import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import React from 'react'




const EditModal = ({handleClose,show}) => {

    const [, setAdd] = useState([]);
    function handelEdit(){
      const title = document.getElementById('cardTitel');
      const cardSubtitle = document.getElementById('cardSubtitle');
      const cardText = document.getElementById('cardText');
  
      let userName = document.getElementById('userName').value;
      let userTitle = document.getElementById('userTitle').value;
      let userText = document.getElementById('userText').value;
      if(userName !== "" && userTitle !== "" && userText !== ""){
        title.innerHTML = userName;
        cardSubtitle.innerHTML = userTitle;
        cardText.innerHTML = userText;
      }else{
        console.log('error')
      }
    
  
      const cardsContainer = document.getElementById('cardsContainer');
      cardsContainer.append()
      setAdd(title,cardSubtitle,cardText);
      handleClose();
    };
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>user name</Form.Label>
                        <Form.Control id="userName" type="text" placeholder="type a name" autoFocus />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>user title</Form.Label>
                        <Form.Control id="userTitle" type="text" placeholder="add your title" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>user description</Form.Label>
                        <Form.Control id="userText" as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handelEdit} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal;