:root {
    --bg: #050505;
    --card: rgba(255, 255, 255, 0.045);
    --border: rgba(255, 255, 255, 0.1);
    --text: #f5f5f5;
    --muted: #949494;
    --cyan: #00e5ff;
    --purple: #8b5cf6;
    --pink: #ec4899;
    --green: #00ff9d;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--bg);
    color: var(--text);
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}


/* =========================
   BACKGROUND
========================= */

.background {
    position: fixed;
    inset: 0;
    z-index: -10;
    overflow: hidden;
    background:
        radial-gradient(circle at 20% 20%, rgba(0, 229, 255, .08), transparent 30%),
        radial-gradient(circle at 80% 70%, rgba(139, 92, 246, .09), transparent 30%),
        #050505;
}

.grid-background {
    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);

    background-size: 50px 50px;

    mask-image: linear-gradient(to bottom, black, transparent 90%);
}

.orb {
    position: absolute;

    width: 450px;
    height: 450px;

    border-radius: 50%;

    filter: blur(100px);

    opacity: .16;

    animation: floatOrb 12s ease-in-out infinite;
}

.orb1 {
    background: var(--cyan);
    top: -200px;
    left: -150px;
}

.orb2 {
    background: var(--purple);
    right: -200px;
    top: 30%;
    animation-delay: -4s;
}

.orb3 {
    background: var(--pink);
    left: 20%;
    bottom: -300px;
    animation-delay: -8s;
}

@keyframes floatOrb {

    0%,100% {
        transform: translate(0,0) scale(1);
    }

    50% {
        transform: translate(50px,-40px) scale(1.15);
    }
}


/* Cursor */

.cursor-glow {
    position: fixed;

    width: 350px;
    height: 350px;

    border-radius: 50%;

    pointer-events: none;

    background: radial-gradient(
        circle,
        rgba(0,229,255,.06),
        transparent 65%
    );

    transform: translate(-50%,-50%);

    z-index: -1;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    height: 80px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 7%;

    background: rgba(5,5,5,.55);

    backdrop-filter: blur(20px);

    border-bottom: 1px solid rgba(255,255,255,.06);

    z-index: 1000;
}

.logo {
    font-family: "Space Grotesk";
    font-size: 32px;
    font-weight: 800;
}

.logo span,
.footer-logo span {
    color: var(--cyan);
}

.navbar nav {
    display: flex;
    gap: 30px;
}

.nav-link {
    position: relative;

    color: #888;

    font-size: 13px;

    transition: .3s;
}

.nav-link:hover,
.nav-link.active {
    color: white;
}

.nav-link.active::after {
    content: "";

    position: absolute;

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: var(--cyan);

    left: 50%;
    bottom: -10px;

    box-shadow: 0 0 12px var(--cyan);
}

.nav-button {
    border: 1px solid var(--border);

    padding: 11px 18px;

    border-radius: 30px;

    font-size: 13px;

    transition: .3s;
}

.nav-button:hover {
    border-color: var(--cyan);

    box-shadow: 0 0 25px rgba(0,229,255,.15);
}

.nav-button i {
    margin-left: 7px;
    color: var(--cyan);
}

.menu-btn {
    display: none;

    background: none;

    color: white;

    border: none;

    font-size: 22px;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    padding: 150px 8% 80px;

    display: grid;

    grid-template-columns: 1.1fr .9fr;

    align-items: center;

    gap: 40px;

    max-width: 1400px;

    margin: auto;
}

.availability {
    display: inline-flex;

    align-items: center;

    gap: 9px;

    padding: 8px 13px;

    border: 1px solid rgba(0,255,157,.2);

    border-radius: 30px;

    color: #aaa;

    font-size: 11px;

    margin-bottom: 25px;

    background: rgba(0,255,157,.03);
}

.pulse {
    width: 7px;
    height: 7px;

    background: var(--green);

    border-radius: 50%;

    box-shadow: 0 0 12px var(--green);

    animation: pulse 2s infinite;
}

