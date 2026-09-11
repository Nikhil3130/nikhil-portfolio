/* =====================================================
   NIKHIL THOMANDRU
   ADVANCED PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 1800);

});


/* =====================================================
   THREE.JS PARTICLE FIELD
===================================================== */

const container =
    document.getElementById("canvas-container");


const scene =
    new THREE.Scene();


const camera =
    new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );


camera.position.z = 5;


const renderer =
    new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });


renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);


renderer.setSize(
    window.innerWidth,
    window.innerHeight
);


container.appendChild(renderer.domElement);


/* Particle geometry */

const particleCount = 900;

const geometry =
    new THREE.BufferGeometry();


const positions =
    new Float32Array(
        particleCount * 3
    );


for (let i = 0; i < particleCount * 3; i += 3) {

    positions[i] =
        (Math.random() - .5) * 14;

    positions[i + 1] =
        (Math.random() - .5) * 10;

    positions[i + 2] =
        (Math.random() - .5) * 10;

}


geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        positions,
        3
    )
);


/* Particle material */

const material =
    new THREE.PointsMaterial({

        color: 0x00e5ff,

        size: 0.025,

        transparent: true,

        opacity: .65

    });


const particles =
    new THREE.Points(
        geometry,
        material
    );


scene.add(particles);


/* =====================================================
   CONNECTING PARTICLE LINES
===================================================== */

const lineMaterial =
    new THREE.LineBasicMaterial({

        color: 0x00e5ff,

        transparent: true,

        opacity: .06

    });


const lineGeometry =
    new THREE.BufferGeometry();


const linePositions =
    [];


for (let i = 0; i < 120; i++) {

    const a =
        Math.floor(
            Math.random() * particleCount
        );

    const b =
        Math.floor(
            Math.random() * particleCount
        );


    linePositions.push(

        positions[a * 3],
        positions[a * 3 + 1],
        positions[a * 3 + 2],

        positions[b * 3],
        positions[b * 3 + 1],
        positions[b * 3 + 2]

    );

}


lineGeometry.setAttribute(

    "position",

    new THREE.Float32BufferAttribute(
        linePositions,
        3
    )

);


const lines =
    new THREE.LineSegments(
        lineGeometry,
        lineMaterial
    );


scene.add(lines);


/* =====================================================
   MOUSE PARALLAX
===================================================== */

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;


document.addEventListener(
    "mousemove",
    (event) => {

        mouseX =
            (event.clientX /
                window.innerWidth -
                .5);

        mouseY =
            (event.clientY /
                window.innerHeight -
                .5);

    }
);


/* =====================================================
   ANIMATION LOOP
===================================================== */

function animate() {

    requestAnimationFrame(animate);


    targetX +=
        (mouseX - targetX) * .025;


    targetY +=
        (mouseY - targetY) * .025;


    particles.rotation.y += .0007;

    particles.rotation.x =
        targetY * .12;


    particles.rotation.y +=
        targetX * .0008;


    lines.rotation.y =
        particles.rotation.y;


    renderer.render(
        scene,
        camera
    );

}


animate();


/* =====================================================
   RESPONSIVE THREE.JS
===================================================== */

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);


/* =====================================================
   CURSOR
===================================================== */

const cursor =
    document.querySelector(".cursor");


const follower =
    document.querySelector(
        ".cursor-follower"
    );


let cursorX = 0;
let cursorY = 0;

let followerX = 0;
let followerY = 0;


document.addEventListener(
    "mousemove",
    (event) => {

        cursorX =
            event.clientX;

        cursorY =
            event.clientY;

        cursor.style.left =
            cursorX + "px";

        cursor.style.top =
            cursorY + "px";

    }
);


function cursorAnimation() {

    followerX +=
        (cursorX - followerX) * .12;

    followerY +=
        (cursorY - followerY) * .12;


    follower.style.left =
        followerX + "px";

    follower.style.top =
        followerY + "px";


    requestAnimationFrame(
        cursorAnimation
    );

}


cursorAnimation();


/* Cursor hover */

const hoverElements =
    document.querySelectorAll(
        "a, button, .project-card, .glass-card, .skill-node"
    );


hoverElements.forEach(
    (element) => {

        element.addEventListener(
            "mouseenter",
            () => {

                follower.style.width =
                    "60px";

                follower.style.height =
                    "60px";

                follower.style.borderColor =
                    "rgba(0,240,255,.8)";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                follower.style.width =
                    "35px";

                follower.style.height =
                    "35px";

                follower.style.borderColor =
                    "rgba(0,240,255,.5)";

            }
        );

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: .12
        }

    );


revealElements.forEach(
    (element) => {

        observer.observe(element);

    }
);


/* =====================================================
   NAVIGATION ACTIVE STATE
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            (section) => {

                const top =
                    section.offsetTop - 250;


                if (
                    window.scrollY >= top
                ) {

                    current =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

const menu =
    document.querySelector(
        ".mobile-menu"
    );


const navigation =
    document.querySelector(
        ".navigation"
    );


menu.addEventListener(
    "click",
    () => {

        navigation.classList.toggle(
            "mobile-open"
        );


        const icon =
            menu.querySelector("i");


        if (
            navigation.classList.contains(
                "mobile-open"
            )
        ) {

            icon.classList.replace(
                "fa-bars",
                "fa-xmark"
            );

        } else {

            icon.classList.replace(
                "fa-xmark",
                "fa-bars"
            );

        }

    }
);


/* Close menu */

navLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                navigation.classList.remove(
                    "mobile-open"
                );


                menu.querySelector(
                    "i"
                ).classList.replace(
                    "fa-xmark",
                    "fa-bars"
                );

            }
        );

    }
);


/* =====================================================
   PROJECT 3D TILT
===================================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    (card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) /
                    centerY *
                    -2;


                const rotateY =
                    (x - centerX) /
                    centerX *
                    2;


                card.style.transform =
                    `translateY(-12px)
                     perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    }
);


/* =====================================================
   MAGNETIC BUTTONS
===================================================== */

const magneticButtons =
    document.querySelectorAll(
        ".magnetic"
    );


magneticButtons.forEach(
    (button) => {

        button.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    `translate(
                        ${x * .15}px,
                        ${y * .15}px
                    )`;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    }
);


/* =====================================================
   SMOOTH ANCHORS
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    (link) => {

        link.addEventListener(
            "click",
            (event) => {

                const target =
                    document.querySelector(
                        link.getAttribute(
                            "href"
                        )
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            }
        );

    }
);
