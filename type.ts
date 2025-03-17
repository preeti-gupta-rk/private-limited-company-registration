// type.ts

// Interface for the description data
export interface DescriptionProps {
    para1: string;
    para2: string;
  }
  
  // Interface for a single navigation link
  export interface NavLink {
    href: string;
    title: string;
  }
  
  // -------------------------
  // Eligibility Criteria Types
  // -------------------------
  export interface EligibilityContainer {
    icons: string;
    title: string;
  }
  
  export interface EligibilityContent {
    para1: string;
    para2: string;
    eligibilityContainerArray: EligibilityContainer[];
  }
  
  export interface EligibilityCriteriaProps {
    // Optionally you may include a state if needed
    state: string;
    eligibilityContent: EligibilityContent;
  }
  
  // -------------------------
  // Benefits Types
  // -------------------------
  export interface BenefitsItem {
    heading: string;
    description: string;
  }
  
  export interface BenefitsProps {
    para1: string;
    para2: string;
    para3: string;
    para4: string;
    benefitsArrayData: BenefitsItem[];
  }
  
  // -------------------------
  // Categories Types
  // -------------------------
  export interface CategoryItem {
    categoryTitle: string;
    categorySubtitle: string;
  }
  
  export interface CategoriesProps {
    para: string;
    CategoriesArrayData: CategoryItem[];
  }
  
  // -------------------------
  // Documents Required Types
  // -------------------------
  export interface DocumentItem {
    name: string;
    description: string[];
  }
  
  export interface DocumentsRequiredProps {
    para: string;
    documentsArrayData: DocumentItem[];
  }
  
  // -------------------------
  // Steps Types
  // -------------------------
  export interface StepsProps {
    para: string;
    steps: string[];
  }
  
  // -------------------------
  // Cost & Penalities Types
  // -------------------------
  export interface CostPenalitiesProps {
    para: string;
  }
  
  // -------------------------
  // Why Choose RegisterKaro Types
  // -------------------------
  export interface WhyChooseRegisterKaroProps {
    para1: string;
    features: string[];
    image: string;
  }
  
  // -------------------------
  // Company Registration Authorization Types
  // -------------------------
  export interface CompanyRegistrationAuthorizationProps {
    para1: string;
  }
  
  // -------------------------
  // Challenges & Solutions Types
  // -------------------------
  export interface ChallengeSolutionsProps {
    para: string;
  }
  
  // -------------------------
  // Main Content Type
  // -------------------------
  export interface ContentType {
    navigationBar: NavLink[];
    para1: string;
    para2: string;
    para3: string;
    eligibilityCriteria: EligibilityCriteriaProps;
    benefits: BenefitsProps;
    categories: CategoriesProps;
    documents_required: DocumentsRequiredProps;
    stepsToRegister: StepsProps;
    cost_penalties: CostPenalitiesProps;
    whyChooseRegisterKaro: WhyChooseRegisterKaroProps;
    companyRegistrationAuthorization: CompanyRegistrationAuthorizationProps;
    challenges_solutions: ChallengeSolutionsProps;
  }
  
  // Props interface for the Content component
  export interface ContentProps {
    state: string;
    content: ContentType;
  }
  
  // -------------------------
  // Registration Data Interface
  // -------------------------
  // This represents the JSON data object imported from privateLimitedCompanyRegistration.json
  export interface RegistrationDataType {
    [stateName: string]: {
      description: DescriptionProps;
      content: ContentType;
    };
  }
  