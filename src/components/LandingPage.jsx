import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FeaturedHero from "./FeaturedHero";
import { UserContext } from "../contexts/UserContext";
import { Loading } from "./Loading";

const LandingPage = () => {
  const { user } = useContext(UserContext);

  // Map your old slides to the new hero items
  const items = [
    {
      id: 10,
      title: "Super Rhino Hero",
      href: "/reviews/10",
      image: "https://images.pexels.com/photos/4691579/pexels-photo-4691579.jpeg?w=1200&h=800&auto=compress&cs=tinysrgb",
      tag: "Review",
    },
    {
      id: 8,
      title: "Scythe; you're gonna need a bigger table!",
      href: "/reviews/8",
      image: "https://images.pexels.com/photos/4200740/pexels-photo-4200740.jpeg?w=1200&h=800&auto=compress&cs=tinysrgb",
      tag: "Feature",
    },
    {
      id: 23,
      title: "Escape The Dark Castle",
      href: "/reviews/23",
      image: "https://images.pexels.com/photos/5439508/pexels-photo-5439508.jpeg?w=1200&h=800&auto=compress&cs=tinysrgb",
      tag: "Review",
    },
    {
      id: 6,
      title: "Build your own Tour de Yorkshire",
      href: "/reviews/6",
      image: "https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?w=1200&h=800&auto=compress&cs=tinysrgb",
      tag: "Opinion",
    },
    {
      id: 9,
      title: "Settlers of Catan: Don't Settle For Less",
      href: "/reviews/9",
      image: "https://images.pexels.com/photos/1153929/pexels-photo-1153929.jpeg?w=700&h=700",
      tag: "Opinion",
    },
  ];
  

  return (
    <main className="bg-brandLight dark:bg-brandDark">
      <FeaturedHero items={items} />
      <div className="h-110 bg-brandLight dark:bg-brandDark ">
      {/* Extra page Space div*/}
    </div>
    </main>
  );
};

export default LandingPage;
