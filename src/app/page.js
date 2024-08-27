import { Container, Typography } from "@mui/material";
import SearchBox from "./components/SearchBox";
import FoodCategoryCard from "./components/FoodCategoryCard";
import PhoneNumberInput from "./components/PhoneNumberInput";
import FoodCard from "./components/MyCard";
import Otpcode from "./components/OtpCode";
import MyCard from "./components/MyCard";
import FoodCategorySlider from "./components/FoodCathegorySlider";
import FoodMenuSlide from "./components/FoodMenuSlide";
import Img from "./components/Img";
import DiscountItem from "./components/DiscountItem";
import Footer from "../app/components/Footer";
import FooterDeskTop from "../app/components/FooterDesTop";
import AllMenu from "./components/AllMenu";
import AllDiscountedMenu from "./components/AllDiscountedFood";

export default function Home() {
  return (
    <>
      <Container>
        <SearchBox />
        <FoodCategorySlider />
        {/* <Img /> */}
        <FoodMenuSlide />
        <DiscountItem />
        <Footer />
      </Container>
      <FooterDeskTop />
    </>
  );
}
