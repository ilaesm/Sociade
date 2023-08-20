"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter } from 'next/font/google'
import { Code, Info, Home, PenSquare, User, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";


const inter = Inter ({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Home',
    icon: Home,
    href: '/',
    color: "text-blue-600"
  },
  {
    label: 'Create Campaign',
    icon: PenSquare,
    href: '/CreateCampaign',
    color: "text-blue-600",
  },
  {
    label: 'Campaign Details',
    icon: Info,
    color: "text-blue-600",
    href: '/CampaignDetails',
  }
];

export const Sidebar = ({}) => {
    
  return (
    <div className="space-y-4 py-4 flex flex-col h-full  text-black border-r-2 border-#64748b">
      <div className="px-8 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-3">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-3xl text-black font-bold", inter.className)}>
            Sociaid
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-lg group flex p-6 w-full justify-start font-medium cursor-pointer hover:text-blue hover:bg-white/10 rounded-lg transition"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};