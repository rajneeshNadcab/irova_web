import React, { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [landing, setLanding] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isTrue, setIsTrue] = useState(true);

  const active = () => {
    if (isTrue == false) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  };
  const toggle = () => {};
  const toggleClass = () => {
    if (isActive == false) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    setLanding(
      "visibility: visible; animation: quick-slide-bottom 1s ease-out"
    );
  }, []);

  const [isVisible, setIsVisible] = useState(true);
  const [scrollListenerActive, setScrollListenerActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollListenerActive) {
        const scrolled = window.scrollY;
        if (scrolled > 0) {
          setIsVisible(false);
          setScrollListenerActive(false); // Disable further scroll events
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollListenerActive]);

  return (
    <>
      <div className="ch-scroll-buffer" id="scroll-buffer"></div>

      <div className="ch-landing">
        <header>
          <div
            className="ch-landing-img-container ch-avatar-group-block"
            id="ch-hand-logo-container"
          >
            <div className="ch-hand-wave-img-container">
              <img
                className="ch-wave-img"
                alt="clubhouse wave"
                src="assets/hacker.png"
                height="64"
              />{" "}
              <img
                className="ch-wave-img"
                alt="clubhouse wave"
                src="assets/hacker.png"
                style={{ clipPath: "inset(100% 0px 0px)" }}
                id="ch-hand-logo-dark-theme"
              />
            </div>
          </div>
          <div
            className="ch-device-restricted--mobile ch-mobile-menu-container ch-theme ch-avatar-group-block"
            data-theme="light"
          >
            <a className="ch-mobile-get-app-link" href="javasccript:void(0)">
              get the app
            </a>
            <div
              className="ch-landing-img-container ch-device-restricted--mobile"
              id="ch-hamburger-menu-container"
              onClick={active}
            >
              <i
                class="fa fa-bars ch-hamburger-menu-img"
                id="ch-hamburger-menu-light-theme"
                style={{ fontSize: "26px", cursor: "pointer" }}
              ></i>{" "}
              <i
                class="fa fa-bars ch-hamburger-menu-img"
                style={{
                  clipPath: "inset(100% 0 0 0)",
                  fontSize: "26px",
                  cursor: "pointer",
                }}
                id="ch-hamburger-menu-dark-theme"
              ></i>
            </div>
          </div>
          <ul
            className="ch-nav-links ch-theme ch-avatar-group-block"
            data-theme="light"
          >
            <a href="/earn">
              <li> Community Earn</li>
            </a>
            <a href="/affliate">
              <li>Affliate</li>
            </a>
            <li>
              <a
                
                // onClick={toggleClass}
                href="https://web.ghost.one"
              >
                <button className="ch-btn--transparent ch-header-btn"
                id="ch-header-cta-btn">
                I'm Irova <img src="assets/ghost 8.png" height={"15px"} />
                </button>
              </a>
            </li>
          </ul>
        </header>
        <main>
          <div className="ch-main-content-container">
            <div
              id="ch-logo-arrow-container"
              style={{ display: isVisible ? "flex" : "none" }}
            >
              <div
                // className="ch-landing-img-container ch-avatar-group-block ch-main-content-slide-out"
                className={`ch-landing-img-container  ch-avatar-group-block ${
                  isVisible ? "" : "ch-main-content-slide-out"
                }`}
                id="ch-logo-container"
              >
                <h1
                  className="ch-landing-img ch-mount-animation--slide-bottom .ch-action-text-container"
                  style={{
                    fontWeight: "bolder",
                    fontFamily: "'GT Maru', 'Nunito', sans-serif",
                    fontSize: "60px",
                  }}
                  id="Irova"
                >
                  {" "}
                  Irova : Cluster
                </h1>
                {/* <img
                  className="ch-landing-img ch-mount-animation--slide-bottom"
                  src="https://static-assets.clubhouseapi.com/static/img/clubhouse_logo_dark.2677abb66623.svg"
                  alt="Clubhouse logo"
                  id="ch-image-light"
                />*/}{" "}
                {/* <img
                  className="ch-landing-img"
                  src="https://static-assets.clubhouseapi.com/static/img/clubhouse_logo_dark.2677abb66623.svg"
                  alt="Clubhouse logo"
                  id="ch-image-dark-theme"
                  style={{ clipPath: "inset(100% 0px 0px)" }}
                /> */}
              </div>

              <div
                className="ch-floating-arrow"
                id="floating-arrow"
                style={{ opacity: 1 }}
              >
                <i
                  class="fa fa-long-arrow-down"
                  style={{ fontSize: "36px" }}
                ></i>
                {/* <img
                  src="https://static-assets.clubhouseapi.com/static/img/icon_arrow_down.30d965af62c2.svg"
                  alt="scroll for more"
                  height="36"
                /> */}
              </div>
            </div>
            <div
              className="ch-action-text-container ch-main-content-slide-in ch-main-content-slide-in"
              style={{ display: isVisible ? "none" : "block" }}
            >
              <div
                className="ch-theme ch-avatar-group-block ch-cta-text"
                data-theme="light"
              >
                <span
                  className="ch-device-restricted--desktop"
                  style={{ letterSpacing: "2px" }}
                >
                  Web3 Ethereum Messaging
                </span>
                <span
                  className="ch-device-restricted--mobile"
                  style={{ letterSpacing: "2px" }}
                >
                  Web3 Ethereum Messaging
                </span>
              </div>
              <div className="ch-btn-container ch-theme" data-theme="light">
                <div className="ch-device-restricted--mobile">
                  <a>
                    <button
                      className="ch-btn--yellow ch-avatar-group-block"
                      id="ch-get-clubhouse-body-btn--mobile"
                      onClick={toggleClass}
                      style={{ lineHeight: "1" }}
                    >
                      Get Irova
                    </button>
                  </a>
                </div>
                <div className="ch-device-restricted--desktop ch-desktop-action-btn-container">
                  <button
                    className="ch-btn--yellow ch-avatar-group-block"
                    id="ch-get-clubhouse-body-btn"
                    onClick={toggleClass}
                    style={{ lineHeight: "1" }}
                  >
                    Get Irova
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <div
          class="ch-scroll-cta"
          style={{
            animation:
              "quick-slide-bottom 1s ease-out 0s 1 normal none running",
            visibility: "visible",
          }}
        >
          <div class="ch-scroll-cta--text">Scroll for more</div>
        </div> */}
        <div
          class="ch-scroll-cta"
          style={{
            visibility: isVisible ? "visible" : "hidden",
            animation: isVisible
              ? "1s ease-out 0s 1 normal none running quick-slide-bottom"
              : "0.5s ease-in 0s 1 normal forwards running quick-slide-out",
          }}

          //   style={{ isVisible ? animation: '1s ease-out 0s 1 normal none running quick-slide-bottom',visibility: 'visible' :animation: 0.5s ease-in 0s 1 normal forwards running quick-slide-out; visibility: visible;
          // }}
        >
          <div class="ch-scroll-cta--text">Scroll for more</div>
        </div>
      </div>
      <div className="ch-scroll-page"></div>

      <div
        class={`ch-overlay ${
          isActive ? "ch-mount-animation--fade" : "ch-hidden"
        }`}
        id="ch-modal-overlay"
        style={{ display: isActive ? "block" : "none" }}
      >
        {/* `your-initial-class ${isActive ? 'active-class' : ''}` */}
        <div class="ch-overlay-content">
          <div
            class="ch-modal"
            style={{ visibility: isActive ? "visible" : "hidden" }}
          >
            <div class="ch-modal-close-btn-container">
              <button
                class="ch-btn--transparent ch-btn--compact ch-btn--borderless"
                id="ch-modal-close-btn"
                onClick={toggleClass}
              >
                <i
                  className="fa fa-close"
                  style={{ fontSize: "24px", cursor: "pointer" }}
                ></i>
              </button>
            </div>
            <div class="ch-modal-content">
              <img
                alt="scan qr code to download Clubhouse"
                src="https://static-assets.clubhouseapi.com/static/img/homepage/qr_code_dark.abd8babca33e.png"
                height="234"
              />
            </div>
            <div class="ch-modal-subtext-container">
              <div>
                <div class="ch-modal-download-arrow-container">
                  <i
                    class="fa fa-long-arrow-down ch-modal-download-arrow"
                    style={{ fontSize: "36px" }}
                  ></i>
                  {/* <img
                    class="ch-modal-download-arrow"
                    src="https://static-assets.clubhouseapi.com/static/img/icon_arrow_down.30d965af62c2.svg"
                    height="36"
                  /> */}
                </div>
                <div class="ch-modal-subtext">Scan to download</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class={`ch-hamburger-menu-content ${isTrue ? `ch-hidden` : ""}`}>
        <div class="ch-hamburger-menu-close-btn-container" onClick={active}>
          <i
            class="fa fa-close"
            id="ch-close-menu"
            height="28"
            style={{ fontSize: "28px", cursor: "pointer" }}
          ></i>
        </div>
        <ul
          class="ch-nav-links ch-avatar-group-block ch-mobile-nav-links"
          data-theme="dark"
        >
          <a href="/earn">
            <li>community earn</li>
          </a>
          <a href="/affliate">
            <li>affliate</li>
          </a>
          <a>
            <li>
              <button class="ch-btn--transparent" onClick={toggleClass}>
                {" "}
                Get Irova
              </button>
            </li>
          </a>
        </ul>
        <footer class="ch-hamburger-footer">
          <ul class="ch-footer-links">
            <li>
              <a href="/privacy">privacy</a>
            </li>
            <li>
              <a href="/terms">terms</a>
            </li>
            <li>
              <a href="javasccript:void(0)/">FAQs</a>
            </li>
          </ul>
          <ul class="ch-footer-links ch-hamburger-social-links">
            <li>
              <a href="https://twitter.com/Irovamsg">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/Irovamsg/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </footer>
        <div class="ch-copyright ch-hamburger-copyright">
          <a
            href="/investor"
            style={{
              color: "black",
              textDecoration: "none",
              paddingRight: "5px",
            }}
          >
            <span class="ch-copyright-year"> Investor</span>{" "}
          </a>
          <a
            href="/advertise"
            style={{
              color: "black",
              textDecoration: "none",
              paddingRight: "5px",
            }}
          >
            <span class="ch-copyright-year"> Advertise</span>{" "}
          </a>
          © <span class="ch-copyright-year">2023</span> Cork Labs Ltd.
        </div>
      </div>
    </>
  );
};

export default Navbar;
