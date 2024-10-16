"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum omnis!",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum omnis!",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum omnis!",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum omnis!",
    href: "",
  },
];

import { motion } from "framer-motion";
import WorkInProgress from "@/components/WorkInProgress";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline-light dark:text-outline-dark group-hover:text-outline-light-hover dark:group-hover:text-outline-dark-hover text-transparent dark:text-transparent group-hover:text-transparent dark:group-hover:text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-secondary-light dark:bg-secondary-dark group-hover:bg-accent-light dark:group-hover:bg-accent-dark transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-text-light dark:text-accent-dark dark:group-hover:text-text-dark text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-text-light dark:text-text-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-all duration-500">
                  {service.title}
                </h2>
                {/* desc */}
                <p className="text-text-light/60 dark:text-text-dark/60">
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b border-primary-light/40 dark:border-secondary-dark/40 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
