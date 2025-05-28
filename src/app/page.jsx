// app/page.js
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/login"); // immediately redirect to /login

  // This component won't render because of redirect
  return null;
}
