const fs = require('fs');
const path = 'c:/AL HAZMI/index-ar.html';
let content = fs.readFileSync(path, 'utf8');

// Insert Our Partners Section
const partnersHTML = `    </div>
  </section>

  <!-- Our Partners Section -->
  <section class="partners-section" id="partners" dir="rtl" style="background-color: #ffffff; padding: 60px 0 80px;">
    <div class="container">
      <div data-aos="fade-up" style="display: flex; align-items: center; gap: 15px; color: #ccaa00; margin-bottom: 50px;">
        <i class="fas fa-puzzle-piece" style="font-size: 3.5rem;"></i>
        <div style="line-height: 1;">
          <span style="font-size: 2.6rem; font-weight: 300; font-family: 'Poppins', sans-serif; letter-spacing: -0.5px;">شركاؤنا</span>
        </div>
      </div>
      
      <div class="text-center" data-aos="zoom-in" data-aos-delay="100">
        <img src="assets/images/image.png" alt="Our Partners" class="img-fluid" style="width: 100%; object-fit: contain;">
      </div>
    </div>
  </section>

  <!-- Global Presence Section -->`;

content = content.replace('    </div>\r\n  </section>\r\n\r\n  <!-- Global Presence Section -->', partnersHTML);
content = content.replace('    </div>\n  </section>\n\n  <!-- Global Presence Section -->', partnersHTML);

// Replace Client Logos
const names = ['STARMIX', 'POMATI', 'Flamic', 'TAGLIAVINI', 'TRIMA', 'RM+FORNI'];
let index = 0;
content = content.replace(/https:\/\/placehold\.co\/180x80\/fff9e6\/ccaa00\?text=Client\+Logo/g, () => {
    const name = names[index % names.length];
    index++;
    return 'https://placehold.co/180x80/fff9e6/ccaa00?text=' + name;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated index-ar.html with correct utf8 encoding');
