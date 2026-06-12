const assetBase = document.body.dataset.page === "shop" ? "../" : "";
const shopPath = document.body.dataset.page === "shop" ? "./" : "shop/";
const homePath = document.body.dataset.page === "shop" ? "../" : "";

const products = [
  {
    id: "cozy-rosy",
    title: "Cozy Rosy",
    description: "Peaceful pages for dreamy days, with soft outdoor scenes and gentle Kooki charm.",
    price: "$9.99",
    badge: "New",
    image: "assets/Book Covers/Cozy Rosy/cozy-rosy-front cover.JPG",
    alt: "Cozy Rosy coloring book cover with a girl resting on a blanket outdoors",
    previews: [
      { image: "assets/Book Covers/Cozy Rosy/cozy-rosy-back cover.JPG", alt: "Cozy Rosy back cover with book details" },
    ],
    flipImages: [
      "assets/Book Covers/Cozy Rosy/3.JPG",
      "assets/Book Covers/Cozy Rosy/4.JPG",
      "assets/Book Covers/Cozy Rosy/13.JPG",
    ],
    sections: ["new", "best", "physical"],
    collection: "Cute & Cozy",
    format: "Paperback",
    purchaseLinks: {
      amazon: "https://mybook.to/CozyRosy",
      etsy: "https://www.etsy.com/listing/4306234775/cozyrosy-coloring-book-cute-printable?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_1&crt=1&dd=1&logging_key=230ff0bbbbad24a038c9ae80026fd587e42bde31%3A4306234775",
    },
    keywords: ["cozy", "rosy", "dreamy", "peaceful", "self care", "cute", "physical"],
  },
  {
    id: "cutie-pies",
    title: "Cutie Pies",
    description: "Soft and sweet woodland coloring pages with friendly animals, bold lines, and storybook scenes.",
    price: "$8.99",
    badge: "Best Seller",
    image: "assets/Book Covers/Cutie Pies/cutie-pies-front cover .JPG",
    alt: "Cutie Pies coloring book cover with a fox and a tiny character near a tree",
    previews: [
      { image: "assets/Book Covers/Cutie Pies/cutie-pies-back cover.jpg.JPG", alt: "Cutie Pies back cover with book details" },
      { image: "assets/real/previews/cutie-pies-sample-grid.jpg", alt: "Cutie Pies sample page grid" },
    ],
    flipImages: [
      "assets/Book Covers/Cutie Pies/15.JPG",
      "assets/Book Covers/Cutie Pies/16.JPG",
      "assets/Book Covers/Cutie Pies/17.JPG",
    ],
    sections: ["new", "best", "physical"],
    collection: "Soft & Sweet",
    format: "Paperback",
    purchaseLinks: {
      amazon: "https://mybook.to/CutePies",
      etsy: "",
    },
    keywords: ["cutie", "pies", "soft", "sweet", "woodland", "animals", "physical"],
  },
  {
    id: "pawtraits-of-time",
    title: "Pawtraits of Time",
    description: "A pet-inspired coloring book with gentle portrait moments, cozy details, and sweet character charm.",
    price: "See listing",
    badge: "New",
    image: "assets/Book Covers/Pawtraits of Time/Pawtraits-of-time-front cover.JPG",
    alt: "Pawtraits of Time coloring book front cover",
    previews: [
      { image: "assets/Book Covers/Pawtraits of Time/Pawtraits-of-time-back cover.JPG", alt: "Pawtraits of Time back cover with book details" },
    ],
    flipImages: [
      "assets/Book Covers/Pawtraits of Time/1.JPG",
      "assets/Book Covers/Pawtraits of Time/__طرح۱۰_.jpg",
      "assets/Book Covers/Pawtraits of Time/صفحه_۱۳_لباس_سنتی_چین (1).jpg",
    ],
    sections: ["new", "physical"],
    collection: "Pets & Portraits",
    format: "Paperback",
    purchaseLinks: {
      amazon: "https://mybook.to/Pawtraits-of-Time",
      etsy: "",
    },
    keywords: ["pets", "portrait", "pawtraits", "animals", "physical"],
  },
  {
    id: "everyday-joy",
    title: "Everyday Joy",
    description: "Cute, simple coloring pages made for small happy pauses, calm routines, and easy creative wins.",
    price: "See listing",
    badge: "New",
    image: "assets/Book Covers/Everyday Joy/Everday-joy- front cover.JPG",
    alt: "Everyday Joy coloring book front cover",
    previews: [
      { image: "assets/Book Covers/Everyday Joy/Everday-joy-back cover.JPG", alt: "Everyday Joy back cover with book details" },
    ],
    flipImages: [
      "assets/Book Covers/Everyday Joy/010.jpg",
      "assets/Book Covers/Everyday Joy/024.jpg",
      "assets/Book Covers/Everyday Joy/025.jpg",
    ],
    sections: ["new", "digital", "physical"],
    collection: "Cute & Cozy",
    format: "Paperback / PDF",
    purchaseLinks: {
      amazon: "https://mybook.to/EverydayJoy",
      etsy: "https://www.etsy.com/listing/4309165976/everyday-joy-coloring-book-cute-simple?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_2&dd=1&logging_key=1df2fdbb729d74532ac7783149d19deb48f0ba27%3A4309165976",
    },
    keywords: ["everyday", "joy", "cute", "cozy", "simple", "digital", "physical"],
  },
  {
    id: "soft-days",
    title: "Soft Days",
    description: "Ten cozy printable pages with gentle scenes, soft details, and an easygoing coloring rhythm.",
    price: "See listing",
    badge: "Digital",
    image: "assets/Book Covers/Soft Days/Soft-Days-Front Cover.png",
    alt: "Soft Days coloring book front cover",
    previews: [
      { image: "assets/Book Covers/Soft Days/Soft-Days-Back Cover.png", alt: "Soft Days back cover with book details" },
    ],
    flipImages: [
      "assets/Book Covers/Soft Days/05 (1).jpg",
      "assets/Book Covers/Soft Days/011-1.jpg",
      "assets/Book Covers/Soft Days/012-1.jpg",
    ],
    sections: ["new", "digital"],
    collection: "Cute & Cozy",
    format: "PDF Download",
    purchaseLinks: {
      amazon: "",
      etsy: "https://www.etsy.com/listing/4354721878/soft-days-coloring-book-10-cozy-pages?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_3&dd=1&logging_key=f4e871e1952502a64f31e98b7ebd793f059471d2%3A4354721878",
    },
    keywords: ["soft", "days", "cozy", "printable", "digital", "pdf"],
  },
  {
    id: "relaxed-lines",
    title: "Relaxed Lines",
    description: "Bold and easy stress-relief pages with cozy scenes designed for low-pressure coloring.",
    price: "$9.99",
    badge: "Best Seller",
    image: "assets/Book Covers/Relaxed Lines/Relaxed-lines- front cover.JPG",
    alt: "Relaxed Lines coloring book cover with a treehouse and Kooki logo",
    previews: [
      { image: "assets/Book Covers/Relaxed Lines/Relaxed-lines- back cover.JPG", alt: "Relaxed Lines back cover with book details" },
    ],
    flipImages: [
      "assets/Book Covers/Relaxed Lines/14.JPG",
      "assets/Book Covers/Relaxed Lines/15.JPG",
      "assets/Book Covers/Relaxed Lines/16.JPG",
    ],
    sections: ["best", "physical"],
    collection: "Bold & Easy",
    format: "Paperback",
    purchaseLinks: {
      amazon: "https://mybook.to/RelaxedLines",
      etsy: "https://www.etsy.com/listing/4307531895/relaxed-line-coloring-book-bold-easy-art?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_5&dd=1&logging_key=465df492f386166ffbf4420901659125f3cb5cad%3A4307531895",
    },
    keywords: ["relaxed", "lines", "bold", "easy", "stress relief", "cozy", "physical"],
  },
  {
    id: "pattern-party",
    title: "Pattern Party",
    description: "Randomly repeating random repeats, cheerful panels, and playful pattern prompts.",
    price: "$9.99",
    badge: "Best Seller",
    image: "assets/Book Covers/Pattern Party/pattern-party-front cover.JPG",
    alt: "Pattern Party coloring book cover with bees and colorful pattern panels",
    previews: [
      { image: "assets/Book Covers/Pattern Party/pattern-party-back cover.JPG", alt: "Pattern Party back cover with book details" },
      { image: "assets/real/previews/pattern-party-sample-grid.jpg", alt: "Pattern Party sample spread with puzzles and repeating patterns" },
      { image: "assets/real/gallery/pattern-party-four-panels.jpg", alt: "Four colored Pattern Party panels" },
    ],
    flipImages: [
      "assets/Book Covers/Pattern Party/6.JPG",
      "assets/Book Covers/Pattern Party/8.JPG",
      "assets/Book Covers/Pattern Party/9.JPG",
    ],
    sections: ["best", "physical"],
    collection: "Pattern Play",
    format: "Paperback",
    purchaseLinks: {
      amazon: "https://mybook.to/Pattern-Party",
      etsy: "https://www.etsy.com/listing/4307075918/pattern-party-printable-pattern-coloring?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_4&dd=1&logging_key=4f978d2e424aec3419bcd605f53c1a895ba79b53%3A4307075918",
    },
    keywords: ["pattern", "party", "repeats", "playful", "physical"],
  },
  {
    id: "the-nibnubs",
    title: "The NibNubs",
    description: "One bizarre family, too silly to scare, with goofy creatures and cozy adventure pages.",
    price: "$9.99",
    badge: "New",
    image: "assets/Book Covers/The NibNubs/The-NibNubs-Front cover.png",
    alt: "The NibNubs coloring book front cover with a silly character peeking from a train",
    previews: [
      { image: "assets/Book Covers/The NibNubs/The-NibNubs- Back cover.png", alt: "The NibNubs back cover with book details" },
      { image: "assets/real/previews/nibnubs-seahorse-page.jpg", alt: "Black and white Nibnubs seahorse coloring page" },
      { image: "assets/real/gallery/nibnubs-fish-finished.jpg", alt: "Finished Nibnubs fish coloring page" },
    ],
    flipImages: [
      "assets/Book Covers/The NibNubs/IMG_7251.JPG",
      "assets/Book Covers/The NibNubs/IMG_7252.JPG",
      "assets/Book Covers/The NibNubs/IMG_7257.JPG",
    ],
    sections: ["new", "physical"],
    collection: "Kids",
    format: "Paperback",
    purchaseLinks: {
      amazon: "https://mybook.to/Nib-Nubs",
      etsy: "",
    },
    keywords: ["nibnubs", "kids", "silly", "cozy", "physical"],
  },
  {
    id: "the-boo-crew",
    title: "The Boo Crew",
    description: "A coloring book of tricks, treats, and tiny frights with ghosts, pumpkins, and playful Halloween scenes.",
    price: "$9.99",
    badge: "New",
    image: "assets/Book Covers/The Boo Crew/The-Boo-Crew-Front cover.png",
    alt: "The Boo Crew coloring book front cover with a ghost and Halloween characters",
    previews: [
      { image: "assets/Book Covers/The Boo Crew/The-Boo-Crew-Back cover.png", alt: "The Boo Crew back cover with book details" },
      { image: "assets/real/gallery/boo-crew-picnic-finished.jpg", alt: "Finished Boo Crew ghost picnic coloring page" },
      { image: "assets/real/gallery/boo-crew-pumpkin-finished.jpg", alt: "Finished Boo Crew characters inside a pumpkin" },
    ],
    flipImages: [
      "assets/Book Covers/The Boo Crew/IMG_7611.JPG",
      "assets/Book Covers/The Boo Crew/IMG_7612.JPG",
      "assets/Book Covers/The Boo Crew/IMG_7617.JPG",
    ],
    sections: ["new", "digital", "physical"],
    collection: "Spooky Cute",
    format: "Paperback",
    purchaseLinks: {
      amazon: "https://mybook.to/Boo-Crew",
      etsy: "",
    },
    keywords: ["boo", "crew", "halloween", "spooky", "seasonal", "ghost", "pumpkin"],
  },
  {
    id: "emmas-christmas",
    title: "Emma's Christmas",
    description: "A festive Christmas coloring book with cozy seasonal pages, cheerful details, and gentle holiday magic.",
    price: "See listing",
    badge: "Seasonal",
    image: "assets/Book Covers/Emma's Christmas/Emma's-Christmas-Front Cover.png",
    alt: "Emma's Christmas coloring book front cover",
    previews: [
      { image: "assets/Book Covers/Emma's Christmas/Emma's-Christmas-Back Cover.png", alt: "Emma's Christmas back cover with book details" },
    ],
    flipImages: [
      "assets/Book Covers/Emma's Christmas/p-14.jpg",
      "assets/Book Covers/Emma's Christmas/p-15.jpg",
      "assets/Book Covers/Emma's Christmas/p-17.jpg",
    ],
    sections: ["new", "physical"],
    collection: "Seasonal",
    format: "Paperback",
    purchaseLinks: {
      amazon: "https://mybook.to/Emma-Christmas",
      etsy: "",
    },
    keywords: ["emma", "christmas", "holiday", "seasonal", "winter", "physical"],
  },
  {
    id: "holiday-minis",
    title: "Holiday Minis",
    description: "Festive printable-style pages with cheerful winter scenes, gifts, and cozy seasonal details.",
    price: "$5.99",
    badge: "Digital",
    image: "assets/real/covers/holiday-coloring-page.jpg",
    alt: "Colored holiday Kooki page with a child, a dog, gifts, and an elf",
    previews: [
      { image: "assets/real/previews/holiday-half-colored-page.jpg", alt: "Half-colored holiday sample page with tree, gifts, and fireplace" },
    ],
    sections: ["new", "digital"],
    collection: "Seasonal",
    format: "PDF Download",
    keywords: ["holiday", "christmas", "seasonal", "winter", "digital", "pdf"],
  },
  {
    id: "bonus-page-pack",
    title: "Free Bonus Page Pack",
    description: "A printable sample page with cute poolside characters so new colorists can try Kooki right away.",
    price: "$0",
    badge: "Free",
    image: "assets/real/covers/free-bonus-page.jpg",
    alt: "Free bonus coloring page with cute characters at a swimming pool",
    previews: [
      { image: "assets/real/covers/free-bonus-page.jpg", alt: "Printable free bonus coloring page" },
    ],
    sections: ["digital"],
    collection: "Free Pages",
    format: "PDF Download",
    keywords: ["free", "bonus", "sample", "printable", "download", "digital"],
  },
  {
    id: "cutie-pies-sample-pack",
    title: "Cutie Pies Sample Pack",
    description: "Printable black-and-white pages from Cutie Pies, ready for pencils, markers, or weekend coloring time.",
    price: "$4.99",
    badge: "Digital",
    image: "assets/real/previews/cutie-pies-flower-page.jpg",
    alt: "Black and white Cutie Pies flower coloring page",
    previews: [
      { image: "assets/real/previews/cutie-pies-kite-page.jpg", alt: "Cutie Pies kite coloring page" },
      { image: "assets/real/previews/cutie-pies-firefly-page.jpg", alt: "Cutie Pies firefly coloring page" },
    ],
    sections: ["digital"],
    collection: "Free Pages",
    format: "PDF Download",
    keywords: ["cutie", "pies", "sample", "printable", "digital", "download"],
  },
  {
    id: "monster-coloring-pages",
    title: "Monster Coloring Pages",
    description: "Colorful monster page inspiration with cozy winter blues and playful pink party energy.",
    price: "$4.99",
    salePrice: "$2.99",
    badge: "Digital",
    image: "assets/real/gallery/snowy-monsters-finished.jpg",
    alt: "Finished blue monster coloring page with snow outside a window",
    previews: [
      { image: "assets/real/gallery/pink-monster-finished.jpg", alt: "Finished pink monster coloring page with balloons" },
    ],
    sections: ["digital", "best"],
    collection: "Spooky Cute",
    format: "PDF Download",
    keywords: ["monster", "winter", "pink", "party", "digital", "download"],
  },
];

