import React, { useState } from "react";
//npm install reactstrap --legacy-peer-deps
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Collapse
} from "reactstrap";

export default function ReactstrapDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ margin: "20px" }}>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Reactstrap Example</CardTitle>
          <CardText>
            This is a simple card using Reactstrap components.
          </CardText>
          <Button color="primary" onClick={toggle}>
            Toggle Details
          </Button>
          <Collapse isOpen={isOpen}>
            <CardText className="mt-3">
              Here are some extra details revealed when you click the button!
            </CardText>
          </Collapse>
        </CardBody>
      </Card>
    </div>
  );
}
