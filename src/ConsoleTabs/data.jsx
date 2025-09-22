import { FaRegNewspaper, FaNewspaper } from "react-icons/fa";
import { TbGavel } from "react-icons/tb";
import { BsArchive, BsArchiveFill } from "react-icons/bs";
import { HiDocumentReport, HiOutlineDocumentReport } from "react-icons/hi";

export const resourceTypes = [
  { name: "News articles (vetted)", icon: <FaRegNewspaper /> },
  { name: "News articles (un-vetted)", icon: <FaNewspaper /> },
  { name: "Legal documents", icon: <TbGavel /> },
  { name: "Research papers (vetted)", icon: <BsArchive /> },
  { name: "Research papers (un-vetted)", icon: <BsArchiveFill /> },
  { name: "Audits/Reports (vetted)", icon: <HiOutlineDocumentReport /> },
  { name: "Audits/Reports (un-vetted)", icon: <HiDocumentReport /> },
];