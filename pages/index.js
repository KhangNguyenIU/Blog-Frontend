import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { AuthorSuggest } from '../Components/blog/AuthorSuggest'
import { CardHorizontal } from '../Components/blog/card/CardHorizontal'
import CardVertical from '../Components/blog/card/CardVertical'
import { CategorySidePart } from '../Components/blog/CategorySideBar'
import App, { GridCard } from '../Components/blog/GridCard'
import Layout from '../Components/layout/Layout'
const image = "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
export default function Home() {
  const listRef = useRef(null)
  const chilRef = useRef(null)

  const handleScroll =()=>{
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight >= scrollHeight-10) {
        chilRef.current()
      }
    }

  }
  return (
    <div >

      <Layout>
        <div className='container-wrapper-md '>
          <div className='flex flex-col md:flex-row '>
            <div ref={listRef} className='flex-none basis-2/3 h-full md:px-10 md:mr-8 hide-scrollbar h-screen overflow-y-scroll md:border-r-[1px] border-gray-200'
            onScroll={handleScroll}>
              <App chilRef={chilRef}/>
            </div>

            <div className='basis-1/3 overflow-hidden '>
              <div className='flex flex-col'>
                <CategorySidePart />
                <AuthorSuggest />
              </div>
            </div>
          </div>
        </div>
      </Layout>


    </div>
  )
}
