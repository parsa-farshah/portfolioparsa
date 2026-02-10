import ImageDragable from "./ImageDragable";
import TextAnimation from "./TextAnimation";

const Header = () => {
  return (
    <div className="w-full h-fit">
      <TextAnimation />

      <ImageDragable />
    </div>
  );
};

export default Header;
