import React, { useState, useEffect } from 'react';
import { Menu, Button, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined,  FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import MenuItem from 'antd/lib/menu/MenuItem';


const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize); //It will unmount.
    }, []);

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])


    return (
        <>
            <div className="nav-container">
                <div className="logo-container">
                    <div className="sub-container">
                        <Avatar src={icon} size="large" />
                        <Typography.Title level={2} className="logo">
                            <Link to="/">CryptoCountry</Link>
                        </Typography.Title>
                    </div>
                    <Button className="menu-control-container" onClick={()=> setActiveMenu(true)}>
                        <MenuOutlined/>

            </Button>
                    {activeMenu && (
                        <Menu theme='dark'>
                            <MenuItem icon={<HomeOutlined />} key='item-1'>
                                <Link to="/">Home</Link>
                            </MenuItem>
                            <MenuItem icon={<FundOutlined />} key='item-2'>
                                <Link to="/cryptocurrencies">CryptoCurrencies</Link>
                            </MenuItem>
                            <MenuItem icon={<FundOutlined />} key='item-4'>
                                <Link to="/news">News</Link>
                            </MenuItem>
                        </Menu>
                    )}

                </div>
            </div>
        </>
    );
}

export default Navbar;