@keyframes pulse {

    0%,100% {
        box-shadow: 0 0 5px var(--green);
    }

    50% {
        box-shadow: 0 0 20px var(--green);
    }
}

.eyebrow {
    color: #aaa;

    font-size: 13px;

    letter-spacing: 3px;

    margin-bottom: 18px;
}

.eyebrow span {
    color: var(--cyan);
}

.hero h1 {
    font-family: "Space Grotesk";

    font-size: clamp(55px, 7vw, 100px);

    line-height: .95;

    letter-spacing: -5px;

    max-width: 800px;
}

.gradient-text {
    background:
        linear-gradient(
            90deg,
            var(--cyan),
            var(--purple),
            var(--pink),
            var(--cyan)
        );

    background-size: 300%;

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;

    animation: gradientMove 5s linear infinite;
}

@keyframes gradientMove {

    0% {
        background-position: 0%;
    }

    100% {
        background-position: 300%;
    }
}

.hero-description {
    max-width: 650px;

    color: var(--muted);

    font-size: 16px;

    line-height: 1.8;

    margin-top: 30px;
}

.hero-description strong {
    color: white;
}

.hero-buttons {
    display: flex;

    gap: 15px;

    margin-top: 35px;

    flex-wrap: wrap;
}

.primary-btn,
.outline-btn {
    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    padding: 14px 23px;

    border-radius: 30px;

    font-size: 13px;

    font-weight: 600;

    transition: .35s;
}

.primary-btn {
    color: #001014;

    background: var(--cyan);

    box-shadow:
        0 0 30px rgba(0,229,255,.18);
}

.primary-btn:hover {
    transform: translateY(-4px);

    box-shadow:
        0 10px 35px rgba(0,229,255,.3);
}

.outline-btn {
    border: 1px solid var(--border);

    color: white;
}

.outline-btn:hover {
    border-color: var(--cyan);

    color: var(--cyan);

    transform: translateY(-4px);
}

.social-links {
    display: flex;

    gap: 12px;

    margin-top: 35px;
}

.social-links a {
    width: 40px;
    height: 40px;

    border: 1px solid var(--border);

    border-radius: 50%;

    display: grid;

    place-items: center;

    color: #888;

    transition: .3s;
}

.social-links a:hover {
    color: var(--cyan);

    border-color: var(--cyan);

    transform: translateY(-4px);

    box-shadow: 0 0 20px rgba(0,229,255,.15);
}


/* =========================
   HERO ORBIT
========================= */

.hero-right {
    display: flex;

    justify-content: center;

    align-items: center;
}

.profile-orbit {
    width: 450px;
    height: 450px;

    position: relative;

    display: grid;

    place-items: center;
}

.orbit {
    position: absolute;

    border: 1px solid rgba(0,229,255,.18);

    border-radius: 50%;
}

.orbit-one {
    width: 390px;
    height: 390px;

    animation: rotate 18s linear infinite;
}

.orbit-two {
    width: 300px;
    height: 300px;

    border-color: rgba(139,92,246,.2);

    animation: rotateReverse 12s linear infinite;
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}

@keyframes rotateReverse {
    to {
        transform: rotate(-360deg);
    }
}

.center-card {
    width: 210px;
    height: 210px;

    border: 1px solid rgba(255,255,255,.12);

    border-radius: 30px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.09),
            rgba(255,255,255,.025)
        );

    backdrop-filter: blur(20px);

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    box-shadow:
        inset 0 1px rgba(255,255,255,.1),
        0 30px 80px rgba(0,0,0,.5);

    transform: rotate(-3deg);

    animation: cardFloat 4s ease-in-out infinite;
}

@keyframes cardFloat {

    0%,100% {
        transform: translateY(0) rotate(-3deg);
    }

    50% {
        transform: translateY(-12px) rotate(3deg);
    }
}

