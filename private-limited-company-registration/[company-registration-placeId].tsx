import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Banner from "../../components/static/private-limited-company-registration-in-state/Banner";
import Description, { DescriptionProps } from "../../components/static/private-limited-company-registration-in-state/Description";
import TestimonalPLCR from "../../components/static/private-limited-company-registration-in-state/TestimonalPLCR";
import WhyChooseRegKaro from "../../components/static/private-limited-company-registration-in-state/WhyChooseRegKaro"
import Content from "../../components/static/private-limited-company-registration-in-state/Content"
import FrequentAskQuestionPLCR from "../../components/static/private-limited-company-registration-in-state/FrequentAskQuestionsPLCR";
import state from "../../assets/data/state.json"
import { Loading } from "../../components/child_components/Loading";
import { CustomDefault } from "../../components/child_components/CustomDefault";
import privateLimitedCompanyRegistrationData from "../../assets/data/private-limited-company-registration.json";
import {RegistrationDataType} from "../../assets/data/type";



 function CompanyRegistration() {
    const router=useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isValidState, setIsValidState] = useState(false);
    
    const placeId = router.query["company-registration-placeId"];
    // const state = placeId ? placeId.split("-").pop() : "";
    const placeIdString = Array.isArray(placeId) ? placeId[0] : placeId;
    const stateString = placeIdString ? placeIdString.split("-").pop() : "";


    // Function to capitalize the first letter
    const capitalizeFirstLetter = (str: string | undefined) => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const capitalizedState = capitalizeFirstLetter(stateString);

const registrationData : RegistrationDataType  = privateLimitedCompanyRegistrationData;

    useEffect(()=>{
      if(router.isReady){
        setIsValidState(state.includes(capitalizedState));
        setIsLoading(false);
      }

   
    },[router.isReady, capitalizedState]);

    if(isLoading){
      return <Loading/>
    }
    if(!isValidState){
      return <CustomDefault/>
    }


    const faq = [
        {
          question: `What is the time frame for Private Limiited Company Registration in ${capitalizedState}?`,
          answer: `The time frame for Private Limited Company Registration in  ${capitalizedState} typically ranges from 7 to 10 working days, depending on the accuracy of the doucments and the approval process.`,
        },
        {
          question: `what is the cost of the Private Limited Company Registration in ${capitalizedState}?`,
          answer: `The cost of Pivate Limited Company Registration in ${capitalizedState} varies based on professional fees, government charges, and additional services like drafting and GST registration.`,
        },
        {
          question: `What are the post-registration compliances for a Private Limited Company in ${capitalizedState}?`,
          answer: `Post-registration compliances for a Private Limited Company in ${capitalizedState} including filing annual returns, maintaining statutory registers, holding board meetings, and adhering to income tax and GST regualations.`,
        },
        {
          question: `Can NRIs and foreigners register a Private Limited Company in ${capitalizedState}?`,
          answer: `Yes, NRIs and foreigners can register a Private Limited Company in ${capitalizedState}, provided they comply with Foreign Exchange Management Act (FEMA) guidelines and appoint at least one Indian resident director.`,
        },
        {
          question: `Is GST registration mandatory for a Private Limited Company in ${capitalizedState}?`,
          answer: `GST registration is mandatory for a Private Limited Company in ${capitalizedState} if its annual turnover exceeds the prescribed threshold or if it engages in interstate transactions.`,
        },
        {
          question: `Can a single person register a Private Limited Company in ${capitalizedState}?`,
          answer: ` No, a single person cannot register a Private Limited Company in ${capitalizedState}. However, a single person can opt for a One Person Company (OPC) instead.`,
        },
        {
          question: `Do I need a business address for Private Limited Company Registration in ${capitalizedState}?`,
          answer: `Yes, a business address is required for Private Limited Company Registration in Manipur, as it serves as the registered office for communication and documentation purposes.`,
        },
        {
          question: ` Can I convert a partnership firm into a Private Limited Company in ${capitalizedState}?`,
          answer: `Yes, you can convert a partnership firm into a Private Limited Company in ${capitalizedState} by following the provisions under the Companies Act, 2013.`,
        },
        {
          question: `Can a Private Limited Company in ${capitalizedState} issue shares to the public?`,
          answer: `No, a Private Limited Company in ${capitalizedState} cannot issue shares to the public, as it is restricted to private ownership and has a limited number of shareholders.
    `,
        },
        {
          question: ` Is it mandatory to hire a CA for Private Limited Company Registration in ${capitalizedState}?`,
          answer: `While hiring a CA is not mandatory for Private Limited Company Registration in ${capitalizedState}, professional assistance ensures a smooth and compliant registration process.`,
        },
        {
          question: ` Can I operate from home after Private Limited Company Registration in ${capitalizedState}?`,
          answer: `Yes, you can operate from home after Private Limited Company Registration in ${capitalizedState}, provided the registered office address is valid and approved by the authorities.`,
        },
      ];
    return (
        <div>
           <Banner state={capitalizedState}></Banner>
           <Description state={capitalizedState} content={registrationData[capitalizedState]?.description} ></Description>
           <TestimonalPLCR isBg=""></TestimonalPLCR>
           <WhyChooseRegKaro></WhyChooseRegKaro>
           <Content state={capitalizedState} content={registrationData[capitalizedState]?.content}></Content>
           <FrequentAskQuestionPLCR faq={faq}></FrequentAskQuestionPLCR>
        </div>
    );
}
export default CompanyRegistration
