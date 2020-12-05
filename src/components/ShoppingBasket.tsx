import React from "react"
import { Container, Box } from "@material-ui/core"
import { Provider } from "react-redux"

import { store } from "../store"
import { Basket } from "../components/Basket"
import { Products } from "../components/Products"

const ShoppingBasket = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Box mt={5} mb={5}>
          <Products />
        </Box>
        <Box mt={5} mb={5}>
          <Basket />
        </Box>
      </Container>
    </Provider>
  )
}

export default ShoppingBasket
