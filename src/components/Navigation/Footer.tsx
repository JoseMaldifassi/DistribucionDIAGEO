import React from "react";
import { cn } from "../../utils/cn";

export default function Footer() {
  const colums = [
    {
      sectionClassName: "items-center",
      body: (
        <p>
          We are a global leader in beverage alcohol with an outstanding
          collection of brands across spirits and beer.
        </p>
      ),
    },
    {
      sectionClassName: "items-center",
      body: (
        <>
          <a href="">Contact us</a>
          <h3 className="justify-center">Follow us</h3>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <a href="">Instagram</a>
            <a href="">Twiter</a>
            <a href="">Linkedin</a>
            <a href="">YouTube</a>
          </div>
        </>
      ),
    },
    {
      sectionClassName: "items-end",
      body: (
        <>
          <a href="">Disclaimer</a>
          <a href="">Privacy Policy</a>
          <a href="">Conditions of Use</a>
          <a href="">Accessibility</a>
          <a href="">Community Guidelines</a>
        </>
      ),
    },
    ,
  ];

  return (
    <footer
      className="flex flex-row justify-between items-center
    border-t-2 bg-primary-200"
    >
      <div className="flex flex-col w-full">
        <h4 className="p-3">DIAGEO</h4>
        <div className="flex flex-row justify-between">
          {colums.map((column) => (
            <section
              className={cn(
                "flex flex-col p-3 w-1/3",
                column?.sectionClassName
              )}
            >
              {column?.body}
            </section>
          ))}
        </div>
        <div className="flex flex-col "></div>
      </div>
    </footer>
  );
}
