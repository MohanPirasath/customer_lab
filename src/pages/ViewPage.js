import React from "react";
import "./ViewPage.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
// import PaperComponent from "./Popup.js"
import ResponsiveDialog from "./Popup.js"

export default function ViewPage() {
  return (
    <div className="View">
      <div className="Nav">
        <div className="Nav_icon">
          {/* <h1 className='icon'><KeyboardArrowLeftIcon sx={{fontSize:"2rem"}} /> </h1> */}
          <Button
            className="h2"
            sx={{ color: "white", fontSize: "medium", fontWeight: "600" }}
            startIcon={<KeyboardArrowLeftIcon />}
          >
            View Audience
          </Button>
        </div>
      </div>
      <div className="Button">
        {/* <Button
          variant="outlined"
          color="success"
          sx={{
            borderColor: "black",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          save segment
        </Button> */}
        {/* <button className='button'>Save segment</button> */}
        {/* <PaperComponent /> */}
        {/* <DraggableDialog /> */}
        <ResponsiveDialog />
      </div>
    </div>
  );
}
