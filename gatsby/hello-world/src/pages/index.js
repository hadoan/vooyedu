import React from "react"
import {Link} from 'gatsby'
import Header from '../components/header'

export default function Home() {
  return (
  <div style={{ color: `purple`, fontSize: `72px` }}>
    <Header headerText="Hello Hello Gatsby!"/>
    <Link to="/contact">Contact</Link>

    <p>Why so fast!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
  )
}