.ai-symbol {
    font-size: 30px;

    display: flex;

    align-items: center;

    gap: 5px;

    color: var(--cyan);

    text-shadow: 0 0 25px rgba(0,229,255,.6);

    margin-bottom: 18px;
}

.ai-symbol span {
    font-size: 15px;
    color: #777;
}

.center-card h3 {
    font-family: "Space Grotesk";

    letter-spacing: 5px;

    font-size: 22px;
}

.center-card p {
    font-size: 8px;

    letter-spacing: 3px;

    color: #777;

    margin-top: 8px;
}

.floating-icon {
    position: absolute;

    width: 55px;
    height: 55px;

    border-radius: 17px;

    display: grid;

    place-items: center;

    background: rgba(10,10,10,.7);

    backdrop-filter: blur(10px);

    border: 1px solid var(--border);

    font-size: 22px;

    animation: iconFloat 4s ease-in-out infinite;
}

.icon1 {
    top: 15px;
    right: 70px;
    color: #ffd43b;
}

.icon2 {
    bottom: 35px;
    right: 20px;
    color: #ff6b6b;
    animation-delay: -1s;
}

.icon3 {
    bottom: 40px;
    left: 30px;
    color: var(--purple);
    animation-delay: -2s;
}

.icon4 {
    top: 60px;
    left: 35px;
    color: var(--cyan);
    animation-delay: -3s;
}

@keyframes iconFloat {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
}


/* =========================
   STATS
========================= */

.stats-section {
    padding: 0 8% 100px;
}

.stats-card {
    max-width: 1100px;

    margin: auto;

    padding: 25px 35px;

    display: flex;

    align-items: center;

    justify-content: space-around;

    border: 1px solid var(--border);

    border-radius: 20px;

    background: rgba(255,255,255,.035);

    backdrop-filter: blur(15px);
}

.stat {
    text-align: center;
}

.stat strong {
    display: block;

    font-family: "Space Grotesk";

    font-size: 28px;

    color: white;
}

.stat span {
    color: #777;

    font-size: 11px;

    text-transform: uppercase;

    letter-spacing: 1px;
}

.stat-line {
    height: 40px;

    width: 1px;

    background: var(--border);
}


/* =========================
   SECTIONS
========================= */

.section {
    max-width: 1200px;

    margin: auto;

    padding: 120px 8%;
}

.section-heading {
    margin-bottom: 60px;
}

.section-label {
    color: var(--cyan);

    font-size: 11px;

    letter-spacing: 3px;

    margin-bottom: 15px;
}

.section-heading h2 {
    font-family: "Space Grotesk";

    font-size: clamp(40px,5vw,65px);

    letter-spacing: -3px;

    line-height: 1;
}

.section-heading h2 span {
    color: var(--cyan);
}

.heading-description {
    color: #777;

    margin-top: 20px;

    max-width: 550px;
}


/* =========================
   ABOUT
========================= */

.about-grid {
    display: grid;

    grid-template-columns: 1.3fr .7fr;

    gap: 70px;

    align-items: center;
}

.about-text p {
    color: #999;

    line-height: 1.9;

    margin-bottom: 20px;
}

.about-cards {
    display: flex;

    flex-direction: column;

    gap: 15px;
}

.mini-card {
    padding: 20px;

    display: flex;

    gap: 18px;

    align-items: center;

    border: 1px solid var(--border);

    background: var(--card);

    border-radius: 15px;

    transition: .3s;
}

.mini-card:hover {
    transform: translateX(8px);

    border-color: rgba(0,229,255,.3);
}

.mini-card > i {
    width: 45px;
    height: 45px;

    display: grid;

    place-items: center;

    border-radius: 12px;

    color: var(--cyan);

    background: rgba(0,229,255,.08);
}

.mini-card h3 {
    font-size: 15px;
}

.mini-card p {
    font-size: 11px;

    color: #777;

    margin-top: 3px;
}


