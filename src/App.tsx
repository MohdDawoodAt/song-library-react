import SongCardsGrid from "./components/landingPage/SongCardsGrid";
import Pagination from "./components/landingPage/Paginations";
import AdminLoginButton from "./components/landingPage/adminLoginButton";
import { PaginationProvider } from "./components/landingPage/contexts/PaginationContext";
import { useState } from "react";
import AdminLoginModal from "./components/loginModal/AdminLoginModal";
import SearchBar from "./components/landingPage/contexts/SearchBar";
import AddSongsButton from "./components/landingPage/AddSongsButton";
import AddSongsModal from "./components/addSongsModal/addSongsModal";

const App = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const showLoginModal = () => setIsLoginModalVisible(true);

  const hideLoginModal = () => setIsLoginModalVisible(false);

  const [isAddSongsModalVisible, setIsAddSongsModalVisible] = useState(false);
  const showAddSongModal = () => setIsAddSongsModalVisible(true);

  const hideAddSongModal = () => setIsAddSongsModalVisible(false);

  return (
    <PaginationProvider>
      <div className="bg-gray-800 min-h-screen min-w-full">
        <div className="flex  justify-center  bg-gray-800  min-h-screen min-w-full">
          <AdminLoginButton onClick={showLoginModal} />
          <AddSongsButton onClick={showAddSongModal} />

          <div className="text-center">
            <h1 className="text-3xl font-bold text-yellow-400 mb-2 p-2">
              Song Library
            </h1>
            <SearchBar onSearch={() => {}} />
            <SongCardsGrid></SongCardsGrid>
          </div>
        </div>
        <div>
          <Pagination />
          <AdminLoginModal
            isVisible={isLoginModalVisible}
            closeModal={hideLoginModal}
          />
          <AddSongsModal
            isVisible={isAddSongsModalVisible}
            closeModal={hideAddSongModal}
          />
        </div>
      </div>
    </PaginationProvider>
  );
};

export default App;
