import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

const ProductCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.pinimg.com/originals/4c/a3/1e/4ca31e5343e89bc550044caec29543e6.jpg"
        alt="Jeff"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {props.price}
        </Typography>
      </CardContent>
      <Stack direction="row" spacing={2} justifyContent="right">
        <CardActions>
          <Button variant="outlined" onClick={() => setExpanded(!expanded)}>
            {expanded ? "^" : "v"}
          </Button>
          <FormControl size="small" variant="outlined">
            <Select defaultValue={1}>
            {[...Array(8)].map((_, i) => (
                <MenuItem key={i} value={i + 1}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained">Add to Cart</Button>
        </CardActions>
      </Stack>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h7">Details:</Typography>
          <Typography paragraph>{props.details}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProductCard;
