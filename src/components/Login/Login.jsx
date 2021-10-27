import { useLoginContext } from "../../context/loginContext";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { user, logIn, logOut } = useLoginContext();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    logIn(formData.email, formData.password);

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setFormData({
      email: "",
      password: "",
    });
    e.target.reset();
  };
  const handleOnChange = (e) => {
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
          <button onClick={logOut} className="button-primary">Logout</button>
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
          </Form>
        </div>
      )}
    </div>
  );
}
