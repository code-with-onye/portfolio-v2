import type { ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";

import { Andika } from "@next/font/google";

import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { footer } from "@/data";

import graph from "@/public/assets/images/graph.svg";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const andika = Andika({
  weight: "400",
  subsets: ["latin"],
  display: "optional",
  style: "normal",
});

const Main = (props: IMainProps) => {
  return (
    <div
      className={clsx([
        "w-full text-slate-100 antialiased bg-primary h-screen relative  flex items-center justify-center overflow-hidden ",
      ])}
    >
      {props.meta}
      <div
        className={clsx([andika.className, "flex flex-col items-center px-2 "])}
      >
        <Header />
        <div className="flex items-center justify-center absolute inset-y-4 px-2">
          {props.children}
        </div>
        <Image src={graph} alt="graph" className="absolute lg:top-1" />
        <Footer footer={footer} />
      </div>
    </div>
  );
};

export { Main };