/* =========================
   EDUCATION
========================= */

.timeline {
    position: relative;

    max-width: 900px;

    margin: auto;
}

.timeline::before {
    content: "";

    position: absolute;

    left: 12px;

    top: 0;
    bottom: 0;

    width: 1px;

    background:
        linear-gradient(
            var(--cyan),
            rgba(0,229,255,.05)
        );
}

.timeline-item {
    position: relative;

    padding-left: 55px;

    margin-bottom: 30px;
}

.timeline-dot {
    position: absolute;

    left: 4px;

    top: 30px;

    width: 17px;
    height: 17px;

    border-radius: 50%;

    background: var(--bg);

    border: 2px solid var(--cyan);

    box-shadow: 0 0 20px rgba(0,229,255,.5);

    z-index: 2;
}

.timeline-card {
    padding: 30px;

    border: 1px solid var(--border);

    background: var(--card);

    border-radius: 18px;

    transition: .35s;
}

.timeline-card:hover {
    transform: translateX(8px);

    border-color: rgba(0,229,255,.25);
}

.timeline-date {
    color: var(--cyan);

    font-size: 10px;

    letter-spacing: 2px;

    margin-bottom: 10px;
}

.timeline-card h3 {
    font-family: "Space Grotesk";

    font-size: 24px;
}

.timeline-card p {
    color: #777;

    margin-top: 5px;
}

.timeline-card .highlight {
    color: #ddd;
}

.grade {
    display: inline-flex;

    gap: 15px;

    margin-top: 20px;

    padding: 8px 14px;

    border-radius: 20px;

    background: rgba(0,229,255,.06);

    font-size: 11px;

    color: #777;
}

.grade strong {
    color: var(--cyan);
}


/* =========================
   SKILLS
========================= */

.skills-container {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 40px;
}

.skills-panel {
    padding: 30px;

    border: 1px solid var(--border);

    border-radius: 20px;

    background: var(--card);
}

.skills-panel h3 {
    font-family: "Space Grotesk";

    margin-bottom: 30px;
}

.skill {
    margin-bottom: 25px;
}

.skill-info {
    display: flex;

    justify-content: space-between;

    font-size: 12px;

    margin-bottom: 8px;

    color: #bbb;
}

.skill-info span:last-child {
    color: var(--cyan);
}

.skill-bar {
    height: 5px;

    border-radius: 10px;

    background: #1a1a1a;

    overflow: hidden;
}

.skill-progress {
    height: 100%;

    width: 0;

    background:
        linear-gradient(
            90deg,
            var(--cyan),
            var(--purple)
        );

    border-radius: inherit;

    transition: width 1.5s cubic-bezier(.2,.8,.2,1);
}

.tech-cloud {
    display: grid;

    grid-template-columns: repeat(2,1fr);

    gap: 15px;
}

.tech-item {
    min-height: 120px;

    border: 1px solid var(--border);

    border-radius: 18px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 10px;

    background: var(--card);

    transition: .35s;
}

.tech-item:hover {
    transform: translateY(-7px) scale(1.02);

    border-color: rgba(0,229,255,.3);

    box-shadow: 0 20px 50px rgba(0,0,0,.25);
}

.tech-item i {
    font-size: 30px;

    color: var(--cyan);
}

.tech-item span {
    font-size: 12px;

    color: #aaa;
}


/* =========================
   PROJECTS
========================= */

.projects-grid {
    display: grid;

    grid-template-columns: repeat(3,1fr);

    gap: 20px;
}

.project-card {
    position: relative;

    min-height: 450px;

    padding: 28px;

    border-radius: 22px;

    border: 1px solid var(--border);

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.07),
            rgba(255,255,255,.025)
        );

    overflow: hidden;

    transition:
        transform .4s,
        border-color .4s,
        box-shadow .4s;
}

.project-card::before {
    content: "";

    position: absolute;

    width: 250px;
    height: 250px;

    border-radius: 50%;

    filter: blur(80px);

    opacity: .12;

    top: -100px;
    right: -100px;
}

