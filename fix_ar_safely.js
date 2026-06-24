const fs = require('fs');
const filePath = 'c:/AL HAZMI/index-ar.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix header logo
content = content.replace(
    '<img src="assets/images/AlHazmi Final Logo (4) (1)_page-0001.jpg" alt="Al Hazmi International Logo" height="50">',
    '<img src="assets/images/logo.png" alt="Al Hazmi International Logo" height="75">'
);

// 2. Fix footer logo
content = content.replace(
    '<img src="assets/images/AlHazmi Final Logo (4) (1)_page-0001.jpg" alt="Al Hazmi International Logo" height="60" class="mb-3">',
    '<img src="assets/images/logo.png" alt="Al Hazmi International Logo" height="75" class="mb-3">'
);

// 3. Fix the marquee section to match the English one (two rows)
const targetMarquee = `      <!-- Top Row (Scrolls Left) -->
      <div class="marquee-wrapper" data-aos="fade-up" data-aos-delay="100">
        <div class="marquee-track">
          <!-- Full Logo Strip duplicated for seamless scroll -->
          <div class="px-4"><img src="assets/images/image.png" alt="Client Logos" style="height: 100px; width: auto; object-fit: contain;"></div>
          <div class="px-4"><img src="assets/images/image.png" alt="Client Logos" style="height: 100px; width: auto; object-fit: contain;"></div>
          <div class="px-4"><img src="assets/images/image.png" alt="Client Logos" style="height: 100px; width: auto; object-fit: contain;"></div>
        </div>
      </div>`;

const newMarquee = `      <!-- Top Row (Scrolls Left) -->
      <div class="marquee-wrapper" data-aos="fade-up" data-aos-delay="100">
        <div class="marquee-track">
          <!-- Items -->
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=STARMIX" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=POMATI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=Flamic" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TAGLIAVINI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TRIMA" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=RM+FORNI" alt="Partner Logo"></div>
          
          <!-- Duplicate -->
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=STARMIX" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=POMATI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=Flamic" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TAGLIAVINI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TRIMA" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=RM+FORNI" alt="Partner Logo"></div>
        </div>
      </div>

      <!-- Bottom Row (Scrolls Right) -->
      <div class="marquee-wrapper" data-aos="fade-up" data-aos-delay="200">
        <div class="marquee-track reverse">
          <!-- Items -->
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TRIMA" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=RM+FORNI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=STARMIX" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=POMATI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=Flamic" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TAGLIAVINI" alt="Partner Logo"></div>
          
          <!-- Duplicate -->
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TRIMA" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=RM+FORNI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=STARMIX" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=POMATI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=Flamic" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TAGLIAVINI" alt="Partner Logo"></div>
        </div>
      </div>`;

content = content.replace(targetMarquee, newMarquee);

fs.writeFileSync(filePath, content, 'utf8');
