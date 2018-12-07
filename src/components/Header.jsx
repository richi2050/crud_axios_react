import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="col-12 col-md-12">
            <Link to={'/'}>
                <h1 className="text-center">React Blog</h1>
            </Link>
        </header>
      </div>
    )
  }
}
