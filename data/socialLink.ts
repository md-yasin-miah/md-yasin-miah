import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';
import { MdMailOutline } from 'react-icons/md';
import { TbBrandFiverr } from 'react-icons/tb';
export const SocialLinks: Array<{ name: string; url: string; icon: React.ElementType, color?: string }> = [
  {
    name: "GitHub",
    url: "https://github.com/md-yasin-miah",
    icon: LuGithub,
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mdyasinmiah",
    icon: FaLinkedinIn,
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    name: "Email",
    url: "mailto:mdyasinmiah46@email.com",
    icon: MdMailOutline,
    color: 'hover:text-red-600 dark:hover:text-red-400'
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01a3821986b88a9bab",
    icon: FaUpwork,
    color: 'hover:text-red-600 dark:hover:text-red-400'
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/yasin440",
    icon: TbBrandFiverr,
    color: 'hover:text-[#20c075]'
  },
];