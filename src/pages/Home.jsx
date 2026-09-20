import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">DISCOVER THE CULTURAL HERITAGE OF INDIA</p>

          <h1 className="hero-title">
            Explore the Beautiful
            <br />
            World of Indian Art
          </h1>

          <p className="hero-description">
            Discover India's rich artistic traditions, from ancient cave paintings
            and classical art to colourful folk traditions, textile heritage and
            modern masterpieces.
          </p>

          <div className="hero-buttons">
            <Link to="/interactive-map" className="primary-button">
              Explore Interactive Map →
            </Link>
            <a href="#art-traditions" className="secondary-button">
              Explore Art Forms
            </a>
          </div>

          <div className="stats-container">
            <div className="stat-card">
              <h2>10+</h2>
              <p>Art Locations</p>
            </div>
            <div className="stat-card">
              <h2>5+</h2>
              <p>Art Categories</p>
            </div>
            <div className="stat-card">
              <h2>1000+</h2>
              <p>Years of Heritage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-heading">
          <p className="section-eyebrow">INDIA'S ARTISTIC LEGACY</p>
          <h2>
            A Journey Through
            <br />
            India's Artistic Heritage
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Indian art reflects the country's remarkable cultural diversity,
              with artistic traditions developing across different regions,
              communities and historical periods.
            </p>
            <p>
              From the ancient murals of Ajanta to the intricate details of
              miniature paintings, traditional folk art and vibrant textile
              traditions, every artwork carries stories of people, places,
              beliefs and history.
            </p>
            <p>
              This project brings these traditions together in one interactive
              experience, allowing you to explore Indian art through geography,
              history and visual culture.
            </p>
          </div>

          <div className="about-highlight">
            <div className="highlight-icon">✦</div>
            <h3>
              Art connects
              <br />
              people, places & history
            </h3>
            <p>
              Explore how artistic traditions are connected to the regions where
              they developed.
            </p>
          </div>
        </div>
      </section>

      <section className="art-traditions-section" id="art-traditions">
        <div className="section-heading center-heading">
          <p className="section-eyebrow">EXPLORE THE TRADITIONS</p>
          <h2>Diverse Forms of Indian Art</h2>
          <p className="section-description">
            Explore different artistic traditions represented across the Indian
            subcontinent.
          </p>
        </div>

        <div className="art-cards">
          <div className="art-card">
            <div className="art-card-number">01</div>
            <h3>Miniature Art</h3>
            <p>
              Detailed paintings developed under royal courts and regional
              artistic schools, including Jaipur, Mewar and Mughal traditions.
            </p>
            <span>Jaipur • Udaipur • Delhi</span>
          </div>

          <div className="art-card">
            <div className="art-card-number">02</div>
            <h3>Folk Art</h3>
            <p>
              Community-based traditions that use distinctive symbols, patterns
              and storytelling techniques passed between generations.
            </p>
            <span>Madhubani • Warli • Gond</span>
          </div>

          <div className="art-card">
            <div className="art-card-number">03</div>
            <h3>Classical Painting</h3>
            <p>
              Traditional painting styles known for their devotional themes,
              decorative details and distinct regional techniques.
            </p>
            <span>Thanjavur • Mysuru • Puri</span>
          </div>

          <div className="art-card">
            <div className="art-card-number">04</div>
            <h3>Cave & Ancient Art</h3>
            <p>
              Ancient paintings and artistic expressions preserved in historic
              cave complexes and heritage sites.
            </p>
            <span>Ajanta • Ellora</span>
          </div>

          <div className="art-card">
            <div className="art-card-number">05</div>
            <h3>Textile & Craft</h3>
            <p>
              Artistic traditions expressed through textiles, embroidery,
              decorative crafts and regional patterns.
            </p>
            <span>Phulkari • Banarasi • Gujarat</span>
          </div>

          <div className="art-card">
            <div className="art-card-number">06</div>
            <h3>Modern Indian Art</h3>
            <p>
              Artistic movements that connect India's cultural heritage with
              modern visual expression and contemporary ideas.
            </p>
            <span>Mumbai • Kolkata • Chennai</span>
          </div>
        </div>
      </section>

      <section className="map-intro-section">
        <div className="map-intro-content">
          <div className="map-intro-text">
            <p className="section-eyebrow">EXPLORE BY LOCATION</p>
            <h2>
              Discover Art
              <br />
              Across India
            </h2>
            <p>
              Our interactive map connects artistic traditions with the places
              where they developed. Select a location to discover its art form,
              history, significance, artists and artworks.
            </p>

            <Link to="/interactive-map" className="primary-button">
              Open Interactive Map →
            </Link>
          </div>

          <div className="map-visual">
            <div className="map-circle circle-one"></div>
            <div className="map-circle circle-two"></div>
            <div className="map-circle circle-three"></div>
            <div className="map-center">
              <span>INDIA</span>
              <small>ART & HERITAGE</small>
            </div>
            <div className="map-pin pin-one">✦</div>
            <div className="map-pin pin-two">✦</div>
            <div className="map-pin pin-three">✦</div>
            <div className="map-pin pin-four">✦</div>
          </div>
        </div>
      </section>

      <section className="locations-section">
        <div className="section-heading center-heading">
          <p className="section-eyebrow">FEATURED HERITAGE LOCATIONS</p>
          <h2>From Rajasthan to Tamil Nadu</h2>
          <p className="section-description">
            A selection of artistic traditions represented in our interactive
            heritage map.
          </p>
        </div>

        <div className="location-cards">
          <div className="location-card">
            <span>RAJASTHAN</span>
            <h3>Jaipur</h3>
            <p>Jaipur Miniature Painting</p>
          </div>
          <div className="location-card">
            <span>BIHAR</span>
            <h3>Madhubani</h3>
            <p>Madhubani / Mithila Painting</p>
          </div>
          <div className="location-card">
            <span>TAMIL NADU</span>
            <h3>Thanjavur</h3>
            <p>Thanjavur Painting</p>
          </div>
          <div className="location-card">
            <span>ODISHA</span>
            <h3>Puri</h3>
            <p>Odisha Pattachitra</p>
          </div>
          <div className="location-card">
            <span>MAHARASHTRA</span>
            <h3>Ajanta</h3>
            <p>Ancient Cave Paintings</p>
          </div>
          <div className="location-card">
            <span>MAHARASHTRA</span>
            <h3>Warli Region</h3>
            <p>Warli Folk Art</p>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading center-heading">
          <p className="section-eyebrow">THROUGH THE AGES</p>
          <h2>Art That Tells India's Story</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot">01</div>
            <div>
              <h3>Ancient India</h3>
              <p>
                Cave paintings and early artistic traditions provide a window
                into India's ancient cultural history.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot">02</div>
            <div>
              <h3>Royal Courts</h3>
              <p>
                Regional courts supported miniature painting traditions,
                developing distinctive schools and artistic styles.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot">03</div>
            <div>
              <h3>Community Traditions</h3>
              <p>
                Folk and craft traditions continued through communities, carrying
                stories, symbols and techniques across generations.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot">04</div>
            <div>
              <h3>Modern Expression</h3>
              <p>
                Contemporary artists continue to reinterpret Indian culture
                through new forms, materials and visual ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p className="section-eyebrow">BEGIN YOUR JOURNEY</p>
        <h2>
          Every Region Has
          <br />
          a Story to Tell
        </h2>
        <p>
          Explore India's artistic heritage and discover the stories behind the
          art forms, artists and places that shaped them.
        </p>

        <Link to="/interactive-map" className="primary-button">
          Explore the Map →
        </Link>
      </section>

      <footer className="home-footer">
        <div className="footer-left">
          <strong>Indian Art Heritage</strong>
          <span>Interactive Cultural Heritage Project</span>
        </div>

        <div className="student-credentials">
          <span>Created by</span>
          <strong>Trupti Jain</strong>
          <small>RA2411003012155</small>
        </div>
      </footer>
    </main>
  );
}

export default Home;
