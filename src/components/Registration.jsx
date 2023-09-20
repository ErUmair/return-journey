import React from 'react';
import { Col, Button, Row, Card, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { registerSchema } from '../schemas';
import { registerUser } from '../store/_actions/userActions';
import { useDispatch } from 'react-redux';

const initialValues = {
  name: "",
  email: "",
  mobNumber: "",
  levels: ""
};
const Registration = ({ setGameStarted, sendDataToParent }) => {

  const dispatch = useDispatch();

  const saveDatatoLocalStorage = (formData) => {
    dispatch(registerUser(formData))
  };


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      saveDatatoLocalStorage(values);
      setGameStarted(true);
      sendDataToParent(values);

    },
  });
  const levels = ['Easy', 'Medium', 'Hard'];
  const levelsOptions = levels.map((level, key) => (
    <option value={level} key={key}>
      {level}
    </option>
  ));

  return (
    <>

      <Row className="m-3 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12} className='mb-2 w-100'>
          <Card className="px-4">
            <Card.Body>
              <div className="mt-md-3">
                <div className="mb-3">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                      <Form.Label className="" htmlFor='name'>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        autoComplete='off'
                        name='name'
                        id='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                      {errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>) : null}
                    </Form.Group>
                    <Form.Group className="mb-3" >
                      <Form.Label className="" htmlFor='email'>
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        autoComplete='off'
                        name='email'
                        id='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                      {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}
                    </Form.Group>
                    <Form.Group className="mb-3" >
                      <Form.Label className="" htmlFor='mobNumber'>
                        Mobile Number
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Mobilr Number"
                        name='mobNumber'
                        id='mobNumber'
                        value={values.mobNumber}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                      {errors.mobNumber && touched.mobNumber ? (<p className='form-error'>{errors.mobNumber}</p>) : null}
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                    >
                      <Form.Label htmlFor='levels'>Select Difficulty Levels</Form.Label>
                      <Form.Control
                        as='select'
                        name='levels'
                        id='levels'
                        value={values.levels}
                        onChange={handleChange}
                        onBlur={handleBlur}>
                        <option value="">Select Difficulty Levels</option>
                        {levelsOptions}
                      </Form.Control>
                      {errors.levels && touched.levels ? (<p className='form-error'>{errors.levels}</p>) : null}
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                    ></Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit" >
                        Start Game
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Registration