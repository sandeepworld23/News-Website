import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

export default function Navbar({changeLanguage}) {
   let [search,setSearch]=useState("")
   let navigate =useNavigate()

  function postData(e) {
        e.preventDefault()
        navigate("/?q=" + search)
        setSearch( "" )
    }
        return (
            <nav className="navbar navbar-expand-lg background sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link  text-light" aria-current="page" to="/?q=All" >All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-light" to="/?q=Politics" >Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-light" to="/?q=Education" >Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-light" to="/?q=Science" >Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-light" to="/?q=Technology" >Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-light" to="/?q=Crime" >Crime</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/?q=Sports" >Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/?q=Cricket" >Cricket</Link></li>
                                    <li><Link className="dropdown-item" to="/?q=Olympics" >Olympics</Link></li>
                                    <li><Link className="dropdown-item" to="/?q=Entertainment" >Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/?q=Health" >Health</Link></li>
                                    <li><Link className="dropdown-item" to="/?q=Economics" >Economics</Link></li>
                                    <li><Link className="dropdown-item" to="/?q=World" >World</Link></li>
                                    <li><Link className="dropdown-item" to="/?q=India" >India</Link></li>
                                    <li><Link className="dropdown-item" to="/?q=Corporate" >Corporate</Link></li>
                                    <li><Link className="dropdown-item" to="/?q=IT" >IT</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() =>changeLanguage("hi")}>Hindi</button></li>
                                    <li><button className="dropdown-item" onClick={() =>changeLanguage("en")}>English</button></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e) =>postData(e)}>
                            <input className="form-control me-2" type="search" name='search' value={search} onChange={(e) => setSearch(e.target.value )} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
