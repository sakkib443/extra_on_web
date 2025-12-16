import TopHeader from '@/Components/Shared/Header/TopHeader';
import Navbar from '@/Components/Shared/Header/Navbar';
import React from 'react';
import Footer from '@/Components/Shared/Footer/Footer';

const mainLayout = ({children}) => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default mainLayout;