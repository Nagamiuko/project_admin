import { configureStore } from '@reduxjs/toolkit'
import { getUserAll } from './reduce/users'
import { getProductAll } from './reduce/product'
import { getWithdramAll } from './reduce/withdram'
const Store = configureStore({
   reducer: {
      user:getUserAll,
      product:getProductAll,
      withdram:getWithdramAll,
   }
})

export default Store