import { FaFire, IoMusicalNotesOutline, TiHome, IoRadio, SiYoutubegaming, MdMovie, MdNewspaper, CiTrophy, GiHanger, GiGraduateCap } from "../assets/Icons"

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
    title: "Movies",
    icon: MdMovie,
    path: "/movies",
    url: "Movies",
    type:"nav",
  },
  {
    title: "Live",
    icon: IoRadio,
    path: "/live",
    url: "Live",
    type:"nav",
  },
  {
    title: "Gaming",
    icon: SiYoutubegaming,
    path: "/gaming",
    url: "Gaming",
    type:"nav",
  },
  {
    title: "News",
    icon: MdNewspaper,
    path: "/news",
    url: "News",
    type:"nav",
  },
  {
    title: "Sports",
    icon: CiTrophy,
    path: "/sports",
    url: "Sports",
    type:"nav",
  },
  {
    title: "Learning",
    icon: GiGraduateCap,
    path: "/learning",
    url: "Learning",
    type:"nav",
  },
  {
    title: "Fashion & Beauty",
    icon: GiHanger,
    path: "/fashion_beauty",
    url: "Fashion & Beauty",
    type:"nav",
  },
];
