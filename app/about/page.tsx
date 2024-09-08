import { Container } from "@/components/Container/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashtanga Architects | About",
  description: "About Ashtanga Architects",
};

export default function About() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <p className="">About</p>
        <p className="">Ashtanga</p>
        <p className="">Architects</p>
      </div>
    </Container>
  )
}