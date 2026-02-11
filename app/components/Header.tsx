import { Typography } from "@mui/material";
import ImageDragable from "./ImageDragable";
import TextAnimation from "./TextAnimation";

const Header = () => {
  return (
    <div className="w-full h-fit">
      <TextAnimation />
      <ImageDragable />
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "22px",
          fontSize: "20px",
          color: "#858584",
          fontWeight: "600",
        }}
      >
        Parsa Dehghan Pour Farashah
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "4px",
          fontSize: "20px",
          color: "#858584",
          fontWeight: "600",
        }}
      >
        Front-End Developer
      </Typography>
    </div>
  );
};

export default Header;
