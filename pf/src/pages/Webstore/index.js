import React from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import ProductCard from "../../components/webstore/ProductCard";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

const Webstore = () => {
  return (
    <React.Fragment className="webstore">
      <NavBar />
      <Typography variant="h2" className="webstore_title">
        Welcome to the (WIP) Webstore
      </Typography>
      <Typography variant="h4 " className="webstore_description" sx={{ margin: 2 }}>
        This is a project I'm currently working on.
        <br />
        On the face of it, it's a webstore that displays a variety of products
        pulled from a database via an API.
        <br />
        but, Not only is it a demonstration of my ability to create a webstore,
        it's also an exercise in Object Oriented Programming.
      </Typography>
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
          image="https://i.imgur.com/o3eFWf0.jpg"
          name="Greg"
          price="£5.99"
          details="This is Greg, he's a big guy with a big heart and a big pointy thing on his face"
        />
        <ProductCard
          image="https://i.pinimg.com/originals/4c/a3/1e/4ca31e5343e89bc550044caec29543e6.jpg"
          name="Jeff"
          price="£1.99"
          details="This is Jeff, a classic little critter that will bring joy to your life"
        />
        <ProductCard
          image="https://i.imgur.com/tFzOh0V.jpg"
          name="Brenda"
          price="£3.99"
          details="This is Brenda, she's a bit of a weirdo but she's got a heart of gold"
        />
        <ProductCard
          image="https://i.imgur.com/qnjgZE7.jpg"
          name="Gerald"
          price="£2.99"
          details="This is Gerald, he's a an agressive little guy honestly, I wouldn't recommend him"
        />
        <ProductCard
          image="https://i.imgur.com/yeV5Aeq.jpg"
          name="Sandra"
          price="£4.99"
          details="This is Sandra. She's uhhhhhh...I'm sorry uhh she's basically a bug or something I dunno"
        />
        <ProductCard
          image="https://i.imgur.com/8crWihc.jpg"
          name="Dave"
          price="£0.99"
          details="This is Dave. Dave stinks. Don't buy Dave"
        />
        <ProductCard
          image="https://i.imgur.com/hbJrpIz.jpg"
          name="Archibald"
          price="£6.99"
          details="This is Archibald. I'm not sure what he is but he's got some long arms"
        />
        <ProductCard
          image="https://i.imgur.com/4R9Vc3v.jpg"
          name="Bungus"
          price="£4.99"
          details="This is Bungus. He's a fun guy hahahahahaha (he has cordyceps)"
        />
      </Grid>
    </React.Fragment>
  );
};

export default Webstore;
