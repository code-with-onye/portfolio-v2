import type { ReactNode } from "react";
import clsx from "clsx";

import { Andika } from "@next/font/google";

import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { footer } from "@/data";

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
        "w-full text-slate-100 antialiased bg-primary h-screen relative  flex items-center justify-center ",
      ])}
    >
      {props.meta}
      <div
        className={clsx([andika.className, "flex flex-col items-center px-2 "])}
      >
        <Header />
        <div className="">{props.children}</div>
        <Footer footer={footer} />
      </div>
    </div>
  );
};

export { Main };
