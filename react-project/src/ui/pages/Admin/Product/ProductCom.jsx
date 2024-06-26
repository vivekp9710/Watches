import React, { useEffect, useState } from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'
import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux';
import { fetchProductData } from '../../../../Redux/features/product/productSlice';

export default function ProductCom() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductData());
    }, []);
    return (
        <>
            <div className='m-4'>
                <div className='border-bottom d-flex  justify-content-end '>
                    <Button className="mb-3 " color="info" onClick={() => toggle()}>
                        Add Product
                    </Button>
                </div>
                <ProductForm modal={modal} toggle={toggle} />
                <ProductTable />


            </div>
        </>
    );
}
