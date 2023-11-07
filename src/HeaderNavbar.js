import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';
import './HeaderNavbar.css';
import { useRef, useEffect, useState } from 'react';


function HeaderNavbar(){
    

   
    return(
    <>
        <header className="header">
            <a href="./" className="logo"><img src={require("./images/logozacrno.png")} /></a>
            <div  className="hamburger"  >
                <div className="bars1"></div>
                <div className="bars2"></div>
                <div className="bars3"></div>
            </div>
            <ul className="menu">
 {/*               <li><a href="">Početna</a></li>
               <li><a href="">Usluge</a></li>
                <li><a href="">O nama</a></li>     
                 <li><a href="">Kontakt</a></li>        */}
            </ul>
        </header>
    </>
    )
}
export default HeaderNavbar;