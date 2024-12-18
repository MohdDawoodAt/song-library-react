interface AdminLoginButtonProps {
  onClick: () => void; // Function to handle click
}

const AdminLoginButton = ({ onClick }: AdminLoginButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 absolute top-4 right-4"
      // onClick={onClick}
    >
      Admin Login
    </button>
  );
};

export default AdminLoginButton;
