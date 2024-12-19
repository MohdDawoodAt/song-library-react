import { useState } from "react";
import { addSong } from "../../services/songs.service";
import { Song } from "../../types/songTypes";

interface AddSongsModalProps {
  isVisible: boolean;
  closeModal: () => void;
}

const AddSongsModal = ({ isVisible, closeModal }: AddSongsModalProps) => {
  const [songData, setSongData] = useState<Song>({
    name: "",
    artist: "",
    album: "",
    image: "",
    releaseDate: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (!value.trim()) setError("This field is required");
    else {
      setSongData({ ...songData, [id]: value });
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!error) {
      try {
        // call the addsong to db service
        await addSong(songData);
        closeModal();
      } catch {
        console.error("could not add error");
      }
    }
  };

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
            Add Song Data
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Song Title"
                className="w-full p-2 border mb-4 rounded"
                onChange={handleChange}
              />
              {error && <p>{error}</p>}
              <input
                id="artist"
                type="text"
                placeholder="Artist Name"
                className="w-full p-2 border mb-4 rounded"
                onChange={handleChange}
              />
              {error && <p>{error}</p>}
              <input
                id="album"
                type="text"
                placeholder="Album"
                className="w-full p-2 border mb-4 rounded"
                onChange={handleChange}
              />
              {error && <p>{error}</p>}
              <input
                id="releaseDate"
                type="text"
                placeholder="Release Date"
                className="w-full p-2 border mb-4 rounded"
                onChange={handleChange}
              />
              {error && <p>{error}</p>}
              <input
                id="image"
                type="text"
                placeholder="Image Url"
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
                Add Song
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddSongsModal;
