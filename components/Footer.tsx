'use client'
import React, { Component } from 'react'
import Link from 'next/link'

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear()
    return (
      <div id="section_footer">
        <div className="text-center py-6 bg-gradient-to-r from-cyan-500 to-blue-500">
          <p className="text-green-200">
            Copyright © {current_year} All Rights Reserved.
          </p>
        </div>
      </div>
    )
  }
}

export default Footer
