import { Metadata } from "next";

import { Login } from "@/components/atomic/pages";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default function Home() {
  return <Login />;
}
