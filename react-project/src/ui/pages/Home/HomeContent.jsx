import React, { useContext, useEffect, useState } from "react";
import WatchData from "../../../utils/watch.json"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardCom from "../../components/Card/CardCom";

export default function HomeContent() {
    const [Data, setData] = useState(WatchData);
    // let [allProduct, setAllProduct] = useState([]);
    // let allData = useSelector((state) => state.productReducer.products);

    const navigate = useNavigate()
    useEffect(() => {
        setData(Data);
    }, [Data]);

    return (
        <>
            <div
                className="site-layout-content ms-auto d-flex flex-wrap "
                style={{
                    gap: "8px",
                }}
            >
                {Data?.map?.((e, i) => {
                    return (<CardCom key={i + Math.random()} data={e}
                        onclick={() => navigate(`productpage/${e?._id}`)}

                    />
                    );
                })}
            </div>
        </>
    );
}


