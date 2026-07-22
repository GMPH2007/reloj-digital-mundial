// ==========================================================================
// CITIES DATABASE & TIMEZONE DATA (DUAL COORDINATE SYSTEM)
// ==========================================================================

const SECURE_DB_KEY = "CHRONOS_SHIELD_KEY_9988";
function decryptPayload(e){const r=atob(e);let t="";for(let o=0;o<r.length;o++)t+=String.fromCharCode(r.charCodeAt(o)^SECURE_DB_KEY.charCodeAt(o%SECURE_DB_KEY.length));return JSON.parse(t)}
const CITIES_DB = decryptPayload("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");
const ISO_TO_TZ = decryptPayload("OGonPGx1c30SJSw3JSc+ZAs8KGZgV0ooan5vbD82fWloawQhIS0iJjhwdVBVWWFkcm0pLXFlc2oMMD4rLy5qFTBXXVdWYWRybSg9cWVzagwwPisvLmoJPktQSxpvaHAqPW1pf3ENPDcjNDpkCDg7S1BcGm9ocCsrbWl/cQ08NyM0OmQHPC1VUFYab2hwPTttaX9xDTw3IzQ6ZAg2LFpWTxpvaHAuK21pf3EJOiwtaxs+Jzg2GxUYGiomcHVubRIsOilmDiMoNCoxOH0VGRpLJGpob2wOIDYyZxosIiM+OyorOhsVGBopOHB1bm0SLDopZhEjLyYkZ3V/G1hNGnlocA47PCctMiQgJGMXJi8rPCYbFRgaLTJwdW5tAz4wIS8sL2sePiYyM1hXXBpvaHAqKW1pf3EJLzclJz5kBjg2S1YaFGNqOSpsdXN9Ei47LC8lcAUkMC1WW1Eab2hwNS9taX9xCS83JSc+ZA82N1hXVl0wKic9KW1/f3ElMWd2ZH0KKDwtUFpZFw4tKiYtIAwcOjwwZ2BkfSk3e2UZG3lVJjo7LC9gAD48FxkkOSgwaWl5fVhLGgJjahMiKz06PDJnCDcrITE/LDc+FntNXS0nIRAPJiE6IGplZW4nPml/eX14VF1KKiszYBogITA9PCZnYGR9KCp7ZRkbeVUmOjssL2ARMDQnPSRuaH9pJjd9AxkaeTAhM2AdJzIxNCAoLG5of2ksLX0DGRp9Njo9PytgATA+LWtpbGYrOWdjfxt8TUosODdgBzwnPj0qPCluaH9pNjh9AxkaeTAhM2AcJio+NyBraWxmPCdnY38beFVdMSExLmEcMjEnISgiI2Zza2cvOhsDGBoCJTc9JywycBApOyQvJSxpaXl9SlwaAmNqFzo8ICM6fBs9Ki8vNyQpNH0VGRpRJ2pob2wOIDYyZwMkJyUtPyR7Ig==");

const SVG_MAP_PATH = `
    <!-- North America & Greenland -->
    <path class="map-land" d="M 50,110 L 90,80 L 140,80 L 170,110 L 220,110 L 250,80 L 290,110 L 285,135 L 260,150 L 240,150 L 225,170 L 180,185 L 165,210 L 175,230 L 155,225 L 140,195 L 138,170 L 98,160 Z" />
    <path class="map-land" d="M 235,55 L 285,45 L 305,65 L 255,90 L 230,75 Z" />
    <!-- South America -->
    <path class="map-land" d="M 180,225 L 205,225 L 230,230 L 255,255 L 280,270 L 285,295 L 265,340 L 245,370 L 240,365 L 240,340 L 225,300 L 205,260 Z" />
    <!-- Eurasia -->
    <path class="map-land" d="M 330,110 L 360,95 L 390,90 L 410,95 L 460,85 L 530,90 L 600,80 L 650,95 L 670,120 L 640,135 L 650,155 L 605,155 L 610,180 L 595,200 L 575,215 L 570,235 L 550,225 L 545,200 L 500,200 L 475,220 L 460,200 L 415,190 L 390,165 L 370,165 L 335,135 Z" />
    <!-- Africa -->
    <path class="map-land" d="M 345,155 L 370,165 L 420,175 L 450,210 L 440,245 L 430,300 L 410,300 L 390,265 L 355,230 L 335,190 Z" />
    <!-- Australia -->
    <path class="map-land" d="M 600,285 L 640,280 L 675,295 L 675,320 L 640,345 L 595,330 L 595,305 Z" />
    <!-- Madagascar -->
    <path class="map-land" d="M 452,260 L 460,262 L 455,282 L 448,278 Z" />
    <!-- Japan -->
    <path class="map-land" d="M 645,120 L 655,135 L 650,150 L 640,130 Z" />
    <!-- British Isles -->
    <path class="map-land" d="M 378,110 L 388,115 L 382,130 L 374,125 Z" />
`;

// ==========================================================================
// APP STATE
// ==========================================================================

let state = {
    theme: "cyberpunk",
    use24h: true,
    localTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    activeClocks: ["Europe/London", "America/New_York", "Asia/Tokyo"],
    alarms: [],
    stopwatch: {
        running: false,
        startTime: 0,
        elapsedTime: 0,
        laps: []
    },
    timer: {
        totalSeconds: 300, // Default 5 mins
        remainingSeconds: 300,
        running: false,
        timerId: null
    },
    selectedPlannerHour: new Date().getHours()
};

// Web Audio API context for alarm sounds
let audioCtx = null;
let activeAlarmSource = null;

// Particle Background variables
let particles = [];
let canvas = null;
let ctx = null;
let mouse = { x: null, y: null, radius: 100 };

// ==========================================================================
// INIT APP
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Check if vault is active
    const vaultEnabled = localStorage.getItem("chronos_vault_enabled") === "true";
    if (vaultEnabled) {
        state.vaultEnabled = true;
        // Display lock screen
        document.getElementById("vault-lock-screen").classList.remove("hidden");
    } else {
        // Vault is not enabled, load standard plain storage
        loadStateFromStorage();
    }

    initTheme();
    initLucide();
    initMap();
    initParticleCanvas();
    setupEventListeners();
    initStickers();
    initVaultEvents();
    
    // Start main time render loops
    requestAnimationFrame(updateTimeLoop);
    
    // Sync lists if not locked (if locked, these will sync after decrypting)
    if (!vaultEnabled) {
        updateWorldClocksGrid();
        updateAlarmsList();
        populateSelectDropdowns();
        updateTimerDisplay();
        updatePlannerComparison();
    }
});

// Load storage
function loadStateFromStorage() {
    const savedState = localStorage.getItem("chronos_state");
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            state.theme = parsed.theme || "cyberpunk";
            state.use24h = parsed.use24h !== undefined ? parsed.use24h : true;
            state.activeClocks = parsed.activeClocks || ["Europe/London", "America/New_York", "Asia/Tokyo"];
            state.alarms = parsed.alarms || [];
            state.vaultEnabled = false;
        } catch (e) {
            console.error("Error parsing local storage state", e);
        }
    }
}

// Save storage
let sessionPassword = "";

function saveStateToStorage() {
    try {
        if (state.vaultEnabled && sessionPassword) {
            const plainJson = JSON.stringify({
                theme: state.theme,
                use24h: state.use24h,
                activeClocks: state.activeClocks,
                alarms: state.alarms
            });
            VaultCrypto.encrypt(plainJson, sessionPassword).then(encryptedStr => {
                localStorage.setItem("chronos_vault_enabled", "true");
                localStorage.setItem("chronos_vault_payload", encryptedStr);
                // Clear plain state to be 100% secure
                localStorage.removeItem("chronos_state");
            });
        } else {
            localStorage.setItem("chronos_vault_enabled", "false");
            localStorage.removeItem("chronos_vault_payload");
            
            const plainState = {
                theme: state.theme,
                use24h: state.use24h,
                activeClocks: state.activeClocks,
                alarms: state.alarms
            };
            localStorage.setItem("chronos_state", JSON.stringify(plainState));
        }
    } catch (e) {
        console.error("Error saving state:", e);
    }
}

