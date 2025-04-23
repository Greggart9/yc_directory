import { Search } from "lucide-react";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="flex justify-center flex-col items-center bg-pink-600 w-[100%] h-[400]">
        <h1 className="text-4xl px-4 text-white bg-black py-3 font-black text-center mb-8">
          PITCH YOUR STARTUP, <br /> CONNECT WITH ENTREPRENEURS
        </h1>

        <p className="text-white font-semibold mb-4">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm />
      </section>


      
    </>
  );
}
