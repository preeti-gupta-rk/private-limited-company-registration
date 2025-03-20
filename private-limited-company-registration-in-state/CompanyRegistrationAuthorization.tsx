import React from 'react'
interface companyRegistrationAuthorizationProps{
  state:string;
  authorizationContent:{
    para1?:string;
    para2?: string
  }
}
const CompanyRegistrationAuthorization = (props:companyRegistrationAuthorizationProps) => {
  const {state, authorizationContent:{para1,para2}} = props;

  return (
    <div className='authorization-container' id="company-registration-authorisation" style={{scrollMarginTop:"135px"}}>
     <h2 className='heading-company-registration-authorization' style={{"fontWeight":700, color:"#000",}}> <span style={{color:"#ffa229",}}>Company Registration Authorization</span> in {state} </h2>
     <p style={{textAlign:"justify"}}>{para1}</p>
     <p style={{textAlign:"justify"}}>{para2}</p>
    </div>
  )
}

export default CompanyRegistrationAuthorization
