import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeCategoryTab from "../../Components/HomeCategoryTab/HomeCategoryTab";
import HomeGallery from "../../Components/HomeGallery/HomeGallery";
import PopularToys from "../../Components/PopularToys/PopularToys";
import TrendingToy from "../../Components/TrendingToy/TrendingToy";


const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <HomeGallery />
      <HomeCategoryTab />
      <TrendingToy/>
      <PopularToys/>
    </>
  );
};

export default HomePage;
