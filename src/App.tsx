import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/pages/home-page/Home";
import { icons } from "./components/icons/Icons";
import { LetterCard } from "./components/pages/home-page/LetterCard";
import { Notes } from "./components/pages/home-page/Notes";
import { Reminders } from "./components/pages/home-page/Reminders";
import { GalleryCard } from "./components/pages/gallery-page/GalleryCard";
import { FadeUp } from "./utils/FadeUp";
import { Gallery } from "./components/pages/gallery-page/Gallery";
import { GalleryItems } from "./components/pages/gallery-page/GalleryItems";
import { GalleryAll } from "./components/pages/gallery-page/GalleryAll";
import { NoteLists } from "./components/pages/home-page/NoteLists";
import { MusicNav } from "./components/pages/music-page/MusicNav";
import { Music } from "./components/pages/music-page/Music";
import { MyMusic } from "./components/pages/music-page/MyMusic";
import { Tools } from "./components/pages/home-page/Tools";
import { Calculator } from "./components/pages/home-page/Calculator";
import { Business } from "./components/pages/home-page/Business";
import { Password } from "./utils/Password";

function App() {
  // 🔑 Authentication states
  const [passwordInput, setPasswordInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  // 🔑 App states
  const [currentView, setCurrentView] = useState<"home" | "gallery" | "music">("home");
  const [homeCurrentView, setHomeCurrentView] = useState<"letter" | "note" | "tool">("letter");
  const [galleryCurrentView, setGalleryCurrentView] = useState<"carousel" | "viewAll">("carousel");
  const [musicCurrentView, setMusicCurrentView] = useState<"favorite" | "remindsMeOfYou">("favorite");
  const [toolCurrentView, setToolCurrentView] = useState<"business" | "calculator">("business");

  // 🔑 Handle login
  const handleLogin = (selectedGender: "louie" | "philo") => {
    if (passwordInput === Password) {
      setGreeting(`Welcome ${selectedGender === "louie" ? "Wuwi" : "Cewin"}!`);

      setTimeout(() => {
        setFadeOut(true); // start fade out
      }, 2000); // fade after 2s
      setTimeout(() => {
        setIsAuthenticated(true);
        setGreeting("");
        setFadeOut(false);
      }, 3000); // hide after 3s
    } else {
      setPasswordInput('')
      alert("Wrong password!");
    }
  };

  // 🔑 Show login screen until authenticated
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center font-['Great+Vibes'] min-h-screen 
      bg-[url('./images/mobilebg.jpg')] md:bg-[url('./images/deskimg.avif')] bg-cover bg-center">
        <div className={`flex flex-col items-center justify-center bg-red-500/10 px-8 py-4 rounded-2xl 
         backdrop-blur-xs shadow-md shadow-red-700/90 transition-opacity duration-1000 ease-in-out
          ${fadeOut ? "opacity-0" : "opacity-100"}`}>
          <h1 className="flex items-center text-center gap-2 text-4xl font-bold mb-4 text-red-500 md:text-5xl">
            {icons.sccotchi}
            Philo and Louie
            {icons.mudka}
          </h1>
          <input
            type="password"
            placeholder="Enter password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="border border-pink-700 shadow-inner shadow-red-400 text-pink-600/90 py-2 px-4 rounded mb-4 md:text-xl"
          />
          <div className="flex gap-4">
            <button
              onClick={() => handleLogin("louie")}
              className="bg-blue-500 text-white px-4 py-2 md:text-xl text-center rounded active:shadow-inner active:opacity-80 flex items-center gap-2 shadow-md shadow-blue-700/70 hover:-translate-y-0.5 transition-all cursor-pointer active:translate-y-0.5"
            >
              {icons.sccotchi} Louie
            </button>
            <button
              onClick={() => handleLogin("philo")}
              className="bg-pink-500 text-white px-4 py-2 md:text-xl text-center active:shadow-inner active:opacity-80 rounded flex items-center gap-2 shadow-md shadow-pink-700/70 hover:-translate-y-0.5 transition-all cursor-pointer active:translate-y-0.5"
            >
              {icons.mudka} Philo
            </button>
          </div>
          {greeting && (
            <p
              className={`mt-4 text-xl font-semibold text-purple-600/70 ${fadeOut ? "opacity-0" : "opacity-100"
                }`}
            >
              {greeting}
            </p>
          )}

        </div>
      </div>
    );
  }

  // ✅ Show full app after login
  return (

    <div className="min-h-screen w-full bg-[url('./images/mobilebg.jpg')] md:bg-[url('./images/deskimg.avif')] bg-cover bg-center ">
      <header>
        <Header currentView={currentView} setCurrentView={setCurrentView} />
      </header>
      <div className="mx-auto px-4 shadow-2xl shadow-red-700/50">
        <main>
          {currentView === "home" && (
            <FadeUp delay={0.15}>
              <section className="py-4 md:mt-4 items-center">

                <h2 className="flex items-center gap-1 text-2xl font-bold mb-2 text-red-500 font-['Great+Vibes']">{icons.home} Home</h2>
                <div className="space-y-2 md:flex md:space-x-4 w-full">
                  <div className="space-y-4 w-full">
                    <Home homeCurrentView={homeCurrentView} setHomeCurrentView={setHomeCurrentView} />
                    {homeCurrentView === "letter" && (
                      <FadeUp delay={0.15}>
                        <div className="space-y-4 md:space-x-4 md:flex items-start">
                          <LetterCard />
                          <Reminders />

                        </div>
                      </FadeUp>
                    )}
                    {homeCurrentView === "note" && (
                      <FadeUp delay={0.15}>
                        <Notes items={NoteLists} />
                      </FadeUp>
                    )}
                    {homeCurrentView === "tool" && (
                      <>
                        <Tools toolCurrentView={toolCurrentView} setToolCurrentView={setToolCurrentView} />
                        {toolCurrentView === "business" && (
                          <FadeUp delay={0.15}>
                            <Business />
                          </FadeUp>
                        )}
                        {toolCurrentView === "calculator" && (
                          <FadeUp delay={0.15}>

                            <Calculator />

                          </FadeUp>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </section>
            </FadeUp>
          )}
          {currentView === "gallery" && (
            <FadeUp delay={0.15} >
              <section className="p-4 md:mt-4 transition-all">

                <h2 className="flex items-center gap-1 text-2xl font-bold mb-2 text-red-500 font-['Great+Vibes']">{icons.gallery}Gallery</h2>
                <GalleryCard galleryCurrentView={galleryCurrentView} setGalleryCurrentView={setGalleryCurrentView} />
                {galleryCurrentView === "carousel" && (
                  <FadeUp delay={0.15}>
                    <div className="flex items-center justify-center">
                      <Gallery items={GalleryItems} />
                    </div>
                  </FadeUp>
                )}
                {galleryCurrentView === "viewAll" && (
                  <FadeUp delay={0.15}>
                    <div className="flex items-start justify-center">
                      <GalleryAll items={GalleryItems} />
                    </div>
                  </FadeUp>
                )}
              </section>
            </FadeUp>
          )}
          {currentView === "music" && (
            <FadeUp delay={0.15}>
              <section className="p-4 md:mt-4">
                <h2 className="flex items-center gap-1 text-2xl font-bold mb-2 text-red-500 font-['Great+Vibes']">{icons.music}Music</h2>
                <MusicNav musicCurrentView={musicCurrentView} setMusicCurrentView={setMusicCurrentView} />
                {musicCurrentView === "favorite" && (
                  <FadeUp delay={0.15}>
                    <div className="p-2 w-full mb-4">
                      <Music />
                    </div>
                  </FadeUp>
                )}
                {musicCurrentView === "remindsMeOfYou" && (
                  <FadeUp delay={0.15}>
                    <div className="p-2 w-full mb-4">
                      <MyMusic />
                    </div>
                  </FadeUp>
                )}
              </section>
            </FadeUp>
          )}
        </main>
      </div>

    </div >
  );
}

export default App;