const featuredProductIds = ["cozy-rosy", "cutie-pies", "relaxed-lines", "pattern-party", "the-boo-crew", "soft-days"];
const currentState = {
  query: "",
  filter: "all",
  sort: "newest",
};

const searchInput = document.querySelector("#siteSearch");
const searchForm = document.querySelector("[data-search-form]");
const searchStatus = document.querySelector("#searchStatus");
const productDialog = document.querySelector("#productDialog");
const dialogContent = document.querySelector(".dialog-content");
const shopGrid = document.querySelector('[data-products="shop"]');
const featuredGrid = document.querySelector('[data-products="featured"]');
const emptyState = document.querySelector("[data-empty-state]");
const sortSelect = document.querySelector("#sortSelect");

function iconPath(path) {
  return `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="${path}"></path></svg>`;
}

function externalLinkIcon() {
  return iconPath("M14 4h6v6M20 4l-9 9M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5");
}

function assetPath(path) {
  if (!path || /^https?:|^mailto:|^#/.test(path)) {
    return path;
  }
  return `${assetBase}${path}`;
}

function productPrice(product) {
  const source = product.salePrice || product.price || "";
  const parsed = Number(String(source).replace(/[^0-9.]/g, ""));
  if (Number.isFinite(parsed)) {
    return parsed;
  }
  return 9999;
}

