import { Search, User2 } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,


} from 'reactstrap';
import "./index.css";
import { useSelector } from 'react-redux';
import CardCom from "../CardCom";
import jsonData from "../../../utils/watch.json";


function HeaderCom(props) {


    // const SearchBar = () => {
    //     const [query, setQuery] = useState("")
    //     const [results,setResults]=useState([])
    //     const handleInputChange = (event) => {
    //         setQuery(event.target.value); // Update query state with input value
    //       };

    const userData = useSelector(state => state?.auth?.user);
    // console.log("userdata", userData);
    // console.log("----->", JSON.stringify(userData) === "{}");
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState(jsonData);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() === "") {
            setFilteredProducts([]);
        } else {
            const filtered = jsonData.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);

        };
    }


    return (
        <div>
            <Navbar expand={"md"} style={{ backgroundColor: "goldenrod" }}>
                <NavbarBrand href="/">W@TcHeS</NavbarBrand>
                {/* <NavbarToggler onClick={toggle} /> */}
                <Collapse navbar>
                    {
                        userData?.userType === "admin" ? (


                            <Nav className="me-auto  ms-1 gap-2 " navbar>
                                <NavItem>
                                    <NavLink to="/admin/dashboard">Dashboard</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/products">
                                        Product
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/orders">
                                        Orders
                                    </NavLink>
                                </NavItem>

                            </Nav>
                        ) : (
                            <>
                                <Nav className="me-auto  ms-1 gap-2 " navbar>
                                    <NavItem>
                                        <NavLink to="">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/men">
                                            Men
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/women">
                                            Women
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/kids">
                                            Kids
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/About">
                                            About us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/contact">
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <input style={{
                                    outline: "none",
                                }}

                                    className="border-0  rounded-1 p-1 w-25 " type="text" placeholder='search  text here'
                                    value={searchQuery}
                                    onChange={handleSearch} />
                                <Search color='#ffffff' />
                            </>
                        )}

                    {JSON.stringify(userData) !== "{}" ? (
                        <User2 className='userIcon ms-2'
                            onClick={() => navigate("/Profile")} />

                    ) : (
                        <Button style={{
                            backgroundColor: "blue",
                            color: "white",
                        }}

                            onClick={() => navigate("/login")}>
                            Login</Button>

                    )}
                </Collapse>
            </Navbar>
            <div className='container'>
                <div className='row'>
                    {filteredProducts.map((product) => (
                        <div className="col-md-3 " key={product.id}>
                            <CardCom data={product} />

                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}

export default HeaderCom;