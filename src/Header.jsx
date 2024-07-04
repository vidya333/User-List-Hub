import React from 'react'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <span className="navbar-brand">
            <i className="fa-solid fa-user-group"></i>
            </span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
                    <li className="nav-item">
                        <span className="nav-link">
                            UserListHub
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header
