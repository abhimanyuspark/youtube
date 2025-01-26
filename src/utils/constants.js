import { FaFire, IoMusicalNotesOutline, TiHome, IoRadio } from "../assets/Icons"

export const NavigationData = [
  {
    title: "Home",
    icon: TiHome,
    path: "/",
    url: "New",
    type:"both",
    divider:true
  },
  {
    title: "Trending",
    icon: FaFire,
    path: "/trending",
    url: "Trending",
    type:"both",
  },
  {
    title: "Music",
    icon: IoMusicalNotesOutline,
    path: "/music",
    url: "Music",
    type:"nav",
  },
  {
    title: "Live",
    icon: IoRadio,
    path: "/Live",
    url: "Live",
    type:"nav",
  },
];
