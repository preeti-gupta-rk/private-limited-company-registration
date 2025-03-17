import React from 'react'
interface companyRegistrationAuthorizationProps{
  state:string;
  authorizationContent:{
    para1?:string;
  }
}
const CompanyRegistrationAuthorization = (props:companyRegistrationAuthorizationProps) => {
  const {state, authorizationContent:{para1}} = props;

  return (
    <div className='authorization-container' id="company-registration-authorisation" style={{scrollMarginTop:"135px"}}>
     <h2> <span>Company Registration Authorization</span> in {state} </h2>
     <p>content to be added</p>
     <p style={{textAlign:"justify"}}>{para1}</p>
    </div>
  )
}

export default CompanyRegistrationAuthorization
