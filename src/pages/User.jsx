import React from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ViewMore from './ViewMore';

const User = () => {
  return (
    <>
    <Header/>
  <div>
  <h2 className="text-center p-4">View Work Details</h2>
  
  <div className="d-flex justify-content-around flex-wrap" style={{ gap: '1rem' }}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Today Work</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <Link className="text-danger" to={"/ViewMore"}>View More</Link>
        </Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Date Wise Work</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <Link className="text-danger" to={"/ViewMore"}>View More</Link>
        </Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Main Works</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <Link className="text-danger" to={"/ViewMore"}>View More</Link>
        </Button>
      </Card.Body>
    </Card>
  </div>
</div>


  
    </>
  )
}

export default User