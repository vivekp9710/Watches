import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"
import { Button } from "antd"
import React from 'react'
import { Heart } from "lucide-react"


export default function CardCom(props) {
    return (
        <>
            <Card
                className="m-3 rounded-4"
                style={{
                    width: '12rem',

                }}

            >
                <img
                    style={{
                        height: "10rem"
                    }}
                    alt="Sample"
                    src={props?.data?.img}
                />
                <CardBody>
                    <CardTitle tag="h4">
                        {props?.data?.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {props?.data?.price}
                    </CardSubtitle>


                    <Button className="w-50" style={{ color: "#ffffff", backgroundColor: "darkcyan" }}>
                        Buy
                    </Button>
                    <Button className="w-50" style={{ backgroundColor: "darkcyan" }}>
                        <Heart color="#ffffff" />
                    </Button>
                </CardBody>
            </Card>



        </>
    )
}
