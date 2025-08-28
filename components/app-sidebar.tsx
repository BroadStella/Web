"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartNoAxesCombined,
  CircleUserRound,
  Command,
  Frame,
  GalleryVerticalEnd,
  ListTodo,
  Map,
  MonitorCog,
  PackageOpen,
  PieChart,
  Settings2,
  SquareTerminal,
  Theater,
  Wrench,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SidebarTitle } from "./nav-title"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  },
  teams: [
    {
      name: "Stellaway",
      logo: GalleryVerticalEnd,
    }
  ],
  navMain: [
    {
      title: "Analytic",
      url: "#",
      icon: ChartNoAxesCombined,
      isActive: true,
      items: [
        {
          title: "General",
          url: "/analytic",
        }
      ],
    },
    {
      title: "Customer Support",
      url: "#",
      icon: ListTodo,
      isActive: true,
      items: [
        {
          title: "To-dos",
          url: "/tasks",
        },
        {
          title: "Support tickets",
          url: "/tasks/tickets",
        },
      ],
    },
    {
      title: "Theater",
      url: "#",
      icon: Theater,
      isActive: true,
      items: [
        {
          title: "Plays",
          url: "/play",
        },
        {
          title: "Show schedule",
          url: "/schedule",
        },
        {
          title: "Rooms",
          url: "/room",
        },
        {
          title: "Seatmap",
          url: "/seatmap",
        },
        {
          title: "Services",
          url: "/service",
        },
      ],
    },
    {
      title: "Customer",
      url: "#",
      icon: CircleUserRound,
      isActive: true,
      items: [
        {
          title: "Profiles",
          url: "/customer",
        },
        {
          title: "Billings",
          url: "/customer/billing",
        },
        {
          title: "Bookings",
          url: "/customer/booking",
        },
        {
          title: "Discount usage",
          url: "/customer/discount-usage",
        },
      ],
    },
    {
      title: "System",
      url: "#",
      icon: Wrench,
      items: [
        {
          title: "Accounts",
          url: "/accounts",
        },
        {
          title: "Roles",
          url: "/roles",
        },
        {
          title: "Permissions",
          url: "/permissions",
        },
      ],
    },
    // {
    //   title: "Website",
    //   url: "#",
    //   icon: MonitorCog,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "Misc",
      url: "#",
      icon: PackageOpen,
      items: [
        {
          title: "Amenities",
          url: "/misc/amenity",
        },
        {
          title: "Categories",
          url: "/misc/category",
        },
        {
          title: "Discount codes",
          url: "/misc/discount",
        },
        {
          title: "Genres",
          url: "/misc/genre",
        },
        {
          title: "Personas",
          url: "/misc/persona",
        },
        {
          title: "Seat types",
          url: "/misc/seat-group",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" side="left" {...props}>
      <SidebarHeader>
        <SidebarTitle teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
