
import {
  HouseLine,
  Pen,
  SuitcaseSimple,
  UsersThree,
  File,
} from "phosphor-react";

const iconMap: Record<string, JSX.Element> = {
  UsersThree: <UsersThree size={36} />,
  File: <File size={36} />,
  Pen: <Pen size={36} />,
  HouseLine: <HouseLine size={36} />,
  SuitcaseSimple: <SuitcaseSimple size={36} />,
};

interface EligibilityItemProps {
  icons: "UsersThree" | "File" | "Pen" | "HouseLine" | "SuitcaseSimple"; // Restrict to valid icon names
  title: string;
}

// Define the interface for eligibility criteria
interface EligibilityCriteriaProps {
  state: string;
  eligibilityContent: {
    para1: string;
    para2: string;
    eligibilityContainerArray: EligibilityItemProps[];
  };
}


export default function EligibilityCriteria({state,eligibilityContent}: EligibilityCriteriaProps) {
  
  return (
    <div className="eligibility-criteria" id="eligibility-criteria">
      <h2 className="heading-eligibility">
        <span>Who Can Register</span> a Private Limited Company in {state}?
      </h2>
      <p>
        {eligibilityContent.para1}
      </p>
      <p>
        {eligibilityContent.para2}
      </p>
      <div className="eligibility-container">
        {eligibilityContent.eligibilityContainerArray.map((item: {icons:string, title:string},index:number)=>(
          <div className="criteria-card" key={index}>
          <div className="image-container">
          {iconMap[item.icons] || null}
          </div>
          <p className="text">{item.title}</p>
        </div>
        ))}
      </div>
    </div>
  );
}
