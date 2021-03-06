import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={'navbar navbar-expand-lg navbar-warning bg-warning'}>
        <a className="navbar-brand" href="/"><b>{props.title}</b></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/"><b>Home</b></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/"><b>About</b></a>
            </li>
            </ul>
            </div>      
            </nav>
  )
}

Navbar.propTypes= {title: PropTypes.string
                  }

Navbar.defaultProps = {title:'hello'
}