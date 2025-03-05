import React from 'react'
import { usePurchaseStore } from '../store/usePurchaseStore.js'

const SuccessPage = () => {
  const  {booking} = usePurchaseStore();
  
  console.log(booking);
  return (
    <div>SuccessPage</div>
  )
}

export default SuccessPage