function isFreeProduct(product) {
  return product.badge === "Free" || product.price === "$0" || product.collection === "Free Pages";
}

function getProductType(product) {
  if (isFreeProduct(product)) return "Free Download";
  if (product.sections.includes("physical") && product.sections.includes("digital")) return "Coloring Book + Digital";
  if (product.sections.includes("physical")) return "Coloring Book";
  if (product.sections.includes("digital")) return "Digital Download";
  return product.format || "Coloring Book";
}

function productMatchesFilter(product, filter) {
  if (filter === "all") return true;
  if (filter === "coloring") return product.sections.includes("physical");
  if (filter === "digital") return product.sections.includes("digital") && !isFreeProduct(product);
  if (filter === "free") return isFreeProduct(product);
  return true;
}

function searchIndex(product) {
  return [
    product.title,
    product.description,
    product.badge,
    product.collection,
    product.format,
    getProductType(product),
    ...(product.sections || []),
    ...(product.keywords || []),
  ]
    .join(" ")
    .toLowerCase();
}

function productMatchesSearch(product, query) {
  return !query || searchIndex(product).includes(query.trim().toLowerCase());
}

function sortedProducts(items, sort) {
  const ordered = [...items];
  const sorters = {
    newest: (a, b) => products.indexOf(a) - products.indexOf(b),
    az: (a, b) => a.title.localeCompare(b.title),
    za: (a, b) => b.title.localeCompare(a.title),
    "price-low": (a, b) => productPrice(a) - productPrice(b),
    "price-high": (a, b) => productPrice(b) - productPrice(a),
    rating: () => 0,
    popularity: () => 0,
  };
  return ordered.sort(sorters[sort] || sorters.newest);
}

