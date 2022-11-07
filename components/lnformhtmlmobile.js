import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LegalNoticeHtml from './legalNoticeHtml';
import styles from '../styles/legalnotice.module.css'

export default function Lnformhtmlmobile({  ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="success" onClick={handleShow} className={styles.showformbtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-chevron-double-up" viewBox="0 0 16 16">
        <path d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
        <path d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
        </svg>
        &emsp;&emsp; Show Form &emsp;&emsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-chevron-double-up" viewBox="0 0 16 16">
        <path d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
        <path d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
        </svg>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='bottom' className={styles.mobileform}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Legal Notice Letter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.mobileformbody}>
          <LegalNoticeHtml {...props}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}