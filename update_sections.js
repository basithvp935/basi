const fs = require('fs');

function updateFiles(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const isArabic = filePath.includes('-ar');
    const clientsTitle = isArabic ? 'عملائنا' : 'Our Clients';
    const partnersTitle = isArabic ? 'شركاؤنا' : 'Our Partners';
    const disclaimer = isArabic ? '*جميع العلامات التجارية وعلامات الخدمة وأسماء الشركات هي ملك لأصحابها المعنيين' : '*All trademarks, service marks and company names are the property of their respective owners';
    const dirAttr = isArabic ? ' dir="rtl"' : '';

    const newHTML = `  <!-- Our Clients Section -->
  <section class="clients-section pb-0" id="clients"${dirAttr} style="background-color: #FDF9F1; padding-top: 60px;">
    <div class="container">
      <h2 class="clients-title" data-aos="fade-up">${clientsTitle}</h2>
      
      <!-- Top Row (Scrolls Left) -->
      <div class="marquee-wrapper" data-aos="fade-up" data-aos-delay="100">
        <div class="marquee-track">
          <!-- Items -->
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
          
          <!-- Duplicate -->
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
          <div class="client-card" style="padding: 0; background: transparent; box-shadow: none;"><img src="assets/images/chairman.png" alt="Client Logo" style="height: 120px; width: auto; object-fit: contain;"></div>
        </div>
      </div>
      
      <p class="clients-disclaimer mb-0 pb-0" data-aos="fade-in" data-aos-delay="300">${disclaimer}</p>
    </div>
  </section>

  <!-- Our Partners Section -->
  <section class="clients-section pb-0"${dirAttr} style="background-color: #FDF9F1; padding-top: 60px;">
    <div class="container">
      <h2 class="clients-title" data-aos="fade-up">${partnersTitle}</h2>
      
      <!-- Top Row (Scrolls Left) -->
      <div class="marquee-wrapper" data-aos="fade-up" data-aos-delay="100">
        <div class="marquee-track">
          <!-- Items -->
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=STARMIX" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=POMATI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=Flamic" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TAGLIAVINI" alt="Partner Logo"></div>
          <div class=\"client-card\"><img src=\"https://placehold.co/180x80/fff9e6/ccaa00?text=TRIMA\" alt=\"Partner Logo\"></div>
          <div class=\"client-card\"><img src=\"https://placehold.co/180x80/fff9e6/ccaa00?text=RM+FORNI\" alt=\"Partner Logo\"></div>
          
          <!-- Duplicate -->
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=STARMIX" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=POMATI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=Flamic" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TAGLIAVINI" alt="Partner Logo"></div>
          <div class=\"client-card\"><img src=\"https://placehold.co/180x80/fff9e6/ccaa00?text=TRIMA\" alt=\"Partner Logo\"></div>
          <div class=\"client-card\"><img src=\"https://placehold.co/180x80/fff9e6/ccaa00?text=RM+FORNI\" alt=\"Partner Logo\"></div>
        </div>
      </div>

      <!-- Bottom Row (Scrolls Right) -->
      <div class="marquee-wrapper" data-aos="fade-up" data-aos-delay="200">
        <div class="marquee-track reverse">
          <!-- Items -->
          <div class=\"client-card\"><img src=\"https://placehold.co/180x80/fff9e6/ccaa00?text=TRIMA\" alt=\"Partner Logo\"></div>
          <div class=\"client-card\"><img src=\"https://placehold.co/180x80/fff9e6/ccaa00?text=RM+FORNI\" alt=\"Partner Logo\"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=STARMIX" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=POMATI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=Flamic" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TAGLIAVINI" alt="Partner Logo"></div>
          
          <!-- Duplicate -->
          <div class=\"client-card\"><img src=\"https://placehold.co/180x80/fff9e6/ccaa00?text=TRIMA\" alt=\"Partner Logo\"></div>
          <div class=\"client-card\"><img src=\"https://placehold.co/180x80/fff9e6/ccaa00?text=RM+FORNI\" alt=\"Partner Logo\"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=STARMIX" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=POMATI" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=Flamic" alt="Partner Logo"></div>
          <div class="client-card"><img src="https://placehold.co/180x80/fff9e6/ccaa00?text=TAGLIAVINI" alt="Partner Logo"></div>
        </div>
      </div>
    </div>
  </section>`;

    const regex = /<!-- Our Clients Section -->[\s\S]*?<!-- Our Timeline Section -->/;
    content = content.replace(regex, newHTML + '\n\n  <!-- Our Timeline Section -->');
    
    fs.writeFileSync(filePath, content, 'utf8');
}

updateFiles('c:/AL HAZMI/index.html');
updateFiles('c:/AL HAZMI/index-ar.html');
console.log('Done!');
