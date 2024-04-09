import React,{useEffect} from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { global } from '../../config/locale';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useDispatch, useSelector} from 'react-redux';
import {getStocksCollection} from '../../redux/actions/stocks';

const Header = () => {
    const appState = useSelector((state)=> state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigation = (path) => {
        navigate(path);
    }
    useEffect(()=>{
        if(!appState?.stocks?.categorizedStockList){
            dispatch(getStocksCollection())
        }
    },[])
    return (
        <div>
            <div className="header">{global.label.appHeading}</div>

            {
                // playerState?.authStatus === "ADMIN_ACCESS" || playerState?.authStatus === "SUPER_ADMIN_ACCESS" ? (
                true ? (

                    <div className="nav-links">

                        <nav>

                            <div className='link'>
                                <Link to="dashboard">{global.label.nav.dashboard}</Link>
                            </div>
                            <div className='link link-drop'>
                                <NavDropdown title={global.label.nav.stocks} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={()=> navigation("stock-list")}>{global.label.nav.stockList}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={()=> navigation("stock-entry")}>
                                    {global.label.nav.stockEntry}
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                   
                                    
                                    <NavDropdown.Item onClick={()=> navigation("stock-dashboard")}>
                                    {global.label.nav.dashboard}
                                    </NavDropdown.Item>
                                    
                                </NavDropdown>
                                {/* <i className="fas fa-address-card" onClick={() => { navigation("/stock") }}></i>
                                <Link to="stock">{global.label.nav.stocks}</Link> */}
                            </div>
                            <div className='link link-drop'>
                                <NavDropdown title={global.label.nav.expensiveTitle} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={()=> navigation("expensive")}>{global.label.nav.all}</NavDropdown.Item>
                                    
                                    
                                </NavDropdown>
                                
                            </div>
                           


                        </nav>



                    </div>
                ) : ""
            }



        </div>
    )
}

export default Header;