// ===== Cybersecurity Fresher Data =====
const skillsData = {
    tools: [
        { name: "Nmap", level: 85 },
        { name: "Burp Suite", level: 80 },
        { name: "Metasploit", level: 75 },
        { name: "OWASP ZAP", level: 70 },
        { name: "Kali Linux", level: 85 }
    ],
    programming: [
        { name: "Python", level: 70 },
        { name: "JavaScript", level: 75 },
        { name: "HTML/CSS", level: 85 },
        { name: "MySQL", level: 70 }
    ],
    cyber: [
        { name: "Ethical Hacking", level: 80 },
        { name: "Vulnerability Assessment", level: 75 },
        { name: "Web App Security", level: 80 },
        { name: "Network Security", level: 70 }
    ],
    platforms: [
        { name: "TryHackMe", level: 85 },
        { name: "Hack The Box", level: 70 },
        { name: "OWASP Top 10", level: 80 },
        { name: "Security Fundamentals", level: 85 }
    ]
};

const projectsData = [
    {
        id: 1,
        title: "HM-BGRemover – Secure Web Application",
        category: "websec",
        description: "Implemented secure API integration with emphasis on input validation and error handling",
        technologies: ["HTML", "CSS", "JavaScript", "Flask", "REST APIs"],
        date: "May - Jul 2025",
        findings: "Learned secure coding practices and vulnerability prevention",
        liveDemo: true
    },
    {
        id: 2,
        title: "TeacherX – AI Learning Platform",
        category: "websec",
        description: "Applied secure UI practices and client-side validation techniques",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        date: "Jul - Aug 2025",
        findings: "Gained exposure to authentication flows and frontend security",
        liveDemo: true
    },
    {
        id: 3,
        title: "YT-Downloader – Web Tool",
        category: "webapp",
        description: "Improved controlled input handling and application stability",
        technologies: ["Flask", "JavaScript", "yt-dlp"],
        date: "Aug - Sep 2025",
        findings: "Optimized error handling to minimize misuse scenarios",
        liveDemo: true
    }
];

const certificationsData = [
    {
        id: 1,
        title: "Certified Ethical Hacker (CEH)",
        issuer: "Training Completed",
        date: "2024",
        icon: "fas fa-user-secret",
        description: "Ethical hacking and penetration testing fundamentals"
    },
    {
        id: 2,
        title: "Cybersecurity Analyst Job Simulation",
        issuer: "Forage",
        date: "2024",
        icon: "fas fa-chart-line",
        description: "Practical job simulation for fresher preparation"
    },
    {
        id: 3,
        title: "Cyber Job Simulation",
        issuer: "Deloitte",
        date: "2024",
        icon: "fas fa-building",
        description: "Industry-focused cyber simulation experience"
    },
    {
        id: 4,
        title: "Python Basics",
        issuer: "HackerRank",
        date: "2024",
        icon: "fab fa-python",
        description: "Programming fundamentals certification"
    }
];

// ===== DOM Elements =====
const terminalLoader = document.getElementById('terminalLoader');
const matrixBg = document.getElementById('matrixBg');
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const terminalBtn = document.getElementById('terminalBtn');
const terminalWindow = document.getElementById('terminalWindow');
const terminalClose = document.getElementById('terminalClose');
const terminalBody = document.getElementById('terminalBody');
const terminalInput = document.getElementById('terminalInput');
const typingText = document.getElementById('typingText');
const projectsGrid = document.getElementById('projectsGrid');
const certificationsGrid = document.getElementById('certificationsGrid');
const contactForm = document.getElementById('contactForm');
const statNumbers = document.querySelectorAll('.stat-number');

// ===== State Variables =====
let currentTheme = localStorage.getItem('theme') || 'dark';
let terminalHistory = [];
let historyIndex = -1;
const typingWords = ['CYBERSECURITY', 'ENTRY-LEVEL', 'FRESHER ROLE', 'SOC ANALYST', 'VAPT ENGINEER'];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingTimeout;

// ===== Terminal Commands =====
const terminalCommands = {
    help: {
        description: 'Display available commands',
        execute: () => {
            return `
Available Commands:
• help          - Show this help message
• about         - Display fresher profile
• education     - Show academic background
• skills        - Show technical skills
• projects      - List security projects
• experience    - Show internship learning
• certifications - List certifications
• fresher       - Fresher availability and goals
• clear         - Clear terminal
• theme         - Toggle dark/light theme
• matrix        - Toggle matrix background
• date          - Show current date
• whoami        - Display current user
• contact       - Show contact information
• hireme        - Why hire this fresher
            `;
        }
    },
    about: {
        description: 'About the cybersecurity fresher',
        execute: () => {
            return `
Fresher Profile:
Name: Mahesh Garlapally
Status: Cybersecurity Fresher
Education: BCA Graduate (90% aggregate)
Certification: CEH Training Completed
Availability: Seeking first cybersecurity role
Target Roles: SOC Analyst, VAPT Engineer, Security Analyst
Location: Hyderabad, Telangana
Ready to Start: Immediately
            `;
        }
    },
    fresher: {
        description: 'Fresher availability and career goals',
        execute: () => {
            return `
Fresher Availability:
✅ Status: Actively seeking first job
🎓 Education: BCA (90% aggregate) - Completed
📜 Certification: CEH - Completed
💼 Experience: Cybersecurity Internship - Completed
🎯 Target Roles: SOC Analyst, VAPT Engineer, Security Analyst
📍 Location: Hyderabad, willing to relocate locally
📅 Start Date: Can join immediately
🎯 Career Goal: Start cybersecurity career and grow with organization
            `;
        }
    },
    hireme: {
        description: 'Reasons to hire this fresher',
        execute: () => {
            return `
Why Hire This Fresher:
1. Strong Academic Background (90% BCA aggregate)
2. CEH Certification completed
3. Hands-on internship experience
4. Practical project portfolio
5. Active on TryHackMe (50+ rooms)
6. Technical skills in security tools
7. Ready to start immediately
8. Strong foundation in cybersecurity
9. Passionate about security
10. Eager to learn and contribute
            `;
        }
    },
    education: {
        description: 'Display academic background',
        execute: () => {
            return `
Academic Background:
• BCA (Bachelor of Computer Applications)
  Chaitanya Deemed To Be University, Hyderabad
  2023-2026 | Aggregate: 90%
  Status: Completed - Ready for professional role

• Class XII
  TSWER / JC Boys Hathnoora, Sangareddy
  2021-2023 | Percentage: 81.6%
            `;
        }
    },
    skills: {
        description: 'Display technical skills',
        execute: () => {
            return `
Cybersecurity Skills:
• Ethical Hacking & Vulnerability Assessment
• Web Application Security
• Network Security Fundamentals
• Security Tools Proficiency

Technical Competencies:
• Nmap, Burp Suite, Metasploit
• OWASP ZAP, Kali Linux
• Python, JavaScript, HTML/CSS
            `;
        }
    },
    projects: {
        description: 'List security projects',
        execute: () => {
            return `
Security Projects:
1. HM-BGRemover - Secure Web App (2025)
2. TeacherX - AI Learning Platform (2025)
3. YT-Downloader - Web Tool (2025)

All projects demonstrate practical security implementation!
            `;
        }
    },
    experience: {
        description: 'Show internship learning',
        execute: () => {
            return `
Internship Learning:
Cybersecurity Intern @ Uptoskills
May 2025 - Aug 2025 (Online Internship)

Practical Experience:
• Learned vulnerability scanning with Nmap, Burp Suite
• Practiced penetration testing using Metasploit
• Applied OWASP Top 10 for web security assessment
• Assisted in risk assessment documentation
            `;
        }
    },
    certifications: {
        description: 'List certifications',
        execute: () => {
            return `
Professional Certifications:
1. Certified Ethical Hacker (CEH) - Training Completed
2. Cybersecurity Analyst Job Simulation - Forage
3. Cyber Job Simulation - Deloitte
4. Python Basics - HackerRank
            `;
        }
    },
    clear: {
        description: 'Clear terminal screen',
        execute: () => {
            const output = terminalBody.querySelector('.terminal-output');
            output.innerHTML = '';
            return '';
        }
    },
    theme: {
        description: 'Toggle dark/light theme',
        execute: () => {
            toggleTheme();
            return 'Theme toggled successfully';
        }
    },
    matrix: {
        description: 'Toggle matrix background',
        execute: () => {
            const matrixCanvas = document.getElementById('matrixCanvas');
            if (matrixCanvas) {
                matrixCanvas.style.display = matrixCanvas.style.display === 'none' ? 'block' : 'none';
                return 'Matrix background toggled';
            }
            return 'Matrix background not available';
        }
    },
    date: {
        description: 'Show current date and time',
        execute: () => {
            return new Date().toLocaleString();
        }
    },
    whoami: {
        description: 'Display current user',
        execute: () => {
            return 'fresher@cyberportfolio';
        }
    },
    contact: {
        description: 'Show contact information',
        execute: () => {
            return `
Contact for Job Opportunities:
Email: mahesh7780376316@gmail.com
Phone: +91 7780376316
Location: Hyderabad, Telangana
Status: Actively seeking entry-level roles
Available: Immediately
Target Roles: SOC Analyst, VAPT Engineer, Security Analyst
            `;
        }
    }
};

