import { Navbar } from "../Components/Navbar";
import React, { useState } from "react";
import { FaHashtag, FaVolumeUp, FaPlus, FaChevronDown, FaChevronRight, FaUserPlus } from "react-icons/fa";


export function Mixer(){
  // Mixers with initial empty members
  const [mixers, setMixers] = useState([
    { id: 1, name: "Mixer Lobby1", members: [] },
    { id: 2, name: "Mixer Lobby2", members: [] },
  ]);

  // Track which mixers are expanded
  const [expandedMixers, setExpandedMixers] = useState({});

  // On click: toggle expand and join member if not already joined
  const handleMixerClick = (mixerId) => {
    setExpandedMixers((prev) => ({
      ...prev,
      [mixerId]: !prev[mixerId],
    }));

    setMixers((prev) =>
      prev.map((mixer) => {
        if (mixer.id === mixerId) {
          // Create a new member name with count+1
          const newMemberName = `Member${mixer.members.length + 1}`;
          // Add member only if not already present
          if (!mixer.members.includes(newMemberName)) {
            return {
              ...mixer,
              members: [...mixer.members, newMemberName],
            };
          }
        }
        return mixer;
      })
    );
  };

    return(
       <>
       <Navbar />
    <div
      className="d-flex"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#202225",
        color: "#dcddde",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      {/* Left Sidebar */}
      <div
        style={{
          width: "280px",
          backgroundColor: "#2f3136",
          display: "flex",
          flexDirection: "column",
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        {/* Server Header */}
        <div
          style={{
            padding: "12px 16px",
            fontWeight: "600",
            fontSize: "1rem",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #202225",
            marginBottom: 8,
          }}
        >
          <span>Mixer Lobbies</span>
          <FaUserPlus style={{ cursor: "pointer" }} />
        </div>

        {/* Mixers list */}
        <div style={{ flexGrow: 1, overflowY: "auto" }}>
          {mixers.map(({ id, name, members }) => {
            const isExpanded = expandedMixers[id];
            return (
              <div key={id} style={{ padding: "0 16px", marginBottom: 12 }}>
                {/* Mixer Header */}
                <div
                  onClick={() => handleMixerClick(id)}
                  style={{
                    cursor: "pointer",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    color: "#dcddde",
                    fontSize: "1.1rem",
                    userSelect: "none",
                    outline: "none",
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleMixerClick(id);
                  }}
                >
                  {isExpanded ? (
                    <FaChevronDown style={{ marginRight: 6 }} />
                  ) : (
                    <FaChevronRight style={{ marginRight: 6 }} />
                  )}
                  {name}{" "}
                  <span
                    style={{
                      marginLeft: 8,
                      color: "#aaa",
                      fontSize: "0.85rem",
                      userSelect: "none",
                    }}
                  >
                    ({members.length})
                  </span>
                </div>

                {/* Members List */}
                {isExpanded && members.length > 0 && (
                  <div
                    style={{
                      marginTop: 6,
                      marginLeft: 24,
                      color: "#b9bbbe",
                      fontSize: "0.95rem",
                      lineHeight: 1.4,
                      userSelect: "text",
                    }}
                  >
                    {members.map((member, idx) => (
                      <div key={idx}>{member}</div>
                    ))}
                  </div>
                )}

                {/* If expanded but no members */}
                {isExpanded && members.length === 0 && (
                  <div
                    style={{
                      marginTop: 6,
                      marginLeft: 24,
                      fontStyle: "italic",
                      color: "#72767d",
                      fontSize: "0.9rem",
                    }}
                  >
                    No members
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Center mixer image */}
      <div
        className="border border-primary m-3 d-flex justify-content-center align-items-center flex-grow-1"
        style={{ minWidth: "0", backgroundColor: "#18191c", borderRadius: "8px" }}
      >
        <img
          src="/a2cd8a8a-0e26-4b4a-bd58-89fb32fd4825.png"
          alt="Mixer"
          className="img-fluid"
          style={{ maxHeight: "90vh", objectFit: "contain" }}
        />
      </div>

      {/* Right sidebar */}
      <div
        className="d-flex flex-column justify-content-center align-items-center p-3"
        style={{ width: "180px", backgroundColor: "#222", minWidth: "180px" }}
      >
        {["Guitar", "Piano", "Drums", "Bass"].map((item) => (
          <button
            key={item}
            className="btn btn-outline-light rounded-circle my-3"
            style={{
              width: "70px",
              height: "70px",
              fontSize: "1.1rem",
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
       </> 
    );
}