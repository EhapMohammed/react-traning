import Card from 'react-bootstrap/Card';
import '../App.css';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import EditModal from '../edit-modal/EditModal';



function User_card() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [, setAdd] = useState([]);
  const handleShow = () => {
    setShow(true);
      const title = document.getElementById('cardTitel');
      const cardSubtitle = document.getElementById('cardSubtitle');
      const cardText = document.getElementById('cardText');
  
      let userName = document.getElementById('userName');
      let userTitle = document.getElementById('userTitle');
      let userText = document.getElementById('userText');
      if(userName !== "" && userTitle !== "" && userText !== ""){
        userName.value = title.textContent;
        userTitle.value = cardSubtitle.textContent ;
        userText.value = cardText.textContent
      }else{
        console.log('error')
      }
    
  
      // const cardsContainer = document.getElementById('cardsContainer');
      // cardsContainer.append()
      setAdd(userName,userTitle,userText);
      handleClose();
    };

 
  return (
    <>

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <div onClick={handleShow} className="dropdown-item mouse-pointer d-flex align-items-center gap-1 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.16667 15.7404H5.34517L13.1066 7.97902L11.9281 6.80051L4.16667 14.5619V15.7404ZM17.5 17.4071H2.5V13.8716L13.6958 2.67572C14.0213 2.35028 14.5489 2.35028 14.8743 2.67572L17.2314 5.03274C17.5568 5.35818 17.5568 5.88581 17.2314 6.21126L7.7022 15.7404H17.5V17.4071ZM13.1066 5.622L14.2851 6.80051L15.4636 5.622L14.2851 4.44349L13.1066 5.622Z" fill="#090A22"></path>
                  </svg>
                  <span>تعديل</span>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Card.Title id="cardTitel">User Name</Card.Title>
          <Card.Subtitle id="cardSubtitle" className="mb-2 text-muted">This IS Subtitle</Card.Subtitle>
          <Card.Text id="cardText">This Long Descrption</Card.Text>
          {/* <Card.Link className='btn btn-primary' href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
      <EditModal handleClose={handleClose} show={show} handleShow={handleShow} />
    </>

  );
}

export default User_card;