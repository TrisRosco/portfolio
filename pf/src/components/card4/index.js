import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { motion } from "framer-motion";
import { height, maxHeight } from "@mui/system";

export default function Card4() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <motion.div>
    <List
      sx={{
        width: "100%",
        maxWidth: 480,
        bgcolor: "#ff5090",
        borderRadius: "10px",
        border: "none",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        allignItems: "center",
        justifyContent: "center",
        display: "inline-block",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary="Let's get this awful beach sorted!"
          sx={{
            bgcolor: "white",
            width: "100%",
            height: "100%",
            maxWidth: 300,
            maxHeight: 100,
            borderRadius: "5px",
            border: "none",
            boxShadow: "inset 2px 2px 2px 0px rgba(0,0,0,0.35)",
            allignItems: "center",
            justifyContent: "center",
            display: "inline-block",
          }}
        />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            bgcolor: "white",
            height: "100%",
            maxHeight: 100,
            borderRadius: "5px",
            border: "none",
          }}
        >
          <ListItemText primary="This beach SUCKS, honestly. We really need to sort it" />
          <ListItemText primary="I propose that we all bring one big henry hoover" />
        </List>
      </Collapse>
    </List>
    </motion.div>
  );
}
