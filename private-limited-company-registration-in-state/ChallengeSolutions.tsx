import React from 'react'
interface ChallengeSolutionsProps{
  challengesContent:{
    para:string
  }
}

const ChallengeSolutions = ({challengesContent}: ChallengeSolutionsProps) => {
  return (
    <div className='challenges-container' id="challenges-and-solutions" style={{scrollMarginTop:"135px"}}>
      <h2>Challenges & Solutions</h2>
      <p style={{textAlign:'justify'}}>{challengesContent.para}</p>
    </div>
  )
}

export default ChallengeSolutions
