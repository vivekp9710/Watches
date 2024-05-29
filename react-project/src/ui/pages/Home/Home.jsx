import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout } from "antd";
import HomeContent from "./HomeContent"
import { useDispatch } from "react-redux";
import { fetchProductData } from "../../../Redux/features/product/productSlice";
import Slider from "../../components/Slider/SliderCom"

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);
    return (
        <Layout className="layout">
            <Slider />
            <HomeContent />
        </Layout>
    );
};
export default Home;