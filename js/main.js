// Theme Toggle Logic
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
};

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
};

const updateThemeIcon = (theme) => {
    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
};

// Scroll Reveal Animation Logic
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal, .scale-up');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

// Auth Simulation Logic
const getRole = () => localStorage.getItem('userRole') || 'public';

const setRole = (role) => {
    localStorage.setItem('userRole', role);
};

window.handleLogin = (e, targetRole) => {
    if (e) e.preventDefault();
    setRole(targetRole);
    if (targetRole === 'admin') {
        window.location.href = 'admin-dashboard.html';
    } else {
        window.location.href = 'distributor-dashboard.html';
    }
};

window.handleLogout = () => {
    localStorage.removeItem('userRole');
    window.location.href = 'login.html';
};

const toggleMobileMenu = () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    if (getComputedStyle(menuToggle).display === 'none') return;

    const navLinks = document.querySelector('.nav-links');
    const toggleIcon = menuToggle.querySelector('i');

    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        toggleIcon.className = 'fas fa-times';
    } else {
        toggleIcon.className = 'fas fa-bars';
    }
};

// Header and Footer Injection
const injectLayout = () => {
    const role = getRole();
    const isLoggedIn = role !== 'public';

    const headerHTML = `
        <header>
            <div class="container">
                <nav>
                    <a href="index.html" class="logo">
                        <i class="fas fa-briefcase-medical logo-icon"></i>
                        <span class="logo-text">MEDITECH MFG</span>
                    </a>

                    <ul class="nav-links">
                        <li><a href="index.html" onclick="toggleMobileMenu()" class="${window.location.pathname.endsWith('index.html') ? 'active' : ''}">Home 1</a></li>
                        <li><a href="home2.html" onclick="toggleMobileMenu()" class="${window.location.pathname.endsWith('home2.html') ? 'active' : ''}">Home 2</a></li>
                        <li><a href="about.html" onclick="toggleMobileMenu()" class="${window.location.pathname.endsWith('about.html') ? 'active' : ''}">About</a></li>
                        <li><a href="products.html" onclick="toggleMobileMenu()" class="${window.location.pathname.endsWith('products.html') ? 'active' : ''}">Products</a></li>
                        <li><a href="solutions.html" onclick="toggleMobileMenu()" class="${window.location.pathname.endsWith('solutions.html') ? 'active' : ''}">Solutions</a></li>
                        <li><a href="contact.html" onclick="toggleMobileMenu()" class="${window.location.pathname.endsWith('contact.html') ? 'active' : ''}">Contact</a></li>
                        
                        <li class="mobile-only">
                            <div class="dropdown" style="width: 100%; margin: 10px 0;">
                                <button class="dropdown-toggle" style="width: 100%; justify-content: center;">
                                    <i class="fas fa-user-circle"></i>
                                    <span>Profile</span>
                                    <i class="fas fa-chevron-down" style="font-size: 0.8rem;"></i>
                                </button>
                                <div class="dropdown-menu" style="position: static; width: 100%; border: none; box-shadow: none; background: var(--section-bg);">
                                    <div class="dropdown-item ${role === 'distributor' ? 'active' : ''}" onclick="window.location.href='distributor-dashboard.html'; toggleMobileMenu();">
                                        <i class="fas fa-handshake"></i> Distributor
                                    </div>
                                    <div class="dropdown-item ${role === 'public' ? 'active' : ''}" onclick="window.location.href='public-dashboard.html'; toggleMobileMenu();">
                                        <i class="fas fa-users"></i> Public
                                    </div>
                                    <div class="dropdown-item ${role === 'admin' ? 'active' : ''}" onclick="window.location.href='admin-dashboard.html'; toggleMobileMenu();">
                                        <i class="fas fa-user-shield"></i> Admin
                                    </div>
                                </div>
                            </div>
                        </li>

                        </li>
                    </ul>

                    <div class="header-actions">
                        <div class="dropdown desktop-only">
                            <button class="dropdown-toggle">
                                <i class="fas fa-user-circle"></i>
                                <span>Profile</span>
                                <i class="fas fa-chevron-down" style="font-size: 0.8rem;"></i>
                            </button>
                            <div class="dropdown-menu">
                                <div class="dropdown-item ${role === 'distributor' ? 'active' : ''}" onclick="window.location.href='distributor-dashboard.html'">
                                    <i class="fas fa-handshake"></i> Distributor
                                </div>
                                <div class="dropdown-item ${role === 'public' ? 'active' : ''}" onclick="window.location.href='public-dashboard.html'">
                                    <i class="fas fa-users"></i> Public
                                </div>
                                <div class="dropdown-item ${role === 'admin' ? 'active' : ''}" onclick="window.location.href='admin-dashboard.html'">
                                    <i class="fas fa-user-shield"></i> Admin
                                </div>
                            </div>
                        </div>

                        <button class="theme-toggle" onclick="toggleTheme()" title="Toggle Theme">
                            <i class="fas fa-moon"></i>
                        </button>

                        <button class="mobile-menu-toggle" onclick="toggleMobileMenu()" aria-label="Toggle Menu">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    `;

    const footerHTML = `
        <footer>
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-column">
                        <a href="index.html" class="logo">
                            <i class="fas fa-briefcase-medical" style="font-size: 1.8rem; color: var(--primary-color);"></i>
                            <div class="logo-text">MEDITECH MFG</div>
                        </a>
                        <p class="mt-20">Pioneering excellence in medical device manufacturing since 1998.</p>
                        <div class="social-links mt-20">
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                    <div class="footer-column">
                        <h3>Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href="index.html">Home 1</a></li>
                            <li><a href="home2.html">Home 2</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="solutions.html">Solutions</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Portals</h3>
                        <ul class="footer-links">
                            <li><a href="login.html">Distributor Login</a></li>
                            <li><a href="distributor-dashboard.html">Distributor Dashboard</a></li>
                            <li><a href="admin-dashboard.html">Admin Panel</a></li>
                            <li><a href="support.html">Customer Support</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Contact Info</h3>
                        <p>123 MedTech Way, Boston, MA</p>
                        <p>Phone: +1 (555) 012-3456</p>
                        <p>Email: contact@meditechmfg.com</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 Meditech Mfg. All rights reserved.</p>
                    <button id="back-to-top" class="btn btn-outline" style="padding: 5px 15px;">↑ Top</button>
                </div>
            </div>
        </footer>
    `;

    document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;

    document.getElementById('back-to-top')?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

const updateNavigationState = () => {
    const role = getRole();
    const isLogged = role !== 'public';

    document.querySelectorAll('.distributor-only').forEach(el => {
        el.style.display = (role === 'distributor' || role === 'admin') ? 'block' : 'none';
    });

    document.querySelectorAll('.admin-only').forEach(el => {
        el.style.display = (role === 'admin') ? 'block' : 'none';
    });

    document.querySelectorAll('.public-only').forEach(el => {
        el.style.display = (role === 'public') ? 'block' : 'none';
    });

    // Update Distributor Login button text and behavior if not using injectLayout fully
    const loginBtn = document.getElementById('distributor-login-btn');
    if (loginBtn && isLogged) {
        loginBtn.textContent = 'Dashboard';
        loginBtn.href = role === 'admin' ? 'admin-dashboard.html' : 'distributor-dashboard.html';
    }
};

// Dropdown Logic
const initDropdowns = () => {
    document.addEventListener('click', (e) => {
        const isDropdownClick = e.target.closest('.dropdown');
        const isToggleClick = e.target.closest('.dropdown-toggle');

        if (isToggleClick) {
            e.preventDefault();
            const dropdown = isToggleClick.closest('.dropdown');
            // Close other active dropdowns
            document.querySelectorAll('.dropdown.active').forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });
            // Toggle current
            dropdown.classList.toggle('active');
        } else if (!isDropdownClick) {
            // Click outside
            document.querySelectorAll('.dropdown.active').forEach(d => {
                d.classList.remove('active');
            });
        }
    });
};

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    injectLayout();
    initDropdowns();
    initTheme();
    window.addEventListener('scroll', reveal);
    reveal();
    updateNavigationState();
});

window.toggleTheme = toggleTheme;
