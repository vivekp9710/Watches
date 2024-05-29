import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    let [address, setAddress] = useState({
        add: "",
        city: "",
        state: "",
        pincode: "",

    });

    let [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        contact: "",
        age: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()

        const realData = {
            ...user,
            address: [address]
        };

        //call api
        axios({
            method: "post",
            url: `${BE_URL}/user/signup`,
        })
    }
    return (
        <div>
            <Form
                style={{ backgroundColor: "#BAB86C" }}
                onSubmit={submitHandler}
                className="w-50 border border-dark p-3 rounded-3"
            >
                <h1 className="text-center">USER-FORM</h1>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        id="email"
                        onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                        placeholder="Enter your email"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        id="password"
                        onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                        placeholder="Enter your password"
                        type="password"
                    />
                </FormGroup>{" "}
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        id="name"
                        onChange={(e) => setUser({ ...user, name: e?.target?.value })}
                        placeholder="Enter your name"
                        type="text"
                    />
                </FormGroup>{" "}
                <FormGroup>
                    <Label for="number">Number</Label>
                    <Input
                        id="number"
                        onChange={(e) => setUser({ ...user, number: e?.target?.value })}
                        placeholder="Enter your number"
                        type="text"
                    />
                </FormGroup>{" "}
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                        id="age"
                        onChange={(e) => setUser({ ...user, age: e?.target?.value })}
                        placeholder="Enter your age"
                        type="number"
                    />
                </FormGroup>{" "}
                <FormGroup>
                    <Label for="add">Add</Label>
                    <Input
                        id="add"
                        onChange={(e) =>
                            setAddress({ ...address, add: e?.target?.value })
                        }
                        placeholder="Enter your add"
                        type="text"
                    />
                </FormGroup>{" "}
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                        id="city"
                        onChange={(e) =>
                            setAddress({ ...address, city: e?.target?.value })
                        }
                        placeholder="Enter your city"
                        type="text"
                    />
                </FormGroup>{" "}
                <FormGroup>
                    <Label for="state">State</Label>
                    <Input
                        id="state"
                        onChange={(e) =>
                            setAddress({ ...address, state: e?.target?.value })
                        }
                        placeholder="Enter your state"
                        type="text"
                    />
                </FormGroup>{" "}
                <FormGroup>
                    <Label for="pinCode">PinCode</Label>
                    <Input
                        id="pinCode"
                        onChange={(e) =>
                            setAddress({ ...address, pinCode: e?.target?.value })
                        }
                        placeholder="Enter your pinCode"
                        type="text"
                    />
                </FormGroup>
                <Link to={"/login"}>Already have Account..?</Link>
                <Button color="danger" className="w-100 mt-3">
                    Submit
                </Button>
            </Form>

        </div>
    )
}
