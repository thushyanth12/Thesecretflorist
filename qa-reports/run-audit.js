async (page) => {
  const TARGET_URLS = [
    { name: 'production', url: 'https://thesecretflorist.in' },
    { name: 'local', url: 'http://localhost:8080/index.html' }
  ];

  const BREAKPOINTS = [
    { name: '320px', width: 320, height: 568, orientation: 'portrait', label: '320px Portrait (iPhone SE 1st gen)' },
    { name: '320px_landscape', width: 568, height: 320, orientation: 'landscape', label: '320px Device Landscape (568x320)' },
    { name: '375px', width: 375, height: 667, orientation: 'portrait', label: '375px Portrait (iPhone SE 2/3 / iPhone 8)' },
    { name: '375px_landscape', width: 667, height: 375, orientation: 'landscape', label: '375px Device Landscape (667x375)' },
    { name: '414px', width: 414, height: 896, orientation: 'portrait', label: '414px Portrait (iPhone 11 / XR / Plus)' },
    { name: '414px_landscape', width: 896, height: 414, orientation: 'landscape', label: '414px Device Landscape (896x414)' },
    { name: '768px', width: 768, height: 1024, orientation: 'portrait', label: '768px Portrait (iPad / Tablet)' },
    { name: '768px_landscape', width: 1024, height: 768, orientation: 'landscape', label: '768px Landscape / 1024px Landscape (Tablet)' },
    { name: '1024px', width: 1024, height: 1366, orientation: 'portrait', label: '1024px Portrait (iPad Pro 12.9")' },
    { name: '1024px_landscape', width: 1366, height: 1024, orientation: 'landscape', label: '1024px Landscape (Desktop / iPad Pro Landscape)' },
  ];

  const results = {};

  for (const target of TARGET_URLS) {
    console.log(`Starting audit for ${target.name} (${target.url})...`);
    results[target.name] = {};

    await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    // allow extra time for fonts & initial styles
    await page.waitForTimeout(1500);

    for (const bp of BREAKPOINTS) {
      console.log(`Testing ${target.name} at ${bp.label} (${bp.width}x${bp.height})...`);
      await page.setViewportSize({ width: bp.width, height: bp.height });
      await page.waitForTimeout(800);

      const auditData = await page.evaluate((bpInfo) => {
        const issues = [];
        const winW = window.innerWidth;
        const winH = window.innerHeight;
        const docEl = document.documentElement;
        const body = document.body;

        // 1. Horizontal Scroll Check
        const htmlScrollW = docEl.scrollWidth;
        const bodyScrollW = body.scrollWidth;
        const hasHScroll = htmlScrollW > winW || bodyScrollW > winW;

        // Try actual scroll
        window.scrollTo(9999, 0);
        const actualScrollX = window.scrollX;
        window.scrollTo(0, 0);

        // Find elements that overflow window.innerWidth
        const allEls = Array.from(document.querySelectorAll('body *'));
        const overflowingElements = [];

        for (const el of allEls) {
          // Skip script, style, meta, etc.
          if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'PATH'].includes(el.tagName)) continue;
          
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;

          const rect = el.getBoundingClientRect();
          // Check if right edge exceeds window width by more than 1.5px
          if (rect.right > winW + 1.5 && rect.width > 0) {
            // Check if ancestor clips overflow
            let parent = el.parentElement;
            let clipped = false;
            while (parent && parent !== document.body) {
              const pStyle = window.getComputedStyle(parent);
              if (['hidden', 'clip', 'scroll', 'auto'].includes(pStyle.overflowX)) {
                clipped = true;
                break;
              }
              parent = parent.parentElement;
            }

            if (!clipped) {
              const tag = el.tagName.toLowerCase();
              const id = el.id ? `#${el.id}` : '';
              const cls = el.className && typeof el.className === 'string' ? `.${el.className.trim().split(/\s+/).slice(0, 3).join('.')}` : '';
              const selector = `${tag}${id}${cls}`;
              overflowingElements.push({
                selector,
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                overflowPx: Math.round(rect.right - winW),
                textSnippet: el.innerText ? el.innerText.slice(0, 40).replace(/\n/g, ' ') : ''
              });
            }
          }
        }

        // 2. Navigation Checks
        const nav = document.querySelector('nav') || document.querySelector('.navbar');
        const hamburger = document.querySelector('#hamburger-btn') || document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links') || document.querySelector('.nav-menu');
        const cartIcon = document.querySelector('.cart-icon');
        const searchBtn = document.querySelector('#navbar-search-btn');

        const navState = {
          hasNav: !!nav,
          navHeight: nav ? Math.round(nav.getBoundingClientRect().height) : 0,
          navHeightPctOfViewport: nav ? Math.round((nav.getBoundingClientRect().height / winH) * 100) : 0,
          hamburgerVisible: hamburger ? window.getComputedStyle(hamburger).display !== 'none' && window.getComputedStyle(hamburger).visibility !== 'hidden' : false,
          navLinksVisible: navLinks ? window.getComputedStyle(navLinks).display !== 'none' : false,
          cartIconVisible: cartIcon ? window.getComputedStyle(cartIcon).display !== 'none' : false,
          searchBtnVisible: searchBtn ? window.getComputedStyle(searchBtn).display !== 'none' : false
        };

        // 3. Touch Target Sizes Check (Interactive elements: buttons, links, search, cart, filter tabs)
        const smallTouchTargets = [];
        const interactiveEls = Array.from(document.querySelectorAll('button, a, input, select, .filter-btn, .category-card'));
        for (const el of interactiveEls) {
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) continue;
          // check if inside viewport vertically or visible
          if (rect.width < 32 || rect.height < 32) {
            const tag = el.tagName.toLowerCase();
            const id = el.id ? `#${el.id}` : '';
            const cls = el.className && typeof el.className === 'string' ? `.${el.className.trim().split(/\s+/).slice(0, 2).join('.')}` : '';
            smallTouchTargets.push({
              selector: `${tag}${id}${cls}`,
              width: Math.round(rect.width),
              height: Math.round(rect.height),
              text: el.innerText ? el.innerText.slice(0, 25).trim() : el.getAttribute('aria-label') || ''
            });
          }
        }

        // 4. Text Readability & Font Size Check
        const smallTextElements = [];
        const textNodes = Array.from(document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, button, label, input'));
        for (const el of textNodes) {
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) continue;

          const fontSize = parseFloat(style.fontSize);
          if (fontSize < 11 && el.innerText && el.innerText.trim().length > 0) {
            const tag = el.tagName.toLowerCase();
            const cls = el.className && typeof el.className === 'string' ? `.${el.className.trim().split(/\s+/).slice(0, 2).join('.')}` : '';
            smallTextElements.push({
              selector: `${tag}${cls}`,
              fontSize: `${fontSize}px`,
              text: el.innerText.slice(0, 30).trim()
            });
          }
        }

        // 5. Image Scaling Checks
        const imageIssues = [];
        const imgs = Array.from(document.querySelectorAll('img'));
        for (const img of imgs) {
          const style = window.getComputedStyle(img);
          if (style.display === 'none' || style.visibility === 'hidden') continue;
          const rect = img.getBoundingClientRect();
          if (rect.width > winW + 2) {
            imageIssues.push({
              src: img.src.split('/').pop(),
              width: Math.round(rect.width),
              viewportWidth: winW,
              issue: 'Image width exceeds viewport'
            });
          }
        }

        // 6. Layout & Grid Checks
        const productGrid = document.querySelector('.products-grid') || document.querySelector('.flower-grid');
        let productCols = null;
        let cardWidth = null;
        if (productGrid) {
          const gridStyle = window.getComputedStyle(productGrid);
          productCols = gridStyle.gridTemplateColumns;
          const firstCard = productGrid.querySelector('.product-card');
          if (firstCard) {
            cardWidth = Math.round(firstCard.getBoundingClientRect().width);
          }
        }

        // 7. Announcement Bar Check
        const announcementBar = document.querySelector('.announcement-bar');
        let announcementStats = null;
        if (announcementBar) {
          const rect = announcementBar.getBoundingClientRect();
          announcementStats = {
            height: Math.round(rect.height),
            scrollWidth: announcementBar.scrollWidth,
            clientWidth: announcementBar.clientWidth,
            isOverflowing: announcementBar.scrollWidth > announcementBar.clientWidth
          };
        }

        return {
          viewport: { width: winW, height: winH },
          hasHScroll,
          htmlScrollW,
          bodyScrollW,
          actualScrollX,
          overflowingCount: overflowingElements.length,
          topOverflowElements: overflowingElements.slice(0, 8),
          navState,
          smallTouchTargetsCount: smallTouchTargets.length,
          smallTouchTargetsSample: smallTouchTargets.slice(0, 6),
          smallTextCount: smallTextElements.length,
          smallTextSample: smallTextElements.slice(0, 6),
          imageIssues,
          productCols,
          cardWidth,
          announcementStats
        };
      }, bp);

      // Save hero / page top screenshot
      const baseFilename = `${target.name}_${bp.width}x${bp.height}_${bp.orientation}`;
      const heroPath = `d:/MY CODES/patrick/Thesecretflorist/qa-reports/screenshots/${baseFilename}_hero.png`;
      await page.screenshot({ path: heroPath, fullPage: false });

      // Test mobile navigation menu interaction if hamburger is visible
      let navMenuTest = { tested: false };
      if (auditData.navState.hamburgerVisible) {
        try {
          const hamburgerBtn = page.locator('#hamburger-btn, .hamburger').first();
          await hamburgerBtn.click();
          await page.waitForTimeout(500);

          const menuState = await page.evaluate(() => {
            const navLinks = document.querySelector('.nav-links') || document.querySelector('.nav-menu');
            if (!navLinks) return { isOpen: false };
            const style = window.getComputedStyle(navLinks);
            const rect = navLinks.getBoundingClientRect();
            return {
              isOpen: style.display !== 'none' && style.visibility !== 'hidden' && rect.height > 50,
              display: style.display,
              rect: { width: Math.round(rect.width), height: Math.round(rect.height), top: Math.round(rect.top), left: Math.round(rect.left) },
              linkCount: navLinks.querySelectorAll('a').length
            };
          });

          // Take screenshot of opened nav menu
          const menuPath = `d:/MY CODES/patrick/Thesecretflorist/qa-reports/screenshots/${baseFilename}_menu_open.png`;
          await page.screenshot({ path: menuPath, fullPage: false });

          // Close menu
          await hamburgerBtn.click();
          await page.waitForTimeout(400);

          navMenuTest = {
            tested: true,
            openedSuccessfully: menuState.isOpen,
            menuDetails: menuState,
            screenshot: menuPath
          };
        } catch (e) {
          navMenuTest = { tested: true, error: e.message };
        }
      }

      // Scroll to catalog and take screenshot of product grid
      try {
        await page.evaluate(() => {
          const cat = document.querySelector('#collection') || document.querySelector('.products-section') || document.querySelector('.category-section');
          if (cat) cat.scrollIntoView({ behavior: 'instant', block: 'start' });
        });
        await page.waitForTimeout(400);
        const catalogPath = `d:/MY CODES/patrick/Thesecretflorist/qa-reports/screenshots/${baseFilename}_catalog.png`;
        await page.screenshot({ path: catalogPath, fullPage: false });
        // scroll back to top
        await page.evaluate(() => window.scrollTo(0, 0));
      } catch (e) {
        console.error('Catalog scroll error:', e);
      }

      results[target.name][`${bp.width}x${bp.height}_${bp.orientation}`] = {
        breakpoint: bp,
        auditData,
        navMenuTest,
        heroScreenshot: heroPath
      };
    }
  }

  return results;
}
