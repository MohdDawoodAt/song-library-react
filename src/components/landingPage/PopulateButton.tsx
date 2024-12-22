import { useAuth } from "./contexts/AuthContext";
interface AddSongsButtonProps {
  onClick: () => void;
}
const PopulateButton = ({ onClick }: AddSongsButtonProps) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return <></>;
  else {
    return (
      <button
        // onClick={isLoggedIn ? handleLogout : onClick}
        className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 absolute  top-20 left-9"
        onClick={onClick}
      >
        Populate
      </button>
    );
  }
};

export default PopulateButton;
