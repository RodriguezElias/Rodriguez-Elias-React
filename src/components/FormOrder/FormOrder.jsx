import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext";
import ModalOrder from "../../modals/ModalOrder";
import { useForm } from "react-hook-form";

export default function FormOrder({
  handleOnChange,
  handleOnSubmit,
  idorder,
  ModalShow,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [confirmShow, setConfirmShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);

  const { deleteCart } = useCartContext();

  const validateEmail = () => {
    const email1 = document.querySelector(".email1");
    const email2 = document.querySelector(".email2");
    if (email1.value === email2.value) {
      setConfirmShow(true);
      setAlertShow(false);
    } else if (email1.value === " " || email2.value === " ") {
      setConfirmShow(false);
      setAlertShow(true);
    } else {
      setConfirmShow(false);
      setAlertShow(true);
    }
  };
  return (
    <div className="form-order">
      <span className="fs-4 fw-bold ">
        Complete el formulario para confirmar su compra
      </span>
      <Form
        onChange={handleOnChange}
        onSubmit={handleSubmit(handleOnSubmit)}
        id="form-order"
        className="mt-4"
      >
        <Form.Group className="mb-3" >
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            {...register("name", {
              required: "Campo obligatorio",
              maxLength: { value: 60, message: "Longitud maxima excedida" },
              pattern: {
                value:
                /^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*$/g,
                message: "Ingrese un nombre valido",
              },
            })}
          />
          <span className="text-danger text-small d-block mt-2 ms-3 text-start">
            {errors?.name?.message}
          </span>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Telefono"
            {...register("tel", {
              required: "Campo obligatorio",
              maxLength: { value: 12, message: "Longitud maxima excedida" },
              pattern: {
                value:
                  /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
                message: "Ingrese un telefono valido",
              },
            })}
          />
          <span className="text-danger text-small d-block mt-2 ms-3 text-start">
            {errors?.tel?.message}
          </span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="email1"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Campo obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/i,
                message: "Ingrese un Email Valido",
              },
              onChange: validateEmail,
            })}
          />
          <span className="text-danger text-small d-block mt-2 ms-3 text-start">
            {errors?.email?.message}
          </span>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="email2"
            type="email"
            placeholder="Confirme su email"
            {...register("email2", {
              required: "Campo obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/i,
                message: "Ingrese un Email Valido",
              },
              onChange: validateEmail,
            })}
          />
          <span className="text-danger text-small d-block mt-2 ms-3 text-start">
            {errors?.email2?.message}
          </span>
          <Form.Text id="passwordHelpBlock" muted>
            Podra confirmar su compra una vez que complete todo el formulario
          </Form.Text>
        </Form.Group>
        {confirmShow === true && (
          <button
            style={{
              backgroundColor: "#3ac8c8",
              padding: "4px",
              margin: "2px",
              borderRadius: "5px",
            }}
          >
            Confirmar Compra
          </button>
        )}
        <Alert variant={"danger"} show={alertShow}>
          Los Emails no coinciden, vuelve a intentar!
        </Alert>
        <ModalOrder
          message={
            "Puede seguir comprando o ver sus ordenes de compras en el menu."
          }
          mycustomattribute={deleteCart}
          show={ModalShow}
          idorder={idorder}
        />
      </Form>
    </div>
  );
}