// ===== Matrix Background =====
function createMatrixBackground() {
    if (document.getElementById('matrixCanvas')) {
        return; // Already created
    }
    
    const canvas = document.createElement('canvas');
    canvas.id = 'matrixCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3';
    matrixBg.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    
    const characters = '01';
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff88';
        ctx.font = `${fontSize}px monospace`;
        
        // Update columns if window resized
        columns = Math.floor(canvas.width / fontSize);
        while (drops.length < columns) drops.push(1);
        while (drops.length > columns) drops.pop();
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    const matrixInterval = setInterval(draw, 33);
    
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
    
    // Store interval ID for cleanup
    canvas.dataset.intervalId = matrixInterval;
}

// ===== Preloader =====
function initPreloader() {
    // Hide body overflow during loader
    document.body.style.overflow = 'hidden';
    
    // Animate terminal lines
    const lines = document.querySelectorAll('.terminal-loader .terminal-line');
    lines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Hide loader after animation completes
    const animationTime = lines.length * 500 + 1000; // 0.5s per line + 1s buffer
    
    setTimeout(() => {
        terminalLoader.style.transition = 'opacity 0.5s ease';
        terminalLoader.style.opacity = '0';
        
        setTimeout(() => {
            terminalLoader.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Initialize main content
            startTypingAnimation();
            initCounters();
            createMatrixBackground();
            console.log('🚀 Cybersecurity Fresher Portfolio loaded successfully');
        }, 500);
    }, animationTime);
}

// ===== Typing Animation =====
function startTypingAnimation() {
    function type() {
        const currentWord = typingWords[currentWordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        if (!isDeleting && currentCharIndex === currentWord.length) {
            isDeleting = true;
            typingTimeout = setTimeout(type, 1500);
            return;
        }
        
        if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % typingWords.length;
            typingTimeout = setTimeout(type, 500);
            return;
        }
        
        const speed = isDeleting ? 50 : 100;
        typingTimeout = setTimeout(type, speed);
    }
    
    // Clear any existing timeout
    if (typingTimeout) clearTimeout(typingTimeout);
    type();
}

// ===== Theme Management =====
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    
    if (currentTheme === 'dark') {
        moonIcon.style.opacity = '1';
        moonIcon.style.transform = 'scale(1)';
        sunIcon.style.opacity = '0';
        sunIcon.style.transform = 'scale(0)';
    } else {
        moonIcon.style.opacity = '0';
        moonIcon.style.transform = 'scale(0)';
        sunIcon.style.opacity = '1';
        sunIcon.style.transform = 'scale(1)';
    }
}

// ===== Navigation =====
// ===== Improved Navigation =====
function initNavigation() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = mobileMenuBtn.classList.contains('active');
        
        // Toggle menu
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = !isActive ? 'hidden' : '';
        
        // Toggle the entire nav-right container
        const navRight = document.querySelector('.nav-right');
        if (navRight) {
            navRight.classList.toggle('active');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && 
            mobileMenuBtn.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenuBtn.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', setActiveNavLink);
    
    // Initial call to set active link
    setActiveNavLink();
}

function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
    
    const navRight = document.querySelector('.nav-right');
    if (navRight) {
        navRight.classList.remove('active');
    }
}

function setActiveNavLink() {
    if (window.innerWidth <= 1024) return; // Only on desktop
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update the cleanup function
function setupCleanup() {
    window.addEventListener('beforeunload', () => {
        // Clear typing animation timeout
        if (typingTimeout) clearTimeout(typingTimeout);
        
        // Clear matrix animation interval
        const matrixCanvas = document.getElementById('matrixCanvas');
        if (matrixCanvas && matrixCanvas.dataset.intervalId) {
            clearInterval(parseInt(matrixCanvas.dataset.intervalId));
        }
        
        // Reset mobile menu state
        closeMobileMenu();
    });
    
    // Close mobile menu on window resize above 1024px
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && mobileMenuBtn.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===== Terminal =====
function initTerminal() {
    // Open terminal
    terminalBtn.addEventListener('click', () => {
        terminalWindow.classList.add('active');
        terminalInput.focus();
    });
    
    // Close terminal
    terminalClose.addEventListener('click', () => {
        terminalWindow.classList.remove('active');
    });
    
    // Close terminal on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && terminalWindow.classList.contains('active')) {
            terminalWindow.classList.remove('active');
        }
    });
    
    // Terminal input handling
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim();
            terminalInput.value = '';
            if (command) {
                processCommand(command.toLowerCase());
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (terminalHistory.length > 0 && historyIndex > 0) {
                historyIndex--;
                terminalInput.value = terminalHistory[historyIndex];
            } else if (terminalHistory.length > 0 && historyIndex === -1) {
                historyIndex = terminalHistory.length - 1;
                terminalInput.value = terminalHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (terminalHistory.length > 0 && historyIndex < terminalHistory.length - 1) {
                historyIndex++;
                terminalInput.value = terminalHistory[historyIndex];
            } else {
                terminalInput.value = '';
                historyIndex = -1;
            }
        }
    });
}

