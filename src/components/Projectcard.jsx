import React from 'react'
import { Button, Card } from 'react-bootstrap'
const Projectcard = () => {
  return (
    <div>
      <Card className="homecard" style={{ width: '18rem' }}>
      <Card.Img className='m-2' style={{ width: "17rem", height: "12rem" }} variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/033/504/400/small_2x/home-with-ai-generated-free-png.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-center align-items-center"><Button className="text-center bg-info" variant="primary">View Details</Button></div>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Projectcard