.project-one::before {
    background: var(--cyan);
}

.project-two::before {
    background: var(--purple);
}

.project-three::before {
    background: var(--pink);
}

.project-card:hover {
    transform: translateY(-12px);

    border-color: rgba(0,229,255,.3);

    box-shadow:
        0 30px 70px rgba(0,0,0,.4);
}

.project-top {
    display: flex;

    justify-content: space-between;

    align-items: center;
}

.project-icon {
    width: 55px;
    height: 55px;

    border-radius: 16px;

    display: grid;

    place-items: center;

    background: rgba(0,229,255,.07);

    color: var(--cyan);

    font-size: 22px;
}

.project-number {
    font-family: "Space Grotesk";

    font-size: 40px;

    color: rgba(255,255,255,.06);
}

.project-content {
    margin-top: 45px;
}

.project-category {
    color: var(--cyan);

    font-size: 9px;

    letter-spacing: 2px;

    margin-bottom: 12px;
}

.project-content h3 {
    font-family: "Space Grotesk";

    font-size: 30px;

    margin-bottom: 8px;
}

.project-content h4 {
    font-size: 13px;

    font-weight: 400;

    color: #aaa;

    margin-bottom: 20px;
}

.project-content > p:not(.project-category) {
    color: #777;

    font-size: 13px;

    line-height: 1.7;
}

.tags {
    display: flex;

    flex-wrap: wrap;

    gap: 7px;

    margin-top: 25px;
}

.tags span {
    padding: 6px 10px;

    border: 1px solid var(--border);

    border-radius: 20px;

    font-size: 9px;

    color: #888;
}

.project-arrow {
    position: absolute;

    bottom: 25px;
    right: 25px;

    width: 40px;
    height: 40px;

    border-radius: 50%;

    display: grid;

    place-items: center;

    border: 1px solid var(--border);

    color: #777;

    transition: .3s;
}

.project-card:hover .project-arrow {
    color: var(--cyan);

    border-color: var(--cyan);

    transform: rotate(45deg);
}


/* =========================
   TRAINING
========================= */

.training-card {
    display: flex;

    align-items: center;

    gap: 30px;

    padding: 35px;

    border: 1px solid var(--border);

    border-radius: 22px;

    background: var(--card);

    position: relative;

    overflow: hidden;
}

.training-logo {
    min-width: 80px;
    height: 80px;

    border-radius: 22px;

    display: grid;

    place-items: center;

    font-size: 30px;

    color: var(--cyan);

    background:
        linear-gradient(
            135deg,
            rgba(0,229,255,.15),
            rgba(139,92,246,.12)
        );

    border: 1px solid rgba(0,229,255,.15);
}

.training-content h3 {
    font-family: "Space Grotesk";

    font-size: 28px;

    margin-bottom: 8px;
}

.training-content > p:last-child {
    color: #777;

    max-width: 700px;

    line-height: 1.7;
}

.training-badge {
    margin-left: auto;

    padding: 9px 14px;

    border-radius: 30px;

    border: 1px solid rgba(0,229,255,.2);

    color: var(--cyan);

    font-size: 10px;

    white-space: nowrap;
}


/* =========================
   STRENGTHS
========================= */

.strength-grid {
    display: grid;

    grid-template-columns: repeat(3,1fr);

    gap: 15px;
}

.strength-grid div {
    padding: 25px;

    border: 1px solid var(--border);

    border-radius: 15px;

    background: var(--card);

    display: flex;

    align-items: center;

    gap: 15px;

    transition: .3s;
}

.strength-grid div:hover {
    border-color: rgba(0,229,255,.25);

    transform: translateY(-5px);
}

.strength-grid i {
    color: var(--cyan);
}

.strength-grid span {
    color: #aaa;

    font-size: 13px;
}


/* =========================
   CONTACT
========================= */

