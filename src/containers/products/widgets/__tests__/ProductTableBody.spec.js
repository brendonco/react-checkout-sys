import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTableBody } from 'containers/products/widgets';

describe('Render ProductsContent', () => {
  it('Renders products', () => {
    const mockProducts = [
      {
        "id": "classic",
        "name": "Classic Ad",
        "price": "269.99",
        "sortOrder": 1,
        "specialPriceRules": [
          {
            "code": "3for2",
            "companyIds": [
              "unilever"
            ]
          },
          {
            "code": "5for4",
            "companyIds": [
              "ford"
            ]
          }
        ],
        "displayPrice": "3,239.88"
      },
      {
        "id": "standout",
        "name": "Standout Ad",
        "price": "322.99",
        "sortOrder": 2,
        "specialPriceRules": [
          {
            "code": "7forLess",
            "companyIds": [
              "apple"
            ],
            "price": "299.99"
          },
          {
            "code": "4forLess",
            "companyIds": [
              "ford"
            ],
            "price": "309.99"
          }
        ],
        "displayPrice": "7,105.78"
      },
      {
        "id": "premium",
        "name": "Premium Ad",
        "price": "394.99",
        "sortOrder": 3,
        "specialPriceRules": [
          {
            "code": "4orMore",
            "companyIds": [
              "nike"
            ],
            "price": "379.99"
          },
          {
            "code": "3orMore",
            "companyIds": [
              "ford"
            ],
            "price": "389.99"
          }
        ],
        "displayPrice": "126,916.66"
      }
    ]
    
    const component = renderer.create(<ProductTableBody products={mockProducts} handleQtyChange={(e) => {}}/>);

    expect(component).toMatchSnapshot();
  })
})