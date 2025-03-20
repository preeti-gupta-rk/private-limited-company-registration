import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
interface CategoryItem {
  categoryTitle: string;
  categorySubtitle: string;
}

interface CategoriesProps {
  state: string;
  categoriesContent: {
    para: string;
    CategoriesArrayData: CategoryItem[]
    columns: any
  }
}

const tableData = [
  {
    "categoryTitle": "General Private Limited Company",
    "categorySubtitle": "A standard Private Limited Company suitable for small and medium-sized businesses across various industries."
  },
  {
    "categoryTitle": "Startup Focused Companies",
    "categorySubtitle": "These registrations support innovative ventures with access to government incentives and funding, helping startups accelerate growth and market entry in Maharashtra."
  },
  {
    "categoryTitle": "NRI Private Limited Companies",
    "categorySubtitle": "Designed for non-resident Indians, this category simplifies cross-border ownership while ensuring compliance with local regulations, providing a secure structure for investment management and operational control."
  },
  {
    "categoryTitle": "Sector-Specific Registrations",
    "categorySubtitle": "This category provides tailored compliance solutions for specialized industries like IT, manufacturing, pharmaceuticals, and retail, addressing specific challenges while supporting sustainable growth."
  },
  {
    "categoryTitle": "Family-Owned Business Registrations",
    "categorySubtitle": "This category suits family-run businesses seeking to formalize operations and boost credibility, with simplified governance and clear succession planning for effective management."
  },
  {
    "categoryTitle": "Expansion & Multi-location Ventures",
    "categorySubtitle": "This registration option aids companies planning to scale in multiple regions by simplifying expansion and management. It helps businesses capitalize on local opportunities while preserving a unified corporate identity in Maharashtra."
  }
]

const Categories = (props: CategoriesProps) => {
  const { para, CategoriesArrayData, columns } = props.categoriesContent;
  const { state } = props;

  return (
    <section className='category-section' id="categories">
      <div className="category-main-container">
        <h1 className='category-h1'>
          Top <span className='category-span'>Categories </span> of a Private Limited Company in {state}
        </h1>
        <p className='category-p'>{para}</p>
        {/* <div className='category-card-grid-container'>
                    {CategoriesArrayData.map((category: CategoryItem, index: number) => (
                        <div key={index} className='category-card'>
                            <h2>{index + 1}. {category.categoryTitle}</h2>
                            <span className='category-separator'></span>
                            <p className='category-p'>{category.categorySubtitle}</p>
                        </div>
                    ))}
                </div> */}

        <div className='category-card-table'>
          <MDBTable align='middle'>
            <MDBTableHead className='gradient-bg'>
              <tr className='table-active'>
                {columns.map((col: any, index: number) => (
                  <th key={index} scope='col'>{col.label}</th>
                ))}
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {CategoriesArrayData.map((row: any, idx: number) => (
                <tr key={idx}>
                  {columns.map((col: any, index: number) => (
                    <td key={index}>
                      <div className='d-flex align-items-center justify-content-center'>
                        <p className='mb-1' style={{ textAlign: "left" }}>{row[col.key]}</p>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </section>
  )
}

export default Categories