// Init Lucide Icons
function initLucide() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Theme Config
function initTheme() {
    document.body.className = `theme-${state.theme}`;
    document.querySelectorAll(".theme-dot").forEach(dot => {
        dot.classList.toggle("active", dot.dataset.theme === state.theme);
    });
    
    // Checkbox sync
    document.getElementById("format-toggle").checked = state.use24h;
    
    // Update theme values in canvas system
    if (canvas) {
        initParticles();
    }
}

// ==========================================================================
// DIGITAL PARTICLE CANVAS SYSTEM
// ==========================================================================

function initParticleCanvas() {
    canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    
    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    initParticles();
    animateParticles();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
}

class Particle {
    constructor(x, y, vx, vy, radius) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.baseRadius = radius;
    }
    
    draw() {
        // Accent colors derived from theme
        let pColor = "rgba(0, 162, 255, 0.15)";
        if (state.theme === "solar") pColor = "rgba(251, 191, 36, 0.15)";
        if (state.theme === "deepspace") pColor = "rgba(255, 255, 255, 0.1)";
        if (state.theme === "aurora") pColor = "rgba(16, 185, 129, 0.15)";
        
        ctx.fillStyle = pColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off borders
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        
        // Interactive reaction to cursor mouse
        if (mouse.x !== null && mouse.y !== null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                // Grow slightly
                if (this.radius < this.baseRadius * 2) this.radius += 0.2;
                // Move away slightly
                let force = (mouse.radius - distance) / mouse.radius;
                this.x -= dx / distance * force * 2;
                this.y -= dy / distance * force * 2;
            } else {
                if (this.radius > this.baseRadius) this.radius -= 0.1;
            }
        } else {
            if (this.radius > this.baseRadius) this.radius -= 0.1;
        }
        
        this.draw();
    }
}

function initParticles() {
    particles = [];
    // Adjust density based on screen dimensions
    const particleCount = Math.floor((canvas.width * canvas.height) / 18000);
    
    for (let i = 0; i < Math.min(particleCount, 80); i++) {
        let radius = Math.random() * 2.5 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let vx = (Math.random() - 0.5) * 0.4;
        let vy = (Math.random() - 0.5) * 0.4;
        
        particles.push(new Particle(x, y, vx, vy, radius));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => p.update());
    
    // Connect particles with faint glowing links
    let lineColor = "rgba(0, 162, 255, 0.03)";
    if (state.theme === "solar") lineColor = "rgba(251, 191, 36, 0.03)";
    if (state.theme === "deepspace") lineColor = "rgba(255, 255, 255, 0.02)";
    if (state.theme === "aurora") lineColor = "rgba(16, 185, 129, 0.03)";
    
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 150) {
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = (1 - (dist / 150)) * 0.8;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    
    requestAnimationFrame(animateParticles);
}

// ==========================================================================
// RENDER WORLD MAP WITH LIVE HOURS
// ==========================================================================

function initMap() {
    const container = document.getElementById("world-map-svg-container");
    if (!container) return;
    
    try {
        if (typeof DETAILED_MAP_SVG === 'undefined') {
            throw new Error("DETAILED_MAP_SVG data is not loaded");
        }
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(DETAILED_MAP_SVG, "image/svg+xml");
        const svgElement = doc.querySelector("svg");
        
        if (svgElement) {
            // Adapt attributes for rendering
            svgElement.setAttribute("viewBox", "30.767 241.591 784.077 458.627");
            svgElement.setAttribute("width", "100%");
            svgElement.setAttribute("height", "100%");
            svgElement.style.background = "transparent";
            svgElement.id = "world-map";
            
            // Inject style classes on paths for country outlines
            svgElement.querySelectorAll("path").forEach(path => {
                path.classList.add("map-land");
            });
            
            // Insert grid pattern definitions
            const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
            defs.innerHTML = `
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 162, 255, 0.015)" stroke-width="1"/>
                </pattern>
            `;
            svgElement.insertBefore(defs, svgElement.firstChild);
            
            // Add grid pattern background rect
            const gridRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            gridRect.setAttribute("width", "100%");
            gridRect.setAttribute("height", "100%");
            gridRect.setAttribute("fill", "url(#grid)");
            svgElement.insertBefore(gridRect, svgElement.childNodes[1]);
            
            // Append markers group
            const markersGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
            markersGroup.id = "map-markers-group";
            svgElement.appendChild(markersGroup);
            
            container.innerHTML = "";
            container.appendChild(svgElement);
            
            useDetailedMapCoordinates = true;
            renderMapMarkers();
            bindMapClicks();
            console.log("Loaded detailed vector map successfully from local memory.");
        } else {
            throw new Error("SVG tag not found in map data");
        }
    } catch (error) {
        console.warn("Falling back to local simplified map:", error);
        useDetailedMapCoordinates = false;
        initLocalMap();
    }
}

function initLocalMap() {
    const container = document.getElementById("world-map-svg-container");
    if (!container) return;
    
    let svgHTML = `
        <svg id="world-map" viewBox="0 0 800 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:transparent;">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 162, 255, 0.015)" stroke-width="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            ${SVG_MAP_PATH}
            
            <!-- Dynamic map markers and live clock labels -->
            <g id="map-markers-group"></g>
        </svg>
    `;
    
    container.innerHTML = svgHTML;
    renderMapMarkers();
}

function bindMapClicks() {
    const svg = document.getElementById("world-map");
    if (!svg) return;
    
    svg.addEventListener("click", (e) => {
        const path = e.target.closest("path");
        if (path && path.id) {
            const countryId = path.id.toLowerCase();
            const tz = ISO_TO_TZ[countryId];
            if (tz) {
                toggleMapCity(tz);
            }
        }
    });
}

