import axios from "axios";
import React, { useEffect, useState } from "react";
import { BE_URL } from "../../../config";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function ProductPage() {
    let [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`${BE_URL}/product/getProductById/${id}`)
            .then((resData) => {
                setData(resData.data.data);
            })
            .catch((err) => toast.error(err.message));
    }, []);

    return (
        <>
            <div
                style={{
                    height: "100vh",
                    backgroundColor: "lightgray",
                }}
                className="d-flex m-5"
            >
                <div className="w-50">
                    {" "}
                    <img
                        style={{ height: "100%", width: "90%" }}
                        src="{data.thumbnail}"
                        alt=""
                    />
                </div>
                <div className="w-50">
                    <h1>{data?.title}</h1>

                    {
                        <>
                            <h1>
                                {data.price - (data.price * data?.discountPercentage) / 100}
                            </h1>
                            {data?.discountPercentage > 0 && (
                                <h3 style={{ textDecoration: "line-through" }}>
                                    {data?.price}
                                </h3>
                            )}
                        </>
                    }

                    <h3>{data?.description}</h3>
                    <h3>{data?.brand}</h3>
                </div>
            </div>
        </>
    );
}
