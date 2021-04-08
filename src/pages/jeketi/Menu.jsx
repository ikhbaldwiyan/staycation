import React from 'react'
import { Row, Col, Button } from 'reactstrap';

export default function Menu({setMenu}) {

  return (
    <Row>
      <Col>
        <Button
          color="primary"
          className="mb-2 mr-2"
          onClick={() => setMenu('room')}
        >
          Room List
        </Button>
        <Button
          color="primary"
          className="mb-2"
          onClick={() => setMenu('chat')}
        >
          Live Chat
        </Button>
      </Col>
    </Row>
  )
}
