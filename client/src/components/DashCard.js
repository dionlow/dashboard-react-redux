import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const dashCard = (props) => {

    return (
        <Col>
         <Card style={{ width: '100%' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>          
        </Col>       
    )
}

export default dashCard