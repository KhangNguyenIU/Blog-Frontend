import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { AuthorSuggest } from '../Components/blog/AuthorSuggest'
import { CardHorizontal } from '../Components/blog/card/CardHorizontal'
import CardVertical from '../Components/blog/card/CardVertical'
import { CategorySidePart } from '../Components/blog/CategorySideBar'
import App, { GridCard } from '../Components/blog/GridCard'
import Layout from '../Components/layout/Layout'
const image = "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
export default function Home() {

  return (
    <div >
      <Head>
        <title>A manga review website</title>
        <meta name="description" content="A manga review and compilation website" />
        <meta property="og:image" content={`${image}`} />
        <meta property="og:image:secure_url" content={`${image}`} />
        <meta property="og:image:type" content="image/png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className='container-wrapper-md '>
          <div className='flex flex-col md:flex-row '>
            <div className='basis-2/3 h-full px-10 mr-8 hide-scrollbar h-screen overflow-y-scroll border-r-[1px] border-gray-200'>
              <App />
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
