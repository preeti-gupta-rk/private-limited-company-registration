import NewFormDesign from "../../child_components/NewFormDesign"
import Categories from "../../static/private-limited-company-registration-in-state/Categories"
import Benefits from "./Benefits";
import DocumentsRequired from "./DocumentsRequired";
import EligibilityCriteria from "./EligibilityCriteria";
import NavigationBar from "./NavigationBar";
import Steps from "./Steps";

import CostPenalities from "./CostPenalities";
import CompanyRegistrationAuthorization from "./CompanyRegistrationAuthorization";
import ChallengeSolutions from "./ChallengeSolutions";
import WhyChooseUs from "./WhyChooseUs";
import { ContentProps } from "../../../assets/data/type";


export default function Content(props: ContentProps) {
    const {navigationBar,para1,para2,para3, eligibilityCriteria, benefits, categories, documents_required, stepsToRegister, cost_penalties, whyChooseRegisterKaro, companyRegistrationAuthorization,challenges_solutions} = props.content;

    return (
        <div className="content-section">
            <NavigationBar navlinks={navigationBar}></NavigationBar>
            <div className="content-container-div">
                <div className="movable-div">
                    <div className="main-1" id="what-is-private-limited-company">
                        <h2 className="heading">What is <span>Private Limited Company Registration</span> in {props.state}?</h2>
                        <p>
                            {para1}
                        </p>

                        <p>
                            {para2}
                        </p>

                        <p>
                            {para3}
                        </p>

                    </div>
                    
                    <EligibilityCriteria state={props.state} eligibilityContent={eligibilityCriteria} />
                    <Benefits benefitsContent={benefits} />
                    <Categories categoriesContent={categories} />
                    <DocumentsRequired documentsContents={documents_required} />
                    <Steps stepsContent={stepsToRegister} />
                    {/* Cost & Penalities */}
                    <CostPenalities penaltiesContent={cost_penalties} />
                    <WhyChooseUs state={props.state} whyChooseRegisterKaroContent={whyChooseRegisterKaro} />
                    <CompanyRegistrationAuthorization state={props.state} authorizationContent={companyRegistrationAuthorization} />
                    <ChallengeSolutions challengesContent={challenges_solutions} />
                </div>
                <div className="sticky-div">
                    <NewFormDesign></NewFormDesign>
                </div>
            </div>

        </div>
    );
}
