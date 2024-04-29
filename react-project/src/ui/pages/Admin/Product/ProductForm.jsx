
import Select from 'react-select'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';


const options = [
    { value: 'black', label: 'black' },
    { value: 'blue', label: 'blue' },
    { value: 'grey', label: 'grey' }
]

export default ({ modal, toggle }) => {


    return (
        <div>

            <Modal size="lg" isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Product Form</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="title">
                                        Name
                                    </Label>
                                    <Input
                                        id="title"

                                        placeholder="Enter product"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="description">
                                        Description
                                    </Label>
                                    <Input
                                        id="description"

                                        placeholder="Enter product description"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="brand">
                                        Brand
                                    </Label>
                                    <Input
                                        id="brand"

                                        placeholder="product brand"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Gender</Label>
                                    <Row>
                                        <Col>
                                            <Input
                                                className='me-3'
                                                id="gender"
                                                type="radio"
                                            />
                                            <Label for="gender">Male </Label>

                                        </Col>


                                        <Col>
                                            <Input
                                                className='me-3'
                                                id="gender"
                                                type="radio"
                                            />
                                            <Label for="gender">Female </Label>

                                        </Col>

                                        <Col>
                                            <Input
                                                className='me-3'
                                                id="gender"
                                                type="radio"
                                            />
                                            <Label for="gender">Kids </Label>

                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                        </Row>


                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="thumbnail">
                                        Image
                                    </Label>
                                    <Input
                                        placeholder="enter image url"

                                        type="url"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="discount percentage">
                                        Discount
                                    </Label>
                                    <Input
                                        id="discount percentage"

                                        placeholder="enter discount"
                                        type="number"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="available color">
                                        Available color
                                    </Label>
                                    <Select isMulti options={options}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="available size">
                                        Available size
                                    </Label>
                                    <Input
                                        id="available size"

                                        placeholder="select"
                                        type="number"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="available stock">
                                        Available stock
                                    </Label>
                                    <Input
                                        id="available stock"

                                        placeholder="Enter product name"
                                        type="number"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="category">
                                        Category
                                    </Label>
                                    <Input
                                        id="category"

                                        placeholder="enter category"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color='warning' className='w-100'>
                            Add Product
                        </Button>
                    </Form>
                </ModalBody>

            </Modal>
        </div>
    );
}

    ;






// title: "watch",
//   description: " wrist watch",
//   brand: "casio",
//   gender: "male" // ["male", "female", "kids"],
//   price: 500,--
//   thumbnail: "image url",
//   discountPercentage: 20,
//   category: ["watch"],
//   color:  ["red", "black", "white"],
//   size:  [""],
//   availableStock: 500,