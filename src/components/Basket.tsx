import React from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Typography,
  Grid,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useSelector } from "react-redux"
import {store} from '../store'
import {remove,addQty,removeQty} from '../slices'

import { Product } from "../global"



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    },
    listItem: {
      padding: theme.spacing(1, 0),
      justifyContent: "flex-end"
    },
    total: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize * 2
    }
  })
)

const Basket = () => {
  const classes = useStyles({})
  const products = useSelector((state: Product[]) => state)
  const productsInBasket = products.filter(product => product.added&&product.qty>0).reduce((acc, current) => (acc += (current.qty)), 0)
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Shopping Basket
      </Typography>
      <Typography component="p" variant="body1">
       {`You have ${productsInBasket} products in basket.`}
      </Typography>
      <List className={classes.root}>
        {products
          .filter(product => product.added)
          .map((product: Product) => (
            <React.Fragment key={product.id}>
              <ListItem alignItems="flex-start">
                <Grid>
                  <Grid item>
                  <ListItemAvatar>
                    <Avatar alt="Product" src={product.imageUrl} />
                  </ListItemAvatar>             
                  </Grid>
                  <Grid item>
                  <ListItemText
                  primary={product.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        &pound;{(product.price / 100).toFixed(2)}
                      </Typography>
                      {` — ${product.description}`}
                    </React.Fragment>
                    }
                    />
                  </Grid>
                  <Grid item>
                  <ListItemSecondaryAction>
                  <IconButton
                   aria-label="remove"
                   onClick={()=>store.dispatch(removeQty({id:product.id}))}
                  >
                    <RemoveCircleIcon/>
                  </IconButton>
                  <IconButton>
                    {product.qty}
                  </IconButton>
                  <IconButton
                   aria-label="add"
                   onClick={()=>store.dispatch(addQty({id:product.id}))}
                  >
                    <AddCircleOutlineIcon/>
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => store.dispatch(remove({ id: product.id }))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        <ListItem className={classes.listItem}>
          <Typography variant="subtitle1" className={classes.total}>
            &pound;
            {(
              products
                .filter(product => product.added&&product.qty>0)
                .reduce((acc, current) => (acc += (current.price*current.qty)), 0) / 100
            ).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </>
  )
}

export { Basket }
