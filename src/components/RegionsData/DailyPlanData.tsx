import Waterfall from "../../assets/Images/Waterfall.png";
import River from "../../assets/Images/River.png";
import GeysirImage from "../../assets/Images/Geysir.png";
import Thingvellir from "../../assets/Images/Thingvellir.png";

export const dailyPlanData = [
  {
    day: "Day 1",
    time: "40m",
    plans: [
      {
        subTitle: "Curator’s pick",
        description: "1h · Iconic hike · Light traffic",
        image: Waterfall,
        title: "Reykjadalur Valley",
        curator: true,
      },
      {
        subTitle: "Curator’s pick",
        description: "1h · Iconic hike · Light traffic",
        image: River,
        title: "Gullfoss Waterfall",
        curator: true,
      },
    ],
  },
  {
    day: "Day 2",
    time: "1h 40m",
    plans: [
      {
        subTitle: "Curator’s pick",
        description: "1h · Iconic hike · Light traffic",
        image: GeysirImage,
        title: "Geysir Thermal Field",
        curator: true,
      },
      {
        subTitle: "Curator’s pick",
        description: "1h · Iconic hike · Light traffic",
        image: Thingvellir,
        title: "Thingvellir",
        curator: true,
      },
    ],
  },
];
