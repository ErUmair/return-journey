import React, { useState, useEffect } from 'react';
import Registration from './Registration';
import { Modal, Button } from "react-bootstrap";
import Timer from './Timer';

const GreenLightRedLight = () => {
  const [color, setColor] = useState('red');
  const [gameStarted, setGameStarted] = useState(false);
  const [show, setShow] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [formData, setFormData] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentTime, setCurrentTime] = useState({
    minutes: 0,
    seconds: 0,
  });

  // const getRandomInterval = (min, max) => {
  //   return Math.random() * (max - min + 1) + min;
  // };

  useEffect(() => {
    let interval;
    let finished = true;
    if (formData) finished = false;

    if (!finished) {
      interval = setInterval(() => {
        setCurrentTime({
          ...currentTime,
          seconds: currentTime.seconds++,
        });

        setColor(prevColor =>
          prevColor === 'red' ? 'green' : 'red'
        );

        if (currentTime.seconds >= 40) clearInterval(interval);
      }, 1000);
    } else {
      clearInterval(interval);
    }



    return () => clearInterval(interval);
  }, [formData]);

  const handleClick = () => {
    if (!gameOver) {
      if (color === 'green') {
        setClicks((click) => click + 1)
      } else {
        setCurrentTime({
          ...currentTime,
          seconds: 40,
        });
        // endGame(false);
        // check score
      }
    }
  };

  const sendDataToParent = (formValue) => { // the callback. Use a better name
    setFormData(formValue);
  };

  return (
    <>
      {gameStarted ? <>
        <div className='m-5 d-flex justify-content-center align-items-center'>
          <span className='colorBox' onClick={handleClick} style={{ background: `${color}` }}>
          </span>
        </div>
        <div className='d-flex justify-content-around'>
          <div><p className='text-center fs-3 fw-bolder'>Level:{formData.levels}</p>
            <p className='text-center fs-3 fw-bolder'>Target:</p></div>
          <div><p className='text-center fs-3 fw-bolder'>Score: {clicks}</p>
            <div className='text-center fs-3 fw-bolder'>Time Left: <Timer /></div></div>
        </div>
      </>
        : <>
          <div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <p className='my-5 fw-bold' style={{ fontFamily: 'cursive', fontSize: '40px' }}>Welcome to <span style={{ color: 'green' }}>Green</span> Light <span style={{ color: 'red' }}>Red</span> Light Game </p>
            <p className='fw-bolder'>Click on below Play button to register to play game and Enjoy! 😉</p>
            <Button variant="primary" onClick={handleShow} className='mt-5'>
              Play Game
            </Button>
          </div>
          <Modal
            show={show} onHide={handleClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='mb-5'
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                Register Here !
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-0'>
              <Registration setGameStarted={setGameStarted} setColor={setColor} sendDataToParent={sendDataToParent} />

            </Modal.Body>
          </Modal>
        </>}
    </>
  )
}
export default GreenLightRedLight