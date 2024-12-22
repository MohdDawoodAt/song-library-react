import { useAuth } from "./contexts/AuthContext";

interface AdminLoginButtonProps {
  onClick: () => void;
}

const AdminLoginButton = ({ onClick }: AdminLoginButtonProps) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };
  return (
    <button
      onClick={isLoggedIn ? handleLogout : onClick}
      className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50  absolute top-4 right-9"
    >
      {isLoggedIn ? "Logout" : "Admin Login"}{" "}
    </button>
  );
};

export default AdminLoginButton;
