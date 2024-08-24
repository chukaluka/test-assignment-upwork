import React from 'react'

export default function Home() {
  return (

    <div className='container'>
      
      {/* Header */}
      <div className='head-div'>
        <h1 className='head-text'>All pages</h1>

        <label className='checker'>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        
      </div>

      {/* line */}
      <div className='horizontal-border-line'>
        <div className='horizontal-line'></div>
      </div>

      {/* body */}
      
        <div className='one'>
          <h1 className='content'>Page 1</h1>
          <label className='checker'>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        </div>

        <div className='one'>
          <h1 className='content'>Page 2</h1>
          <label className='checker'>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        </div>

        <div className='one'>
          <h1 className='content'>Page 3</h1>
          <label className='checker'>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        </div>

        <div className='one'>
          <h1 className='content'>Page 4</h1>
          <label className='checker'>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        </div>
     

         {/* line */}
         <div className='horizontal-border-line'>
        <div className='horizontal-line'></div>
      </div>

      {/* button */}
      <div className='button-container'>
        <div className='button-div hover:bg-yellow-300'>
          <h1 className='button-text'>Done</h1>
        </div>
      </div>

    </div>
  )
}