function createPurchaseLinks(product, variant = "card") {
  if (isFreeProduct(product)) {
    return `
      <div class="purchase-links purchase-links-${variant}">
        <a class="button purchase-link purchase-link-free" href="${homePath}#newsletter">Free Download</a>
      </div>
    `;
  }

  const marketplaces = [
    { key: "amazon", label: "Amazon", action: "View on Amazon" },
    { key: "etsy", label: "Etsy", action: "View on Etsy" },
  ];
  const links = marketplaces.filter((marketplace) => product.purchaseLinks?.[marketplace.key]);

  if (!links.length) {
    return `
      <div class="purchase-links purchase-links-${variant}">
        <a class="button purchase-link purchase-link-waitlist" href="${homePath}#newsletter">Get Updates</a>
      </div>
    `;
  }

  return `
    <div class="purchase-links purchase-links-${variant}" aria-label="Purchase ${product.title}">
      ${links
        .map((marketplace) => `
          <a
            class="button purchase-link purchase-link-${marketplace.key}"
            href="${product.purchaseLinks[marketplace.key]}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${marketplace.action} for ${product.title} (opens in a new tab)"
          >
            <span>${marketplace.action}</span>
            ${externalLinkIcon()}
          </a>
        `)
        .join("")}
    </div>
  `;
}

