import { FaRegNewspaper, FaNewspaper } from "react-icons/fa";
import { TbGavel } from "react-icons/tb";
import { BsArchive, BsArchiveFill } from "react-icons/bs";
import { HiDocumentReport, HiOutlineDocumentReport } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";

export const resourceTypes = [
  { name: "News articles", icon: <FaRegNewspaper />, active: false },
  { name: "Legal documents", icon: <TbGavel />, active: false },
  { name: "Website articles", icon: <CgWebsite />, active: false },
  { name: "Research papers", icon: <BsArchiveFill />, active: false },
  { name: "Audits/Reports", icon: <HiOutlineDocumentReport />, active: false },
];

export const projectTypes = [
  { name: 'School / Univerity research', active: false },
  { name: 'Bachelor / Master / PhD thesis', active: false },
  { name: 'Legal research', active: false },
  { name: 'Personnal project', active: false },
  { name: 'Other', active: false },
]

export const projectColours = [
  { name: 'color1', color: '#0e425e', active: false },
  { name: 'color2', color: '#085b87', active: false },
  { name: 'color3', color: '#085ba4', active: false },
]