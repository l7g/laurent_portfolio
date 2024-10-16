//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DownloadButton from "@/components/DownloadButton";
import WorkInProgress from "@/components/WorkInProgress";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl ">
              Fullstack Developer | European Studies Student
            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent-light dark:text-accent-dark">
                Laurent Gagné
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-text-light/80 dark:text-text-dark/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
              <br /> I also excel in analytical thinking and problem solving,
              skills gained through a thorough study of European history and
              politics.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadButton />
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-light dark:border-accent-dark rounded-full flex justify-center items-center text-accent-light dark:text-accent-dark text-base hover:bg-accent-light dark:hover:bg-accent-dark hover:text-text-light dark:hover:text-text-dark hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            {/*  <Photo /> */}
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