function createFlipPages(product) {
  const pages = product.flipImages?.slice(0, 3) || [];
  if (!pages.length) return "";
  return `
    <div class="flip-pages" aria-hidden="true">
      ${pages
        .map((image, index) => `
          <img class="flip-page flip-page-${index + 1}" src="${assetPath(image)}" alt="" loading="lazy">
        `)
        .join("")}
    </div>
  `;
}

function createProductCard(product) {
  const card = document.createElement("article");
  const imageStyle = product.imagePosition ? ` style="object-position: ${product.imagePosition};"` : "";
  card.className = "product-card";
  card.dataset.productId = product.id;
  card.tabIndex = 0;
  card.setAttribute("aria-label", `View ${product.title} details`);
  card.innerHTML = `
    <div class="product-media">
      <div class="book-flip">
        <img class="product-cover" src="${assetPath(product.image)}" alt="${product.alt}" loading="lazy"${imageStyle}>
        ${createFlipPages(product)}
      </div>
    </div>
    <span class="badge">${product.badge}</span>
    <div class="product-body">
      <p class="product-type">${getProductType(product)}</p>
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <div class="price-row">
        ${
          product.salePrice
            ? `<span class="sale-price">${product.salePrice}</span><span class="old-price">${product.price}</span>`
            : `<span class="price">${product.price}</span>`
        }
      </div>
      ${createPurchaseLinks(product)}
    </div>
  `;
  return card;
}

