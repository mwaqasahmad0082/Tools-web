import React, { useState } from "react";
import { Alert, AlertHeading, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './alert.css'


const alert = () => {
  const [show, setshow] = useState(true);
  const [open,setopen] = useState(true);
  return (
    <div>
      <Container className="">
        <Card>
          <Alert className="con"
            show={show}
            variant="primary"
            dismissible
            onClick={() => {
              setshow(false);
            }}
          >
            <AlertHeading>heading</AlertHeading>
            <p>this is alert Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error aut architecto alias minus nisi?</p>
            <div>this is a div</div>
          </Alert>
          <button
          className="click"
          onClick={() => {
            setshow(true);
            
          }}
        >
          open
        </button>
        </Card>
      </Container>
      {
        
      }
    </div>
  );
};

export default alert;
