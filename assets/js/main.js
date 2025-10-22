// Initialize AOS (Animate On Scroll) with optimized settings
AOS.init({
  duration: 500, // Giảm thời gian animation
  once: true, // Animation chỉ chạy 1 lần
  offset: 50, // Giảm offset
  delay: 0, // Không delay
  easing: "ease-out", // Easing mượt hơn
  mirror: false, // Không animate khi scroll ngược
  disable: function () {
    // Tắt AOS trên mobile/tablet để tăng performance
    return window.innerWidth < 768;
  },
});

// Smooth scrolling for navigation links (optimized)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // Đóng navbar trên mobile khi click vào link
      const navbarCollapse = document.querySelector(".navbar-collapse");
      const navbarToggler = document.querySelector(".navbar-toggler");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        // Sử dụng Bootstrap's collapse method
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }

      // Sử dụng scrollIntoView với behavior tùy chọn
      const isMobile = window.innerWidth < 768;
      target.scrollIntoView({
        behavior: isMobile ? "auto" : "smooth", // Auto trên mobile
        block: "start",
      });
    }
  });
});

// Navbar scroll effect (optimized with throttle) - Enhanced for sticky navbar
let lastScroll = 0;
const navbar = document.querySelector(".navbar");
let ticking = false;

function updateNavbar(currentScroll) {
  // Thêm shadow khi scroll
  if (currentScroll > 100) {
    navbar.style.background =
      "linear-gradient(135deg, rgba(196, 30, 58, 0.98) 0%, rgba(139, 0, 0, 0.98) 100%)";
    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.boxShadow = "0 5px 25px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.background =
      "linear-gradient(135deg, var(--primary-red) 0%, var(--dark-red) 100%)";
    navbar.style.backdropFilter = "none";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
  }
  lastScroll = currentScroll;
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    const currentScroll = window.pageYOffset;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateNavbar(currentScroll);
      });
      ticking = true;
    }
  },
  { passive: true }
);

// Active navigation link (optimized with throttle)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
let navTicking = false;

function updateActiveNav() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  navTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!navTicking) {
      window.requestAnimationFrame(updateActiveNav);
      navTicking = true;
    }
  },
  { passive: true }
);

// Back to top button (optimized)
const backToTopBtn = document.getElementById("backToTop");
let btnTicking = false;

