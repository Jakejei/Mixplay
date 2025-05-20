import { Navbar } from "../Components/Navbar";
import { Link } from "react-router-dom";
 
export function Home(){
   
    const imgStyle = {
        maxWidth: '100%',
        height: 'auto',
      };
     
      const itemStyle = {
        width: '120px',
        minHeight: '120px',
        // maxHeight: 'auto' is not valid – omit it if not needed
        float: 'left',
        margin: '3px',
        padding: '3px',
      };
 
    return(
       
       <>
       <Navbar />
       <style>{`
        html, body, #root {
          height: 100%;
          margin: 0;
          overflow-x: hidden;
        }
        /* Music wave background container */
        .music-wave-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          overflow: hidden;
          background: #0a286c; /* fallback background */
        }
        /* Each bar */
        .music-wave-bg .bar {
          position: absolute;
          bottom: 0;
          width: 6px;
          background: rgba(255, 255, 255, 0.3);
          animation-timing-function: ease-in-out;
          border-radius: 2px;
          animation-iteration-count: infinite;
        }
        /* Different bars with different heights and delays */
        .bar1 { left: 10%; height: 20px; animation-name: wave1; animation-duration: 1.6s; animation-delay: 0s; }
        .bar2 { left: 18%; height: 30px; animation-name: wave2; animation-duration: 1.3s; animation-delay: 0.2s; }
        .bar3 { left: 26%; height: 18px; animation-name: wave3; animation-duration: 1.7s; animation-delay: 0.4s; }
        .bar4 { left: 34%; height: 22px; animation-name: wave4; animation-duration: 1.5s; animation-delay: 0.6s; }
        .bar5 { left: 42%; height: 35px; animation-name: wave1; animation-duration: 1.4s; animation-delay: 0.8s; }
        .bar6 { left: 50%; height: 25px; animation-name: wave2; animation-duration: 1.8s; animation-delay: 1s; }
        .bar7 { left: 58%; height: 15px; animation-name: wave3; animation-duration: 1.6s; animation-delay: 1.2s; }
        .bar8 { left: 66%; height: 28px; animation-name: wave4; animation-duration: 1.5s; animation-delay: 1.4s; }
        .bar9 { left: 74%; height: 23px; animation-name: wave1; animation-duration: 1.7s; animation-delay: 1.6s; }
        .bar10 { left: 82%; height: 30px; animation-name: wave2; animation-duration: 1.3s; animation-delay: 1.8s; }
 
        /* Keyframes for bars to grow and shrink */
        @keyframes wave1 {
          0%, 100% { height: 20px; opacity: 0.3; }
          50% { height: 50px; opacity: 1; }
        }
        @keyframes wave2 {
          0%, 100% { height: 30px; opacity: 0.3; }
          50% { height: 60px; opacity: 1; }
        }
        @keyframes wave3 {
          0%, 100% { height: 18px; opacity: 0.3; }
          50% { height: 40px; opacity: 0.8; }
        }
        @keyframes wave4 {
          0%, 100% { height: 22px; opacity: 0.3; }
          50% { height: 55px; opacity: 1; }
        }
 
        .section {
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          scroll-snap-align: start;
          position: relative;
          z-index: 1;
        }
        .blue-bg {
          background-image: url('../bg.jpg');
          background-size: cover;
          background-position: center;
          color: white;
          position: relative;
          flex-direction: row;
          scroll-snap-align: start;
        }
        .white-bg {
          background: linear-gradient(135deg, #ffffff, #f0f0f5);
          color: black;
          scroll-snap-align: start;
          flex-direction: column;
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .darkblue-bg {
          background: linear-gradient(135deg, #0a286c, #244caa);
          color: white;
          scroll-snap-align: start;
          flex-direction: row;
        }
        .btn-blue {
          background-color: #4086f5;
          border: none;
          font-weight: 600;
          color: white;
          text-decoration: none;
          display: inline-block;
          padding: 0.35rem 1rem;
          font-size: 0.9rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .btn-blue:hover {
          background-color: #2e62e0;
          text-decoration: none;
          color: white;
        }
        .btn-blue:focus {
          box-shadow: none;
          outline: none;
        }
        .container-fluid {
          max-width: 1200px;
        }
        .title-large {
          font-weight: 700;
          font-size: 2.5rem;
          line-height: 1.1;
        }
        .image-holder {
          background-color: #bbd5ff;
          border-radius: 6px;
          min-width: 400px;
          min-height: 260px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .image-holder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        }
        .image-holder::before {
          content: "";
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 12px;
          border: 3px solid transparent;
          box-shadow: 0 0 0 0 white;
          opacity: 0;
          transition: all 0.5s ease;
          pointer-events: none;
          z-index: 2;
          animation: none;
        }
        .image-holder:hover::before {
          opacity: 1;
          animation: wave-border 1.5s infinite;
        }
        @keyframes wave-border {
          0% {
            box-shadow: 0 0 5px 2px white, 0 0 10px 5px rgba(255, 255, 255, 0.6);
          }
          50% {
            box-shadow: 0 0 15px 6px white, 0 0 30px 15px rgba(255, 255, 255, 0.4);
          }
          100% {
            box-shadow: 0 0 5px 2px white, 0 0 10px 5px rgba(255, 255, 255, 0.6);
          }
        }
      `}</style>
 
      {/* Music wave background */}
      <div className="music-wave-bg">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
        <div className="bar bar4"></div>
        <div className="bar bar5"></div>
        <div className="bar bar6"></div>
        <div className="bar bar7"></div>
        <div className="bar bar8"></div>
        <div className="bar bar9"></div>
        <div className="bar bar10"></div>
      </div>
 
      <div style={{ scrollSnapType: "y mandatory", overflowY: "scroll", height: "100vh" }}>
        {/* First section: image on right */}
        <section className="section d-flex blue-bg">
          <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
            <div style={{ maxWidth: "480px" }}>
              <h1 className="title-large mb-3">Learn Guitar with <br /> GuitMix</h1>
                <p style={{ fontSize: "1rem", fontWeight: "500", marginBottom: "1rem", maxWidth: "360px" }}>
                Master guitar basics quickly with our easy-to-follow lessons.
                </p>
              <Link
                to="/learnguitar"
                className="btn-blue mt-3"
                style={{ background: "#FFDD70", color: "#0D2B56" }}
              >
                Learn Here! &nbsp; &rarr;
              </Link>
            </div>
            {/*<div className="image-holder" style={itemStyle}>
              <img src="/path/to/your/image1.jpg" alt="Placeholder 1" style={imgStyle} />
            </div>*/}
          </div>
        </section>
 
        {/* Second section: image on left */}
        <section className="section d-flex white-bg flex-column justify-content-center">
          <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
            <div className="image-holder" style={itemStyle}>
              <img src="../tuner.png" alt="Placeholder 2" style={imgStyle} />
            </div>
            <div style={{ maxWidth: "460px" }}>
              <h2 className="title-large mb-3">Built-in <br /> Tuner</h2>
                <p style={{ fontSize: "1rem", fontWeight: "500", marginBottom: "1rem", maxWidth: "360px" }}>
                Tune your instrument accurately anytime with our integrated tuner.
                </p>
              <Link
                to="/tuner"
                className="btn-blue mt-3"
              >
                Tune here! &nbsp; &rarr;
              </Link>
            </div>
          </div>
 
          <div className="container-fluid d-flex justify-content-between align-items-center mt-5 flex-wrap">
            <div className="orbit">
              <div className="circle"></div>
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <div className="dot blue"></div>
              <div className="dot orange"></div>
              <div className="dot center"></div>
            </div>
          </div>
        </section>
 
        {/* Third section: image on right */}
        <section className="section d-flex darkblue-bg">
          <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
            <div style={{ maxWidth: "460px" }}>
             <h2>
            Mixer, for variety of <h1 className="title-large mb-3">Instruments!</h1>
            </h2>
            <p style={{ fontSize: "1rem", fontWeight: "500", marginBottom: "1rem", maxWidth: "360px" }}>
            Blend sounds effortlessly using our multi-instrument mixer tools.
            </p>
              <Link
                to="/mixer"
                className="btn-blue mt-3"
                style={{ background: "#FFDD70", color: "#0D2B56" }}
              >
                Let's Go &nbsp; &rarr;
              </Link>
            </div>
            <div className="image-holder" style={itemStyle}>
              <img src="../mixer.png" alt="Placeholder 3" style={imgStyle} />
            </div>
          </div>
        </section>
      </div>
       </>
    );
}