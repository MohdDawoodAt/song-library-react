import React from "react";

interface AdminLoginModalProps {
  isVisible: boolean;
  closeModal: () => void;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isVisible,
  closeModal,
}) => {
  if (!isVisible) return null; // Don't render the modal if it's not visible

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-60 z-50 "
        onClick={closeModal}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 drop-shadow-lg">
        <div className="bg-gray-800 p-8 rounded-lg w-96">
          <h2 className="text-2xl text-white font-semibold mb-4">
            Admin Login
          </h2>
          <form>
            {/* Form will go here */}
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border mb-4 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border mb-4 rounded"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-700 text-white py-2 px-4 rounded"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-yellow-400 text-white py-2 px-4 rounded"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLoginModal;
