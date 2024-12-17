import SongCardsGrid from "./components/landingPage/SongCardsGrid";
import Pagination from "./components/landingPage/Paginations";
import AdminLoginButton from "./components/landingPage/adminLoginButton";

const App = () => {
  const songs = [
    {
      title: "Song 1",
      artist: "Artist assssssss sssssssss1",
      album: "Album 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Song 1",
      artist: "Artist ssssss1",
      album: "Album 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Song 1",
      artist: "Artist assssssssss1",
      album: "Album 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Song 1",
      artist: "Artist asssssssss ssss1",
      album: "Album 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Song 1",
      artist: "Artist asssssssssss sss sssssss1",
      album: "Album 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Song 1",
      artist: "Artist juman",
      album: "Album 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-800 min-h-screen min-w-full">
      <div className="flex  justify-center  bg-gray-800  min-h-screen min-w-full">
        <AdminLoginButton />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-yellow-400 mb-8 p-8">
            Song Library
          </h1>
          <SongCardsGrid songs={songs}></SongCardsGrid>
        </div>
      </div>
      <div>
        <Pagination
          currentPage={2}
          totalPages={5}
          onPrevPage={() => {}}
          onNextPage={() => {}}
        ></Pagination>
      </div>
    </div>
  );
};

export default App;
