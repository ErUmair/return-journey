import React from 'react'

const GmaeRule = () => {
  return (
    <div className='my-5 d-flex align-items-center justify-content-center flex-column'>
    <h4 className='fw-bolder fs-3'>Rules</h4>
    <p className='fs-4'>Read Carefully!</p>
    <ul className='fs-5'>
        <li>The Box changes its colour between 1s to 2s,so Goal is to click on Green colour</li>
        <li>If you click on the red colour,you will have failed!</li>
        <li>If time has expired then you will have failed also,</li>
        <li>If You click on Green colour, your score will increase and once you will achieve the goal...You will Win 😍</li>
        <li>There are 3 levels in this game Easy,Medium &amp; Hard</li>
        <li>Time interval is constant for each level i.e 40s</li>
        <li>but gaol is different in each and every levels i.e score: 10 for easy, score: 15 for Medium and Score: 25 for Hard</li>
    </ul>
    </div>
  )
}

export default GmaeRule