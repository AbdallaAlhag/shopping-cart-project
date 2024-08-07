/* eslint-disable react/no-unescaped-entities */
// import styled from "styled-components";
import GlobalStyle from "../../style/GlobalStyles";
import { Page } from "../../style/CommonComponents";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Carousel from "../../Components/Carousel";
import SectionTitle from "../../Components/SectionTitle";
import NewIn from "../../Components/NewIn";
import StyleFeed from "../../Components/StyleFeed";
import BottomInfo from "../../Components/BottomInfo/BottomInfo";
import Footer from "../../Components/Footer/";
import newInInfo from "./newInInfo";
import styleFeed from "./StyleFeed";
import CarouselArray from "./CarouselArray";

function Women() {
  return (
    <Page>
      <GlobalStyle />
      <Header></Header>
      <Banner
        imgSrc={"/assets/Women/unrealFinds.jpg"}
        altSRc={"Unreal Finds, Unreal Summer"}
        linkSrc={"Women-UnrealFinds-51449"}
      ></Banner>
      <Banner
        imgSrc={"/assets/Women/summerDresses.webp"}
        altSRc={"Summer dresses"}
        linkSrc={"Women-SummerDresses-50597"}
      ></Banner>
      <SectionTitle
        justifyContent="center"
        Title="ASOS LOOKS GOOD ON YOU"
      ></SectionTitle>
      <Carousel array={CarouselArray}></Carousel>
      <Banner
        imgSrc={"/assets/Women/topshop.webp"}
        altSRc={"TopShop"}
        linkSrc={"Women-TopShop-29298"}
      ></Banner>
      <Banner
        imgSrc={"/assets/Women/yourMostHypedWomen.webp"}
        altSRc={"Your most hyped"}
        linkSrc={"Women-MostHyped-51674"}
      ></Banner>
      <Banner
        imgSrc={"/assets/Women/MangoBrand.avif"}
        altSRc={"Mango Brand"}
        linkSrc={"Women-Mango-8264"}
      ></Banner>
      <Banner
        imgSrc={"/assets/Women/reclaimedVintage.webp"}
        altSRc={"Reclaimed Vintage Brand"}
        linkSrc={"Women-ReclaimedVintage-11248"}
      ></Banner>
      <SectionTitle Title="New In" justifyContent="flex-start"></SectionTitle>
      <NewIn newInInfo={newInInfo}></NewIn>
      <Banner
        imgSrc={"/assets/Men/disneyAsos.avif"}
        altSRc={"Disney Brand"}
        linkSrc={"Women-Disney-50451"}
      ></Banner>
      <Banner
        imgSrc={"/assets/Women/ghdDuetBlowdryBrush.avif"}
        altSRc={"ghd Duet Blowdry Brush"}
        linkSrc={"Women-ghdDuetBlowdryBrush-26316"}
      ></Banner>
      <SectionTitle
        Title="The style Feed"
        justifyContent="flex-start"
      ></SectionTitle>
      <StyleFeed styleFeedArray={styleFeed}></StyleFeed>
      <BottomInfo useMen={false}></BottomInfo>
      <Footer></Footer>
    </Page>
  );
}

export default Women;

