"use client";
import React from "react";
import Popover from "@/components/ui/popover";

export const Banner: React.FC = () => {
  return (
    <section className="main">
      <div className="container" style={{ padding: 0 }}>
        <div className="row">
          <h2>
            <div className="line line_1">
              <span style={{ position: "relative", display: "flex" }}>
                Dumka
                {/* {" "}
                <TypewriterEffect
                  words={[
                    {
                      text: "Dumka",
                      className:
                        "font-bold text-center text-white relative z-20 text-2xl sm:text-6xl md:text-7xl lg:text-8xl",
                    },
                  ]}
                /> */}
              </span>
            </div>
            <div className="line">
              <span>Bring Order to Chaos.</span>
            </div>

            {/* <div className="line">
              <span> Workspace for Ideas.</span>
            </div> */}
          </h2>
          <div
            className=" mt-4"
            style={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                zIndex: 2,
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Popover />
            </div>
            {/* <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              More about us
            </a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ marginLeft: "4px" }}
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg> */}
          </div>
        </div>
      </div>
    </section>
  );
};
