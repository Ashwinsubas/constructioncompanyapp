import Form from "react-bootstrap/Form";
import { Button, FloatingLabel } from "react-bootstrap";
import login from '../assets/img/login.avif'

const Login = () => {
  return (
    <>
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container card p-4 my-3">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img style={{width:'25rem'}} className="img-fluid" src={login} alt="login image" />
          </div>
          <div className="col-lg-6 ">
            <h1>
              {" "}
               <i className="fa-solid fa-house-chimney"></i>   Prism Builders
            </h1>
            <h5>Sign in to your acoount</h5>
            <Form>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Username" />
                </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Password"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </Form>

              <div className="text-center">
                <Button>Login</Button>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )}

export default Login;
