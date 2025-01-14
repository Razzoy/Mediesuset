import { NewsCard } from "../components/NewsCard/NewsCard";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { Hero } from "../components/Hero/Hero";
import { Section } from "../components/Section/Section";
import { useGet } from "../hooks/useGet";
import { NavLink } from "react-router-dom";

export function FrontPage() {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/news"
  );

  return (
    <div>
      <Hero
        imgSrc={"crowd3-foto-colourbox.jpg"}
        imgPosition={"100% 80%"}
        alt={"crowd"}
      />
      <Section title={"NYHEDER"}>
        <GridContainer columns={3} gap={'3rem'}>
          {!isLoading &&
            data?.items.sort(() => Math.random() - 0.5) //
            .slice(0, 6).map((item) => {
              return (
                <NewsCard key={item.id}
                  img={item.image}
                  alt={item.title}
                  title={item.title}
                  content={item.teaser}
                  link={`/news/${item.id}`}
                />
              );
            })}
        </GridContainer>
      </Section>
    </div>
  );
}
