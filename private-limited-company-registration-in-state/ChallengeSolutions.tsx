import React from 'react'
interface ChallengeSolutionsProps{
  challengesContent:{
    para:string
  }
}import React from 'react'
interface ChallengeSolutionsProps{
  state:string,
  challengesContent:{
    para:string
    para1:string
  }
}

const ChallengeSolutions = ({state,challengesContent}: ChallengeSolutionsProps) => {
  return (
    <div className='challenges-container' id="challenges-and-solutions" style={{scrollMarginTop:"135px"}}>
      <h2 className='heading-challenges-and-solutions' style={{"fontWeight":700, color:"#000",}}> <span style={{color:"#ffa229",}}>Challenges & Solutions</span> Of Company Registration in {state}</h2>
      <p style={{textAlign:'justify'}}>{challengesContent.para}</p>
      <p style={{textAlign:'justify'}}>{challengesContent.para1}</p>
    </div>
  )
}

export default ChallengeSolutions


const ChallengeSolutions = ({challengesContent}: ChallengeSolutionsProps) => {
  return (
    <div className='challenges-container' id="challenges-and-solutions" style={{scrollMarginTop:"135px"}}>
      <h2>Challenges & Solutions</h2>
      <p style={{textAlign:'justify'}}>{challengesContent.para}</p>
    </div>
  )
}

export default ChallengeSolutions
