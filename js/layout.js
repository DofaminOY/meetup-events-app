export const renderHeader = () => {
  const header = document.querySelector("#header");

  if (!header) {
    return;
  }

  header.innerHTML = `
    <header class="header">
      <div class="header__container">
        <a class="header__logo" href="./index.html">
          <img
            class="header__logo-img"
            src="./assets/svg/header/logo.svg"
            alt="Meetup logo"
          />
        </a>

        <form class="header__search">
          <label class="header__search-field">
            <img
              class="header__search-icon"
              src="./assets/svg/header/Search2.svg"
              alt=""
            />
            <input
              class="header__search-input"
              type="text"
              placeholder="Search events"
            />
          </label>

          <label class="header__location-field">
            <input
              class="header__location-input"
              type="text"
              value="Mountain View, CA"
            />
          </label>

          <button class="header__search-button" type="submit">
            <img
              class="header__search-button-icon"
              src="./assets/svg/header/Search.svg"
              alt=""
            />
          </button>
        </form>

        <div class="header__actions">
          <button class="header__language" type="button">
            <img
              class="header__earth-icon"
              src="./assets/svg/header/earth.svg"
              alt=""
            />
            <span>English</span>
          </button>

          <a class="header__login" href="#"> Log in </a>

          <a class="header__signup" href="#"> Sign up </a>
        </div>
      </div>
    </header>
  `;
};

export const renderFooter = () => {
  const footer = document.querySelector("#footer");

  if (!footer) {
    return;
  }

  footer.innerHTML = `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__top">
          <p class="footer__top-text">Create your own Meetup group.</p>
          <a class="footer__top-button" href="#">Get Started</a>
        </div>

        <div class="footer__columns">
          <div class="footer__column">
            <h3 class="footer__column-title">Your Account</h3>

            <ul class="footer__list">
              <li class="footer__item">
                <a class="footer__link" href="#">Sign up</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Log in</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Help</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Become an Affiliate</a>
              </li>
            </ul>
          </div>

          <div class="footer__column">
            <h3 class="footer__column-title">Discover</h3>

            <ul class="footer__list">
              <li class="footer__item">
                <a class="footer__link" href="#">Groups</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Calendar</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Topics</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Cities</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Online Events</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Local Guides</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Make Friends</a>
              </li>
            </ul>
          </div>

          <div class="footer__column">
            <h3 class="footer__column-title">Meetup</h3>

            <ul class="footer__list">
              <li class="footer__item">
                <a class="footer__link" href="#">About</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Blog</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Meetup Pro</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Careers</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Apps</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">Podcast</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer__social-row">
          <div class="footer__social-box">
            <p class="footer__social-title">Follow us</p>

            <div class="footer__social-links">
              <a class="footer__social-link" href="#">
                <img
                  class="footer__social-icon"
                  src="./assets/svg/footer/Facebook.svg"
                  alt="Facebook"
                />
              </a>

              <a class="footer__social-link" href="#">
                <img
                  class="footer__social-icon"
                  src="./assets/svg/footer/Twitter.svg"
                  alt="Twitter"
                />
              </a>

              <a class="footer__social-link" href="#">
                <img
                  class="footer__social-icon"
                  src="./assets/svg/footer/YouTube.svg"
                  alt="YouTube"
                />
              </a>

              <a class="footer__social-link" href="#">
                <img
                  class="footer__social-icon"
                  src="./assets/svg/footer/Instagram.svg"
                  alt="Instagram"
                />
              </a>

              <a class="footer__social-link" href="#">
                <img
                  class="footer__social-icon"
                  src="./assets/svg/footer/TikTok.svg"
                  alt="TikTok"
                />
              </a>
            </div>
          </div>

          <div class="footer__apps">
            <a class="footer__app-link" href="#">
              <img
                class="footer__app-img"
                src="./assets/svg/footer/googlePlay.svg"
                alt="Get it on Google Play"
              />
            </a>

            <a class="footer__app-link" href="#">
              <img
                class="footer__app-img"
                src="./assets/svg/footer/appStore.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>

        <div class="footer__bottom">
          <span class="footer__copy">© 2024 Meetup</span>
          <a class="footer__bottom-link" href="#">Terms of Service</a>
          <a class="footer__bottom-link" href="#">Privacy Policy</a>
          <a class="footer__bottom-link" href="#">
            Do Not Sell or Share My Personal Data
          </a>
          <a class="footer__bottom-link" href="#">Cookie Policy</a>
          <a class="footer__bottom-link" href="#">Help</a>
        </div>
      </div>
    </footer>
  `;
};