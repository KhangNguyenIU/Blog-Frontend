import Layout from '../Components/layout/Layout.jsx'
import React, { useEffect } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import {motion} from 'framer-motion'
const Test =()=>{

    
    return(
        <React.Fragment>
            <Layout>
              <motion.div 
              initial={{x:100 ,opacity:0.2}}
              animate={{x:0,opacity:0.9}}
              
              className='flex flex-col items-center justify-center h-screen '>
                    <p className='p-5 text-5xl bg-slate-500'>Hello</p>
              </motion.div>
            </Layout>
        </React.Fragment>
    )
}

export default Test