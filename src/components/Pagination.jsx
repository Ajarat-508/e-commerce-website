import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Pagination = () => {
  return (
    <section id="pagination" class="section-p1">
      <Link to="/shop">1</Link>
      <Link to="/shop2">2</Link>
      <Link className='arrow-icon' to="/shop"><FontAwesomeIcon icon={faArrowRight} /></Link>
    </section>
  )
}

export default Pagination