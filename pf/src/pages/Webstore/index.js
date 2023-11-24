import React from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import Checkout from "../../components/webstore/Checkout";
import ProductCard from "../../components/webstore/ProductCard";
import Grid from "@mui/material/Unstable_Grid2";

const Webstore = () => {
  return (
    <React.Fragment className="webstore">
      <NavBar />
      <Grid
        className="webstore_container"
        container
        spacing={2}
        display={"flex"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ProductCard
          name="Jeff"
          price="£1.99"
          details="Look at this funny little fella"
        />
        <ProductCard
          name="James"
          price="£0.99"
          details="This fella isn't great, but he's cheap"
        />
        <ProductCard
          name="Josh"
          price="£8.99"
          details="This fella is a premium fella, honestly he's not worth it"
        />
        <ProductCard
          name="Jeff"
          price="£1.99"
          details="Look at this funny little fella"
        />
        <ProductCard
          name="Jeff"
          price="£1.99"
          details="Look at this funny little fella"
        />
        <ProductCard
          name="James"
          price="£0.99"
          details="This fella isn't great, but he's cheap"
        />
        <ProductCard
          name="Josh"
          price="£8.99"
          details="This fella is a premium fella, honestly he's not worth it"
        />
        <ProductCard
          name="Jeff"
          price="£1.99"
          details="Look at this funny little fella"
        />
      </Grid>
      <Checkout />
    </React.Fragment>
  );
};

export default Webstore;
