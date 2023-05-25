import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HomeCategoryCard from "./HomeCategoryCard";
import AOS from "aos";

const HomeCategoryTab = () => {
  const categories = ["Teddy Bear", "Horse", "Dinosaur"];

  const [selectedCategory, setSelectedCategory] = useState("teddy bear");
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(
      `https://back-end-assignment-11-rtrana2023-gmailcom.vercel.app/toys/category?category=${selectedCategory}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setToys(responseData);
        isLoading(!loading);
      })
      .catch((error) => console.log(error.message));
  }, [selectedCategory]);

  return (
    <>
      <div className="text-center mb-6 mt-16">
        <h1 className="font-bold text-3xl ">Shop By Category</h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>Animal Toys</Tab>
          <Tab>Sports Toys</Tab>
          <Tab>Cooking Toys</Tab>
        </TabList>

        <TabPanel>
          <Tabs>
            <TabList>
              {categories.map((category, idx) => (
                <Tab
                  key={idx}
                  onClick={() =>
                    setSelectedCategory(category.toLocaleLowerCase())
                  }
                >
                  {category}
                </Tab>
              ))}
            </TabList>

            {categories.map((category, idx) => {
              return (
                <TabPanel key={idx} className="px-6 ">
                  <div data-aos="fade-up"
                      data-aos-anchor-placement className="grid md:grid-cols-3 w-full gap-6 md:gap-8">
                    {toys.map((toy) => (
                      <HomeCategoryCard key={toy._id} toy={toy} />
                    ))}
                  </div>
                </TabPanel>
              );
            })}
          </Tabs>
        </TabPanel>
        <TabPanel>
          <h2>content coming soon</h2>
        </TabPanel>
        <TabPanel>
          <h2>content coming soon</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default HomeCategoryTab;
