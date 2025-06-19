import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

const ViewMore = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState('');

  const handleImageClick = (src) => {
    setActiveImage(src);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const images = [
    'https://via.placeholder.com/300x200?text=Image+1',
    'https://via.placeholder.com/300x200?text=Image+2',
    'https://via.placeholder.com/300x200?text=Image+3',
    'https://via.placeholder.com/300x200?text=Image+4',
    'https://via.placeholder.com/300x200?text=Image+5',
    'https://via.placeholder.com/300x200?text=Image+6',
  ];

  return (
    <div className="p-4">
      <Container className="border p-4 rounded bg-light shadow-sm">
        <h4 className="text-center mb-4">View More Images</h4>
        <Row className="g-4 justify-content-center">
          {images.map((src, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <div
                className="image-box border rounded p-2 shadow-sm"
                style={{ cursor: 'pointer', background: '#fff' }}
                onClick={() => handleImageClick(src)}
              >
                <Image src={src} rounded fluid />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for larger image view */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body className="text-center">
          <Image src={activeImage} fluid rounded />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ViewMore;