function renderFeaturedProducts() {
  if (!featuredGrid) return;
  featuredGrid.replaceChildren();
  featuredProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean)
    .forEach((product) => featuredGrid.appendChild(createProductCard(product)));
}

function renderShopProducts() {
  if (!shopGrid) return;
  const visibleProducts = sortedProducts(
    products.filter((product) => productMatchesFilter(product, currentState.filter) && productMatchesSearch(product, currentState.query)),
    currentState.sort
  );

  shopGrid.replaceChildren();
  visibleProducts.forEach((product) => shopGrid.appendChild(createProductCard(product)));

  if (emptyState) {
    emptyState.style.display = visibleProducts.length ? "none" : "block";
  }

  if (searchStatus) {
    const filterLabel = document.querySelector(`[data-filter="${currentState.filter}"]`)?.textContent || "products";
    const queryText = currentState.query ? ` for "${currentState.query}"` : "";
    searchStatus.textContent = visibleProducts.length
      ? `Showing ${visibleProducts.length} ${filterLabel.toLowerCase()}${queryText}.`
      : `No products found${queryText}. Try another keyword.`;
  }
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product || !dialogContent || !productDialog) return;
  const imageStyle = product.imagePosition ? ` style="object-position: ${product.imagePosition};"` : "";
  const previewMarkup = product.previews?.length
    ? `
      <div class="preview-strip" aria-label="${product.title} preview images">
        ${product.previews.map((preview) => `<img src="${assetPath(preview.image)}" alt="${preview.alt}" loading="lazy">`).join("")}
      </div>
    `
    : "";

  dialogContent.innerHTML = `
    <div class="dialog-product">
      <img class="dialog-main-image" src="${assetPath(product.image)}" alt="${product.alt}"${imageStyle}>
      <div class="dialog-info">
        <p class="eyebrow">${product.badge} · ${getProductType(product)}</p>
        <h2 id="dialogTitle">${product.title}</h2>
        <p>${product.description}</p>
        <p><strong>Collection:</strong> ${product.collection}</p>
        ${previewMarkup}
        <div class="price-row">
          ${
            product.salePrice
              ? `<span class="sale-price">${product.salePrice}</span><span class="old-price">${product.price}</span>`
              : `<span class="price">${product.price}</span>`
          }
        </div>
        <div class="dialog-actions">
          ${createPurchaseLinks(product, "dialog")}
        </div>
      </div>
    </div>
  `;

  if (typeof productDialog.showModal === "function" && !productDialog.open) {
    productDialog.showModal();
  }
}

