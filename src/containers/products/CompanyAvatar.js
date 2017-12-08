import React from 'react';

const CompanyAvatar = ({
  match:{
    params: { companyId = "default" } = {}
  }
}) => {
  return <img className="company__avatar" src={require(`assets/images/${companyId}-logo.svg`)} alt='avatar' />;
};

export default CompanyAvatar;