function renderMapMarkers() {
    const group = document.getElementById("map-markers-group");
    if (!group) return;
    
    let markersHTML = "";
    
    CITIES_DB.forEach(city => {
        const isActive = state.activeClocks.includes(city.timezone);
        const cardId = city.timezone.replace(/\//g, "-");
        
        // Pick coordinate based on active map mode
        const cx = useDetailedMapCoordinates ? city.x_detail : city.x;
        const cy = useDetailedMapCoordinates ? city.y_detail : city.y;
        
        const tooltip = `${city.name}, ${city.country} (${city.timezone})`;
        const color = isActive ? "var(--color-accent-2)" : "var(--color-accent-1)";
        const rad = isActive ? 5.5 : 3.5;
        
        markersHTML += `
            <g class="marker-point" data-timezone="${city.timezone}" style="cursor:pointer;" onclick="event.stopPropagation(); toggleMapCity('${city.timezone}')">
                <!-- Outer Pulse Sonar Ring for Active Cities -->
                ${isActive ? `
                <circle cx="${cx}" cy="${cy}" r="11" fill="none" stroke="var(--color-accent-2)" stroke-width="0.5" opacity="0.8">
                    <animate attributeName="r" values="6;16" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="2.5s" repeatCount="indefinite" />
                </circle>
                ` : ''}
                
                <!-- Main City Marker Dot -->
                <circle cx="${cx}" cy="${cy}" r="${rad}" fill="${color}" style="filter: drop-shadow(0 0 4px ${color}); transition: all 0.3s ease;"></circle>
                
                <!-- Glassmorphic floating Live Time Label Card -->
                <rect id="map-lbl-bg-${cardId}" class="map-time-label-rect ${isActive ? 'active' : ''}" 
                      x="${cx + 7}" y="${cy - 11}" width="${isActive ? 45 : 38}" height="13" />
                      
                <text class="map-city-abbr ${isActive ? 'active' : ''}" 
                      x="${cx + 9}" y="${cy - 2}">${city.abbr}</text>
                      
                <text id="map-lbl-time-${cardId}" class="map-time-text ${isActive ? 'active' : ''}" 
                      x="${cx + 24}" y="${cy - 2}">--:--</text>
                      
                <title>${tooltip}</title>
            </g>
        `;
    });
    
    group.innerHTML = markersHTML;
    
    // Highlight active country paths on detailed map
    if (useDetailedMapCoordinates) {
        document.querySelectorAll("#world-map path").forEach(p => p.classList.remove("active-country"));
        state.activeClocks.forEach(tz => {
            const iso = Object.keys(ISO_TO_TZ).find(key => ISO_TO_TZ[key] === tz);
            if (iso) {
                const pathEl = document.getElementById(iso);
                if (pathEl) {
                    pathEl.classList.add("active-country");
                }
            }
        });
    }
}

function toggleMapCity(tz) {
    if (state.activeClocks.includes(tz)) {
        if (state.activeClocks.length <= 1) {
            alert("Debes mantener al menos una zona horaria activa.");
            return;
        }
        state.activeClocks = state.activeClocks.filter(c => c !== tz);
    } else {
        if (state.activeClocks.length >= 8) {
            alert("Límite máximo de 8 relojes mundiales alcanzado.");
            return;
        }
        state.activeClocks.push(tz);
    }
    
    saveStateToStorage();
    renderMapMarkers();
    updateWorldClocksGrid();
    updatePlannerComparison();
    populateSelectDropdowns();
}

// ==========================================================================
// SYSTEM LOOP (HIGH PRECISION TICK)
// ==========================================================================

function updateTimeLoop() {
    const now = new Date();
    
    // 1. Update Main Local Clock
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !state.use24h
    };
    
    let timeStr = now.toLocaleTimeString('es-ES', timeOptions);
    let ampm = "";
    
    if (!state.use24h) {
        const parts = timeStr.split(" ");
        if (parts.length > 1) {
            ampm = parts[1];
            timeStr = parts[0];
        } else {
            const match = timeStr.match(/(AM|PM|a\.\sm\.|p\.\sm\.)/i);
            if (match) {
                ampm = match[0].toUpperCase().replace(/\s|\./g, "");
                timeStr = timeStr.replace(match[0], "").trim();
            }
        }
    }
    
    const timeParts = timeStr.split(":");
    let formattedTimeHTML = "";
    if (timeParts.length === 3) {
        formattedTimeHTML = `${timeParts[0]}<span class="blink">:</span>${timeParts[1]}<span class="blink">:</span>${timeParts[2]}`;
    } else {
        formattedTimeHTML = timeStr;
    }
    
    document.getElementById("main-time").innerHTML = formattedTimeHTML;
    document.getElementById("main-ampm").innerText = state.use24h ? "24H" : ampm;
    
    // Main Date details
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("main-date").innerText = now.toLocaleDateString('es-ES', dateOptions);
    
    // Update main timezone label
    document.getElementById("main-timezone-label").innerText = `Local // ${state.localTimezone}`;
    
    const matchedCity = CITIES_DB.find(c => c.timezone === state.localTimezone) || { name: "Zona Local", country: "Dispositivo" };
    document.getElementById("main-city-country").innerText = `${matchedCity.name}, ${matchedCity.country}`;

    // Day Progress
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const dayProgressPercent = (((hours * 3600 + minutes * 60 + seconds) / 86400) * 100).toFixed(2);
    document.getElementById("day-progress-percent").innerText = `${dayProgressPercent}%`;
    document.getElementById("day-progress-fill").style.width = `${dayProgressPercent}%`;

    // 2. Update World Grid Cards
    tickWorldClocks();

    // 3. Tick Map live labels (un mapa ver en cada sitio sus horas)
    tickMapLabels(now);

    // 4. Stopwatch ticking
    if (state.stopwatch.running) {
        const elapsed = Date.now() - state.stopwatch.startTime + state.stopwatch.elapsedTime;
        renderStopwatchTime(elapsed);
    }

    // 5. Timer ticking progress bar
    if (state.timer.running) {
        updateTimerProgressBar();
    }
    
    // 6. Check Active Alarms
    checkAlarms(now);

    requestAnimationFrame(updateTimeLoop);
}

// ==========================================================================
// WORLD CLOCKS GRID LOGIC
// ==========================================================================

