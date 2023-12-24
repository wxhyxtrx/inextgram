"use client";
import { Avatar, List, ListItem, Typography } from "@material-tailwind/react";
import React from "react";
import {
  BiHomeAlt2,
  BiSearch,
  BiColor,
  BiMessageSquareDots,
} from "react-icons/bi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiNotification4Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
export default function Sidebar() {
  return (
    <div className=" select-none text-black ">
      <Typography
        variant="h4"
        color="black"
        placeholder={"LogoText"}
        className="py-4 px-8 hidden lg:block text-start w-full"
      >
        Inextgram
      </Typography>
      <Typography
        variant="h4"
        color="black"
        placeholder={"LogoText"}
        className="p-4 hidden sm:block lg:hidden text-center"
      >
        IG
      </Typography>
      <div>
        <List
          placeholder="Nav"
          className="text-black min-w-fit flex flex-row sm:flex-col items-center justify-around  "
        >
          <ListItem
            placeholder="NavItem"
            className="flex gap-3  lg:items-end justify-center w-fit lg:w-full lg:justify-start"
          >
            <BiHomeAlt2 className=" text-[25px]" />
            <label className=" hidden lg:block">Dashboard</label>
          </ListItem>
          <ListItem
            placeholder="NavItem"
            className="flex gap-3  lg:items-end justify-center w-fit lg:w-full lg:justify-start"
          >
            <BiSearch className=" text-[25px]" />
            <label className=" hidden lg:block">Search</label>
          </ListItem>
          <ListItem
            placeholder="NavItem"
            className="hidden sm:flex gap-3 lg:items-end justify-center w-fit lg:w-full lg:justify-start"
          >
            <BiColor className=" text-[25px]" />
            <label className=" hidden lg:block">Explore</label>
          </ListItem>
          <ListItem
            placeholder="NavItem"
            className="flex gap-3  lg:items-end justify-center w-fit lg:w-full lg:justify-start"
          >
            <MdOutlineVideoLibrary className=" text-[25px]" />
            <label className=" hidden lg:block">Reels</label>
          </ListItem>
          <ListItem
            placeholder="NavItem"
            className="flex gap-3  lg:items-end justify-center w-fit lg:w-full lg:justify-start"
          >
            <BiMessageSquareDots className=" text-[25px]" />
            <label className=" hidden lg:block">Messages</label>
          </ListItem>
          <ListItem
            placeholder="NavItem"
            className=" hidden sm:flex gap-3 lg:items-end justify-center w-fit lg:w-full lg:justify-start"
          >
            <RiNotification4Line className=" text-[25px]" />
            <label className=" hidden lg:block">Notifications</label>
          </ListItem>
          <ListItem
            placeholder="NavItem"
            className=" hidden sm:flex gap-3 lg:items-end justify-center w-fit lg:w-full lg:justify-start"
          >
            <AiOutlinePlusCircle className=" text-[25px]" />
            <label className=" hidden lg:block">Create</label>
          </ListItem>
          <ListItem
            placeholder="NavItem"
            className="flex items-center gap-2 justify-center w-fit lg:w-full lg:justify-start"
          >
            <Avatar
              src="https://miro.medium.com/v2/resize:fit:450/1*Wrm0UtVJZH8Gl_vsOWBYyg.png"
              alt="profile"
              placeholder="photo"
              className="w-8 h-8 object-cover"
            />
            <label className=" hidden lg:block">Profile</label>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
