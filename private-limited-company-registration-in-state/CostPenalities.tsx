import React from 'react'

interface CostPenalitiesProps{
  penaltiesContent:{
    para:string
  }
}

const CostPenalities = (props:CostPenalitiesProps) => {
  const {para} = props.penaltiesContent;
  return (
    <div className='cost-penalities-container' id="cost-and-penalties" style={{scrollMarginTop:"130px"}}>
      <h2 className='heading-cost-penalities'>Cost and Penalties</h2>
      <p>content needed to added</p>
      <p>{para}</p>
    </div>
  )
}

export default CostPenalities
