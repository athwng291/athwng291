/* 
=========================================
   VNU AI & DIGITAL TECH PORTFOLIO JS
   Theme: Cute Pet Journey (Sweet Pink)
   Author: Senior UX Designer & award-winning Frontend Developer
   Updated: Removed cursor, dark-mode, and audio synthesizer.
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCanvasBackground();
  initSkillRadar();
  initProjectTabs();
    initPdfModal();
  initEasterEggs();
});

/* --- 1. LOADING SCREEN MANAGER --- */
function initLoader() {
  const loader = document.getElementById("loader-wrapper");
  if (loader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
      }, 500);
    });
    // Fallback if load event doesn't fire soon enough
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 2000);
  }
}

/* --- 2. CANVAS FLOATING CUTE SHAPES BACKGROUND --- */
function initCanvasBackground() {
  const canvas = document.getElementById("canvas-net");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  const shapes = [];
  const cuteGlyphs = ["♥", "🐾", "★", "🦴", "☁", "🌸"];
  const properties = {
    shapeCount: 35,
    maxVelocity: 0.4,
    maxSize: 22,
    minSize: 10
  };
  
  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  
  class FloatingShape {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.glyph = cuteGlyphs[Math.floor(Math.random() * cuteGlyphs.length)];
      this.size = Math.random() * (properties.maxSize - properties.minSize) + properties.minSize;
      this.velocityX = (Math.random() * 2 - 1) * properties.maxVelocity;
      this.velocityY = (Math.random() * 2 - 1) * properties.maxVelocity;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() * 2 - 1) * 0.005;
      this.opacity = Math.random() * 0.15 + 0.05;
    }
    
    position() {
      if (this.x > width + 20) this.x = -20;
      if (this.x < -20) this.x = width + 20;
      if (this.y > height + 20) this.y = -20;
      if (this.y < -20) this.y = height + 20;
      
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.rotation += this.rotationSpeed;
    }
    
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      
      const color = `rgba(219, 39, 119, ${this.opacity})`;
      
      ctx.fillStyle = color;
      ctx.font = `${this.size}px 'Quicksand'`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.glyph, 0, 0);
      ctx.restore();
    }
  }
  
  function initShapes() {
    for (let i = 0; i < properties.shapeCount; i++) {
      shapes.push(new FloatingShape());
    }
  }
  
  function loop() {
    ctx.clearRect(0, 0, width, height);
    shapes.forEach(s => {
      s.position();
      s.draw();
    });
    requestAnimationFrame(loop);
  }
  
  initShapes();
  loop();
}

/* --- 3. SKILL RADAR CHART --- */
function initSkillRadar() {
  const ctx = document.getElementById("skillRadar");
  if (!ctx) return;
  
  const gridColor = "rgba(219, 39, 119, 0.08)";
  const labelColor = "#4d122b";
  
  const data = {
    labels: [
      'Quản lý tệp tin',
      'Tìm kiếm học thuật',
      'Prompt Engineering',
      'Hợp tác số',
      'Sáng tạo GenAI',
      'AI có trách nhiệm'
    ],
    datasets: [{
      label: 'Mức độ thông thạo (%)',
      data: [100, 100, 100, 100, 100, 100],
      fill: true,
      backgroundColor: 'rgba(236, 72, 153, 0.15)',
      borderColor: 'rgb(219, 39, 119)',
      pointBackgroundColor: 'rgb(251, 191, 36)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(244, 63, 94)',
      borderWidth: 3
    }]
  };
  
  const config = {
    type: 'radar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 30,
          right: 30,
          top: 5,
          bottom: 5
        }
      },
      scales: {
        r: {
          grid: { color: gridColor },
          angleLines: { color: gridColor },
          pointLabels: {
            color: labelColor,
            font: {
              family: 'Quicksand',
              size: 11,
              weight: '600'
            }
          },
          ticks: {
            display: false,
            maxTicksLimit: 4
          },
          suggestedMin: 50,
          suggestedMax: 100
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  };
  
  if (window.Chart) {
    new Chart(ctx, config);
  }
}

/* --- 4. PROJECT TAB CONTROLLER --- */
function initProjectTabs() {
  const cards = document.querySelectorAll(".project-card");
  
  cards.forEach(card => {
    const tabBtns = card.querySelectorAll(".tab-btn");
    const contents = card.querySelectorAll(".tab-content");
    
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");
        
        // Remove active state from other buttons in this card
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        // Hide other tab contents in this card
        contents.forEach(c => {
          c.classList.remove("active");
          if (c.getAttribute("id") === `${card.id}-${targetTab}`) {
            c.classList.add("active");
          }
        });
      });
    });
  });
}

/* --- 5. PDF MODAL VIEW ENGINE --- */
function initPdfModal() {
  const modal = document.getElementById("pdf-modal");
  const iframe = document.getElementById("pdf-iframe");
  const closeBtn = document.getElementById("pdf-modal-close");
  const fallbackLink = document.getElementById("pdf-fallback-link");
  const triggerBtns = document.querySelectorAll(".pdf-trigger");
  
  if (!modal || !iframe || !closeBtn) return;
  
  triggerBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const pdfPath = btn.getAttribute("data-pdf");
      if (!pdfPath) return;
      
      iframe.src = pdfPath;
      fallbackLink.href = pdfPath;
      modal.classList.add("open");
      document.body.style.overflow = "hidden"; // disable scroll
      
      // Fire confetti celebration on view
      triggerConfetti(0.15);
    });
  });
  
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    iframe.src = "about:blank";
    document.body.style.overflow = ""; // restore scroll
  });
  
  // Close on click outside modal container
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
      iframe.src = "about:blank";
      document.body.style.overflow = "";
    }
  });
}



/* --- 7. EASTER EGGS & CONFETTI ENGINE --- */
function initEasterEggs() {
  const badge = document.querySelector(".passport-stamp");
  if (badge) {
    badge.addEventListener("mouseenter", () => {
      triggerConfetti(0.4);
    });
  }
}

function triggerConfetti(scalarVal) {
  if (window.confetti) {
    window.confetti({
      particleCount: Math.floor(80 * scalarVal),
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#ec4899', '#f43f5e', '#fbbf24']
    });
  }
}

