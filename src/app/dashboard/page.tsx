import { Metadata } from "next";

import { Dashboard } from "@/components/atomic/pages";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardPage() {
  return <Dashboard />;
}
