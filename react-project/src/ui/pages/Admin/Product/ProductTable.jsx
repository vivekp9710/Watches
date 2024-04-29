import { Pencil, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Table } from 'reactstrap';

export default function ProductTable() {
    let [productData, setProductData] = useState([]);

    const allData = useSelector((state) => {
        return state?.productReducer?.products
    });
    console.log("alldata", allData);
    useEffect(() => {
        setProductData(allData);
    }, [allData]);



    return (
        <>
            <div className=" d-flex flex-column justify-content-center align-items-center">
                {

                    productData?.length > 0 ? (
                        <Table className='mt-3  ' striped >
                            <thead>
                                <tr>
                                    <th>
                                        Sr.
                                    </th>
                                    <th>
                                        title
                                    </th>
                                    <th>
                                        description
                                    </th>


                                    <th>
                                        category
                                    </th>

                                    <th>
                                        price
                                    </th>
                                    <th>
                                        color
                                    </th>
                                    <th>
                                        size
                                    </th>
                                    <th>
                                        Images
                                    </th>
                                    <th>
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productData?.map?.((e, i) => {
                                        return (
                                            <tr>
                                                <th key={e?.id} scope="row">
                                                    {i + 1}
                                                </th>
                                                <td style={{ maxWidth: "15vw" }} className="text-truncate ">{e?.title}
                                                    Mark
                                                </td>
                                                <td style={{ maxWidth: "25vw" }} className='text-truncate'>{e?.description}
                                                    Otto
                                                </td>
                                                <td>{e?.category?.join(" | ")}

                                                </td>
                                                <td>{e?.price}

                                                </td>
                                                <td>{e?.color?.join("  | ")}

                                                </td>
                                                <td>{e?.size?.join(" | ")}

                                                </td>
                                                <td><img className='w-100 h-100 '
                                                    style={{ maxWidth: "100px", maxHeight: "100px" }} src={e?.thumbnail} alt="" />

                                                </td>
                                                <td>
                                                    <Pencil color="#a39999" />
                                                    <Trash2 color="#a39999" />
                                                </td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>
                        </Table>

                    ) : (
                        <h1 style={{ color: 'grey' }}>Data not found</h1>


                    )}
            </div>
        </>
    );
}
