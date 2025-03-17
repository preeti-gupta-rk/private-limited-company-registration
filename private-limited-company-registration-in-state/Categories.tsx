import React from 'react'

interface CategoryItem {
    categoryTitle: string;
    categorySubtitle: string;
}

interface CategoriesProps {
    categoriesContent: {
        para: string;
        CategoriesArrayData: CategoryItem[]
    }
}

const Categories = (props: CategoriesProps) => {
    const { para, CategoriesArrayData } = props.categoriesContent;

    return (
        <section className='category-section' id="categories">
            <div className="category-main-container">
                <h1 className='category-h1'>
                    What are the <span className='category-span'>Key Features & Benefits</span> of a Private Limited Company?
                </h1>
                <p className='category-p'>{para}</p>
                <div className='category-card-grid-container'>
                    {CategoriesArrayData.map((category:CategoryItem, index:number) => (
                        <div key={index} className='category-card'>
                            <h2>{index + 1}. {category.categoryTitle}</h2>
                            <span className='category-separator'></span>
                            <p className='category-p'>{category.categorySubtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories


// extra code
    // const categoryArrayData = [{
    //     categoryTitle: "Limited Liability Protection",
    //     categorySubtitle: "Shareholder's Liability is limited to the unpaid amount of their shares. This safeguards personal assests from business liabilities."
    // },
    // {
    //     categoryTitle: "Separate Legal Entity",
    //     categorySubtitle: "The Company is treated as an independent entity, allowing it to own property,sue, and be sued in its own name."
    // },
    // {
    //     categoryTitle: "Perpetual Succession",
    //     categorySubtitle: "The Company continues to exist irrespective of changes in ownership or member status, ensuring continuity in business operations."
    // },
    // {
    //     categoryTitle: "Membership Flexibility",
    //     categorySubtitle: "Shareholder's Liability is limited to the unpaid amount of their shares. This safeguards personal assests from business liabilities."
    // },
    // {
    //     categoryTitle: "Restrictions on Share Transfers",
    //     categorySubtitle: "Shareholder's Liability is limited to the unpaid amount of their shares. This safeguards personal assests from business liabilities."
    // },
    // {
    //     categoryTitle: "No Minimum Paid-Up Capital",
    //     categorySubtitle: "Shareholder's Liability is limited to the unpaid amount of their shares. This safeguards personal assests from business liabilities."
    // }
    // ]