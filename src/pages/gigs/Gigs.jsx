import React, { useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR & GRAHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Bugged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">
              {sort === "sales" ? "Newest" : "Best Selling"}
            </span>
            <img
              src="./images/down.png"
              alt=""
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "Best Selling" ? (
                  <span onClick={() => reSort("sales")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("Best Selling")}>
                    Best Selling
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard item={gig} key={gig.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
