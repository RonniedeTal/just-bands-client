import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <h1>BAND HELL SING</h1>
      <h1>WELLCOME to HELL!!!</h1>
      <Link to={'/new-band'}>UploadYourBand</Link>
    </div>
  )
}

export default Home
