import { useState } from "react";
import ProfileLinks from "./components/ProfileLinks/ProfileLinks";
import Profile from "./components/Profile/Profile";
import ShareModal from "./components/ShareModal/ShareModal";

function App() {
  const [shareModalShown, setShareModalShown] = useState(false);

  const toggleShareModal = () => {
    setShareModalShown((prev) => !prev);
  };

  return (
    <>
      {/* Modal to share linktree to other platforms (Whatsapp, Twitter, LinkedIn) */}
      {shareModalShown && <ShareModal onCloseHandler={toggleShareModal} />}

      <main className="container mx-auto px-4">
        {/*Profile section */}
        <Profile onShareHandler={toggleShareModal} />

        {/* Profile links section */}
        <ProfileLinks />
      </main>
    </>
  );
}

export default App;