function closeDialog(button) {
  button.closest("dialog")?.close();
}

function isInteractiveTarget(target) {
  return Boolean(target.closest("a, button, input, textarea, select, label, summary"));
}

function syncQueryParam() {
  if (document.body.dataset.page !== "shop") return;
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get("q") || "";
  currentState.query = initialQuery;
  if (searchInput) searchInput.value = initialQuery;
}

function updateShopQueryParam() {
  if (document.body.dataset.page !== "shop") return;
  const url = new URL(window.location.href);
  if (currentState.query) {
    url.searchParams.set("q", currentState.query);
  } else {
    url.searchParams.delete("q");
  }
  window.history.replaceState({}, "", url);
}

function initSearch() {
  if (!searchForm || !searchInput) return;

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (document.body.dataset.page === "shop") {
      currentState.query = query;
      updateShopQueryParam();
      renderShopProducts();
      return;
    }
    window.location.href = query ? `${shopPath}?q=${encodeURIComponent(query)}` : shopPath;
  });

  searchInput.addEventListener("input", (event) => {
    if (document.body.dataset.page !== "shop") return;
    currentState.query = event.target.value.trim();
    updateShopQueryParam();
    renderShopProducts();
  });
}

function initShopControls() {
  if (!shopGrid) return;

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentState.filter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
      });
      renderShopProducts();
    });
  });

  sortSelect?.addEventListener("change", (event) => {
    currentState.sort = event.target.value;
    renderShopProducts();
  });
}

function initEvents() {
  document.addEventListener("click", (event) => {
    const close = event.target.closest(".dialog-close");
    if (close) {
      closeDialog(close);
      return;
    }

    const card = event.target.closest(".product-card");
    if (card && !isInteractiveTarget(event.target)) {
      openProduct(card.dataset.productId);
    }
  });

  document.addEventListener("keydown", (event) => {
    const card = event.target.closest(".product-card");
    if (!card || event.target !== card || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    openProduct(card.dataset.productId);
  });

  productDialog?.addEventListener("click", (event) => {
    if (event.target === productDialog) {
      productDialog.close();
    }
  });

  document.querySelector("#freebieForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#freebieMessage").textContent = "Thank you. Your free pages signup is ready to connect to an email service.";
    event.currentTarget.reset();
  });
}

syncQueryParam();
renderFeaturedProducts();
renderShopProducts();
initSearch();
initShopControls();
initEvents();

document.querySelector("#year").textContent = new Date().getFullYear();
