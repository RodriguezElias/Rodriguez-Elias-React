import { useLoginContext } from "../../context/loginContext";
import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import ModalOrder from "../../modals/ModalOrder";

export default function Login() {
  const [modalShow, setModalShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { user, loguearse, desloguearse } = useLoginContext();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    loguearse(formData.email, formData.password);
    setModalShow(true);

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setAlertShow(true)
    }
    // setFormData({
    //   email: "",
    //   password: "",
    // });
    // e.target.reset();
    // if (!user) {
    //   setAlertShow(true)
    // }
  };
  const handleOnChange = (e) => {
    setAlertShow(false)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {user && (
        <div className="cart-empty">
          <p>Esta logueado</p>
          <button onClick={desloguearse}>desloguearse</button>

          <ModalOrder
            message={
              "Se inicio sesion correctamente, puede realizar tareas de administrador"
            }
            title={"Login exitoso"}
            mycustomattribute={() => setModalShow(false)}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      )}
      {!user && (
        <div className="form-login">
          <span className="mt-3">Complete el formulario para loguearse</span>
          <Form
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
            id="form-order"
          >
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Contraseña"
                name="password"
              />
            </Form.Group>
            <button className="button-primary">Iniciar sesion</button>
            <Alert variant={"danger"} show={alertShow}>
              Contraseña o usuario incorrecto, vuelve a intentar!
            </Alert>
          </Form>
        </div>
      )}
    </div>
  );
}
