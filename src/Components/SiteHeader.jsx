import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SiteHeader() {

  const [categories, setcategories] = useState([])

useEffect(() => {
  fetch("http://localhost:5274/api/Category")
  .then(res=>res.json())
  .then(data=>setcategories(data))
}, [])


  return <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Event App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span clclassNameass="navbar-toggler-icon"></span>
  </button>
 
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
      {
                   
                    categories.map(category => <li className="nav-item active" style={{marginLeft:20}} key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>)
                   
                }
     
     
     
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  </>
   
  
}

export default SiteHeader