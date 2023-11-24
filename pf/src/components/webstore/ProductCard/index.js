import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Stack from "@mui/material/Stack";

const ProductCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card sx={{ maxWidth: 345, margin: 2, boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ width: 345 }}>
          <img
            src="https://i.pinimg.com/originals/4c/a3/1e/4ca31e5343e89bc550044caec29543e6.jpg"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-lg">{props.name}</Typography>
        <Typography level="body-md">{props.price}</Typography>
      </CardContent>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <CardActions>
          <Stack direction="row" flexGrow={1}>
            <IconButton
              variant="outlined"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Stack>
        </CardActions>
        <CardActions>
          <Stack direction="row" spacing={1}>
            <FormControl size="small" variant="outlined">
              <Select defaultValue={1}>
                {[...Array(8)].map((_, i) => (
                  <Option key={i} value={i + 1}>
                    {i + 1}
                  </Option>
                ))}
              </Select>
            </FormControl>
            <Button>Add to Cart</Button>
          </Stack>
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