function updateWorldClocksGrid() {
    const grid = document.getElementById("world-clocks-grid");
    if (!grid) return;
    
    grid.innerHTML = "";
    document.getElementById("clocks-count").innerText = `${state.activeClocks.length} ${state.activeClocks.length === 1 ? 'Ciudad' : 'Ciudades'}`;
    
    state.activeClocks.forEach(timezone => {
        const cityData = CITIES_DB.find(c => c.timezone === timezone);
        if (!cityData) return;
        
        const card = document.createElement("div");
        card.className = "glass-card clock-card animate-zoom";
        card.id = `clock-card-${timezone.replace(/\//g, "-")}`;
        
        card.innerHTML = `
            <div class="clock-card-left">
                <div class="clock-card-city">
                    <span>${cityData.name}</span>
                    <span class="clock-card-offset" id="offset-${cityData.timezone.replace(/\//g, "-")}">UTC+0</span>
                </div>
                <div class="clock-card-sub">
                    <span class="clock-card-date" id="date-${cityData.timezone.replace(/\//g, "-")}">Cargando...</span>
                    <span class="clock-card-weather">
                        <i data-lucide="sun" class="weather-icon-small" id="weather-icon-${cityData.timezone.replace(/\//g, "-")}"></i>
                        <span id="weather-temp-${cityData.timezone.replace(/\//g, "-")}">22°C</span>
                    </span>
                </div>
            </div>
            <div class="clock-card-right">
                <div class="clock-card-time">
                    <span class="card-digital-time" id="time-${cityData.timezone.replace(/\//g, "-")}">12:00:00</span>
                    <span class="card-ampm" id="ampm-${cityData.timezone.replace(/\//g, "-")}">PM</span>
                </div>
                <button class="btn-delete-city" onclick="toggleMapCity('${cityData.timezone}')" title="Eliminar ciudad">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
    
    initLucide();
    tickWorldClocks();
}

function tickWorldClocks() {
    const now = new Date();
    
    state.activeClocks.forEach(timezone => {
        const cardId = timezone.replace(/\//g, "-");
        const timeEl = document.getElementById(`time-${cardId}`);
        const ampmEl = document.getElementById(`ampm-${cardId}`);
        const dateEl = document.getElementById(`date-${cardId}`);
        const offsetEl = document.getElementById(`offset-${cardId}`);
        const weatherTempEl = document.getElementById(`weather-temp-${cardId}`);
        const weatherIconEl = document.getElementById(`weather-icon-${cardId}`);
        
        if (!timeEl) return;
        
        let tzYear, tzMonth, tzDay, tzHour, tzMinute;
        let localYear, localMonth, localDay;
        let hourVal = "00", minuteVal = "00", secondVal = "00", ampmVal = "";
        try {
            // Local date parts
            const localFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: state.localTimezone,
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            });
            const localParts = localFormatter.formatToParts(now);
            localYear = parseInt(localParts.find(p => p.type === 'year').value);
            localMonth = parseInt(localParts.find(p => p.type === 'month').value);
            localDay = parseInt(localParts.find(p => p.type === 'day').value);
            
            // Target date parts
            const targetFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
            });
            const targetParts = targetFormatter.formatToParts(now);
            tzYear = parseInt(targetParts.find(p => p.type === 'year').value);
            tzMonth = parseInt(targetParts.find(p => p.type === 'month').value);
            tzDay = parseInt(targetParts.find(p => p.type === 'day').value);
            tzHour = parseInt(targetParts.find(p => p.type === 'hour').value);
            tzMinute = parseInt(targetParts.find(p => p.type === 'minute').value);
            
            // Format hour representation (taking into account use24h)
            const partsFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: !state.use24h
            });
            const parts = partsFormatter.formatToParts(now);
            const hrPart = parts.find(p => p.type === 'hour');
            const minPart = parts.find(p => p.type === 'minute');
            const secPart = parts.find(p => p.type === 'second');
            hourVal = hrPart ? hrPart.value : "00";
            minuteVal = minPart ? minPart.value : "00";
            secondVal = secPart ? secPart.value : "00";
            const ampmPart = parts.find(p => p.type === 'dayPeriod');
            ampmVal = ampmPart ? ampmPart.value : "";
        } catch (e) {
            tzYear = now.getFullYear();
            tzMonth = now.getMonth() + 1;
            tzDay = now.getDate();
            tzHour = now.getHours();
            tzMinute = now.getMinutes();
            localYear = now.getFullYear();
            localMonth = now.getMonth() + 1;
            localDay = now.getDate();
            
            hourVal = now.getHours().toString().padStart(2, '0');
            minuteVal = now.getMinutes().toString().padStart(2, '0');
            secondVal = now.getSeconds().toString().padStart(2, '0');
        }
        
        timeEl.innerHTML = `${hourVal}<span class="blink">:</span>${minuteVal}<span class="blink">:</span>${secondVal}`;
        ampmEl.innerText = state.use24h ? "24H" : ampmVal;
        
        // Date relative comparison
        let dayStatus = "Hoy";
        const MONTH_NAMES_ES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
        const tzMonthName = MONTH_NAMES_ES[tzMonth - 1] || "";
        
        if (localYear !== tzYear || localMonth !== tzMonth || localDay !== tzDay) {
            const localStart = Date.UTC(localYear, localMonth - 1, localDay);
            const tzStart = Date.UTC(tzYear, tzMonth - 1, tzDay);
            const diffDays = Math.round((tzStart - localStart) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                dayStatus = "Mañana";
            } else if (diffDays === -1) {
                dayStatus = "Ayer";
            } else {
                dayStatus = `${diffDays >= 0 ? '+' : ''}${diffDays}d`;
            }
        }
        
        dateEl.innerText = `${dayStatus}, ${tzDay} ${tzMonthName}`;
        
        // Offset
        const localTzFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: state.localTimezone,
            timeZoneName: 'longOffset'
        });
        const localParts = localTzFormatter.formatToParts(now);
        const localTzNamePart = localParts.find(part => part.type === 'timeZoneName');
        let localOffsetHours = 0;
        
        if (localTzNamePart && localTzNamePart.value) {
            const match = localTzNamePart.value.match(/(?:GMT|UTC)([+-])(\d+):?(\d+)?/);
            if (match) {
                const sign = match[1] === '+' ? 1 : -1;
                const hours = parseInt(match[2]);
                const minutes = match[3] ? parseInt(match[3]) : 0;
                localOffsetHours = sign * (hours + minutes / 60);
            }
        }
        
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            timeZoneName: 'longOffset'
        });
        const parts = formatter.formatToParts(now);
        const tzNamePart = parts.find(part => part.type === 'timeZoneName');
        let tzOffsetHours = 0;
        
        if (tzNamePart && tzNamePart.value) {
            const match = tzNamePart.value.match(/(?:GMT|UTC)([+-])(\d+):?(\d+)?/);
            if (match) {
                const sign = match[1] === '+' ? 1 : -1;
                const hours = parseInt(match[2]);
                const minutes = match[3] ? parseInt(match[3]) : 0;
                tzOffsetHours = sign * (hours + minutes / 60);
            }
        }
        
        const offsetDiff = tzOffsetHours - localOffsetHours;
        let offsetText = `UTC${tzOffsetHours >= 0 ? '+' : ''}${tzOffsetHours % 1 === 0 ? tzOffsetHours : tzOffsetHours.toFixed(1)}`;
        if (offsetDiff !== 0) {
            offsetText += ` (${offsetDiff >= 0 ? '+' : ''}${offsetDiff % 1 === 0 ? offsetDiff : offsetDiff.toFixed(1)}h)`;
        } else {
            offsetText += " (Local)";
        }
        
        offsetEl.innerText = offsetText;
        
        // Mock Weather state based on hour
        const hr = tzHour;
        let tempVal = 20;
        let iconName = "sun";
        
        if (hr >= 6 && hr < 11) {
            tempVal = 18 + Math.floor(Math.sin(tzMinute) * 3);
            iconName = "cloud-sun";
        } else if (hr >= 11 && hr < 17) {
            tempVal = 24 + Math.floor(Math.sin(tzMinute) * 4);
            iconName = "sun";
        } else if (hr >= 17 && hr < 21) {
            tempVal = 19 + Math.floor(Math.sin(tzMinute) * 2);
            iconName = "sunset";
        } else {
            tempVal = 14 + Math.floor(Math.sin(tzMinute) * 3);
            iconName = "moon";
        }
        
        const cityData = CITIES_DB.find(c => c.timezone === timezone);
        const noise = cityData ? (cityData.name.charCodeAt(0) % 4) : 0;
        if (noise === 1 && hr >= 6 && hr < 18) {
            iconName = "cloud-rain";
            tempVal -= 5;
        } else if (noise === 2) {
            iconName = "cloud";
        }
        
        weatherTempEl.innerText = `${tempVal}°C`;
        
        if (weatherIconEl.dataset.icon !== iconName) {
            weatherIconEl.dataset.icon = iconName;
            weatherIconEl.setAttribute("data-lucide", iconName);
            initLucide();
        }
    });
}

// Tick Map time label tags in real-time (un mapa ver en cada sitio sus horas)
function tickMapLabels(now) {
    CITIES_DB.forEach(city => {
        const cardId = city.timezone.replace(/\//g, "-");
        const mapTimeTextEl = document.getElementById(`map-lbl-time-${cardId}`);
        if (!mapTimeTextEl) return;
        
        try {
            const timeStr = new Intl.DateTimeFormat('en-US', {
                timeZone: city.timezone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }).format(now);
            
            mapTimeTextEl.textContent = timeStr;
        } catch (e) {
            mapTimeTextEl.textContent = "--:--";
        }
    });
}

// ==========================================================================
// SEARCH & ADD CITIES MODAL
// ==========================================================================

function openCitySearchModal() {
    const modal = document.getElementById("modal-city-search");
    modal.classList.add("active");
    
    const input = document.getElementById("city-search-input");
    input.value = "";
    input.focus();
    renderSearchResults("");
}

function closeCitySearchModal() {
    const modal = document.getElementById("modal-city-search");
    modal.classList.remove("active");
}

function renderSearchResults(query) {
    const container = document.getElementById("search-results-list");
    if (!container) return;
    
    container.innerHTML = "";
    const cleanQuery = query.toLowerCase().trim();
    
    const filtered = CITIES_DB.filter(city => {
        return city.name.toLowerCase().includes(cleanQuery) || 
               city.country.toLowerCase().includes(cleanQuery) || 
               city.timezone.toLowerCase().includes(cleanQuery);
    });
    
    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-state"><p>No se encontraron ciudades</p></div>`;
        return;
    }
    
    filtered.forEach(city => {
        const isAdded = state.activeClocks.includes(city.timezone);
        const item = document.createElement("div");
        item.className = "search-result-item";
        
        let offsetText = "";
        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: city.timezone,
                timeZoneName: 'shortOffset'
            });
            const parts = formatter.formatToParts(new Date());
            const tzNamePart = parts.find(part => part.type === 'timeZoneName');
            offsetText = tzNamePart ? tzNamePart.value : "";
        } catch(e) {}
        
        item.innerHTML = `
            <div>
                <div class="result-city">${city.name}</div>
                <div class="result-country">${city.country}</div>
            </div>
            <div style="display:flex; align-items:center; gap: 10px;">
                <span class="result-offset">${offsetText}</span>
                <span class="badge ${isAdded ? 'btn-danger' : 'btn-success'}" style="cursor:pointer; min-width:80px; text-align:center;">
                    ${isAdded ? 'Quitar' : 'Agregar'}
                </span>
            </div>
        `;
        
        item.addEventListener("click", () => {
            toggleMapCity(city.timezone);
            renderSearchResults(document.getElementById("city-search-input").value);
        });
        
        container.appendChild(item);
    });
}

// ==========================================================================
// PLANNER / TIMEZONE CONVERTER LOGIC
// ==========================================================================

