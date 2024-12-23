import SongCardsGrid from "./components/landingPage/SongCardsGrid";
import Pagination from "./components/landingPage/Paginations";
import AdminLoginButton from "./components/landingPage/adminLoginButton";
import { PaginationProvider } from "./components/landingPage/contexts/PaginationContext";
import { useState } from "react";
import AdminLoginModal from "./components/loginModal/AdminLoginModal";
import SearchBar from "./components/landingPage/SearchBar";
import AddSongsButton from "./components/landingPage/AddSongsButton";
import AddSongsModal from "./components/addSongsModal/addSongsModal";
import { SearchProvider } from "./components/landingPage/contexts/SearchContext";

const App = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const showLoginModal = () => setIsLoginModalVisible(true);

  const hideLoginModal = () => setIsLoginModalVisible(false);

  const [isAddSongsModalVisible, setIsAddSongsModalVisible] = useState(false);
  const showAddSongModal = () => setIsAddSongsModalVisible(true);

  const hideAddSongModal = () => setIsAddSongsModalVisible(false);

  return (
    <PaginationProvider>
      <SearchProvider>
        <div className="bg-gray-800 min-h-screen min-w-full">
          <div className="text-center relative">
            <AdminLoginButton onClick={showLoginModal} />
            <AddSongsButton onClick={showAddSongModal} />
            <h1 className="text-3xl font-bold font-serif text-yellow-400 mb-2 p-4">
              Song Library
            </h1>
            <SearchBar />
            <SongCardsGrid />
            <Pagination />
          </div>

          <AdminLoginModal
            isVisible={isLoginModalVisible}
            closeModal={hideLoginModal}
          />
          <AddSongsModal
            isVisible={isAddSongsModalVisible}
            closeModal={hideAddSongModal}
          />
        </div>
      </SearchProvider>
    </PaginationProvider>
  );
};

export default App;
