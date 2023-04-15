import React from 'react'

import { Button } from 'awesomebuttonuii'
import 'awesomebuttonuii/dist/index.css'
import Button from '../../src'

const App = () => {
  return (
    <div className='App'>
      <Button text='Primary Button' type='primary' />
      <br />
      <br />
      <Button text='Default Button ' type='default' />
      <br />
      <br />
      <Button text='Dashed Button' type='dashed' />
      <br />
      <Button text='Text Button' type='text' />
      <br />
      <br />
      <a href='#' classNme='my-button'>
        <Button text='Link Button' type='link' />
      </a>
    </div>
  )
}

export default App
