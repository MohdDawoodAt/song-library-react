import SongCardsGrid from "./components/landingPage/SongCardsGrid";
import Pagination from "./components/landingPage/Paginations";
import AdminLoginButton from "./components/landingPage/adminLoginButton";
import { PaginationProvider } from "./components/landingPage/contexts/PaginationContext";
import { useState } from "react";
import AdminLoginModal from "./components/loginDialog/AdminLoginModal";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to show modal
  const showModal = () => setIsModalVisible(true);

  // Function to hide modal
  const hideModal = () => setIsModalVisible(false);

  return (
    <PaginationProvider>
      <div className="bg-gray-800 min-h-screen min-w-full">
        <div className="flex  justify-center  bg-gray-800  min-h-screen min-w-full">
          <AdminLoginButton onClick={showModal} />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-yellow-400 mb-8 p-8">
              Song Library
            </h1>

            <SongCardsGrid></SongCardsGrid>
          </div>
        </div>
        <div>
          <Pagination />
          <AdminLoginModal isVisible={isModalVisible} closeModal={hideModal} />
        </div>
      </div>
    </PaginationProvider>
  );
};

export default App;