function updatePlannerComparison() {
    const container = document.getElementById("converter-comparison-list");
    if (!container) return;
    
    container.innerHTML = "";
    const localHour = state.selectedPlannerHour;
    
    const baseDate = new Date();
    baseDate.setHours(localHour, 0, 0, 0);
    
    const sortedTimezones = [...state.activeClocks];
    if (!sortedTimezones.includes(state.localTimezone)) {
        sortedTimezones.unshift(state.localTimezone);
    } else {
        const idx = sortedTimezones.indexOf(state.localTimezone);
        sortedTimezones.splice(idx, 1);
        sortedTimezones.unshift(state.localTimezone);
    }
    
    sortedTimezones.forEach(timezone => {
        const cityData = CITIES_DB.find(c => c.timezone === timezone) || { name: "Mi Ciudad", country: "", timezone: timezone };
        
        let hour = localHour;
        let targetDay = baseDate.getDate();
        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                hour12: false
            });
            const parts = formatter.formatToParts(baseDate);
            const yPart = parts.find(p => p.type === 'year');
            const mPart = parts.find(p => p.type === 'month');
            const dPart = parts.find(p => p.type === 'day');
            const hPart = parts.find(p => p.type === 'hour');
            
            if (yPart && mPart && dPart && hPart) {
                hour = parseInt(hPart.value);
                targetDay = parseInt(dPart.value);
            }
        } catch (e) {
            console.warn("Could not determine planner target offset:", e);
        }
        
        // Status Check
        let statusClass = "status-work";
        let statusText = "Laboral";
        
        if (hour >= 9 && hour < 17) {
            statusClass = "status-work";
            statusText = "Laboral";
        } else if ((hour >= 7 && hour < 9) || (hour >= 17 && hour < 22)) {
            statusClass = "status-off";
            statusText = "Personal";
        } else {
            statusClass = "status-sleep";
            statusText = "Sueño";
        }
        
        let hourStr = "";
        if (state.use24h) {
            hourStr = `${hour.toString().padStart(2, '0')}:00`;
        } else {
            const h12 = hour % 12 === 0 ? 12 : hour % 12;
            const ampm = hour >= 12 ? "PM" : "AM";
            hourStr = `${h12}:00 ${ampm}`;
        }
        
        let relativeDayLabel = "";
        const baseDay = baseDate.getDate();
        if (baseDay !== targetDay) {
            const diff = targetDay - baseDay;
            if (diff === 1 || diff < -25) {
                relativeDayLabel = `<span style="font-size:0.6rem; color:var(--color-accent-2); margin-left: 5px;">(+1d)</span>`;
            } else if (diff === -1 || diff > 25) {
                relativeDayLabel = `<span style="font-size:0.6rem; color:var(--color-accent-2); margin-left: 5px;">(-1d)</span>`;
            }
        }
        
        const row = document.createElement("div");
        row.className = "compare-row";
        if (timezone !== state.localTimezone && !state.activeClocks.includes(timezone)) {
            row.classList.add("inactive");
        }
        
        row.innerHTML = `
            <div class="city-info">
                <span class="city-name">${cityData.name} ${timezone === state.localTimezone ? '(Local)' : ''}</span>
                <span class="timezone-label">${cityData.timezone}</span>
            </div>
            <div style="display:flex; align-items:center; gap: 15px;">
                <span style="display:flex; align-items:center; font-size:0.75rem; color:var(--color-text-muted);">
                    <span class="hour-status ${statusClass}"></span>
                    ${statusText}
                </span>
                <span class="hour-tag">${hourStr}${relativeDayLabel}</span>
            </div>
        `;
        
        container.appendChild(row);
    });
}

// ==========================================================================
// STOPWATCH LOGIC
// ==========================================================================

function toggleStopwatch() {
    const startBtn = document.getElementById("sw-btn-start");
    const lapBtn = document.getElementById("sw-btn-lap");
    
    if (state.stopwatch.running) {
        state.stopwatch.elapsedTime += Date.now() - state.stopwatch.startTime;
        state.stopwatch.running = false;
        startBtn.innerHTML = `<i data-lucide="play"></i><span>Reanudar</span>`;
        startBtn.className = "btn btn-success";
        lapBtn.disabled = true;
    } else {
        state.stopwatch.startTime = Date.now();
        state.stopwatch.running = true;
        startBtn.innerHTML = `<i data-lucide="pause"></i><span>Pausar</span>`;
        startBtn.className = "btn btn-secondary";
        lapBtn.disabled = false;
    }
    initLucide();
}

function resetStopwatch() {
    state.stopwatch.running = false;
    state.stopwatch.startTime = 0;
    state.stopwatch.elapsedTime = 0;
    state.stopwatch.laps = [];
    
    const startBtn = document.getElementById("sw-btn-start");
    startBtn.innerHTML = `<i data-lucide="play"></i><span>Iniciar</span>`;
    startBtn.className = "btn btn-success";
    
    document.getElementById("sw-btn-lap").disabled = true;
    renderStopwatchTime(0);
    renderLaps();
    initLucide();
}

function recordLap() {
    if (!state.stopwatch.running) return;
    
    const totalElapsed = Date.now() - state.stopwatch.startTime + state.stopwatch.elapsedTime;
    let lapTime = totalElapsed;
    
    if (state.stopwatch.laps.length > 0) {
        const previousLapsSum = state.stopwatch.laps.reduce((acc, lap) => acc + lap.rawTime, 0);
        lapTime = totalElapsed - previousLapsSum;
    }
    
    state.stopwatch.laps.push({
        num: state.stopwatch.laps.length + 1,
        formattedLapTime: formatStopwatchTime(lapTime),
        formattedTotalTime: formatStopwatchTime(totalElapsed),
        rawTime: lapTime
    });
    
    renderLaps();
}

function formatStopwatchTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let centiseconds = Math.floor((ms % 1000) / 10);
    
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    
    let formatted = "";
    if (hours > 0) {
        formatted += `${hours.toString().padStart(2, '0')}:`;
    }
    formatted += `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
    return formatted;
}

function renderStopwatchTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let centiseconds = Math.floor((ms % 1000) / 10);
    
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    
    const hoursPart = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : "";
    const minSecStr = `${hoursPart}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const msStr = `.${centiseconds.toString().padStart(2, '0')}`;
    
    document.getElementById("stopwatch-time").innerHTML = `${minSecStr}<span class="ms-part">${msStr}</span>`;
}

