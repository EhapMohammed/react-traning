import UserCard from '../user-card/UserCard';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import AddModal from '../add-modal/AddModal';


import '../App.css';

function Content() {

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
    
  }
  const handleClose = () => setShow(false);
  

  
  return (
    <>
    <Row className="main-content p-5" id="cardsContainer">
      <Button variant="primary" onClick={handleShow}>add user</Button>
      <div className='col-12'> 
      <UserCard />
      </div>
    </Row>
    <AddModal handleClose={handleClose} show={show} handleShow={handleShow}/>
    </>
  );
}

export default Content;
