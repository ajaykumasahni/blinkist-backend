import React from 'react'
import { useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
import "./Single.scss"
import LeftSidebar from "./LeftSidebar.js"
import RightSideBar from "./RightSideBar.js"

const SingleBook = () => {
  const params = useParams()
  const {book} = useSelector(state => state)
  return (
    <div className='sidebar__twoparts'>
      <LeftSidebar />
      <RightSideBar />
    </div>
  )
}

export default SingleBook
