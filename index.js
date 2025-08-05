const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get("/", (_, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=1024" />
      <title>Nonso Kingsley – Web Developer</title>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', sans-serif;
          background-color: #111;
          color: #fff;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

.glass-tab {
  margin-top: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ccc;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
}

.glass-tab:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

        video.bg-video {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          z-index: -1;
          opacity: 0.9;
        }

       header {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 2rem;
         background: rgba(255, 255, 255, 0.05); 
         backdrop-filter: blur(12px);
         -webkit-backdrop-filter: blur(12px); /* Safari support */
         border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
       }

        .logo {
          font-weight: bold;
          font-size: 1.2rem;
        }
        nav a {
          margin-left: 2rem;
          text-decoration: none;
          color: #ccc;
            filter: brightness(0.6);
            transition: filter 0.2s ease-in-out;
            
            nav a:hover img {
            filter: brightness(1);
       }
        }
        nav a:hover {
          color: #fff;
        }
        .hero {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between; 
          padding: 5rem 4rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .hero-text {
          max-width: 500px;
          flex: 1; 
        }
        .hero-image {
          position: absolute;
          top: 0px;    /* +down -up vertical axis */
          right: 60px;   /* adjust to move horizontally */
          max-width: 300px;
          z-index: 5;
        }

        .hero-image img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
        }



        .hero-text {
          max-width: 500px;
        }
        .hero-text h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .hero-text p {
          font-size: 1rem;
          color: #aaa;
        }
        .hero-image {
          flex-shrink: 0;
          max-width: 300px;
          height: auto;
        }

        .hero-image img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 2rem;
          border-radius: 20px;
          background: #151515;
          backdrop-filter: blur(12px);
          margin: 2rem;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          transition: background 0.3s ease;
        }


        }
        .sidebar-section {
          max-width: 400px;
        }
        .sidebar-section h3 {
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }
        .sidebar-section p {
          color: #aaa;
          font-size: 0.95rem;
        }
        .socials {
          display: flex;
          gap: 1rem;
          font-size: 1.2rem;
        }
        .socials a {
          color: #aaa;
          text-decoration: none;
        }
        .socials a:hover {
          color: #fff;
        }
        .down-arrow {
          margin-top: 3rem;
          text-align: center;
          font-size: 2rem;
        }
.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.stack-category {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  padding: 1rem 1.2rem;
  transition: background 0.3s, transform 0.3s;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.stack-category:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-4px);
}

.stack-category h4 {
  margin-bottom: 0.6rem;
  font-size: 1.1rem;
  color: #fff;
}

.stack-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.stack-category li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  color: #ccc;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.stack-category li:hover {
  color: #fff;
}

.stack-category img {
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: brightness(0.9);
  transition: filter 0.3s;
}

.stack-category li:hover img {
  filter: brightness(1.2);
}
.bottom-trio {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  padding: 3rem 2rem;
  flex-wrap: wrap;
}

.trio-box {
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  color: #fff;
}

.trio-box h3 {
  margin-bottom: 1rem;
}

.trio-box.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.trio-box form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.trio-box input,
.trio-box textarea {
  padding: 0.7rem;
  border-radius: 8px;
  border: none;
  background: #1e1e1e;
  color: #fff;
  font-size: 0.95rem;
}

.trio-box button {
  padding: 0.7rem;
  border-radius: 8px;
  border: none;
  background-color: #4D9EF7;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.logo-img {
  width: 48px;
  height: 48px;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  animation: ripple-effect 0.6s ease-out;
  transform: scale(1.1);
}

