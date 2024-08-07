import GlobalStyle from "../../style/GlobalStyles";
import { Page } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Carousel from "../../Components/Carousel";
import VideoBanner from "../../Components/VideoBanner";
import SectionTitle from "../../Components/SectionTitle";
import NewIn from "../../Components/NewIn";
import StyleFeed from "../../Components/StyleFeed";
import BottomInfo from "../../Components/BottomInfo/BottomInfo";
import Footer from "../../Components/Footer/";
import newInInfo from "./newInInfo";
import styleFeed from "./StyleFeed";
import CarouselArray from "./CarouselArray";

function Men() {
  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <Banner
        imgSrc={"/assets/Men/NewInSummer.webp"}
        altSRc={"New in Summer image"}
        linkSrc={"Men-NewInSummer-50607"}
      ></Banner>
      <Banner
        imgSrc={"/assets/Men/modernStaples.jpg"}
        altSRc={"Modern Staple Image"}
        linkSrc={"Men-ModernStaple-50606"}
      ></Banner>
      {/* Asos looks good and Image carousel */}
      <SectionTitle
        justifyContent="center"
        Title="ASOS LOOKS GOOD ON YOU"
      ></SectionTitle>
      <Carousel array={CarouselArray}></Carousel>
      <Banner
        imgSrc={"/assets/Men/yourMostHyped.webp"}
        altSRc={"Your Most hyped"}
        linkSrc={"Men-MostHyped-16776"}
      ></Banner>
      <Banner
        imgSrc={"/assets/Men/topman.webp"}
        altSRc={"Topman Brand"}
        linkSrc={"Men-TopMan-50451"}
      ></Banner>
      <Banner
        imgSrc={"/assets/Men/disneyAsos.avif"}
        altSRc={"Disney Brand"}
        linkSrc={"Men-Disney-50607"}
      ></Banner>
      <Banner
        imgSrc={"/assets/Men/nike.jpg"}
        altSRc={"Nike Brand"}
        linkSrc={"Men-Nike-4766"}
      ></Banner>
      <VideoBanner videoSrc={"/assets/Men/brandsToKnow.mp4"}></VideoBanner>
      {/* New In */}
      <SectionTitle Title="New In" justifyContent="flex-start"></SectionTitle>
      <NewIn newInInfo={newInInfo}></NewIn>

      {/* The style Feed */}
      <SectionTitle
        Title="The style Feed"
        justifyContent="flex-start"
      ></SectionTitle>
      <StyleFeed styleFeedArray={styleFeed}></StyleFeed>
      <BottomInfo useMen={true}></BottomInfo>
      <Footer></Footer>
    </Page>
  );
}

export default Men;