function processCommand(command) {
    // Add to history
    terminalHistory.push(command);
    historyIndex = -1;
    
    // Create output line
    const output = terminalBody.querySelector('.terminal-output');
    const inputLine = document.createElement('div');
    inputLine.className = 'terminal-line';
    inputLine.innerHTML = `<span class="prompt">fresher@cyberportfolio:~$</span> ${command}`;
    output.appendChild(inputLine);
    
    // Process command
    let result = '';
    const commandParts = command.split(' ');
    const baseCommand = commandParts[0];
    
    if (terminalCommands[baseCommand]) {
        result = terminalCommands[baseCommand].execute();
    } else if (baseCommand === 'ls') {
        result = 'about.txt\neducation.txt\nskills.txt\nprojects.txt\nexperience.txt\ncertifications.txt\ncontact.txt\nhireme.txt';
    } else if (baseCommand === 'echo') {
        result = commandParts.slice(1).join(' ');
    } else if (baseCommand === 'pwd') {
        result = '/home/fresher/cyberportfolio';
    } else if (baseCommand === 'tryhackme') {
        result = 'TryHackMe Profile: Active (50+ rooms completed)\nLearning Path: Complete Beginner to Junior Pentester';
    } else if (baseCommand === 'htb') {
        result = 'Hack The Box: Beginner level\nFocus: Learning fundamentals for job readiness';
    } else if (baseCommand === 'job') {
        result = 'Job Search Status: Active\nTarget: Entry-level cybersecurity roles\nLocation: Hyderabad\nAvailability: Immediate';
    } else {
        result = 'Command not found. Type "help" for available commands.';
    }
    
    // Display result
    if (result) {
        const resultLine = document.createElement('div');
        resultLine.className = 'terminal-line';
        resultLine.textContent = result;
        output.appendChild(resultLine);
    }
    
    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// ===== Skills =====
function initSkills() {
    // Load tools skills
    const toolsSkills = document.getElementById('toolsSkills');
    if (toolsSkills) {
        toolsSkills.innerHTML = skillsData.tools.map(skill => `
            <div class="skill-item">
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percent">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }
    
    // Load programming skills
    const programmingSkills = document.getElementById('programmingSkills');
    if (programmingSkills) {
        programmingSkills.innerHTML = skillsData.programming.map(skill => `
            <div class="skill-item">
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percent">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }
    
    // Load cybersecurity skills
    const cyberSkills = document.getElementById('cyberSkills');
    if (cyberSkills) {
        cyberSkills.innerHTML = skillsData.cyber.map(skill => `
            <div class="skill-item">
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percent">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }
    
    // Load platform skills
    const platformSkills = document.getElementById('platformSkills');
    if (platformSkills) {
        platformSkills.innerHTML = skillsData.platforms.map(skill => `
            <div class="skill-item">
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percent">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-level" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }
}

// ===== Projects =====
function initProjects() {
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <span class="project-category">
                        <i class="fas fa-${getProjectIcon(project.category)}"></i>
                        ${project.category.toUpperCase()}
                    </span>
                     ${project.liveDemo ? '<span class="project-live"><i class=""></i></span>' : ''}
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                </div>
                <div class="project-body">
                    <div class="project-tech">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <p class="project-findings">
                        <i class="fas fa-shield-alt"></i>
                        ${project.findings}
                    </p>
                </div>
                <div class="project-footer">
                    <span class="project-date">${project.date}</span>
                    <a href="#" class="project-link" onclick="return false;">
                        View Details
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }
}

function getProjectIcon(category) {
    const icons = {
        websec: 'shield-alt',
        webapp: 'laptop-code',
        security: 'user-shield'
    };
    return icons[category] || 'file-alt';
}

// ===== Certifications =====
function initCertifications() {
    if (certificationsGrid) {
        certificationsGrid.innerHTML = certificationsData.map(cert => `
            <div class="cert-card">
                <div class="cert-icon">
                    <i class="${cert.icon}"></i>
                </div>
                <h3>${cert.title}</h3>
                <p class="cert-issuer">${cert.issuer}</p>
                <p class="cert-date">Completed: ${cert.date}</p>
                <p class="cert-description">${cert.description}</p>
            </div>
        `).join('');
    }
}

// ===== Animated Counters =====
function initCounters() {
    if (statNumbers.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.dataset.count);
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            stat.textContent = target + '+';
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + '+';
                        }
                    }, 16);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// ===== Contact Form =====
function initContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: this.querySelector('#name').value.trim(),
            email: this.querySelector('#email').value.trim(),
            inquiry: this.querySelector('#inquiry').value,
            message: this.querySelector('#message').value.trim()
        };
        
        // Validate
        if (!validateContactForm(formData)) return;
        
        // Show loading state
        const submitBtn = this.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate sending
        setTimeout(() => {
            console.log('Job opportunity submitted:', formData);
            showNotification('Opportunity details sent! I\'ll respond promptly.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

function validateContactForm(data) {
    if (!data.name || !data.email || !data.inquiry || !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }
    
    return true;
}

function showNotification(message, type) {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 51, 51, 0.1)'};
        border: 1px solid ${type === 'success' ? 'var(--primary)' : 'var(--danger)'};
        color: ${type === 'success' ? 'var(--primary)' : 'var(--danger)'};
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        backdrop-filter: blur(10px);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animation styles
function addNotificationStyles() {
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== Smooth Scrolling =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            const targetId = href;
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Cleanup on page unload =====
function setupCleanup() {
    window.addEventListener('beforeunload', () => {
        // Clear typing animation timeout
        if (typingTimeout) clearTimeout(typingTimeout);
        
        // Clear matrix animation interval
        const matrixCanvas = document.getElementById('matrixCanvas');
        if (matrixCanvas && matrixCanvas.dataset.intervalId) {
            clearInterval(parseInt(matrixCanvas.dataset.intervalId));
        }
    });
}

// ===== Initialize Everything =====
function init() {
    console.log('🚀 Cybersecurity Fresher Portfolio Initialized');
    
    // Add notification styles
    addNotificationStyles();
    
    // Initialize components
    initPreloader();
    initTheme();
    initNavigation();
    initTerminal();
    initSkills();
    initProjects();
    initCertifications();
    initContactForm();
    initSmoothScrolling();
    setupCleanup();
}

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Safety net for loader removal
window.addEventListener('load', function() {
    setTimeout(() => {
        const loader = document.getElementById('terminalLoader');
        if (loader && loader.style.display !== 'none') {
            loader.style.transition = 'opacity 0.5s ease';
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.style.overflow = 'auto';
                console.log('Loader removed by safety net');
            }, 500);
        }
    }, 5000);
});
// ===== Permission System =====
const permissions = {
    // Commands available to normal users (read-only)
    user: [
        'help', 'about', 'education', 'skills', 'projects', 
        'experience', 'certifications', 'contact', 'hireme',
        'fresher', 'whoami', 'date', 'clear', 'theme', 'matrix',
        'ls', 'pwd', 'echo', 'tryhackme', 'htb', 'job',
        'su'  // Can request root access
    ],
    
    // Commands available to root users (read-write)
    root: [
        'su', 'exit', 'passwd', 'theme', 'config', 'edit',
        'reset', 'backup', 'firewall', 'scan', 'logs', 'sysinfo',
        'help', 'whoami', 'date', 'clear', 'ls', 'pwd', 'id'
    ]
};

// Default password (can be changed by user)
let rootPassword = "cybersecurity"; // Default
let isRootMode = false;

// ===== Security Modal Functions =====
function showSecurityModal() {
    const modal = document.getElementById('securityModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSecurityModal() {
    const modal = document.getElementById('securityModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showPasswordHint() {
    const modal = document.getElementById('securityModal');
    modal.classList.remove('active');
    
    setTimeout(() => {
        const hintModal = document.getElementById('hintModal');
        hintModal.classList.add('active');
    }, 300);
}

function closeHintModal() {
    const modal = document.getElementById('hintModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== Permission Checking =====
function hasPermission(command) {
    if (isRootMode) {
        return permissions.root.includes(command);
    } else {
        return permissions.user.includes(command);
    }
}

function checkPermission(command) {
    if (!hasPermission(command)) {
        if (isRootMode) {
            return `Permission denied: "${command}" not available in root mode`;
        } else {
            showSecurityModal();
            return `Permission denied. Use "su" to elevate privileges.\nRequired: root access`;
        }
    }
    return null;
}

// ===== Updated Terminal Commands (User Mode - Read Only) =====
const userCommands = {
    help: {
        description: 'Display available commands',
        execute: () => {
            let helpText = `
Available Commands (User Mode):
• help          - Show this help message
• about         - Display fresher profile (read-only)
• education     - Show academic background (read-only)
• skills        - Show technical skills (read-only)
• projects      - List security projects (read-only)
• experience    - Show internship learning (read-only)
• certifications - List certifications (read-only)
• contact       - Show contact information (read-only)
• hireme        - Why hire this fresher (read-only)
• fresher       - Fresher availability and goals
• clear         - Clear terminal
• theme         - Toggle dark/light theme
• matrix        - Toggle matrix background
• date          - Show current date
• whoami        - Display current user
• ls            - List files
• pwd           - Print working directory
• echo          - Echo text
• tryhackme     - Show TryHackMe progress
• htb           - Show Hack The Box progress
• job           - Job search status

🔐 Restricted Commands (require root access):
• edit          - Modify portfolio content
• config        - Open configuration panel
• reset         - Reset all changes
• backup        - Create backup
• scan          - Run security scan
• logs          - View system logs

Type "su [password]" to switch to root user.
Default password hint: Think about cybersecurity
            `;
            return helpText;
        }
    },
    
    about: {
        description: 'Display fresher profile (read-only)',
        execute: () => {
            return `
Fresher Profile (Read-Only):
Name: Mahesh Garlapally
Status: Cybersecurity Fresher
Education: BCA Graduate (90% aggregate)
Certification: CEH Training Completed
Availability: Seeking first cybersecurity role
Target Roles: SOC Analyst, VAPT Engineer, Security Analyst
Location: Hyderabad, Telangana
Ready to Start: Immediately

🔒 To modify this information, use: su [password]
            `;
        }
    },
    
    skills: {
        description: 'Show technical skills (read-only)',
        execute: () => {
            return `
Technical Skills (Read-Only):
• Ethical Hacking & Vulnerability Assessment
• Web Application Security
• Network Security Fundamentals
• Security Tools Proficiency

Tools: Nmap, Burp Suite, Metasploit, OWASP ZAP, Kali Linux
Programming: Python, JavaScript, HTML/CSS, MySQL

🔒 To modify skills, use: su [password]
            `;
        }
    },
    
    projects: {
        description: 'List security projects (read-only)',
        execute: () => {
            return `
Security Projects (Read-Only):
1. HM-BGRemover - Secure Web App (2025)
2. TeacherX - AI Learning Platform (2025)
3. YT-Downloader - Web Tool (2025)

🔒 To modify projects, use: su [password]
            `;
        }
    },
    
    experience: {
        description: 'Show internship learning (read-only)',
        execute: () => {
            return `
Internship Experience (Read-Only):
Cybersecurity Intern @ Uptoskills
May 2025 - Aug 2025 (Online Internship)

Practical Experience:
• Learned vulnerability scanning with Nmap, Burp Suite
• Practiced penetration testing using Metasploit
• Applied OWASP Top 10 for web security assessment
• Assisted in risk assessment documentation

🔒 To modify experience, use: su [password]
            `;
        }
    },
    
    certifications: {
        description: 'List certifications (read-only)',
        execute: () => {
            return `
Professional Certifications (Read-Only):
1. Certified Ethical Hacker (CEH) - Training Completed
2. Cybersecurity Analyst Job Simulation - Forage
3. Cyber Job Simulation - Deloitte
4. Python Basics - HackerRank

🔒 To modify certifications, use: su [password]
            `;
        }
    },
    
    su: {
        description: 'Switch to root user (elevated privileges)',
        execute: (args) => {
            if (args.length > 0) {
                if (args[0] === rootPassword) {
                    activateRootMode();
                    return '✅ Root access granted. Elevated privileges activated.\nType "help" for root commands.';
                } else {
                    return '❌ Access denied. Incorrect password.\nHint: Think about cybersecurity certification';
                }
            } else {
                return 'Usage: su [password]\nTo modify portfolio details, root access is required.';
            }
        }
    },
    
    // Read-only versions of other commands
    education: terminalCommands.education,
    contact: terminalCommands.contact,
    fresher: terminalCommands.fresher,
    hireme: terminalCommands.hireme,
    clear: terminalCommands.clear,
    theme: terminalCommands.theme,
    matrix: terminalCommands.matrix,
    date: terminalCommands.date,
    whoami: terminalCommands.whoami
};

// ===== Root Commands (Write Access) =====
const rootCommands = {
    su: {
        description: 'Already in root mode',
        execute: () => {
            return 'You are already in root mode. Use "exit" to return to user mode.';
        }
    },
    
    exit: {
        description: 'Exit root mode',
        execute: () => {
            deactivateRootMode();
            return 'Exited root mode. Returning to user mode.';
        }
    },
    
    passwd: {
        description: 'Change root password',
        execute: (args) => {
            if (args.length >= 2) {
                const [oldPass, newPass] = args;
                if (oldPass === rootPassword) {
                    rootPassword = newPass;
                    return '✅ Password changed successfully.';
                } else {
                    return '❌ Current password incorrect.';
                }
            }
            return 'Usage: passwd [current_password] [new_password]';
        }
    },
    
    edit: {
        description: 'Edit portfolio content',
        execute: (args) => {
            if (args.length < 2) {
                return 'Usage: edit [section] [content]\nSections: about, skills, projects, experience';
            }
            
            const section = args[0];
            const content = args.slice(1).join(' ');
            
            const sections = {
                about: {
                    element: document.querySelector('.about-description'),
                    default: 'As a recent BCA graduate with strong academic performance (90% aggregate) and CEH certification, I have built a solid foundation in cybersecurity. I\'m actively seeking my first professional role where I can contribute, learn from experienced teams, and grow into a valuable security professional.'
                },
                skills: {
                    element: document.querySelector('.skills-container'),
                    default: skillsData
                },
                projects: {
                    element: document.getElementById('projectsGrid'),
                    default: projectsData
                },
                experience: {
                    element: document.querySelector('.experience-content p'),
                    default: 'Gained practical experience in cybersecurity fundamentals during this online internship, applying theoretical knowledge to real-world scenarios.'
                }
            };
            
            if (!sections[section]) {
                return `❌ Invalid section. Available: ${Object.keys(sections).join(', ')}`;
            }
            
            if (section === 'skills' || section === 'projects') {
                return `⚠️ Use config panel for ${section} editing`;
            } else {
                sections[section].element.textContent = content;
                saveChange(`Edited ${section} section via terminal`);
                return `✅ "${section}" section updated successfully.`;
            }
        }
    },
    
    config: {
        description: 'Open configuration panel',
        execute: () => {
            openRootControls();
            return 'Opening root configuration panel...';
        }
    },
    
    reset: {
        description: 'Reset all changes to default',
        execute: () => {
            if (confirm('⚠️ WARNING: This will reset ALL changes to default. Continue?')) {
                resetToDefault();
                return '✅ All changes reset. Page reloading...';
            }
            return 'Reset cancelled.';
        }
    },
    
    backup: {
        description: 'Create backup of current configuration',
        execute: () => {
            createBackup();
            return '✅ Backup created successfully.';
        }
    },
    
    scan: {
        description: 'Run security scan',
        execute: () => {
            return runSecurityScan();
        }
    },
    
    logs: {
        description: 'View system logs',
        execute: () => {
            return viewSystemLogs();
        }
    },
    
    sysinfo: {
        description: 'Show system information',
        execute: () => {
            return `
System Information (Root Mode):
• User: root
• Access Level: Administrator
• Session Start: ${new Date().toLocaleString()}
• Changes Made: ${localStorage.getItem('changesCount') || 0}
• Theme: ${currentTheme}
• Terminal Version: 2.0 (Root Edition)
• Security Status: ${isRootMode ? 'Elevated' : 'Normal'}
            `;
        }
    },
    
    help: {
        description: 'Display root commands',
        execute: () => {
            return `
Root Commands (Elevated Privileges):
• exit          - Exit root mode
• passwd        - Change root password
• edit          - Edit portfolio content
• config        - Open configuration panel
• reset         - Reset all changes
• backup        - Create backup
• scan          - Run security scan
• logs          - View system logs
• sysinfo       - Show system information

🔓 Write access enabled for all sections
⚠️ Use with caution - changes are permanent
            `;
        }
    }
};

// ===== Command Execution Handler =====
function executeCommand(baseCommand, args) {
    // Check permissions first
    const permissionError = checkPermission(baseCommand);
    if (permissionError) {
        return permissionError;
    }
    
    // Execute based on mode
    if (isRootMode) {
        // Root mode commands
        if (rootCommands[baseCommand]) {
            return rootCommands[baseCommand].execute(args);
        }
    } else {
        // User mode commands
        if (userCommands[baseCommand]) {
            return userCommands[baseCommand].execute(args);
        }
    }
    
    // Handle built-in commands
    switch(baseCommand) {
        case 'ls':
            if (isRootMode) {
                return 'about.txt\nskills.txt\nprojects.txt\nexperience.txt\nconfig.txt\nbackup.txt\nlogs.txt\nroot_commands.txt';
            } else {
                return 'about.txt\neducation.txt\nskills.txt\nprojects.txt\nexperience.txt\ncertifications.txt\ncontact.txt\nhireme.txt\nREADME.md';
            }
        case 'pwd':
            return isRootMode ? '/root/cyberportfolio' : '/home/fresher/cyberportfolio';
        case 'echo':
            return args.join(' ');
        case 'tryhackme':
            return 'TryHackMe Profile: Active (50+ rooms completed)\nLearning Path: Complete Beginner to Junior Pentester\nStatus: Read-only (User mode)';
        case 'htb':
            return 'Hack The Box: Beginner level\nFocus: Learning fundamentals for job readiness\nStatus: Read-only (User mode)';
        case 'job':
            return 'Job Search Status: Active\nTarget: Entry-level cybersecurity roles\nLocation: Hyderabad\nAvailability: Immediate\nStatus: Read-only (User mode)';
        default:
            return 'Command not found. Type "help" for available commands.';
    }
}

// ===== Updated processCommand Function =====
function processCommand(command) {
    // Add to history
    terminalHistory.push(command);
    historyIndex = -1;
    
    // Create output line
    const output = terminalBody.querySelector('.terminal-output');
    const inputLine = document.createElement('div');
    inputLine.className = 'terminal-line';
    
    // Set prompt based on mode
    let promptText;
    if (isRootMode) {
        promptText = '<span class="prompt root-prompt">root@cyberportfolio:~#</span>';
    } else {
        promptText = '<span class="prompt">fresher@cyberportfolio:~$</span>';
    }
    
    inputLine.innerHTML = `${promptText} ${command}`;
    output.appendChild(inputLine);
    
    // Process command
    const commandParts = command.split(' ');
    const baseCommand = commandParts[0].toLowerCase();
    const args = commandParts.slice(1);
    
    // Execute command
    const result = executeCommand(baseCommand, args);
    
    // Display result
    if (result) {
        const resultLine = document.createElement('div');
        resultLine.className = 'terminal-line';
        resultLine.innerHTML = result.replace(/\n/g, '<br>');
        output.appendChild(resultLine);
    }
    
    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// ===== Root Mode Activation/Deactivation =====
function activateRootMode() {
    isRootMode = true;
    
    // Update UI
    const rootIndicator = document.getElementById('rootModeIndicator');
    if (rootIndicator) rootIndicator.classList.add('active');
    
    // Update terminal prompt
    const prompts = document.querySelectorAll('.prompt');
    prompts.forEach(prompt => {
        prompt.textContent = 'root@cyberportfolio:~#';
        prompt.classList.add('root-prompt');
    });
    
    // Add security notice
    const output = terminalBody.querySelector('.terminal-output');
    const notice = document.createElement('div');
    notice.className = 'terminal-line';
    notice.innerHTML = `
        <span style="color: #ff3333; font-weight: bold;">⚠️ ROOT ACCESS ACTIVATED</span><br>
        <span style="color: var(--warning);">All security restrictions lifted.</span><br>
        <span style="color: var(--success);">Write access enabled for portfolio modification.</span>
    `;
    output.appendChild(notice);
    
    terminalBody.scrollTop = terminalBody.scrollHeight;
    console.log('🔓 Root mode activated');
}

function deactivateRootMode() {
    isRootMode = false;
    
    // Update UI
    const rootIndicator = document.getElementById('rootModeIndicator');
    if (rootIndicator) rootIndicator.classList.remove('active');
    
    // Update terminal prompt
    const prompts = document.querySelectorAll('.prompt');
    prompts.forEach(prompt => {
        prompt.textContent = 'fresher@cyberportfolio:~$';
        prompt.classList.remove('root-prompt');
    });
    
    console.log('🔒 Root mode deactivated');
}

// ===== Helper Functions =====
function resetToDefault() {
    // Clear all customizations
    localStorage.removeItem('portfolioChanges');
    localStorage.removeItem('changesCount');
    localStorage.removeItem('themeChanges');
    
    // Reset theme
    document.documentElement.style.removeProperty('--primary');
    currentTheme = 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Reload after delay
    setTimeout(() => {
        location.reload();
    }, 1000);
}

function createBackup() {
    const backup = {
        theme: currentTheme,
        skills: skillsData,
        projects: projectsData,
        timestamp: new Date().toISOString(),
        changes: JSON.parse(localStorage.getItem('portfolioChanges') || '[]')
    };
    
    localStorage.setItem('portfolioBackup', JSON.stringify(backup));
    
    // Download as file
    const dataStr = JSON.stringify(backup, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const link = document.createElement('a');
    link.setAttribute('href', dataUri);
    link.setAttribute('download', `portfolio-backup-${Date.now()}.json`);
    link.click();
}

function runSecurityScan() {
    const issues = [];
    const warnings = [];
    
    if (isRootMode) {
        warnings.push('Root mode active - Elevated privileges');
    }
    
    if (localStorage.getItem('portfolioChanges')) {
        const changes = JSON.parse(localStorage.getItem('portfolioChanges') || '[]');
        if (changes.length > 0) {
            issues.push(`${changes.length} modifications detected`);
        }
    }
    
    let scanResult = 'Security Scan Results:\n';
    scanResult += '────────────────────\n';
    
    if (issues.length > 0) {
        scanResult += '⚠️ Issues Found:\n';
        issues.forEach(issue => scanResult += `• ${issue}\n`);
    }
    
    if (warnings.length > 0) {
        scanResult += '\n📝 Warnings:\n';
        warnings.forEach(warning => scanResult += `• ${warning}\n`);
    }
    
    if (issues.length === 0 && warnings.length === 0) {
        scanResult += '✅ No security issues detected.\n';
    }
    
    scanResult += `\nScan completed: ${new Date().toLocaleString()}`;
    
    return scanResult;
}

function viewSystemLogs() {
    const logs = JSON.parse(localStorage.getItem('portfolioChanges') || '[]');
    
    if (logs.length === 0) {
        return 'No system logs found.';
    }
    
    let logText = 'System Logs:\n';
    logText += '────────────\n';
    
    logs.slice(-10).reverse().forEach(log => {
        const time = new Date(log.timestamp).toLocaleTimeString();
        logText += `[${time}] ${log.description} (${log.user})\n`;
    });
    
    logText += `\nTotal entries: ${logs.length}`;
    
    return logText;
}

// ===== Initialize Security System =====
function initSecuritySystem() {
    // Initialize security modal
    const closeBtn = document.getElementById('closeSecurityModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeSecurityModal);
    }
    
    // Close modals on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSecurityModal();
            closeHintModal();
        }
    });
    
    // Create readonly indicator
    const readonlyIndicator = document.createElement('div');
    readonlyIndicator.className = 'readonly-indicator';
    readonlyIndicator.innerHTML = `
        <i class="fas fa-eye"></i>
        <span>Read-Only Mode</span>
        <span class="access-tag access-user">USER</span>
    `;
    document.body.appendChild(readonlyIndicator);
    
    // Update indicator on root mode change
    const updateAccessIndicator = () => {
        if (isRootMode) {
            readonlyIndicator.innerHTML = `
                <i class="fas fa-edit"></i>
                <span>Read-Write Mode</span>
                <span class="access-tag access-root">ROOT</span>
            `;
        } else {
            readonlyIndicator.innerHTML = `
                <i class="fas fa-eye"></i>
                <span>Read-Only Mode</span>
                <span class="access-tag access-user">USER</span>
            `;
        }
    };
    
    // Override activate/deactivate functions
    const originalActivate = activateRootMode;
    const originalDeactivate = deactivateRootMode;
    
    activateRootMode = function() {
        originalActivate();
        updateAccessIndicator();
    };
    
    deactivateRootMode = function() {
        originalDeactivate();
        updateAccessIndicator();
    };
}

// ===== Update Initialization =====
function init() {
    console.log('🚀 Cybersecurity Fresher Portfolio Initialized');
    
    // Initialize all systems
    addNotificationStyles();
    initPreloader();
    initTheme();
    initNavigation();
    initTerminal();
    initSkills();
    initProjects();
    initCertifications();
    initContactForm();
    initSmoothScrolling();
    initRootControls();
    initSecuritySystem(); // Add security system
    setupCleanup();
}
// ===== Save System Configuration =====
let saveMode = localStorage.getItem('saveMode') || 'permanent'; // permanent, temporary, none
let unsavedChanges = [];
let autoSaveInterval = null;
let lastSaveTime = null;
let isSaving = false;

// Storage configurations
const storageConfig = {
    permanent: {
        name: 'LocalStorage',
        duration: 'Persistent',
        description: 'Changes saved permanently in browser',
        getItem: (key) => localStorage.getItem(key),
        setItem: (key, value) => localStorage.setItem(key, value),
        removeItem: (key) => localStorage.removeItem(key),
        clear: () => localStorage.clear(),
        getAllKeys: () => Object.keys(localStorage)
    },
    temporary: {
        name: 'SessionStorage',
        duration: 'Session Only',
        description: 'Changes saved for current session only',
        getItem: (key) => sessionStorage.getItem(key),
        setItem: (key, value) => sessionStorage.setItem(key, value),
        removeItem: (key) => sessionStorage.removeItem(key),
        clear: () => sessionStorage.clear(),
        getAllKeys: () => Object.keys(sessionStorage)
    },
    none: {
        name: 'Memory Only',
        duration: 'Until Refresh',
        description: 'Changes not saved - preview mode',
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        getAllKeys: () => []
    }
};

// ===== Save System Initialization =====
function initSaveSystem() {
    // Load save mode
    const savedMode = localStorage.getItem('portfolioSaveMode');
    if (savedMode) {
        saveMode = savedMode;
    }
    
    // Apply save mode to HTML
    document.documentElement.setAttribute('data-save-mode', saveMode);
    
    // Initialize UI
    updateSaveUI();
    initSaveModals();
    startAutoSave();
    
    // Load saved changes if any
    loadSavedChanges();
    
    // Warn before leaving with unsaved changes
    setupBeforeUnloadWarning();
    
    console.log(`💾 Save system initialized: ${saveMode} mode`);
}

// ===== Save Mode Management =====
function setSaveMode(mode) {
    if (!['permanent', 'temporary', 'none'].includes(mode)) {
        console.error('Invalid save mode:', mode);
        return false;
    }
    
    // Save current changes before switching
    if (unsavedChanges.length > 0 && saveMode !== 'none') {
        saveChanges();
    }
    
    // Clear current mode data if switching from 'none'
    if (saveMode === 'none') {
        unsavedChanges = [];
    }
    
    // Set new mode
    saveMode = mode;
    document.documentElement.setAttribute('data-save-mode', mode);
    
    // Save mode preference
    localStorage.setItem('portfolioSaveMode', mode);
    
    // Update UI
    updateSaveUI();
    
    // Show notification
    showSaveNotification(`Save mode changed to: ${mode}`);
    
    console.log(`💾 Save mode changed to: ${mode}`);
    return true;
}

function updateSaveUI() {
    // Update status bar
    const modeTag = document.getElementById('modeTag');
    const currentSaveMode = document.getElementById('currentSaveMode');
    const saveModeDetail = document.getElementById('saveModeDetail');
    const saveStatusText = document.getElementById('saveStatusText');
    
    if (modeTag) {
        modeTag.textContent = saveMode.toUpperCase();
        modeTag.className = `mode-tag ${saveMode === 'temporary' ? 'temp' : saveMode === 'none' ? 'none' : ''}`;
    }
    
    if (currentSaveMode) {
        currentSaveMode.textContent = saveMode.toUpperCase();
    }
    
    if (saveModeDetail) {
        saveModeDetail.textContent = storageConfig[saveMode].description;
    }
    
    if (saveStatusText) {
        const changeCount = unsavedChanges.length;
        if (changeCount > 0) {
            saveStatusText.textContent = `${changeCount} unsaved change${changeCount > 1 ? 's' : ''}`;
            saveStatusText.style.color = 'var(--warning)';
        } else {
            saveStatusText.textContent = 'All changes saved';
            saveStatusText.style.color = 'var(--success)';
        }
    }
    
    // Show/hide status bar
    const statusBar = document.getElementById('saveStatusBar');
    if (statusBar) {
        if (isRootMode) {
            statusBar.classList.add('active');
        } else {
            statusBar.classList.remove('active');
        }
    }
}

// ===== Change Tracking =====
function trackChange(change) {
    const changeObj = {
        ...change,
        id: Date.now() + Math.random(),
        timestamp: new Date().toISOString(),
        saveMode: saveMode
    };
    
    unsavedChanges.push(changeObj);
    
    // Highlight the changed element
    if (change.elementId) {
        const element = document.getElementById(change.elementId);
        if (element) {
            element.classList.add('change-highlight');
            setTimeout(() => {
                element.classList.remove('change-highlight');
            }, 1000);
        }
    }
    
    // Update UI
    updateSaveUI();
    
    // Auto-save if enabled
    if (saveMode !== 'none') {
        scheduleAutoSave();
    }
    
    console.log(`📝 Change tracked:`, changeObj);
    return changeObj.id;
}

function saveChanges() {
    if (isSaving || saveMode === 'none' || unsavedChanges.length === 0) {
        return;
    }
    
    isSaving = true;
    showAutoSaveIndicator(true);
    
    try {
        const storage = storageConfig[saveMode];
        const changesToSave = [...unsavedChanges];
        
        // Get existing changes
        const existingChanges = JSON.parse(storage.getItem('portfolioChanges') || '[]');
        
        // Merge changes
        const allChanges = [...existingChanges, ...changesToSave];
        
        // Save to appropriate storage
        storage.setItem('portfolioChanges', JSON.stringify(allChanges));
        
        // Also save to permanent storage for backup if in temp mode
        if (saveMode === 'temporary') {
            const permChanges = JSON.parse(storageConfig.permanent.getItem('portfolioTempChanges') || '[]');
            storageConfig.permanent.setItem('portfolioTempChanges', 
                JSON.stringify([...permChanges, ...changesToSave]));
        }
        
        // Update counts
        const totalChanges = parseInt(storage.getItem('changeCount') || '0') + changesToSave.length;
        storage.setItem('changeCount', totalChanges.toString());
        
        // Clear unsaved changes
        unsavedChanges = [];
        
        lastSaveTime = new Date();
        
        console.log(`💾 Saved ${changesToSave.length} changes to ${saveMode} storage`);
        
        // Show success message
        showSaveNotification(`${changesToSave.length} change${changesToSave.length > 1 ? 's' : ''} saved`);
        
    } catch (error) {
        console.error('❌ Save failed:', error);
        showSaveNotification('Save failed!', 'error');
    } finally {
        isSaving = false;
        showAutoSaveIndicator(false);
        updateSaveUI();
    }
}

function loadSavedChanges() {
    if (saveMode === 'none') return;
    
    try {
        const storage = storageConfig[saveMode];
        const savedChanges = JSON.parse(storage.getItem('portfolioChanges') || '[]');
        
        console.log(`📂 Loaded ${savedChanges.length} saved changes from ${saveMode} storage`);
        
        // Show storage info
        updateStorageInfo();
        
        return savedChanges;
    } catch (error) {
        console.error('❌ Load failed:', error);
        return [];
    }
}

function clearAllChanges() {
    if (!confirm('⚠️ Clear ALL saved changes? This cannot be undone.')) {
        return false;
    }
    
    // Clear from all storage types
    Object.values(storageConfig).forEach(storage => {
        storage.removeItem('portfolioChanges');
        storage.removeItem('changeCount');
    });
    
    // Clear unsaved changes
    unsavedChanges = [];
    
    // Clear UI
    updateSaveUI();
    
    showSaveNotification('All changes cleared', 'warning');
    console.log('🗑️ All changes cleared');
    return true;
}

// ===== Auto-save System =====
function startAutoSave() {
    if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
    }
    
    if (saveMode !== 'none') {
        // Auto-save every 30 seconds if there are unsaved changes
        autoSaveInterval = setInterval(() => {
            if (unsavedChanges.length > 0) {
                saveChanges();
            }
        }, 30000);
        
        console.log('⏱️ Auto-save started (30s interval)');
    }
}

function scheduleAutoSave() {
    // Debounce auto-save to prevent too frequent saves
    if (saveMode === 'none') return;
    
    clearTimeout(window.autoSaveTimeout);
    window.autoSaveTimeout = setTimeout(() => {
        if (unsavedChanges.length > 0) {
            saveChanges();
        }
    }, 5000); // Save 5 seconds after last change
}

function showAutoSaveIndicator(show) {
    const indicator = document.getElementById('autosaveIndicator');
    if (indicator) {
        if (show) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    }
}

// ===== Save Modals & UI =====
function initSaveModals() {
    const saveModal = document.getElementById('saveModal');
    const cancelSaveBtn = document.getElementById('cancelSave');
    const confirmSaveBtn = document.getElementById('confirmSave');
    const exportChangesBtn = document.getElementById('exportChanges');
    const quickSaveBtn = document.getElementById('quickSave');
    const changeSaveModeBtn = document.getElementById('changeSaveMode');
    
    // Open save modal
    if (changeSaveModeBtn) {
        changeSaveModeBtn.addEventListener('click', () => {
            openSaveModal();
        });
    }
    
    // Quick save
    if (quickSaveBtn) {
        quickSaveBtn.addEventListener('click', () => {
            if (unsavedChanges.length > 0) {
                saveChanges();
            } else {
                showSaveNotification('No changes to save', 'info');
            }
        });
    }
    
    // Save option selection
    const saveOptions = document.querySelectorAll('.save-option');
    saveOptions.forEach(option => {
        option.addEventListener('click', () => {
            saveOptions.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
    
    // Confirm save mode change
    if (confirmSaveBtn) {
        confirmSaveBtn.addEventListener('click', () => {
            const selectedOption = document.querySelector('.save-option.selected');
            if (selectedOption) {
                const newMode = selectedOption.dataset.type;
                setSaveMode(newMode);
                closeSaveModal();
            } else {
                alert('Please select a save mode');
            }
        });
    }
    
    // Cancel save modal
    if (cancelSaveBtn) {
        cancelSaveBtn.addEventListener('click', closeSaveModal);
    }
    
    // Export changes
    if (exportChangesBtn) {
        exportChangesBtn.addEventListener('click', exportChanges);
    }
    
    // Close modal on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && saveModal.classList.contains('active')) {
            closeSaveModal();
        }
    });
}

function openSaveModal() {
    const saveModal = document.getElementById('saveModal');
    const saveOptions = document.querySelectorAll('.save-option');
    
    // Select current mode
    saveOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.dataset.type === saveMode) {
            option.classList.add('selected');
        }
    });
    
    saveModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSaveModal() {
    const saveModal = document.getElementById('saveModal');
    saveModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== Export/Import System =====
function exportChanges() {
    const allChanges = {
        permanent: JSON.parse(localStorage.getItem('portfolioChanges') || '[]'),
        temporary: JSON.parse(sessionStorage.getItem('portfolioChanges') || '[]'),
        config: {
            saveMode: saveMode,
            theme: currentTheme,
            exportDate: new Date().toISOString(),
            totalChanges: parseInt(localStorage.getItem('changeCount') || '0') + 
                         parseInt(sessionStorage.getItem('changeCount') || '0')
        }
    };
    
    const dataStr = JSON.stringify(allChanges, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const fileName = `portfolio-changes-${Date.now()}.json`;
    const link = document.createElement('a');
    link.setAttribute('href', dataUri);
    link.setAttribute('download', fileName);
    link.click();
    
    showSaveNotification('Changes exported successfully', 'success');
    console.log('📤 Changes exported:', fileName);
}

function importChanges(file) {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            
            if (!imported.config) {
                throw new Error('Invalid export file');
            }
            
            // Restore changes based on type
            if (imported.permanent && imported.permanent.length > 0) {
                localStorage.setItem('portfolioChanges', JSON.stringify(imported.permanent));
                localStorage.setItem('changeCount', imported.permanent.length.toString());
            }
            
            if (imported.temporary && imported.temporary.length > 0) {
                sessionStorage.setItem('portfolioChanges', JSON.stringify(imported.temporary));
                sessionStorage.setItem('changeCount', imported.temporary.length.toString());
            }
            
            // Restore settings
            if (imported.config.saveMode) {
                setSaveMode(imported.config.saveMode);
            }
            
            if (imported.config.theme) {
                currentTheme = imported.config.theme;
                document.documentElement.setAttribute('data-theme', currentTheme);
            }
            
            showSaveNotification('Changes imported successfully! Page will reload...', 'success');
            
            // Reload to apply changes
            setTimeout(() => location.reload(), 1500);
            
        } catch (error) {
            console.error('❌ Import failed:', error);
            showSaveNotification('Import failed: Invalid file', 'error');
        }
    };
    reader.readAsText(file);
}

// ===== Update Storage Info =====
function updateStorageInfo() {
    let storagePanel = document.getElementById('storageInfoPanel');
    
    if (!storagePanel) {
        storagePanel = document.createElement('div');
        storagePanel.id = 'storageInfoPanel';
        storagePanel.className = 'storage-info';
        document.body.appendChild(storagePanel);
    }
    
    const permChanges = JSON.parse(localStorage.getItem('portfolioChanges') || '[]');
    const tempChanges = JSON.parse(sessionStorage.getItem('portfolioChanges') || '[]');
    
    const permSize = JSON.stringify(permChanges).length;
    const tempSize = JSON.stringify(tempChanges).length;
    const totalSize = permSize + tempSize;
    
    // Calculate percentage (max 5MB for demo)
    const maxSize = 5 * 1024 * 1024; // 5MB
    const usagePercent = Math.min((totalSize / maxSize) * 100, 100);
    
    storagePanel.innerHTML = `
        <h4><i class="fas fa-database"></i> Storage Usage</h4>
        <div class="storage-usage">
            <div class="storage-bar">
                <div class="storage-used" style="width: ${usagePercent}%"></div>
            </div>
            <div class="storage-stats">
                <span>${formatBytes(totalSize)} used</span>
                <span>${formatBytes(maxSize)} total</span>
            </div>
        </div>
        <p>Permanent: ${permChanges.length} changes</p>
        <p>Temporary: ${tempChanges.length} changes</p>
        <p>Current: ${saveMode} mode</p>
    `;
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// ===== Updated Root Commands with Save Integration =====
const enhancedRootCommands = {
    ...rootCommands,
    
    save: {
        description: 'Save changes immediately',
        execute: () => {
            saveChanges();
            return 'Save completed.';
        }
    },
    
    savemode: {
        description: 'Change save mode',
        execute: (args) => {
            if (args.length > 0) {
                const mode = args[0].toLowerCase();
                if (setSaveMode(mode)) {
                    return `Save mode changed to: ${mode}`;
                } else {
                    return 'Invalid mode. Use: permanent, temporary, none';
                }
            }
            return `Current save mode: ${saveMode}\nUsage: savemode [permanent|temporary|none]`;
        }
    },
    
    changes: {
        description: 'Show unsaved changes',
        execute: () => {
            if (unsavedChanges.length === 0) {
                return 'No unsaved changes.';
            }
            
            let output = `Unsaved changes (${unsavedChanges.length}):\n`;
            unsavedChanges.forEach((change, index) => {
                output += `${index + 1}. ${change.description} (${new Date(change.timestamp).toLocaleTimeString()})\n`;
            });
            
            output += `\nType "save" to save or "discard" to clear.`;
            return output;
        }
    },
    
    discard: {
        description: 'Discard unsaved changes',
        execute: () => {
            const count = unsavedChanges.length;
            unsavedChanges = [];
            updateSaveUI();
            return `Discarded ${count} unsaved change${count > 1 ? 's' : ''}.`;
        }
    },
    
    storage: {
        description: 'Show storage information',
        execute: () => {
            const permChanges = JSON.parse(localStorage.getItem('portfolioChanges') || '[]');
            const tempChanges = JSON.parse(sessionStorage.getItem('portfolioChanges') || '[]');
            
            return `
Storage Information:
───────────────────
Current Mode: ${saveMode}
Permanent Changes: ${permChanges.length}
Temporary Changes: ${tempChanges.length}
Unsaved Changes: ${unsavedChanges.length}
Total Saved: ${parseInt(localStorage.getItem('changeCount') || '0') + 
               parseInt(sessionStorage.getItem('changeCount') || '0')}
Last Save: ${lastSaveTime ? lastSaveTime.toLocaleTimeString() : 'Never'}
            `;
        }
    },
    
    backup: {
        ...rootCommands.backup,
        execute: () => {
            exportChanges();
            return 'Backup/export initiated.';
        }
    }
};

// ===== Updated Edit Command with Save Tracking =====
const enhancedEditCommand = {
    ...rootCommands.edit,
    execute: (args) => {
        if (args.length < 2) {
            return 'Usage: edit [section] [content]\nSections: about, skills, projects, experience';
        }
        
        const section = args[0];
        const content = args.slice(1).join(' ');
        
        const sections = {
            about: {
                element: document.querySelector('.about-description'),
                default: 'As a recent BCA graduate with strong academic performance (90% aggregate) and CEH certification, I have built a solid foundation in cybersecurity...'
            },
            skills: {
                element: document.querySelector('.skills-container'),
                default: 'Skills container'
            },
            projects: {
                element: document.getElementById('projectsGrid'),
                default: 'Projects grid'
            },
            experience: {
                element: document.querySelector('.experience-content p'),
                default: 'Gained practical experience in cybersecurity fundamentals...'
            }
        };
        
        if (!sections[section]) {
            return `❌ Invalid section. Available: ${Object.keys(sections).join(', ')}`;
        }
        
        const element = sections[section].element;
        if (!element) {
            return `❌ Section element not found.`;
        }
        
        // Save old content for undo
        const oldContent = element.innerHTML;
        
        // Apply change
        element.textContent = content;
        
        // Track change
        const changeId = trackChange({
            type: 'edit',
            section: section,
            description: `Edited ${section} section`,
            content: content,
            oldContent: oldContent,
            elementId: element.id || null,
            timestamp: new Date().toISOString()
        });
        
        return `✅ "${section}" section updated. (Change ID: ${changeId})`;
    }
};

// Replace the edit command
rootCommands.edit = enhancedEditCommand;
// Replace all root commands with enhanced versions
Object.assign(rootCommands, enhancedRootCommands);

// ===== Save Notifications =====
function showSaveNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.save-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `save-notification notification-${type}`;
    
    const icons = {
        success: 'check-circle',
        error: 'exclamation-triangle',
        warning: 'exclamation-circle',
        info: 'info-circle'
    };
    
    notification.innerHTML = `
        <i class="fas fa-${icons[type] || 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(0, 255, 136, 0.1)' : 
                     type === 'error' ? 'rgba(255, 51, 51, 0.1)' : 
                     type === 'warning' ? 'rgba(255, 170, 0, 0.1)' : 
                     'rgba(0, 136, 255, 0.1)'};
        border: 1px solid ${type === 'success' ? 'var(--primary)' : 
                            type === 'error' ? 'var(--danger)' : 
                            type === 'warning' ? 'var(--warning)' : 
                            'var(--secondary)'};
        color: ${type === 'success' ? 'var(--primary)' : 
                type === 'error' ? 'var(--danger)' : 
                type === 'warning' ? 'var(--warning)' : 
                'var(--secondary)'};
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        backdrop-filter: blur(10px);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== Before Unload Warning =====
function setupBeforeUnloadWarning() {
    window.addEventListener('beforeunload', (e) => {
        if (unsavedChanges.length > 0 && saveMode !== 'none') {
            // Save changes before leaving
            saveChanges();
            
            // Show warning for unsaved changes
            const message = 'You have unsaved changes. Are you sure you want to leave?';
            e.returnValue = message;
            return message;
        }
    });
}

// ===== Update Init Function =====
function init() {
    console.log('🚀 Cybersecurity Fresher Portfolio Initialized');
    
    // Initialize all systems
    addNotificationStyles();
    initPreloader();
    initTheme();
    initNavigation();
    initTerminal();
    initSkills();
    initProjects();
    initCertifications();
    initContactForm();
    initSmoothScrolling();
    initRootControls();
    initSecuritySystem();
    initSaveSystem(); // Add save system
    setupCleanup();
}
// ===== Simplified Security Functions =====
function showAccessDenied() {
    const deniedNotification = document.getElementById('accessDeniedNotification');
    if (!deniedNotification) return;
    
    deniedNotification.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        hideAccessDenied();
    }, 3000);
}

function hideAccessDenied() {
    const deniedNotification = document.getElementById('accessDeniedNotification');
    if (!deniedNotification) return;
    
    deniedNotification.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== Update Permission Checking =====
function checkPermission(command) {
    if (!hasPermission(command)) {
        if (isRootMode) {
            return `Permission denied: "${command}" not available in root mode`;
        } else {
            showAccessDenied(); // Show simple notification
            return `Access denied. Use "su" to elevate privileges.`;
        }
    }
    return null;
}

// ===== Initialize Security System (Simplified) =====
function initSecuritySystem() {
    // Close notification on click
    const deniedNotification = document.getElementById('accessDeniedNotification');
    if (deniedNotification) {
        deniedNotification.addEventListener('click', hideAccessDenied);
    }
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideAccessDenied();
        }
    });
    
    // Create readonly indicator
    const readonlyIndicator = document.createElement('div');
    readonlyIndicator.className = 'readonly-indicator';
    readonlyIndicator.innerHTML = `
        <i class="fas fa-eye"></i>
        <span>Read-Only Mode</span>
        <span class="access-tag access-user">USER</span>
    `;
    document.body.appendChild(readonlyIndicator);
    
    // Update indicator on root mode change
    const updateAccessIndicator = () => {
        if (isRootMode) {
            readonlyIndicator.innerHTML = `
                <i class="fas fa-edit"></i>
                <span>Read-Write Mode</span>
                <span class="access-tag access-root">ROOT</span>
            `;
        } else {
            readonlyIndicator.innerHTML = `
                <i class="fas fa-eye"></i>
                <span>Read-Only Mode</span>
                <span class="access-tag access-user">USER</span>
            `;
        }
    };
    
    // Override activate/deactivate functions
    const originalActivate = activateRootMode;
    const originalDeactivate = deactivateRootMode;
    
    activateRootMode = function() {
        originalActivate();
        updateAccessIndicator();
    };
    
    deactivateRootMode = function() {
        originalDeactivate();
        updateAccessIndicator();
    };
    
    console.log('🔐 Security system initialized (simplified)');
}

// ===== Update User Commands Help Text =====
const simplifiedUserCommands = {
    ...userCommands,
    
    help: {
        description: 'Display available commands',
        execute: () => {
            return `
Available Commands (User Mode):
• help          - Show this help message
• about         - Display fresher profile
• education     - Show academic background
• skills        - Show technical skills
• projects      - List security projects
• experience    - Show internship learning
• certifications - List certifications
• contact       - Show contact information
• hireme        - Why hire this fresher
• fresher       - Fresher availability and goals
• clear         - Clear terminal
• theme         - Toggle dark/light theme
• matrix        - Toggle matrix background
• date          - Show current date
• whoami        - Display current user
• ls            - List files
• pwd           - Print working directory
• echo          - Echo text
• tryhackme     - Show TryHackMe progress
• htb           - Show Hack The Box progress
• job           - Job search status

🔐 Restricted Commands (Root access required):
• edit          - Modify portfolio content
• config        - Open configuration panel
• reset         - Reset all changes
• backup        - Create backup
• scan          - Run security scan

Type "su [password]" to switch to root user.
            `;
        }
    },
    
    su: {
        description: 'Switch to root user',
        execute: (args) => {
            if (args.length > 0) {
                if (args[0] === rootPassword) {
                    activateRootMode();
                    return '✅ Root access granted.\nType "help" for root commands.';
                } else {
                    return '❌ Access denied. Incorrect password.';
                }
            } else {
                return 'Usage: su [password]\nRoot access required for modifications.';
            }
        }
    }
};

// Replace user commands
Object.assign(userCommands, simplifiedUserCommands);

// ===== Remove old modal initialization =====
// Remove these lines from the original code:
// - initSecuritySystem() function (we have a new one above)
// - Any references to security-modal or hint-modal