@keyframes ripple-effect {
  0% {
    box-shadow: 0 0 0 0 rgba(128, 128, 128, 0.4),
                0 0 0 0 rgba(128, 128, 128, 0.3);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(128, 128, 128, 0),
                0 0 0 20px rgba(128, 128, 128, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(128, 128, 128, 0),
                0 0 0 0 rgba(128, 128, 128, 0);
  }
}

.logo-img:hover {
  filter: brightness(1.2);
}

     @media (max-width: 768px) {
     video.bg-video {
       object-fit: contain;
       width: 100%;
       height: auto;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       min-height: 100vh;
       min-width: 100vw;
     }
      </style>
    </head>
    <body>
      <!-- 🔥 Video Background -->
      <video autoplay muted loop class="bg-video">
        <source src="/static/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <header>
        <div class="logo">
          <img src="/static/logo.png" alt="Nonso Kingsley Logo" class="logo-img" />
        </div>

       <nav>
         <a href="https://x.com/nonsking2215" target="_blank" title="Twitter (X)">
           <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="Twitter X" style="width:24px; height:24px;" />
         </a>
         <a href="https://linkedin.com/in/nonso-kingsley-46894a1b8" target="_blank" title="LinkedIn">
           <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" style="width:24px; height:24px;" />
         </a>
         <a href="https://github.com/KXNGSLEY" target="_blank" title="GitHub">
           <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" style="width:24px; height:24px;" />
         </a>
         <a href="https://t.me/KokGPT" target="_blank" title="Telegram">
           <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" alt="Telegram" style="width:24px; height:24px;" />
         </a>
       </nav>

      </header>

      <main class="hero">
       <div class="hero-text">
         <h1>I am <span style="color: #151515;">Nonso Kingsley,</span> Welcome to my space</h1>

         <div class="glass-tab">
           <p> <span style="color: #FFFFFF;">I build scalable, high-performance web and blockchain apps. I love dark UI, real-time systems, and automating workflows with style.</span></p>
         </div>
       </div>

        <div class="hero-image">
          <img src="/static/kingsley.png" alt="Nonso Profile Photo" />
        </div>

      </main>

      <div class="sidebar">
        <div class="sidebar-section">
          <h3>ABOUT ME</h3>
          <p>What can i say, i'm pretty resourceful , i solve problems really good, I am the type of person to deliver results....whatever the method may be.</p>
          <a href="#" style="color:#4D9EF7; text-decoration: none; display: inline-block; margin-top: 0.5rem;">LEARN MORE →</a>
        </div>
        <div class="sidebar-section">
          <h3>MY WORK</h3>
          <p>I have done work on various projects over the years, some of ehich you can check out on my github.</p>
           <a href="https://github.com/KXNGSLEY?tab=repositories" target="_blank" rel="noopener noreferrer" style="color:#4D9EF7; text-decoration: none; display: inline-block; margin-top: 0.5rem;">
             BROWSE PORTFOLIO →
           </a>

        </div>
        <div class="sidebar-section">
         <h3>MY STACK</h3>
         <div class="tech-stack">
           <div class="stack-category">
             <h4>Frontend</h4>
             <ul>
               <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /> Node.js</li>
               <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS" /> Tailwind CSS</li>
               <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /> HTML5</li>
             </ul>
           </div>
           <div class="stack-category">
             <h4>Backend</h4>
             <ul>
               <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /> Node.js</li>
               <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" /> Python</li>
               <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /> Java</li>
               <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" /> C++</li>
             </ul>
           </div>
           <div class="stack-category">
             <h4>Database</h4>
             <ul>
               <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" /> MySQL</li>
               <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" /> Firebase</li>
               <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /> MongoDB</li>
             </ul>
           </div>
           <div class="stack-category">
             <h4>AGI Copilot</h4>
             <ul>
               <li><img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT" /> ChatGPT</li>
             </ul>
           </div>
           <div class="stack-category">
             <h4>IDE</h4>
             <ul>
               <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" /> VS Code</li>
               <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxDoTXMkYU19iZk_4os4y1QTYf5R7mgWM6Q&s" alt="Replit" /> Replit</li>
             </ul>
           </div>
           <div class="stack-category">
             <h4>Repository</h4>
             <ul>
               <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" /> GitHub</li>
             </ul>
           </div>
           <div class="stack-category">
             <h4>Infrastructure / Hosting</h4>
             <ul>
               <li><img src="https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" alt="AWS" /> AWS</li>
               <li><img src="https://images.seeklogo.com/logo-png/33/2/google-cloud-logo-png_seeklogo-336116.png" alt="Google Cloud" /> Google Cloud</li>
             </ul>
           </div>
         </div>

        </div>
      </div>

<section class="bottom-trio">
  <!-- Left: Academic Background -->
  <div class="trio-box" style="background: #151515;">
    <h3>🎓 Education</h3>
    <img src="https://i0.wp.com/unizik.edu.ng/wp-content/uploads/2022/10/images-39.jpeg" alt="Nnamdi Azikiwe University" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
    <p><strong>B.Sc. Physics</strong></p>
    <p>Nnamdi Azikiwe University</p>
  </div>

  <!-- Middle: Contact Me -->
  <div class="trio-box glass">
    <h3>📧 Email Me</h3>
    <form onsubmit="window.location='mailto:nonsking2215@gmail.com'; return false;">
      <input type="text" placeholder="Your name" required>
      <input type="email" placeholder="Your email" required>
      <textarea placeholder="Message..." required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>

  <!-- Right: Activity Pie -->
  <div class="trio-box" style="background: #151515; text-align: center;">
    <h3>📊 My Activity</h3>
    <canvas id="activityChart" width="200" height="200"></canvas>
    <ul style="margin-top:1rem; font-size: 0.9rem; color: #ccc;">
    
    </ul>
  </div>
</section>


      <div class="down-arrow">⬇</div>
      <script>
        const ctx = document.getElementById('activityChart').getContext('2d');

        const gradient1 = ctx.createLinearGradient(0, 0, 200, 0);
        gradient1.addColorStop(0, '#4D9EF7');
        gradient1.addColorStop(1, '#1E88E5');

        const gradient2 = ctx.createLinearGradient(0, 0, 200, 0);
        gradient2.addColorStop(0, '#8E44AD');
        gradient2.addColorStop(1, '#5E35B1');

        const gradient3 = ctx.createLinearGradient(0, 0, 200, 0);
        gradient3.addColorStop(0, '#2ECC71');
        gradient3.addColorStop(1, '#27AE60');

        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Coding', 'Gaming', 'Touching Grass'],
            datasets: [{
              label: 'My Activity',
              data: [65, 34, 1],
              backgroundColor: [gradient1, gradient2, gradient3],
              borderWidth: 6,
              borderColor: '#111',
              hoverOffset: 16,
              borderRadius: 50,   // rounded edges
              spacing: 5          // spacing between pieces
            }]
          },
          options: {
            cutout: '70%',
            responsive: true,
            plugins: {
              legend: {
                display: true
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                  return context.label + ": " + context.raw + "%";

                  }
                }
              }
            },
            animation: {
              animateRotate: true,
              animateScale: true
            }
          }
        });
      </script>


    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`⚡ Portfolio running at http://localhost:${PORT}`));
