import React from 'react'
import { useLocation } from 'react-router-dom'

import { branchData } from '../../js/data/branch';

function Branch(props) {
  
  const {state} = useLocation();
  const {local} = state;
  
  const selData = branchData[local];
  console.log(local, selData);

  return (
    <div>
      <h1>Branch {selData.name}</h1>
    </div>
  )
}

export default Branch