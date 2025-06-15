<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="social-links">
        <a
          href="https://www.facebook.com/LZ14GE/?locale=de_DE"
          class="social-link"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/loeschzug_horst/"
          class="social-link"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a
          href="mailto:fflz14zugfuehrer@gelsenkirchen.de"
          class="social-link"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>

      <div class="divider"></div>

      <div class="footer-content">
        <div class="footer-section">
          <h3>Adresse</h3>
          <p>Kampstraße 1</p>
          <p>45899 Gelsenkirchen</p>
          <p>Telefon: 0209 9582907</p>
          <p class="email-container">
            <span>E-Mail:</span>
            <a
              href="mailto:fflz14zugfuehrer@gelsenkirchen.de"
              class="footer-link"
              >fflz14zugfuehrer@gelsenkirchen.de</a
            >
          </p>
        </div>

        <div class="footer-section">
          <h3>Öffnungszeiten</h3>
          <p>LZ 14</p>
          <p>Mo, 19:30-22:00</p>
          <p class="opening-hours-spacer">JF 14</p>
          <p>Mi, 18:30-20:30</p>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-section">
          <h3>Notfall-Infopunkt:</h3>
          <p>Geschlossen</p>
        </div>
      </div>

      <div class="divider"></div>

      <div class="footer-bottom">
        <p>
          Dies ist keine offizielle Seite der Stadt bzw. der Feuerwehr
          Gelsenkirchen.
        </p>
        <div class="copyright-legal">
          <p>
            © 2025
            <a href="https://lz14.de" class="copyright-link">Löschzug 14</a>
          </p>
          <a href="/rechtliches" class="legal-link">Rechtliches</a>
        </div>
      </div>
    </div>
    <ScrollToTopButton />
  </footer>
</template>

<style scoped>
:deep(html, body) {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
}

.footer {
  background-color: #ff0000;
  color: white;
  width: 102vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50.5vw;
  margin-right: -50.5vw;
  container-type: inline-size;
}

.footer-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 7rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 3rem;
}

.social-link {
  color: rgba(255, 0, 0, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
}

.social-link svg {
  width: 22px;
  height: 22px;
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.divider {
  height: 3px;
  background-color: white;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 0 7rem;
}

.footer-section {
  flex: 1;
}

.footer-section:nth-child(1) {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 90vw;
  max-width: 340px;
  padding: 1.1rem 0.7rem;
}

.footer-section:nth-child(1) h3 {
  text-decoration: underline;
}

.footer-section:nth-child(2),
.footer-section:nth-child(4) {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 90vw;
  max-width: 340px;
  padding: 1.1rem 0.7rem;
}

.footer-section:nth-child(2) h3 {
  text-decoration: underline;
}

.footer-section:nth-child(3) {
  text-align: left;
  padding-left: 2rem;
  margin-left: 10rem;
}

.footer-section:nth-child(3) h3 {
  text-decoration: underline;
}

.footer-section h3 {
  text-decoration: underline;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
}

.footer-section p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

.footer-section p.opening-hours-spacer {
  margin-top: 3rem;
}

.email-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.05rem;
}

.email-container span {
  white-space: nowrap;
}

.footer-link {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 0.8;
}

.footer-bottom {
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  padding: 2rem 7rem 0;
}

.footer-bottom p {
  margin: 0.5rem 0;
  font-weight: 500;
}

.copyright-legal {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-weight: 500;
}

.legal-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  border-radius: 4px;
}

.legal-link:hover {
  border-color: white;
}

.copyright-link {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.copyright-link:hover {
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    gap: 1.2rem;
  }
  .footer-section,
  .footer-section:nth-child(1),
  .footer-section:nth-child(2),
  .footer-section:nth-child(4) {
    margin-bottom: 0;
    padding-bottom: 0.2rem;
    background: none;
    box-shadow: none;
  }
  .footer-section:last-child {
    margin-bottom: 0;
  }
  .footer-section {
    width: 100%;
    text-align: center;
    padding: 0.7rem 0 0.3rem 0;
    margin: 0 0 1.2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 340px;
    margin-left: auto;
    margin-right: auto;
  }
  .footer-section h3 {
    text-align: center !important;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  .footer-section p {
    margin: 0.3rem 0;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    word-break: break-word;
  }
  .footer-section .footer-link {
    overflow-wrap: anywhere;
    display: block;
    margin-top: 0.05rem;
    color: #fff;
    text-decoration: underline;
    font-weight: 500;
  }
}

@media (max-width: 768px) {
  .footer-wrapper {
    padding: 2rem 1rem;
  }
  .social-links {
    justify-content: center;
  }
  .footer-content {
    padding: 0 0.5rem;
    gap: 0.7rem;
  }
  .footer-section {
    padding: 0.5rem 0 0.2rem 0;
    margin: 0 0 0.7rem 0;
  }
  .footer-section h3 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
  .footer-section p {
    font-size: 0.97rem;
    margin: 0.2rem 0;
  }
}

@media (max-width: 600px) {
  .footer-wrapper {
    padding: 1rem 2px;
  }
  .footer-content {
    padding: 0 2px;
    gap: 1.2rem;
  }
  .footer-section {
    padding: 1.1rem 0.7rem 0.7rem 0.7rem;
    font-size: 0.98rem;
    margin: 0 0 1.2rem 0;
    width: 100%;
    max-width: 340px;
    margin-left: auto;
    margin-right: auto;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-section:nth-child(1) {
    align-items: center;
    text-align: center;
  }
  .footer-section h3 {
    font-size: 1.08rem;
    margin-bottom: 0.6rem;
    margin-top: 0.2rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  }
  .footer-section p {
    font-size: 0.97rem;
    margin: 0.18rem 0;
    text-align: inherit;
    line-height: 1.5;
    word-break: break-word;
    white-space: normal;
    color: #fff;
  }
  .footer-section .footer-link {
    overflow-wrap: anywhere;
    display: block;
    margin-top: 0.2rem;
    color: #fff;
    text-decoration: underline;
    font-weight: 500;
  }
  .footer-bottom {
    padding: 1rem 2px 0;
    font-size: 0.95rem;
  }
  .copyright-legal {
    gap: 1rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 850px) {
  .footer-wrapper {
    padding: 2rem 1rem;
  }
  .social-links {
    justify-content: center;
  }
  .scroll-to-top {
    right: 1.2rem !important;
    bottom: 1.2rem !important;
    font-size: 1em;
    padding: 0.5em 1em;
  }
}
</style>

<script>
import ScrollToTopButton from "./ScrollToTopButton.vue";

export default {
  name: "Footer",
  components: { ScrollToTopButton },
};
</script>
