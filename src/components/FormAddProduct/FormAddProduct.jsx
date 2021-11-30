import { useState } from "react";
import { Form, Row, Col, Alert } from "react-bootstrap";
import ModalOrder from "../../modals/ModalOrder";
import { useForm } from "react-hook-form";

export default function FormAddProduct({
  handleOnChange,
  handleOnSubmit,
  handleClose,
  idorder,
  modalShow,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Form
        onChange={handleOnChange}
        onSubmit={handleSubmit(handleOnSubmit)}
        className="mt-4"
      >
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="validationCustom01">
              <Form.Label>Bread</Form.Label>
              <Form.Control
                type="text"
                {...register("bread", {
                  required: "Campo obligatorio",
                  maxLength: { value: 40, message: "Longitud maxima excedida" },
                })}
              />
            </Form.Group>
            <span className="text-danger text-small d-block mt-2 ms-3 text-start">
              {errors?.bread?.message}
            </span>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                {...register("category", {
                  required: "Campo obligatorio",
                  maxLength: { value: 40, message: "Longitud maxima excedida" },
                })}
              />
            </Form.Group>
            <span className="text-danger text-small d-block mt-2 ms-3 text-start">
              {errors?.category?.message}
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                {...register("description", {
                  required: "Campo obligatorio",
                  maxLength: {
                    value: 100,
                    message: "Longitud maxima excedida",
                  },
                })}
              />
            </Form.Group>
            <span className="text-danger text-small d-block mt-2 ms-3 text-start">
              {errors?.description?.message}
            </span>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Link Image</Form.Label>
              <Form.Control
                type="text"
                {...register("image", {
                  required: "Campo obligatorio",
                  maxLength: {
                    value: 150,
                    message: "Longitud maxima excedida",
                  },
                })}
              />
            </Form.Group>
            <span className="text-danger text-small d-block mt-2 ms-3 text-start">
              {errors?.image?.message}
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Nombre Producto</Form.Label>
              <Form.Control
                type="text"
                {...register("name", {
                  required: "Campo obligatorio",
                  maxLength: {
                    value: 100,
                    message: "Longitud maxima excedida",
                  },
                })}
              />
            </Form.Group>
            <span className="text-danger text-small d-block mt-2 ms-3 text-start">
              {errors?.name?.message}
            </span>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                {...register("price", {
                  required: "Campo obligatorio",
                  maxLength: { value: 8, message: "Longitud maxima excedida" },
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "Ingrese un numero valido",
                  },
                })}
              />
            </Form.Group>
            <span className="text-danger text-small d-block mt-2 ms-3 text-start">
              {errors?.price?.message}
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="text"
                {...register("stock", {
                  required: "Campo obligatorio",
                  maxLength: { value: 5, message: "Longitud maxima excedida" },
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "Ingrese un numero valido",
                  },
                })}
              />
            </Form.Group>
            <span className="text-danger text-small d-block mt-2 ms-3 text-start">
              {errors?.stock?.message}
            </span>
          </Col>
        </Row>
        <button className="button-primary">Agregar Producto</button>
        <ModalOrder
          message={"Se agrego el producto a la base de datos"}
          show={modalShow}
          idorder={idorder}
          mycustomattribute={() => handleClose(reset)}
        />
      </Form>
    </div>
  );
}
