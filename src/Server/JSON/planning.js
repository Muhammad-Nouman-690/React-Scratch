import React from 'react';
import { BsCardChecklist, BsPeople } from "react-icons/bs";
import { CgCommunity, CgWebsite } from "react-icons/cg";
import { GrUserManager } from 'react-icons/gr';
import { BiWallet } from 'react-icons/bi'
import '../../Pages/Planning/Planning.css'

export default  [
{
    "id": "1",
    "icon": <BsCardChecklist className='check-icon' />,
    "icon_title": "Checklist",
    "icon_desc": "The ultimate wedding checklist to make sure everything gets done."
},
{
    "id": "2",
    "icon": <BsPeople className='check-icon'/>,
    "icon_title": "Guest List",
    "icon_desc": "Seamlessly create and manage lists, details, and RSVPs for all your events."
},
{
    "id": "3",
    "icon": <BiWallet className='check-icon'/>,
    "icon_title": "Budget",
    "icon_desc": "Let us do the math and keep your wedding and event spending on track."
},
{
    "id": "4",
    "icon": <GrUserManager className='check-icon'/>,
    "icon_title": "Vendor Manager",
    "icon_desc": "Quickly find, manage, and message your local vendors."
},
{
    "id": "5",
    "icon": <CgWebsite className='check-icon'/>,
    "icon_title": "Wedding Website",
    "icon_desc": "Easily create a custom wedding website to share with your guests."
},
{
    "id": "6",
    "icon": <CgCommunity className='check-icon'/>,
    "icon_title": "My Community",
    "icon_desc": "Ask for help to expert brides and meet other brides like you."
}
]