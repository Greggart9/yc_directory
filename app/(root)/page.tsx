import StartupCard from "../components/StartupCard";
import SearchForm from "../components/SearchForm";

export default async function Home( { searchParams }: {
  searchParams: Promises<{ query: string }>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author:{ _id: 1, name: 'Greggart9' },
    _id: 1,
    description: 'This is description.',
    image: 'https://images.unsplash.com/photo-1677631234567',
    category: 'NFTs',
    title: 'NFTs are Still Very Much Alive',
    }]
  return (
    <>
      <section className="flex justify-center flex-col items-center bg-pink-600 w-[100%] h-[400]">
          <h1 className="text-4xl px-4 text-white bg-black py-3 font-black text-center mb-8">
            PITCH YOUR STARTUP, <br /> CONNECT WITH ENTREPRENEURS
          </h1>

          <p className="text-white font-semibold mb-4">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
          </p>

          <SearchForm query={query} />
      </section>

      <section className=" px-6 py-10 max-w-7xl mx-auto">
          <p className="font-semibold text-[26px] text-black">
            {query ? `Search results for "${query}"` : "All Startups"}
          </p>

          <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            {posts ?.length > 0 ? (
              posts.map((post: StartupCardType, index: number ) => (
                <StartupCard key={post?._id} post={post} />
              ))
            ) : (
              <p className="text-black-100 text-sm font-normal text-center">No startups found</p>
            )}

          </ul>
      </section>


      
    </>
  );
}
