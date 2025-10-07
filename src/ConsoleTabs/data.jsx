import { FaRegNewspaper, FaDatabase, FaBookOpen } from "react-icons/fa";
import { TbGavel } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlineCorporateFare } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";

export const resourceTypes = [
  { name: "Academic & Scientific", icon: <BsGraphUp />, active: false },
  { name: "News & Media", icon: <FaRegNewspaper />, active: false },
  { name: "Government & Legal", icon: <TbGavel />, active: false },
  { name: "Corporate & Industry", icon: <MdOutlineCorporateFare />, active: false },
  { name: "Web & Online Sources", icon: <CgWebsite />, active: false },
  { name: "Books & Reference", icon: <FaBookOpen />, active: false },
  { name: "Data & Statistics", icon: <FaDatabase />, active: false },
  { name: "Multimedia & Other", icon: <FiVideo />, active: false },
];

export const projectTypes = [
  { name: 'Academic Research (School / University)', active: false },
  { name: 'Thesis or Dissertation (Bachelor / Master / PhD)', active: false },
  { name: 'Legal or Policy Research', active: false },
  { name: 'Corporate / Industry Project', active: false },
  { name: 'Nonprofit / NGO Research', active: false },
  { name: 'Journalistic / Investigative Project', active: false },
  { name: 'Personal or Independent Project', active: false },
  { name: 'Other', active: false },
];

export const projectColours = [
  { name: 'color1', color: '#0E425E', active: false }, // deep slate blue
  { name: 'color2', color: '#085B87', active: false }, // dark ocean
  { name: 'color3', color: '#085BA4', active: false }, // vivid blue
  { name: 'color4', color: '#1789FC', active: false }, // bright azure
  { name: 'color5', color: '#00A8A8', active: false }, // teal cyan
  { name: 'color6', color: '#2ECC71', active: false }, // balanced green
  { name: 'color7', color: '#F1C40F', active: false }, // warm yellow
  { name: 'color8', color: '#E67E22', active: false }, // amber orange
  { name: 'color9', color: '#E74C3C', active: false }, // coral red
  { name: 'color10', color: '#9B59B6', active: false }, // purple accent
];