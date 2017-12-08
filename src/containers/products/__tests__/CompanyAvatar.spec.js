import React from 'react';
import renderer from 'react-test-renderer';
import CompanyAvatar from 'containers/products/CompanyAvatar';

describe('Render different avatar', () => {
  it('Render list of avatar', () => {

    [{
      match:{
        params: { companyId: "unilever" }
      }
    },
    {
      match:{
        params: { companyId: "apple" }
      }
    },{
      match:{
        params: { companyId: "nike" }
      }
    },{
      match:{
        params: { companyId: "ford" }
      }
    }, {
      match:{
        params: {}
      }
    }].forEach(el =>{
      const component = renderer.create(<CompanyAvatar {...el} />); 
      expect(component).toMatchSnapshot();
    });
  });
})