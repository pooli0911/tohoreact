import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <div id="container">
        <div id="contentwrap">
          <input type="hidden" id="lang" value="" />
          <header className="">
            <div className="head">
              <div id="logo">
                <a href="/">
                  <h1 className="logo_img"><img src="img/logo.png" alt="TOHO" width="56" height="56" /></h1>
                </a>
              </div>
              <nav id="h_menu">
                <ul className="lang">
                  <li><a href="#" className="lang_zh" id="h_menu"><i></i>中文</a></li>
                </ul>
              </nav>
              <div id="menu">
                <button type="button" className="pc_hamburger">
                  <div className="pc_hamburger_icon"></div>
                </button>

                <div className="menu_bg"></div>

                <nav className="pc_menu">
                  <div className="main_menu">
                    <div className="menu_list_wrap">
                      <ul className="menu_list">
                        <li className="titles">
                          <a href="#" className="highlight ">Information</a>

                        </li>

                        <li className="titles">
                          <a href="#" className="highlight ">All titles</a>

                        </li>

                        <li className="titles">
                          <a href="#" className="highlight">
                            Film </a>
                        </li>

                        <li className="titles">
                          <a href="#" className="highlight">
                            TV Series </a>
                        </li>

                        <li className="titles">
                          <a href="#" className="highlight">
                            Godzilla </a>
                        </li>

                        <li className="titles">
                          <a href="#" className="highlight">
                            Kurosawa </a>
                        </li>
                        <li className="titles">
                          <a href="#" className="highlight">
                            Studio </a>
                        </li>
                        <li className="titles">
                          <a href="#" className="highlight">
                            Company </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <nav id="pos">
                <ul className="menu">
                  <li className=""><a href="#">Information</a></li>
                  <li className=""><a href="#">All Titles</a></li>
                  <li className=""><a href="#">Studio</a></li>
                  <li className=""><a href="#">Company</a></li>
                </ul>
              </nav>
            </div>
          </header>

          <main className="top">
            <div id="main_ttop">
              <div id="bg_main_ttop">
                <img src="img/top_bg_main.jpg" alt="" width="100%" height="100%" />
              </div>
            </div>
            <div id="information">
              <div className="title">
                <h3>Information </h3>
              </div>
              <div className="info_list">
                <ul>
                  <li>
                    <a href="#">
                      <div className="info_category">
                        <span className="cate">Other</span>
                        <span className="date">Feb.13,2020</span>
                      </div>
                      <div className="info_body">
                        <p>New contents are added in the website.</p>
                      </div>
                      <div className="more">
                        <span className="r_arrow">More</span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div className="info_category">
                        <span className="cate">Other</span>
                        <span className="date">Jun.5,2019</span>
                      </div>
                      <div className="info_body">
                        <p>The World’s first Godzilla-branded website is open.</p>
                      </div>
                      <div className="more">
                        <span className="r_arrow">More</span>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div className="info_category">
                        <span className="cate">Other</span>
                        <span className="date">Jan.15,2019</span>
                      </div>
                      <div className="info_body">
                        <p>New contents are added in the website.</p>
                      </div>
                      <div className="more">
                        <span className="r_arrow">More</span>
                      </div>
                    </a>
                  </li>


                  <li>
                    <a href="#">More Information<span className="r_arrow"></span></a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="lineup">
              <div id="titles">
                <div className="title">
                  <h3>All titles </h3>
                </div>
                <div className="link">
                  <a href="#">
                    <img src="img/btn_more.png" alt="More titles" /> </a>
                </div>
              </div>
              <ul className="gallery">
                <li data-filepath="img/img_content_1.png">
                  <a href="https://www.toho.website/movies/MyHeroAcademiatheMovie/index.html">
                    <div className="poster_img" style={{ backgroundImage: `url("img/img_content_1.png")` }}>
                    </div>
                    <div className="hover">
                      <div className="hover_box">
                        <div className="poster_img" style={{ backgroundImage: `url("img/img_content_1.png")` }}>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li data-filepath="img/img_content_2.png">
                  <a href="https://www.toho.website/movies/HerBlueSky/index.html">
                    <div className="poster_img" style={{ backgroundImage: `url("img/img_content_2.png")` }}>
                    </div>
                    <div className="hover">
                      <div className="hover_box">
                        <div className="poster_img" style={{ backgroundImage: `url("img/img_content_2.png")` }}>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li data-filepath="img/img_content_3.png">
                  <a href="https://www.toho.website/movies/ListentotheUniverse/index.html">
                    <div className="poster_img" style={{ backgroundImage: `url("img/img_content_3.png")` }}>
                    </div>
                    <div className="hover">
                      <div className="hover_box">
                        <div className="poster_img" style={{ backgroundImage: `url("img/img_content_3.png")` }}>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li data-filepath="img/img_content_4.png">
                  <a href="https://www.toho.website/movies/HelloWorld/index.html">
                    <div className="poster_img" style={{ backgroundImage: `url("img/img_content_4.png")` }}>
                    </div>
                    <div className="hover">
                      <div className="hover_box">
                        <div className="poster_img" style={{ backgroundImage: `url("img/img_content_4.png")` }}>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li data-filepath="img/img_content_5.png">
                  <a href="https://www.toho.website/movies/DragonQuestYourStory/index.html">
                    <div className="poster_img" style={{ backgroundImage: `url("img/img_content_5.png")` }}>
                    </div>
                    <div className="hover">
                      <div className="hover_box">
                        <div className="poster_img" style={{ backgroundImage: `url("img/img_content_5.png")` }}>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li data-filepath="img/img_content_6.png">
                  <a href="https://www.toho.website/movies/TheGreatWarofArchimedes/index.html">
                    <div className="poster_img" style={{ backgroundImage: `url("img/img_content_6.png")` }}>
                    </div>
                    <div className="hover">
                      <div className="hover_box">
                        <div className="poster_img" style={{ backgroundImage: `url("img/img_content_6.png")` }}>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li data-filepath="img/img_content_7.png">
                  <a href="https://www.toho.website/movies/WeatheringWithYouil/index.html">
                    <div className="poster_img" style={{ backgroundImage: `url("img/img_content_7.png")` }}>
                    </div>
                    <div className="hover">
                      <div className="hover_box">
                        <div className="poster_img" style={{ backgroundImage: `url("img/img_content_7.png")` }}>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li data-filepath="img/img_content_8.png">
                  <a href="https://www.toho.website/movies/Promare/index.html">
                    <div className="poster_img" style={{ backgroundImage: `url("img/img_content_8.png")` }}>
                    </div>
                    <div className="hover">
                      <div className="hover_box">
                        <div className="poster_img" style={{ backgroundImage: `url("img/img_content_8.png")` }}>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li data-filepath="img/img_content_9.png">
                  <a href="https://www.toho.website/movies/YouShineintheMoonlight/index.html">
                    <div className="poster_img" style={{ backgroundImage: `url("img/img_content_9.png")` }}>
                    </div>
                    <div className="hover">
                      <div className="hover_box">
                        <div className="poster_img" style={{ backgroundImage: `url("img/img_content_9.png")` }}>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li data-filepath="img/img_content_10.png">
                  <a href="https://www.toho.website/movies/FortunasEye/index.html">
                    <div className="poster_img" style={{ backgroundImage: `url("img/img_content_10.png")` }}>
                    </div>
                    <div className="hover">
                      <div className="hover_box">
                        <div className="poster_img" style={{ backgroundImage: `url("img/img_content_10.png")` }}>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <div id="godzilla">
                <div className="main_img">
                  <div className="title">
                    <a href="#">
                      <h3></h3>
                    </a>
                    <div className="link">
                      <a href="#">
                        <img src="img/top_link_title.svg" alt="Godzilla Movies" /> </a>
                    </div>
                  </div>
                </div>
                <div className="wrap_slider">
                  <div className="slider">
                    <ul className="gallery">
                      <li>
                        <a href="https://www.toho.website/movies/1/index.html">
                          <div className="poster_img"
                            style={{ backgroundImage: `url("img/img_golzilla_1.png")` }}>
                          </div>
                          <div className="hover">
                            <div className="hover_box">
                              <div className="poster_img"
                                style={{ backgroundImage: `url("img/img_golzilla_1.png")` }}>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.toho.website/movies/2/index.html">
                          <div className="poster_img"
                            style={{ backgroundImage: `url("img/img_golzilla_2.png")` }}>
                          </div>
                          <div className="hover">
                            <div className="hover_box">
                              <div className="poster_img"
                                style={{ backgroundImage: `url("img/img_golzilla_2.png")` }}>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.toho.website/movies/3/index.html">
                          <div className="poster_img"
                            style={{ backgroundImage: `url("img/img_golzilla_3.png")` }}>
                          </div>
                          <div className="hover">
                            <div className="hover_box">
                              <div className="poster_img"
                                style={{ backgroundImage: `url("img/img_golzilla_3.png")` }}>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.toho.website/movies/4/index.html">
                          <div className="poster_img"
                            style={{ backgroundImage: `url("img/img_golzilla_4.png")` }}>
                          </div>
                          <div className="hover">
                            <div className="hover_box">
                              <div className="poster_img"
                                style={{ backgroundImage: `url("img/img_golzilla_4.png")` }}>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.toho.website/movies/5/index.html">
                          <div className="poster_img"
                            style={{ backgroundImage: `url("img/img_golzilla_5.png")` }}>
                          </div>
                          <div className="hover">
                            <div className="hover_box">
                              <div className="poster_img"
                                style={{ backgroundImage: `url("img/img_golzilla_5.png")` }}>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer id="site-footer" className="">
        <div id="page_top">
          <a href="#">
            <img src="img/page_top.png" />
          </a>
        </div>
        <nav id="utility-menu">
          <ul>
            <li>
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Clip & Still Licensing</a>
            </li>
            <li>
              <a href="#" target="_blank" className="icon external link">toho.co.jp</a>
              <a href="#" target="_blank" className="icon external link">godzilla.com</a>
            </li>
          </ul>
        </nav>
        <span id="copyright">Copyright &copy; TOHO CO., LTD. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

export default App;
