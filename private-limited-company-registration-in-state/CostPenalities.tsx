import React from 'react'

interface CostPenalitiesProps{
  state:string,
  penaltiesContent:{
    para:string
    para1:string
    para2:string
  }
}

const CostPenalities = (props:CostPenalitiesProps) => {
  const {para, para1,para2} = props.penaltiesContent;
  const {state} = props;
  return (
    <div className='cost-penalities-container' id="cost-and-penalties" style={{scrollMarginTop:"130px"}}>
      <h2 className='heading-cost-penalities' style={{"fontWeight":700, color:"#000",}}> <span style={{color:"#ffa229",}}>Cost and Penalties</span> of Registration in {state}</h2>
      <p>{para}</p>
      <p>{para1}</p>
      <p>{para2}</p>
    </div>
  )
}

export default CostPenalities