function updateBackToTop() {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
  btnTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!btnTicking) {
      window.requestAnimationFrame(updateBackToTop);
      btnTicking = true;
    }
  },
  { passive: true }
);

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Counter animation for statistics
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const animateCounter = (element) => {
  const target = parseInt(element.getAttribute("data-target"));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.textContent === "0") {
      animateCounter(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".stat-number").forEach((counter) => {
  counterObserver.observe(counter);
});

// Timeline functionality
let currentFilter = "all";

// Sort events by month and day
const sortedEvents = historicalEvents.sort((a, b) => {
  if (a.month !== b.month) {
    return a.month - b.month;
  }
  return a.day - b.day;
});

// Render timeline events
function renderTimeline(filterMonth = "all") {
  const container = document.getElementById("timeline-container");
  container.innerHTML = "";

  const filteredEvents =
    filterMonth === "all"
      ? sortedEvents
      : sortedEvents.filter((event) => event.month === parseInt(filterMonth));

  if (filteredEvents.length === 0) {
    container.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-inbox fa-3x mb-3 text-muted"></i>
                <p class="lead text-muted">Không có sự kiện nào trong tháng này</p>
            </div>
        `;
    return;
  }

  filteredEvents.forEach((event, index) => {
    const monthName = getMonthName(event.month);
    const eventHTML = `
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="${
              index * 50
            }" style="animation-delay: ${index * 0.1}s">
                <div class="timeline-content">
                    <div>
                        <span class="timeline-date">
                            <i class="far fa-calendar-alt me-2"></i>${
                              event.day
                            }/${event.month}/${event.year}
                        </span>
                        <span class="timeline-month">${monthName}</span>
                    </div>
                    <h3 class="timeline-title">${event.title}</h3>
                    <p class="timeline-description">${event.description}</p>
                    ${
                      event.image
                        ? `<img src="${event.image}" alt="${event.title}" class="timeline-image">`
                        : ""
                    }
                    <div class="timeline-tags">
                        ${event.tags
                          .map(
                            (tag) =>
                              `<span class="timeline-tag"><i class="fas fa-tag me-1"></i>${tag}</span>`
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `;
    container.innerHTML += eventHTML;
  });

  // Reinitialize AOS for new elements
  AOS.refresh();
}

// Get month name in Vietnamese
function getMonthName(month) {
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];
  return months[month - 1];
}

// Month filter buttons
const monthButtons = document.querySelectorAll(".btn-month");

monthButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    monthButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    // Get selected month
    const selectedMonth = button.getAttribute("data-month");
    currentFilter = selectedMonth;

    // Render timeline with filter
    renderTimeline(selectedMonth);

    // Smooth scroll to timeline
    document.getElementById("timeline").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Initial render
renderTimeline();

// Chart.js - Monthly events distribution
const ctx = document.getElementById("monthlyChart");

if (ctx) {
  // Count events by month
  const monthCounts = Array(12).fill(0);
  historicalEvents.forEach((event) => {
    monthCounts[event.month - 1]++;
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ],
      datasets: [
        {
          label: "Số lượng sự kiện",
          data: monthCounts,
          backgroundColor: "rgba(196, 30, 58, 0.8)",
          borderColor: "rgba(196, 30, 58, 1)",
          borderWidth: 2,
          borderRadius: 8,
          hoverBackgroundColor: "rgba(255, 215, 0, 0.8)",
          hoverBorderColor: "rgba(255, 215, 0, 1)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            color: "#ffffff",
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleColor: "#ffd700",
          bodyColor: "#ffffff",
          borderColor: "#c41e3a",
          borderWidth: 2,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function (context) {
              return `Số sự kiện: ${context.parsed.y}`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            color: "#ffffff",
            font: {
              size: 12,
            },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.3)",
          },
        },
        x: {
          ticks: {
            color: "#ffffff",
            font: {
              size: 11,
            },
          },
          grid: {
            display: false,
            borderColor: "rgba(255, 255, 255, 0.3)",
          },
        },
      },
      animation: {
        duration: 1500,
        easing: "easeInOutQuart",
      },
    },
  });
}

// Update statistics dynamically
function updateStatistics() {
  const totalEvents = historicalEvents.length;
  const countries = [...new Set(historicalEvents.flatMap((e) => e.tags))]
    .length;
  const years =
    historicalEvents[historicalEvents.length - 1].year -
    historicalEvents[0].year;

  // Update if needed - values are already set in HTML with data-target
}

updateStatistics();

// Search functionality (optional enhancement)
function searchEvents(query) {
  const results = historicalEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase()) ||
      event.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );
  return results;
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Press 'T' to go to timeline
  if (e.key === "t" || e.key === "T") {
    document.getElementById("timeline").scrollIntoView({ behavior: "smooth" });
  }
  // Press 'H' to go to home
  if (e.key === "h" || e.key === "H") {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }
  // Press Escape to clear filter
  if (e.key === "Escape") {
    monthButtons.forEach((btn) => btn.classList.remove("active"));
    document
      .querySelector('.btn-month[data-month="all"]')
      .classList.add("active");
    renderTimeline("all");
  }
});

// Print functionality
function printTimeline() {
  window.print();
}

// Share functionality (if needed)
function shareTimeline() {
  if (navigator.share) {
    navigator.share({
      title: "Timeline Chủ nghĩa Xã hội Khoa học",
      text: "Khám phá các sự kiện lịch sử quan trọng của phong trào cộng sản và công nhân quốc tế",
      url: window.location.href,
    });
  }
}

// Loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// QR Code Generation
function generateQRCode() {
  const currentURL = window.location.href;
  const qrcodeContainer = document.getElementById("qrcode-image");
  const urlTextElement = document.querySelector(".url-text");

  if (qrcodeContainer && urlTextElement) {
    // Use QR Server API (free, no registration needed)
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
      currentURL
    )}&bgcolor=FFFFFF&color=c41e3a`;

    qrcodeContainer.innerHTML = `<img src="${qrCodeURL}" alt="QR Code" class="img-fluid">`;
    urlTextElement.textContent = currentURL;
  }
}

// Download QR Code
function downloadQR() {
  const currentURL = window.location.href;
  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(
    currentURL
  )}&bgcolor=FFFFFF&color=c41e3a`;

  // Create temporary link and trigger download
  const link = document.createElement("a");
  link.href = qrCodeURL;
  link.download = "MLN131-Timeline-QRCode.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Copy URL to clipboard
function copyURL() {
  const url = window.location.href;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        showCopySuccess();
      })
      .catch((err) => {
        // Fallback method
        fallbackCopyTextToClipboard(url);
      });
  } else {
    // Fallback for older browsers
    fallbackCopyTextToClipboard(url);
  }
}

// Fallback copy method for older browsers
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
    showCopySuccess();
  } catch (err) {
    console.error("Failed to copy:", err);
    alert("Không thể copy link. Vui lòng copy thủ công: " + text);
  }

  document.body.removeChild(textArea);
}

// Show copy success message
function showCopySuccess() {
  const successMsg = document.getElementById("copy-success");
  if (successMsg) {
    successMsg.classList.remove("d-none");
    setTimeout(() => {
      successMsg.classList.add("d-none");
    }, 3000);
  }
}

// Share URL using Web Share API
function shareURL() {
  const url = window.location.href;
  const title = "Timeline Chủ nghĩa Xã hội Khoa học - MLN131";
  const text =
    "Khám phá các sự kiện lịch sử quan trọng của phong trào cộng sản và công nhân quốc tế";

  if (navigator.share) {
    navigator
      .share({
        title: title,
        text: text,
        url: url,
      })
      .then(() => {
        console.log("Shared successfully");
      })
      .catch((err) => {
        console.log("Error sharing:", err);
        // Fallback: copy to clipboard
        copyURL();
      });
  } else {
    // Fallback for browsers that don't support Web Share API
    copyURL();
    alert("Link đã được copy vào clipboard! Bạn có thể dán và chia sẻ.");
  }
}

// Generate QR Code when page loads
window.addEventListener("load", () => {
  generateQRCode();
});

// Console easter egg
console.log(
  "%c Timeline Chủ nghĩa Xã hội Khoa học ",
  "background: #c41e3a; color: #ffd700; font-size: 20px; padding: 10px; font-weight: bold;"
);
console.log(
  "%c MLN131 - Sản phẩm học tập ",
  "background: #1a1a1a; color: #ffffff; font-size: 14px; padding: 5px;"
);
console.log(
  "%c Designed with ❤️ for education ",
  "color: #c41e3a; font-size: 12px; font-style: italic;"
);

// Performance monitoring
if ("performance" in window) {
  window.addEventListener("load", () => {
    const perfData = performance.timing;
    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`⚡ Page loaded in ${loadTime}ms`);
  });
}

// Error handling for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("error", function () {
      // Use a data URI with a simple placeholder instead of external service
      this.src =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='250'%3E%3Crect width='800' height='250' fill='%23c41e3a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='%23ffffff'%3ELịch sử Quan trọng%3C/text%3E%3C/svg%3E";
      this.alt = "Hình ảnh lịch sử";
    });
  });
});
