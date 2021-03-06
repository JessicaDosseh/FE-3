import React, { useEffect } from 'react'; 
import { makeStyles} from "@material-ui/core/styles";
import ProductList from '../../React1/ProductListSkeleton'
import UserProfile from './UserProfile'
import ProductMenu from './ProductMenu'; 

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-start",
  },
  leftCont: {
    display: "flex",
    width: "25%",
  },
  fixed: {
    position: "fixed",
    width: "25%"
  },
  rightCont: {
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    width: "75%",
  },
  mainTitle: {
    color: "white",
    marginLeft: "10%"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: 700,
    display: "flex",
    alignItems: "center"
  }
});

const Dashboard = () => {

  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.leftCont}>
        <div className={classes.fixed}>
        <UserProfile />
        </div>
      </div>
      <div className={classes.rightCont}>
        <ProductMenu />
        <ProductList />
      </div>
    </div>
  )

}

export default Dashboard; 