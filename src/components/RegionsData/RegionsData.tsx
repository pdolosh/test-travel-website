import Waterfall from "../../assets/Images/Waterfall.png"
import River from "../../assets/Images/River.png";
import GeysirImage from "../../assets/Images/Geysir.png";
import HouseWithRiver from "../../assets/Images/HouseWithRiver.png";
import PanelHouseImage from "../../assets/Images/PanelHouse.png";
import WoodHouseImage from "../../assets/Images/WoodHouse.png";
import BigWaterfall from "../../assets/Images/BigWaterfall.png";
import Cave from "../../assets/Images/Cave.png";
import RiverTown from "../../assets/Images/RiverTown.png";
import { IRegion } from "../../types/interfaces";

export const regions: IRegion[] = [
  {
    name: "Golden Circle Region",
    points: ["Geysers", "Waterfalls", "Crater lakes"],
    description:
      "The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
      higlights: [
      {
        image: Waterfall,
        title: "Gullfoss Waterfall",
        additionalInfo: "1h - Waterfall",
        curator: true,
      },
      {
        image: River,
        title: "Reykjadalur Valley",
        additionalInfo: "1h - Iconic hike, hot springs",
        curator: true,
      },
      {
        image: GeysirImage,
        title: "Geysir Thermal Field",
        additionalInfo: "1h - Geysers",
        curator: false,
      },
    ],
    stopPlaces: [
      {
        image: HouseWithRiver,
        title: "Frost and Fire Hotel",
        rate: 9.1,
        additionalInfo: "$180+ - Boutique hotel",
        curator: true,
      },
      {
        image: PanelHouseImage,
        title: "The Greenhouse Hotel",
        rate: 9.1,
        additionalInfo: "$230+ - Luxury hotel",
        curator: true,
      },
      {
        image: WoodHouseImage,
        title: "INNI",
        rate: 9.1,
        additionalInfo: "$130+ - Apart hotel",
        curator: true,
      },
    ],
  },
  {
    name: "South & Highlands",
    points: ["Geysers", "Waterfalls", "Crater lakes"],
    description:
      "The South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders, from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches. This region is also a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to be explored. Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this unique part of Iceland.",
      higlights: [
      {
        image: BigWaterfall,
        title: "Skógafoss Waterfall",
        additionalInfo: "1h - Iconic waterfall",
        curator: true,
      },
      {
        image: Cave,
        title: "Katla Ice Cave",
        additionalInfo: "1h - Ice caves",
        curator: true,
      },
      {
        image: GeysirImage,
        title: "Fjaðrárgljúfur",
        additionalInfo: "1h - Geysers",
        curator: false,
      },
    ],
    stopPlaces: [
      {
        image: RiverTown,
        title: "Magma Hotel",
        rate: 9.1,
        additionalInfo: "$250+ - Boutique hotel",
        curator: true,
      },
      {
        image: PanelHouseImage,
        title: "Hotel Vík í Mýrdal",
        rate: 9.1,
        additionalInfo: "$150+ - Luxury hotel",
        curator: true,
      },
      {
        image: WoodHouseImage,
        title: "Hótel Kría",
        rate: 9.1,
        additionalInfo: "$130+ - Luxury hotel",
        curator: true,
      },
    ],
  },
];
