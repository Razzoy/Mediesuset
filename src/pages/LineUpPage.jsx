import { FilterBar } from "../components/FilterBar/Filterbar";
import { Hero } from "../components/Hero/Hero";
import { Section } from "../components/Section/Section";
import { useGet } from "../hooks/useGet";
import { LineUpCard } from "../components/LineUpCard/LineUpCard";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { useState } from "react";
import { convertTimeStampToDate } from "../helpers/convertTimeStampToDate";

export function LineUpPage() {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/events"
  );

  const [selectedStage, setSelectedStage] = useState("A-Å");

  // const stageColors = {
  //   "Rød scene": "red",
  //   "Blå scene": "blue",
  //   "Grøn scene": "green",
  //   "Lilla scene": "purple",
  //   default: "grey",
  // };

  const filteredData = !isLoading ? data?.items.filter((item) => selectedStage && selectedStage !== "A-Å" ? item.stage_name.toLowerCase() === selectedStage.toLowerCase() : true)

  // const getFilteredItems = () => {
  //   if (!data?.items) return[];

  //   switch (selectedStage) {
  //     case "RØD SCENE":
  //     case "BLÅ SCENE":
  //     case "GRØN SCENE":
  //     case "LILLA SCENE":
  //       return data.items.filter(
  //         (item) => 
  //           item.stage_name &&
  //         item.stage_name.toUpperCase() === selectedStage
  //       );
    
  //     default:
  //       return data.items;
  //   }
  // }

  // const filteredItems = getFilteredItems();

  return (
    <div>
      <Hero
        imgSrc={"crowd3-foto-colourbox.jpg"}
        imgPosition={"100% 80%"}
        alt={"crowd"}
      />
      <Section title={"LINE UP"}>
        <FilterBar onClickFilter={setSelectedStage}
        />
        <GridContainer columns={"3"} gap={"1rem"}>
          {!isLoading &&
            filteredData.items.map((item) => {
              return (
                <LineUpCard
                  key={item.id}
                  img={item.image}
                  alt={item.title}
                  title={item.title}
                  date={convertTimeStampToDate(item.datetime)}
                  stageColor={
                    stageColors[item.stage_name] || stageColors.default
                  }
                />
              );
            })}
        </GridContainer>
      </Section>
    </div>
  );
}