.contact-section {
    position: relative;

    min-height: 650px;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    padding: 120px 8%;

    overflow: hidden;
}

.contact-glow {
    position: absolute;

    width: 500px;
    height: 500px;

    background: var(--cyan);

    filter: blur(180px);

    opacity: .07;
}

.contact-content {
    position: relative;

    max-width: 850px;
}

.contact-content h2 {
    font-family: "Space Grotesk";

    font-size: clamp(45px,6vw,75px);

    letter-spacing: -4px;

    line-height: 1;

    margin-bottom: 25px;
}

.contact-content h2 span {
    color: var(--cyan);
}

.contact-content > p:not(.section-label) {
    color: #777;

    max-width: 600px;

    margin: auto;

    line-height: 1.8;
}

.contact-buttons {
    display: flex;

    justify-content: center;

    gap: 15px;

    margin-top: 35px;
}

.contact-info {
    display: flex;

    justify-content: center;

    gap: 25px;

    flex-wrap: wrap;

    margin-top: 35px;

    color: #777;

    font-size: 11px;
}

.contact-info i {
    color: var(--cyan);

    margin-right: 6px;
}


/* =========================
   FOOTER
========================= */

footer {
    border-top: 1px solid var(--border);

    padding: 35px 8%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    color: #555;

    font-size: 11px;
}

.footer-logo {
    font-family: "Space Grotesk";

    font-size: 25px;

    font-weight: 800;

    color: white;
}

.copyright {
    color: #444;
}


/* =========================
   REVEAL ANIMATION
========================= */

.reveal {
    opacity: 0;

    transform: translateY(40px);

    transition:
        opacity .8s ease,
        transform .8s ease;
}

.reveal.visible {
    opacity: 1;

    transform: translateY(0);
}


/* =========================
   MOBILE
========================= */

@media (max-width: 1000px) {

    .navbar {
        padding: 0 5%;
    }

    .navbar nav,
    .nav-button {
        display: none;
    }

    .menu-btn {
        display: block;
    }

    .navbar nav.mobile-open {
        position: absolute;

        display: flex;

        flex-direction: column;

        top: 80px;
        left: 0;

        width: 100%;

        padding: 25px;

        background: rgba(5,5,5,.96);

        border-bottom: 1px solid var(--border);

        gap: 20px;
    }

    .hero {
        grid-template-columns: 1fr;

        text-align: center;

        padding-top: 140px;
    }

    .hero-description {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons,
    .social-links {
        justify-content: center;
    }

    .hero-right {
        margin-top: 30px;
    }

    .projects-grid {
        grid-template-columns: 1fr 1fr;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }
}


@media (max-width: 700px) {

    .hero {
        padding-left: 6%;
        padding-right: 6%;
    }

    .hero h1 {
        font-size: 55px;

        letter-spacing: -3px;
    }

    .profile-orbit {
        transform: scale(.75);
        margin: -50px 0;
    }

    .stats-card {
        display: grid;

        grid-template-columns: 1fr 1fr;

        gap: 25px;

        padding: 25px;
    }

    .stat-line {
        display: none;
    }

    .section {
        padding: 90px 6%;
    }

    .skills-container {
        grid-template-columns: 1fr;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .strength-grid {
        grid-template-columns: 1fr;
    }

    .training-card {
        flex-direction: column;

        text-align: center;
    }

    .training-badge {
        margin-left: 0;
    }

    .contact-buttons {
        flex-direction: column;

        align-items: center;
    }

    footer {
        flex-direction: column;

        gap: 15px;

        text-align: center;
    }
}


@media (max-width: 450px) {

    .hero h1 {
        font-size: 48px;
    }

    .profile-orbit {
        transform: scale(.6);
        margin: -80px 0;
    }

    .section-heading h2 {
        font-size: 42px;

        letter-spacing: -2px;
    }

    .tech-cloud {
        grid-template-columns: 1fr 1fr;
    }

}
