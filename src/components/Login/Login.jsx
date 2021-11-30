import { useLoginContext } from "../../context/loginContext";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { user, logIn, logOut } = useLoginContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = () => {
    logIn(formData.email, formData.password);
    setFormData({
      email: "",
      password: "",
    });
    reset({
      email: "",
      password: "",
    });
  };
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{ height: "70vh" }}
      className=" d-flex justify-content-center align-items-center"
    >
      {user && (
        <div className="cart-empty">
          <p>Esta logueado</p>
          <button onClick={logOut} className="button-primary">
            Logout
          </button>
        </div>
      )}
      {!user && (
        <div className="form-login">
          <span className="mt-3 mb-4 fs-4 fw-bold">
            Ingrese usuario y contraseña
          </span>
          <Form
            onChange={handleOnChange}
            onSubmit={handleSubmit(handleOnSubmit)}
            id="form-order"
          >
            <Form.Group className="mt-3 mb-3 " controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: "Campo obligatorio",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/i,
                    message: "Ingrese un Email Valido",
                  },
                })}
              />
              <span className="text-danger text-small d-block mt-2 ms-3 text-start">
                {errors?.email?.message}
              </span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "Campo obligatorio",
                })}
              />
            </Form.Group>
            <span className="text-danger text-small d-block mt-2 ms-3 text-start">
              {errors?.password?.message}
            </span>
            <button className="button-primary">Iniciar sesion</button>
          </Form>
        </div>
      )}
    </div>
  );
}
