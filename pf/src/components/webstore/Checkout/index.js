import React, { useState } from "react";
import "./styles.css";
import Dialog from "@mui/material/Dialog";

const Checkout = () => {
    const [open, setOpen] = useState(true);
    
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>

        I am a dialog look at me
        <button onClick={() => setOpen(false)}>Alrighty then...</button>
      </Dialog>
    </>
  );
};

export default Checkout;
