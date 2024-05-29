import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"
import { Button } from "antd"
import React, { useState } from 'react'
import { Heart } from "lucide-react"


export default function CardCom(props) {

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    };

    const handleMouseLeave = () => {
        setIsHovered(false)

    };

    return (
        <>
            <Card
                className="m-3 rounded-4"
                style={{
                    width: '15rem',
                }}
                onClick={props?.onClick}
            >
                <div
                    className="m-4"
                    style={{
                        height: "10rem",
                        alignSelf: "center",
                        overflow: "hidden",
                        transition: "transform 0.3s",
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                        filter: "drop -shadow(10px 10px 50px yellow)",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>

                    <img
                        onClick={props?.onClick}
                        alt="Sample"
                        src={props?.data?.img}
                        style={{
                            height: "10rem",
                            objectFit: "cover"
                        }}
                    />
                </div>
                <CardBody>
                    <div onClick={props?.onClick}>

                        <CardTitle tag="h4">
                            {props?.data?.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6">

                            Rs: {props?.data?.price}
                        </CardSubtitle>
                    </div>


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
