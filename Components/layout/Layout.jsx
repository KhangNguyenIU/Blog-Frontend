import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import store from '../../state/store'
import { Provider } from "react-redux";
import {useRouter} from 'next/router'
import CrudNavBar from "../crud/CrudNavbar";
const Layout =({children})=>{

const router =useRouter()
// console.log({router})
return(
    <React.Fragment>
        <Provider store={store}>
            {router.pathname !=='/new-story' && <Navbar/>}
            {children}
            <Footer/>
        </Provider>
    </React.Fragment>
)
}

export default Layout ;