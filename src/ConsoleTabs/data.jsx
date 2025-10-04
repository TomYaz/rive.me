import { FaRegNewspaper, FaNewspaper } from "react-icons/fa";
import { TbGavel } from "react-icons/tb";
import { BsArchive, BsArchiveFill } from "react-icons/bs";
import { HiDocumentReport, HiOutlineDocumentReport } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";

export const resourceTypes = [
  { name: "News articles", icon: <FaRegNewspaper /> },
  { name: "Legal documents", icon: <TbGavel /> },
  { name: "Website articles", icon: <CgWebsite /> },
  { name: "Research papers", icon: <BsArchiveFill /> },
  { name: "Audits/Reports", icon: <HiOutlineDocumentReport /> },
];

export const projectTypes = [
  { name: 'School / Univerity research', active: false },
  { name: 'Bachelor / Master / PhD thesis', active: false },
  { name: 'Legal research', active: false },
  { name: 'Personnal project', active: false },
  { name: 'Other', active: false },
]

export const projectColours = [
  { name: '', color: '#0e425e', active: false },
  { name: '', color: '#085b87', active: false },
  { name: '', color: '#085ba4', active: false },
]