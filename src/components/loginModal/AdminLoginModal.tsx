import React, { useEffect, useState } from "react";
import { adminLogin } from "../../services/login.service";
import { useAuth } from "../landingPage/contexts/AuthContext";

interface AdminLoginModalProps {
  isVisible: boolean;
  closeModal: () => void;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isVisible,
  closeModal,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<"success" | "error" | null>(
    null
  );

  const { setIsLoggedIn } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const token = await adminLogin(username, password);
      if (token) {
        localStorage.setItem("accessToken", token);
        setIsLoggedIn(true);
        setFeedbackMessage("Login successful!");
        setFeedbackType("success");
        closeModal();
      } else {
        setIsLoggedIn(false);
        setFeedbackMessage("Invalid username or password.");
        setFeedbackType("error");
      }
    } catch {
      setFeedbackMessage("Something went wrong. Please try again.");
      setFeedbackType("error");
    }
  };

  useEffect(() => {
    if (feedbackMessage) {
      const timer = setTimeout(() => {
        setFeedbackMessage(null);
        setFeedbackType(null);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [feedbackMessage]);

  if (!isVisible) return null;

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
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full p-2 border mb-4 rounded"
                onChange={handleChange}
              />
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full p-2 border mb-4 rounded"
                onChange={handleChange}
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
          {feedbackMessage && (
            <div
              className={`mt-4 p-2 rounded ${
                feedbackType === "success" ? "bg-green-500" : "bg-red-300"
              } text-white`}
            >
              {feedbackMessage}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminLoginModal;