function renderLaps() {
    const tbody = document.getElementById("laps-list-body");
    if (!tbody) return;
    
    if (state.stopwatch.laps.length === 0) {
        tbody.innerHTML = `<tr class="empty-row"><td colspan="3">Inicia el cronómetro para registrar vueltas</td></tr>`;
        return;
    }
    
    tbody.innerHTML = "";
    const reversedLaps = [...state.stopwatch.laps].reverse();
    reversedLaps.forEach(lap => {
        const tr = document.createElement("tr");
        tr.className = "animate-zoom";
        tr.innerHTML = `
            <td>Lap ${lap.num}</td>
            <td style="font-family:var(--font-mono); font-weight: 700; color: var(--color-accent-1);">${lap.formattedLapTime}</td>
            <td style="font-family:var(--font-mono); color: var(--color-text-muted);">${lap.formattedTotalTime}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ==========================================================================
// COUNTDOWN TIMER LOGIC
// ==========================================================================

function updateTimerDisplay() {
    const minutes = Math.floor(state.timer.remainingSeconds / 60);
    const seconds = state.timer.remainingSeconds % 60;
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    let timeStr = "";
    if (hrs > 0) {
        timeStr = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        timeStr = `${mins.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    document.getElementById("timer-time-display").innerText = timeStr;
    updateTimerProgressBar();
}

function updateTimerProgressBar() {
    const fillCircle = document.getElementById("timer-circle-fill");
    if (!fillCircle) return;
    
    const totalCircumference = 282.74;
    
    if (state.timer.totalSeconds <= 0) {
        fillCircle.style.strokeDashoffset = 0;
        return;
    }
    
    const percentage = state.timer.remainingSeconds / state.timer.totalSeconds;
    const offset = totalCircumference * (1 - percentage);
    fillCircle.style.strokeDashoffset = offset;
}

function setTimerFromInputs() {
    const hrs = parseInt(document.getElementById("timer-hours").value) || 0;
    const mins = parseInt(document.getElementById("timer-minutes").value) || 0;
    const secs = parseInt(document.getElementById("timer-seconds").value) || 0;
    
    const totalSecs = hrs * 3600 + mins * 60 + secs;
    if (totalSecs <= 0) {
        alert("Por favor establece un tiempo mayor a 0 segundos.");
        return;
    }
    setTimerSeconds(totalSecs);
}

function setTimerSeconds(seconds) {
    if (state.timer.running) {
        clearInterval(state.timer.timerId);
        state.timer.running = false;
    }
    
    state.timer.totalSeconds = seconds;
    state.timer.remainingSeconds = seconds;
    
    document.getElementById("timer-btn-start").disabled = false;
    document.getElementById("timer-btn-start").innerHTML = `<i data-lucide="play"></i><span>Iniciar</span>`;
    document.getElementById("timer-btn-start").className = "btn btn-success";
    document.getElementById("timer-label").innerText = "Establecido";
    
    updateTimerDisplay();
    initLucide();
}

function toggleTimer() {
    const startBtn = document.getElementById("timer-btn-start");
    
    if (state.timer.running) {
        clearInterval(state.timer.timerId);
        state.timer.running = false;
        startBtn.innerHTML = `<i data-lucide="play"></i><span>Reanudar</span>`;
        startBtn.className = "btn btn-success";
        document.getElementById("timer-label").innerText = "Pausado";
    } else {
        if (state.timer.remainingSeconds <= 0) return;
        
        state.timer.running = true;
        document.getElementById("timer-label").innerText = "Ejecutando";
        startBtn.innerHTML = `<i data-lucide="pause"></i><span>Pausar</span>`;
        startBtn.className = "btn btn-secondary";
        
        state.timer.timerId = setInterval(() => {
            if (state.timer.remainingSeconds > 0) {
                state.timer.remainingSeconds--;
                updateTimerDisplay();
                
                if (state.timer.remainingSeconds === 0) {
                    clearInterval(state.timer.timerId);
                    state.timer.running = false;
                    timerFinishedTrigger();
                }
            }
        }, 1000);
    }
    initLucide();
}

function resetTimer() {
    if (state.timer.running) {
        clearInterval(state.timer.timerId);
        state.timer.running = false;
    }
    state.timer.remainingSeconds = state.timer.totalSeconds;
    
    const startBtn = document.getElementById("timer-btn-start");
    startBtn.disabled = state.timer.totalSeconds <= 0;
    startBtn.innerHTML = `<i data-lucide="play"></i><span>Iniciar</span>`;
    startBtn.className = "btn btn-success";
    document.getElementById("timer-label").innerText = "Listo";
    
    updateTimerDisplay();
    initLucide();
}

function timerFinishedTrigger() {
    document.getElementById("timer-label").innerText = "FINALIZADO";
    document.getElementById("timer-btn-start").disabled = true;
    
    playAlarmSound("sci-fi-alert");
    openAlarmOverlay("TEMPORIZADOR FINALIZADO", "La cuenta regresiva ha llegado a su fin", "00:00");
}

// ==========================================================================
// ALARMS MANAGER LOGIC
// ==========================================================================

function populateSelectDropdowns() {
    const select = document.getElementById("alarm-city");
    if (!select) return;
    
    select.innerHTML = `<option value="local">Hora Local (Dispositivo)</option>`;
    
    state.activeClocks.forEach(tz => {
        const cityData = CITIES_DB.find(c => c.timezone === tz);
        if (cityData) {
            const opt = document.createElement("option");
            opt.value = tz;
            opt.innerText = `${cityData.name} (${tz})`;
            select.appendChild(opt);
        }
    });
}

function handleAddAlarm(e) {
    e.preventDefault();
    
    const timeVal = document.getElementById("alarm-time").value;
    const tzVal = document.getElementById("alarm-city").value;
    const soundVal = document.getElementById("alarm-sound").value;
    const labelVal = document.getElementById("alarm-label").value || "Alarma";
    
    if (!timeVal) return;
    
    const newAlarm = {
        id: Date.now().toString(),
        time: timeVal,
        timezone: tzVal,
        sound: soundVal,
        label: labelVal,
        active: true
    };
    
    state.alarms.push(newAlarm);
    saveStateToStorage();
    updateAlarmsList();
    
    document.getElementById("alarm-time").value = "";
    document.getElementById("alarm-label").value = "";
}

function updateAlarmsList() {
    const list = document.getElementById("active-alarms-list");
    if (!list) return;
    
    list.innerHTML = "";
    
    if (state.alarms.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <i data-lucide="bell-off"></i>
                <p>No hay alarmas programadas</p>
            </div>
        `;
        initLucide();
        return;
    }
    
    state.alarms.forEach(alarm => {
        const item = document.createElement("div");
        item.className = `alarm-item ${alarm.active ? '' : 'inactive'}`;
        
        let tzName = "Hora Local";
        if (alarm.timezone !== "local") {
            const city = CITIES_DB.find(c => c.timezone === alarm.timezone);
            tzName = city ? city.name : alarm.timezone;
        }
        
        let soundName = "Retro Synth";
        if (alarm.sound === "digital-pulse") soundName = "Pulso Digital";
        if (alarm.sound === "sci-fi-alert") soundName = "Alerta Nave";
        if (alarm.sound === "melodic") soundName = "Melodía Suave";
        
        let displayTime = alarm.time;
        if (!state.use24h) {
            const parts = alarm.time.split(":");
            let hrs = parseInt(parts[0]);
            const ampm = hrs >= 12 ? "PM" : "AM";
            hrs = hrs % 12 === 0 ? 12 : hrs % 12;
            displayTime = `${hrs.toString().padStart(2, '0')}:${parts[1]} ${ampm}`;
        }
        
        item.innerHTML = `
            <div class="alarm-item-left">
                <div class="alarm-item-time-row">
                    <span class="alarm-item-time">${displayTime}</span>
                    <span class="alarm-item-city">${tzName}</span>
                </div>
                <span class="alarm-item-label">${alarm.label} • 🎵 ${soundName}</span>
            </div>
            <div class="alarm-item-right">
                <label class="switch">
                    <input type="checkbox" class="alarm-toggle" data-id="${alarm.id}" ${alarm.active ? 'checked' : ''}>
                    <span class="slider round"></span>
                </label>
                <button class="btn-delete-city" onclick="deleteAlarm('${alarm.id}')" title="Eliminar Alarma">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        `;
        
        const toggle = item.querySelector(".alarm-toggle");
        toggle.addEventListener("change", (e) => {
            toggleAlarmState(e.target.dataset.id, e.target.checked);
        });
        
        list.appendChild(item);
    });
    
    initLucide();
}

function toggleAlarmState(id, active) {
    const alarm = state.alarms.find(a => a.id === id);
    if (alarm) {
        alarm.active = active;
        saveStateToStorage();
        updateAlarmsList();
    }
}

function deleteAlarm(id) {
    state.alarms = state.alarms.filter(a => a.id !== id);
    saveStateToStorage();
    updateAlarmsList();
}

let triggeredAlarms = new Set();

function checkAlarms(now) {
    const currentLocalHour = now.getHours().toString().padStart(2, '0');
    const currentLocalMin = now.getMinutes().toString().padStart(2, '0');
    const currentLocalSec = now.getSeconds();
    
    if (currentLocalSec === 0) {
        triggeredAlarms.clear();
    }
    
    state.alarms.forEach(alarm => {
        if (!alarm.active) return;
        
        let targetHour, targetMin;
        if (alarm.timezone === "local") {
            targetHour = now.getHours().toString().padStart(2, '0');
            targetMin = now.getMinutes().toString().padStart(2, '0');
        } else {
            try {
                const formatter = new Intl.DateTimeFormat('en-US', {
                    timeZone: alarm.timezone,
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                });
                const parts = formatter.formatToParts(now);
                const hrVal = parts.find(p => p.type === 'hour');
                const minVal = parts.find(p => p.type === 'minute');
                targetHour = hrVal ? hrVal.value.padStart(2, '0') : "00";
                targetMin = minVal ? minVal.value.padStart(2, '0') : "00";
            } catch (e) {
                targetHour = now.getHours().toString().padStart(2, '0');
                targetMin = now.getMinutes().toString().padStart(2, '0');
            }
        }
        
        const alarmKey = `${alarm.id}-${targetHour}:${targetMin}`;
        
        if (alarm.time === `${targetHour}:${targetMin}` && !triggeredAlarms.has(alarmKey)) {
            triggeredAlarms.add(alarmKey);
            
            let alertTitle = "¡ALARMA SONANDO!";
            let displayTime = alarm.time;
            if (!state.use24h) {
                const parts = alarm.time.split(":");
                let hrs = parseInt(parts[0]);
                const ampm = hrs >= 12 ? "PM" : "AM";
                hrs = hrs % 12 === 0 ? 12 : hrs % 12;
                displayTime = `${hrs.toString().padStart(2, '0')}:${parts[1]} ${ampm}`;
            }
            
            playAlarmSound(alarm.sound);
            openAlarmOverlay(alertTitle, `${alarm.label} (${alarm.timezone === 'local' ? 'Hora Local' : alarm.timezone})`, displayTime);
            
            alarm.active = false;
            saveStateToStorage();
            updateAlarmsList();
        }
    });
}

// ==========================================================================
// AUDIO SYNTHESIS ENGINE (WEB AUDIO API)
// ==========================================================================

function playAlarmSound(type) {
    stopAlarmSound();
    
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
        console.warn("Web Audio API is not supported by this browser.");
        return;
    }
    if (!audioCtx) {
        audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.4, audioCtx.currentTime + 0.05);
    
    const duration = 20;
    
    if (type === "retro-synth") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        
        let time = audioCtx.currentTime;
        for (let i = 0; i < duration * 2; i++) {
            osc.frequency.setValueAtTime(i % 2 === 0 ? 523.25 : 659.25, time); // C5 / E5
            gainNode.gain.setValueAtTime(0.4, time);
            gainNode.gain.linearRampToValueAtTime(0.01, time + 0.4);
            time += 0.5;
        }
    } else if (type === "digital-pulse") {
        osc.type = "square";
        osc.frequency.setValueAtTime(987.77, audioCtx.currentTime); // B5
        
        let time = audioCtx.currentTime;
        for (let i = 0; i < duration * 3; i++) {
            gainNode.gain.setValueAtTime(0.4, time);
            gainNode.gain.setValueAtTime(0, time + 0.15);
            time += 0.3;
        }
    } else if (type === "sci-fi-alert") {
        osc.type = "sawtooth";
        let time = audioCtx.currentTime;
        for (let i = 0; i < duration; i++) {
            osc.frequency.setValueAtTime(220, time);
            osc.frequency.linearRampToValueAtTime(880, time + 0.85);
            gainNode.gain.setValueAtTime(0.3, time);
            gainNode.gain.linearRampToValueAtTime(0, time + 0.95);
            time += 1.0;
        }
    } else if (type === "melodic") {
        osc.type = "sine";
        const scale = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        let time = audioCtx.currentTime;
        for (let i = 0; i < duration * 2; i++) {
            const noteFreq = scale[i % scale.length];
            osc.frequency.setValueAtTime(noteFreq, time);
            gainNode.gain.setValueAtTime(0.4, time);
            gainNode.gain.exponentialRampToValueAtTime(0.01, time + 0.35);
            time += 0.4;
        }
    }
    
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + duration);
    
    activeAlarmSource = { oscillator: osc, gainNode: gainNode };
}

function stopAlarmSound() {
    if (activeAlarmSource) {
        try {
            activeAlarmSource.oscillator.stop();
        } catch(e) {}
        activeAlarmSource = null;
    }
}

// ==========================================================================
// ALARM MODAL OVERLAY TRIGGER
// ==========================================================================

function openAlarmOverlay(title, msg, time) {
    document.getElementById("alarm-alert-title").innerText = title;
    document.getElementById("alarm-alert-msg").innerText = msg;
    document.getElementById("alarm-alert-time").innerText = time;
    document.getElementById("alarm-overlay").classList.add("active");
}

function dismissAlarm() {
    document.getElementById("alarm-overlay").classList.remove("active");
    stopAlarmSound();
}

// ==========================================================================
// INTERACTIVE EVENT HANDLERS & NAVIGATION
// ==========================================================================

function setupEventListeners() {
    document.getElementById("btn-add-city").addEventListener("click", openCitySearchModal);
    document.getElementById("modal-close-btn").addEventListener("click", closeCitySearchModal);
    
    document.getElementById("modal-city-search").addEventListener("click", (e) => {
        if (e.target.id === "modal-city-search") closeCitySearchModal();
    });
    
    document.getElementById("city-search-input").addEventListener("input", (e) => {
        renderSearchResults(e.target.value);
    });

    document.getElementById("format-toggle").addEventListener("change", (e) => {
        state.use24h = e.target.checked;
        saveStateToStorage();
        tickWorldClocks();
        updatePlannerComparison();
        updateAlarmsList();
    });

    document.querySelectorAll(".theme-dot").forEach(dot => {
        dot.addEventListener("click", (e) => {
            state.theme = e.target.dataset.theme;
            saveStateToStorage();
            initTheme();
        });
    });

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
            
            const clickedBtn = e.currentTarget;
            clickedBtn.classList.add("active");
            document.getElementById(clickedBtn.dataset.tab).classList.add("active");
        });
    });

    const slider = document.getElementById("meeting-slider");
    slider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value);
        state.selectedPlannerHour = val;
        
        let displayStr = "";
        if (state.use24h) {
            displayStr = `${val.toString().padStart(2, '0')}:00`;
        } else {
            const h12 = val % 12 === 0 ? 12 : val % 12;
            const ampm = val >= 12 ? "PM" : "AM";
            displayStr = `${h12}:00 ${ampm}`;
        }
        document.getElementById("selected-slider-time").innerText = displayStr;
        updatePlannerComparison();
    });

    document.getElementById("sw-btn-start").addEventListener("click", toggleStopwatch);
    document.getElementById("sw-btn-lap").addEventListener("click", recordLap);
    document.getElementById("sw-btn-reset").addEventListener("click", resetStopwatch);

    document.getElementById("timer-btn-set").addEventListener("click", setTimerFromInputs);
    document.getElementById("timer-btn-start").addEventListener("click", toggleTimer);
    document.getElementById("timer-btn-reset").addEventListener("click", resetTimer);
    
    document.querySelectorAll(".btn-preset").forEach(btn => {
        btn.addEventListener("click", (e) => {
            setTimerSeconds(parseInt(e.target.dataset.seconds));
        });
    });

    document.getElementById("alarm-form").addEventListener("submit", handleAddAlarm);
    document.getElementById("alarm-btn-dismiss").addEventListener("click", dismissAlarm);

    // Unlock Web Audio context on first user click
    document.addEventListener("click", () => {
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }, { once: true });
}

// ==========================================================================
// INTERACTIVE HELP STICKERS ("PEGATINAS")
// ==========================================================================

const STICKERS_DB = {
    "main-clock": {
        title: "Reloj Principal En Vivo",
        desc: "Muestra la hora exacta local de tu dispositivo. Incluye un indicador de progreso solar diario del 0% al 100% que representa el transcurso del día actual."
    },
    "global-map": {
        title: "Mapa de Fronteras Interactivo",
        desc: "Pasa el mouse sobre cualquier país para resaltar sus fronteras en neón. Haz clic en un país para encender su contorno permanentemente y añadir su reloj al panel de relojes activos."
    },
    "meeting-planner": {
        title: "Planificador de Reuniones",
        desc: "Desliza la barra para seleccionar una hora local futura. El sistema recalcula la hora equivalente de todos tus relojes mundiales activos, clasificando las horas en Laboral, Personal o Sueño."
    },
    "world-clocks": {
        title: "Relojes del Mundo",
        desc: "Muestra el estado del tiempo simulado, diferencia horaria (+/- horas) con respecto a tu hora local y hora en vivo de tus ubicaciones seleccionadas en tarjetas de diseño futurista."
    },
    "time-tools": {
        title: "Herramientas de Precisión",
        desc: "Cambia entre pestañas para usar alarmas programadas, un cronómetro de milisegundos con registro de vueltas (laps) o un temporizador de cuenta regresiva con animación de anillo de progreso."
    }
};

function initStickers() {
    const tooltip = document.getElementById("sticker-tooltip-card");
    const titleEl = document.getElementById("sticker-title");
    const descEl = document.getElementById("sticker-description");
    const closeBtn = document.getElementById("btn-close-sticker");
    
    if (!tooltip || !closeBtn) return;
    
    closeBtn.addEventListener("click", () => {
        tooltip.classList.add("hidden");
    });
    
    document.querySelectorAll(".btn-info-sticker").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const stickerId = btn.dataset.sticker;
            const data = STICKERS_DB[stickerId];
            if (data) {
                titleEl.textContent = data.title;
                descEl.textContent = data.desc;
                
                // Position tooltip near the button
                const rect = btn.getBoundingClientRect();
                let left = rect.left + window.scrollX - 140;
                let top = rect.bottom + window.scrollY + 8;
                
                // Prevent overflow
                if (left < 10) left = 10;
                if (left + 280 > window.innerWidth) left = window.innerWidth - 290;
                
                tooltip.style.left = `${left}px`;
                tooltip.style.top = `${top}px`;
                tooltip.classList.remove("hidden");
            }
        });
    });
    
    // Close on clicking outside
    document.addEventListener("click", (e) => {
        if (!tooltip.classList.contains("hidden") && !tooltip.contains(e.target) && !e.target.closest(".btn-info-sticker")) {
            tooltip.classList.add("hidden");
        }
    });
}

// ==========================================================================
// CRYPTOGRAPHIC VAULT MANAGER (ZERO-KNOWLEDGE AES-256-GCM)
// ==========================================================================

const VaultCrypto = {
    async deriveKey(password, salt) {
        const encoder = new TextEncoder();
        const baseKey = await crypto.subtle.importKey(
            "raw",
            encoder.encode(password),
            "PBKDF2",
            false,
            ["deriveKey"]
        );
        return crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: salt,
                iterations: 100000,
                hash: "SHA-256"
            },
            baseKey,
            { name: "AES-GCM", length: 256 },
            false,
            ["encrypt", "decrypt"]
        );
    },
    
    async encrypt(plaintext, password) {
        const encoder = new TextEncoder();
        const salt = crypto.getRandomValues(new Uint8Array(16));
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const key = await this.deriveKey(password, salt);
        const encrypted = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: iv },
            key,
            encoder.encode(plaintext)
        );
        
        const packed = {
            salt: btoa(String.fromCharCode(...salt)),
            iv: btoa(String.fromCharCode(...iv)),
            ciphertext: btoa(String.fromCharCode(...new Uint8Array(encrypted)))
        };
        return JSON.stringify(packed);
    },
    
    async decrypt(packedJson, password) {
        const decoder = new TextDecoder();
        const packed = JSON.parse(packedJson);
        const salt = new Uint8Array([...atob(packed.salt)].map(c => c.charCodeAt(0)));
        const iv = new Uint8Array([...atob(packed.iv)].map(c => c.charCodeAt(0)));
        const ciphertext = new Uint8Array([...atob(packed.ciphertext)].map(c => c.charCodeAt(0)));
        
        const key = await this.deriveKey(password, salt);
        const decrypted = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv: iv },
            key,
            ciphertext
        );
        return decoder.decode(decrypted);
    }
};

function openVaultModal() {
    const modal = document.getElementById("modal-vault");
    if (!modal) return;
    
    const statusBox = document.getElementById("vault-status-box");
    const statusText = document.getElementById("vault-status-text");
    const setupForm = document.getElementById("vault-setup-form");
    const disableForm = document.getElementById("vault-disable-form");
    const passInput = document.getElementById("vault-password");
    
    passInput.value = "";
    modal.classList.add("active");
    
    if (state.vaultEnabled) {
        statusBox.className = "vault-status-indicator locked";
        statusText.textContent = "CIFRADO ACTIVO (PROTEGIDO)";
        setupForm.classList.add("hidden");
        disableForm.classList.remove("hidden");
    } else {
        statusBox.className = "vault-status-indicator unlocked";
        statusText.textContent = "DESPROTEGIDO (SIN CIFRAR)";
        setupForm.classList.remove("hidden");
        disableForm.classList.add("hidden");
    }
}

function initVaultEvents() {
    // Header Vault Button Click
    document.getElementById("btn-vault-toggle").addEventListener("click", openVaultModal);
    
    // Modal Close
    document.getElementById("vault-close-btn").addEventListener("click", () => {
        document.getElementById("modal-vault").classList.remove("active");
    });
    
    // Setup Lock Screen keypad click events
    const unlockPassInput = document.getElementById("vault-unlock-password");
    const lockErrorMsg = document.getElementById("vault-lock-error");
    
    document.querySelectorAll(".vault-keypad .key-btn[data-val]").forEach(btn => {
        btn.addEventListener("click", () => {
            lockErrorMsg.classList.add("hidden");
            unlockPassInput.value += btn.dataset.val;
        });
    });
    
    document.getElementById("key-btn-clear").addEventListener("click", () => {
        unlockPassInput.value = "";
        lockErrorMsg.classList.add("hidden");
    });
    
    document.getElementById("key-btn-enter").addEventListener("click", handleVaultUnlockSubmit);
    
    // Handle Enter Key inside password field on lock screen
    unlockPassInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") handleVaultUnlockSubmit();
    });

    // Vault Enable Button
    document.getElementById("btn-enable-vault").addEventListener("click", async () => {
        const password = document.getElementById("vault-password").value.trim();
        if (!password) {
            alert("Por favor ingresa una clave de seguridad.");
            return;
        }
        
        // Enable Vault
        state.vaultEnabled = true;
        sessionPassword = password;
        
        // Save Encrypted
        saveStateToStorage();
        
        // Update header icon indicator
        const hdrIcon = document.getElementById("vault-header-icon");
        hdrIcon.setAttribute("data-lucide", "shield-check");
        initLucide();
        document.getElementById("btn-vault-toggle").classList.add("active-vault");
        
        document.getElementById("modal-vault").classList.remove("active");
        alert("Bóveda de Seguridad activada con éxito. Todos tus datos han sido cifrados matemáticamente en tu navegador.");
    });
    
    // Vault Disable Button
    document.getElementById("btn-disable-vault").addEventListener("click", () => {
        if (confirm("¿Estás seguro de desactivar el cifrado? Tus datos volverán a guardarse en texto plano en el navegador.")) {
            state.vaultEnabled = false;
            sessionPassword = "";
            
            // Save plain
            saveStateToStorage();
            
            // Update header icon indicator
            const hdrIcon = document.getElementById("vault-header-icon");
            hdrIcon.setAttribute("data-lucide", "shield-alert");
            initLucide();
            document.getElementById("btn-vault-toggle").classList.remove("active-vault");
            
            document.getElementById("modal-vault").classList.remove("active");
            alert("Bóveda de Seguridad desactivada.");
        }
    });
}

async function handleVaultUnlockSubmit() {
    const password = document.getElementById("vault-unlock-password").value;
    const lockErrorMsg = document.getElementById("vault-lock-error");
    const lockScreen = document.getElementById("vault-lock-screen");
    const payload = localStorage.getItem("chronos_vault_payload");
    
    if (!payload) {
        // Vault is enabled but payload is empty? Decrypt nothing
        state.vaultEnabled = false;
        saveStateToStorage();
        lockScreen.classList.add("hidden");
        return;
    }
    
    try {
        const decryptedJson = await VaultCrypto.decrypt(payload, password);
        const parsedState = JSON.parse(decryptedJson);
        
        // Merge state
        state.theme = parsedState.theme || state.theme;
        state.use24h = parsedState.use24h !== undefined ? parsedState.use24h : state.use24h;
        state.activeClocks = parsedState.activeClocks || state.activeClocks;
        state.alarms = parsedState.alarms || state.alarms;
        state.vaultEnabled = true;
        
        sessionPassword = password;
        
        // Update dashboard lists
        initTheme();
        tickWorldClocks();
        updateWorldClocksGrid();
        updatePlannerComparison();
        updateAlarmsList();
        populateSelectDropdowns();
        renderMapMarkers();
        
        // Active Vault UI Class
        const hdrIcon = document.getElementById("vault-header-icon");
        hdrIcon.setAttribute("data-lucide", "shield-check");
        initLucide();
        document.getElementById("btn-vault-toggle").classList.add("active-vault");
        
        // Unlock Screen Animation
        lockScreen.classList.add("hidden");
        console.log("Vault decrypted and unlocked successfully.");
    } catch (e) {
        console.warn("Failed to decrypt vault database:", e);
        lockErrorMsg.classList.remove("hidden");
        document.getElementById("vault-unlock-password").value = "";
    }
}
