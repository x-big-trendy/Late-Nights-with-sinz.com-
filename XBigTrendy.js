import { useState } from "react";

export default function XBigTrendy() {
  const [images] = useState(["/sample1.jpg", "/sample2.jpg"]);
  const [videos] = useState(["https://www.youtube.com/embed/dQw4w9WgXcQ"]);
  const [view, setView] = useState("gallery");

  return (
    <main style={{ padding: "1rem", fontFamily: "Arial, sans-serif", backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Late Nights with Sins</h1>
        <p>Welcome to my world of videos and pictures</p>
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => setView("gallery")} style={{ marginRight: "1rem" }}>Gallery</button>
          <button onClick={() => setView("videos")}>Videos</button>
        </div>
      </header>

      {view === "gallery" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`img-${i}`} style={{ width: "100%", borderRadius: "8px" }} />
          ))}
        </div>
      )}

      {view === "videos" && (
        <div style={{ display: "grid", gap: "1rem" }}>
          {videos.map((url, i) => (
            <div key={i} style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src={url}
                title={`video-${i}`}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
