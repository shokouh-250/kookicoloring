const products = [
  {
    id: "cozy-rosy",
    title: "Cozy Rosy",
    description: "Peaceful pages for dreamy days, with soft outdoor scenes and gentle Kooki charm.",
    price: "$9.99",
    badge: "New",
    image: "assets/real/covers/cozy-rosy-cover.jpg",
    alt: "Cozy Rosy coloring book cover with a girl resting on a blanket outdoors",
    previews: [
      { image: "assets/real/hero/cozy-rosy-cover-spread.jpg", alt: "Cozy Rosy full cover spread with sample pages" },
    ],
    sections: ["new", "best", "physical"],
    collection: "Cute & Cozy",
    format: "Paperback",
  },
  {
    id: "cutie-pies",
    title: "Cutie Pies",
    description: "Soft and sweet woodland coloring pages with friendly animals, bold lines, and storybook scenes.",
    price: "$8.99",
    badge: "Best Seller",
    image: "assets/real/covers/cutie-pies-cover.jpg",
    alt: "Cutie Pies coloring book cover with a fox and a tiny character near a tree",
    previews: [
      { image: "assets/real/hero/cutie-pies-cover-spread.jpg", alt: "Cutie Pies full cover spread with sample pages" },
      { image: "assets/real/previews/cutie-pies-sample-grid.jpg", alt: "Cutie Pies sample page grid" },
    ],
    sections: ["new", "best", "physical"],
    collection: "Soft & Sweet",
    format: "Paperback",
  },
  {
    id: "relaxed-lines",
    title: "Relaxed Lines",
    description: "Bold and easy stress-relief pages with cozy scenes designed for low-pressure coloring.",
    price: "$9.99",
    badge: "Best Seller",
    image: "assets/real/covers/relaxed-lines-cover.jpg",
    alt: "Relaxed Lines coloring book cover with a treehouse and Kooki logo",
    previews: [
      { image: "assets/real/covers/relaxed-lines-cover.jpg", alt: "Relaxed Lines cover art" },
    ],
    sections: ["best", "physical"],
    collection: "Bold & Easy",
    format: "Paperback",
  },
  {
    id: "pattern-party",
    title: "Pattern Party",
    description: "Randomly repeating random repeats, cheerful panels, and playful pattern prompts.",
    price: "$9.99",
    badge: "Best Seller",
    image: "assets/real/covers/pattern-party-cover.jpg",
    alt: "Pattern Party coloring book cover with bees and colorful pattern panels",
    previews: [
      { image: "assets/real/previews/pattern-party-sample-grid.jpg", alt: "Pattern Party sample spread with puzzles and repeating patterns" },
      { image: "assets/real/gallery/pattern-party-four-panels.jpg", alt: "Four colored Pattern Party panels" },
    ],
    sections: ["best", "physical"],
    collection: "Pattern Play",
    format: "Paperback",
  },
  {
    id: "the-nibnubs",
    title: "The Nibnubs",
    description: "One bizarre family, too silly to scare, with goofy creatures and cozy adventure pages.",
    price: "$9.99",
    badge: "New",
    image: "assets/real/covers/nibnubs-cover-spread.jpg",
    alt: "The Nibnubs coloring book cover spread with a silly character peeking from a train",
    imagePosition: "75% center",
    previews: [
      { image: "assets/real/previews/nibnubs-seahorse-page.jpg", alt: "Black and white Nibnubs seahorse coloring page" },
      { image: "assets/real/gallery/nibnubs-fish-finished.jpg", alt: "Finished Nibnubs fish coloring page" },
    ],
    sections: ["new", "physical"],
    collection: "Kids",
    format: "Paperback",
  },
  {
    id: "the-boo-crew",
    title: "The Boo Crew",
    description: "A coloring book of tricks, treats, and tiny frights with ghosts, pumpkins, and playful Halloween scenes.",
    price: "$9.99",
    badge: "New",
    image: "assets/real/covers/boo-crew-cover-spread.jpg",
    alt: "The Boo Crew coloring book cover spread with a ghost, pumpkin, cat, and Halloween sample pages",
    imagePosition: "76% center",
    previews: [
      { image: "assets/real/gallery/boo-crew-picnic-finished.jpg", alt: "Finished Boo Crew ghost picnic coloring page" },
      { image: "assets/real/gallery/boo-crew-pumpkin-finished.jpg", alt: "Finished Boo Crew characters inside a pumpkin" },
    ],
    sections: ["new", "digital", "physical"],
    collection: "Spooky Cute",
    format: "Paperback",
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
  },
];

const collections = [
  { name: "Cute & Cozy", color: "#f8d6bf", icon: "M8 18V9l4-4 4 4v9M10 18v-5h4v5" },
  { name: "Soft & Sweet", color: "#d6e2d4", icon: "M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z" },
  { name: "Bold & Easy", color: "#f5df89", icon: "M7 7h10v10H7zM4 12h16" },
  { name: "Pattern Play", color: "#9fe7e2", icon: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" },
  { name: "Seasonal", color: "#f7c98c", icon: "M12 3v18M5 8l14 8M19 8 5 16" },
  { name: "Spooky Cute", color: "#c7b4e8", icon: "M5 20V9a7 7 0 0 1 14 0v11l-3-2-3 2-3-2-2 2-3-2Z" },
  { name: "Free Pages", color: "#dce9b2", icon: "M7 3h7l4 4v14H7zM14 3v5h5M9 13h6M9 17h6" },
];

const blogCards = [
  { title: "Coloring Tips", text: "Layering, pressure, and palette ideas for pages that feel finished.", color: "#ffd8c9" },
  { title: "Tools & Supplies", text: "Pencils, markers, paper, and printer settings that play nicely together.", color: "#b7e5d0" },
  { title: "Color Inspiration", text: "Cozy palette prompts for florals, rooms, animals, and seasonal pages.", color: "#ffd66b" },
  { title: "Behind the Books", text: "Sketchbook notes, cover drafts, and the little rituals behind each release.", color: "#a7d8e8" },
  { title: "DIY Creative Lifestyle", text: "Simple ways to turn finished pages into gifts, decor, and craft nights.", color: "#c9b8f2" },
];

const testimonials = [
  { quote: "The bold Kooki lines make the pages relaxing without feeling empty.", name: "Maya, evening colorist" },
  { quote: "Cutie Pies and Cozy Rosy feel sweet, gentle, and easy to color with kids.", name: "Nora, family craft night host" },
  { quote: "The seasonal pages are playful enough for markers and still charming in pencils.", name: "Jess, printable-page fan" },
];

const galleryItems = [
  { image: "assets/real/gallery/snowy-monsters-finished.jpg", caption: "Snowy monster window page in cool blues" },
  { image: "assets/real/gallery/pink-monster-finished.jpg", caption: "Pink monster party page with bold contrast" },
  { image: "assets/real/gallery/boo-crew-picnic-finished.jpg", caption: "The Boo Crew ghost picnic finished page" },
  { image: "assets/real/gallery/boo-crew-pumpkin-finished.jpg", caption: "The Boo Crew pumpkin scene with soft texture" },
  { image: "assets/real/gallery/pattern-party-bees-finished.jpg", caption: "Pattern Party bees and flowers finished page" },
  { image: "assets/real/gallery/nibnubs-fish-finished.jpg", caption: "The Nibnubs fish page in bright color" },
  { image: "assets/real/gallery/nibnubs-balloon-finished.jpg", caption: "The Nibnubs hot-air balloon mini page" },
  { image: "assets/real/gallery/pattern-party-four-panels.jpg", caption: "Four colorful Pattern Party panels" },
];

const faqs = [
  {
    question: "Where can I buy physical books?",
    answer: "Physical Kooki Coloring books can be linked from each View Book or Buy Now button. Connect those buttons to your Amazon listings, Shopify checkout, Etsy shop, or preferred bookstore links before launch.",
  },
  {
    question: "How do digital downloads work?",
    answer: "Digital downloads should be delivered as printable PDF files after checkout or email signup. The current buttons are ready to connect to your email platform or checkout provider.",
  },
  {
    question: "What printing settings do you recommend?",
    answer: "Print digital pages at 100 percent scale or fit-to-page on smooth white paper or cardstock. If you color with wet markers, test one sheet first and place scrap paper behind the page.",
  },
  {
    question: "What is your refund and support policy?",
    answer: "For physical books, refunds are usually handled by the marketplace where the book was purchased. For digital downloads, provide support for access issues and clarify final refund terms before launch.",
  },
  {
    question: "Where can customers share finished pages?",
    answer: "Invite customers to tag your social accounts or email finished pages to hello@kookicoloring.com so you can feature them in the gallery with permission.",
  },
];

const wishlist = new Set();

const productSections = document.querySelectorAll(".product-grid[data-section]");
const collectionGrid = document.querySelector(".collection-grid");
const blogGrid = document.querySelector(".blog-grid");
const testimonialGrid = document.querySelector(".testimonial-grid");
const galleryGrid = document.querySelector(".gallery-grid");
const faqList = document.querySelector(".faq-list");
const searchInput = document.querySelector("#siteSearch");
const searchStatus = document.querySelector("#searchStatus");
const productDialog = document.querySelector("#productDialog");
const dialogContent = document.querySelector(".dialog-content");
const wishlistDialog = document.querySelector("#wishlistDialog");
const wishlistList = document.querySelector(".wishlist-list");
const wishlistCount = document.querySelector(".wishlist-count");

function iconPath(path) {
  return `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="${path}"></path></svg>`;
}

function heartIcon() {
  return iconPath("M19.5 12.6 12 20l-7.5-7.4a5 5 0 0 1 7.1-7.1l.4.4.4-.4a5 5 0 0 1 7.1 7.1Z");
}

function createProductCard(product) {
  const card = document.createElement("article");
  const imageStyle = product.imagePosition ? ` style="object-position: ${product.imagePosition};"` : "";
  card.className = "product-card";
  card.dataset.search = `${product.title} ${product.description} ${product.badge} ${product.collection} ${product.format}`.toLowerCase();
  card.dataset.productId = product.id;
  card.innerHTML = `
    <div class="product-media">
      <img src="${product.image}" alt="${product.alt}" loading="lazy"${imageStyle}>
    </div>
    <span class="badge">${product.badge}</span>
    <button class="favorite-button" type="button" aria-label="Add ${product.title} to wishlist" aria-pressed="false" data-favorite="${product.id}">
      ${heartIcon()}
    </button>
    <div class="product-body">
      <h4>${product.title}</h4>
      <p>${product.description}</p>
      <div class="price-row">
        ${
          product.salePrice
            ? `<span class="sale-price">${product.salePrice}</span><span class="old-price">${product.price}</span>`
            : `<span class="price">${product.price}</span>`
        }
      </div>
      <button class="button secondary" type="button" data-view="${product.id}">View Book</button>
    </div>
  `;
  return card;
}

function renderProducts() {
  productSections.forEach((section) => {
    const sectionName = section.dataset.section;
    const fragment = document.createDocumentFragment();
    products
      .filter((product) => product.sections.includes(sectionName))
      .forEach((product) => fragment.appendChild(createProductCard(product)));

    const empty = document.createElement("div");
    empty.className = "no-results";
    empty.textContent = "No books match that search in this shelf yet.";
    section.append(fragment, empty);
  });
}

function renderCollections() {
  collections.forEach((collection) => {
    const button = document.createElement("button");
    button.className = "collection-tile";
    button.type = "button";
    button.style.setProperty("--tile-bg", collection.color);
    button.dataset.collection = collection.name;
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `
      <span class="collection-icon">${iconPath(collection.icon)}</span>
      <h3>${collection.name}</h3>
    `;
    collectionGrid.appendChild(button);
  });
}

function renderBlog() {
  blogCards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "blog-card";
    article.style.setProperty("--blog-bg", card.color);
    article.innerHTML = `
      <span>${iconPath("M5 5h14v14H5zM8 9h8M8 13h5")}</span>
      <h3>${card.title}</h3>
      <p>${card.text}</p>
    `;
    blogGrid.appendChild(article);
  });
}

function renderTestimonials() {
  testimonials.forEach((item) => {
    const quote = document.createElement("blockquote");
    quote.className = "testimonial";
    quote.innerHTML = `<p>${item.quote}</p><footer>${item.name}</footer>`;
    testimonialGrid.appendChild(quote);
  });
}

function renderGallery() {
  galleryItems.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-card";
    figure.innerHTML = `<img src="${item.image}" alt="${item.caption}" loading="lazy"><figcaption>${item.caption}</figcaption>`;
    galleryGrid.appendChild(figure);
  });
}

function renderFaqs() {
  faqs.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "faq-item";
    const panelId = `faq-panel-${index}`;
    wrapper.innerHTML = `
      <button class="faq-button" type="button" aria-expanded="${index === 0 ? "true" : "false"}" aria-controls="${panelId}">
        <span>${item.question}</span>
        ${iconPath("M12 5v14M5 12h14")}
      </button>
      <div class="faq-panel" id="${panelId}" aria-hidden="${index === 0 ? "false" : "true"}">${item.answer}</div>
    `;
    faqList.appendChild(wrapper);
  });
}

function filterProducts(query) {
  const normalized = query.trim().toLowerCase();
  let visibleCount = 0;

  productSections.forEach((section) => {
    const cards = [...section.querySelectorAll(".product-card")];
    let sectionVisible = 0;

    cards.forEach((card) => {
      const matches = !normalized || card.dataset.search.includes(normalized);
      card.hidden = !matches;
      if (matches) {
        visibleCount += 1;
        sectionVisible += 1;
      }
    });

    const empty = section.querySelector(".no-results");
    empty.style.display = sectionVisible ? "none" : "block";
  });

  searchStatus.textContent = normalized
    ? `${visibleCount} shelf item${visibleCount === 1 ? "" : "s"} match "${query}".`
    : "Showing all Kooki picks.";

  document.querySelectorAll("[data-collection]").forEach((button) => {
    button.setAttribute("aria-pressed", String(normalized === button.dataset.collection.toLowerCase()));
  });
}

function updateWishlistButtons() {
  document.querySelectorAll("[data-favorite]").forEach((button) => {
    const isFavorite = wishlist.has(button.dataset.favorite);
    const product = products.find((item) => item.id === button.dataset.favorite);
    button.setAttribute("aria-pressed", String(isFavorite));
    button.setAttribute("aria-label", `${isFavorite ? "Remove" : "Add"} ${product.title} ${isFavorite ? "from" : "to"} wishlist`);
  });
  wishlistCount.textContent = String(wishlist.size);
}

function toggleWishlist(productId) {
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
  } else {
    wishlist.add(productId);
  }
  updateWishlistButtons();
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const imageStyle = product.imagePosition ? ` style="object-position: ${product.imagePosition};"` : "";
  const previewMarkup = product.previews?.length
    ? `
      <div class="preview-strip" aria-label="${product.title} preview images">
        ${product.previews.map((preview) => `<img src="${preview.image}" alt="${preview.alt}" loading="lazy">`).join("")}
      </div>
    `
    : "";

  dialogContent.innerHTML = `
    <div class="dialog-product">
      <img class="dialog-main-image" src="${product.image}" alt="${product.alt}"${imageStyle}>
      <div class="dialog-info">
        <p class="eyebrow">${product.badge} · ${product.format}</p>
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
          <button class="button primary" type="button" data-buy="${product.id}">Buy Now</button>
          <button class="button secondary" type="button" data-favorite="${product.id}">${wishlist.has(product.id) ? "Remove Favorite" : "Add Favorite"}</button>
        </div>
      </div>
    </div>
  `;

  if (typeof productDialog.showModal === "function") {
    if (!productDialog.open) {
      productDialog.showModal();
    }
  }
}

function openWishlist() {
  if (wishlist.size === 0) {
    wishlistList.innerHTML = "<p>Your wishlist is empty for now. Tap the heart on any book to save it here.</p>";
  } else {
    wishlistList.innerHTML = [...wishlist]
      .map((id) => products.find((product) => product.id === id))
      .filter(Boolean)
      .map((product) => `
        <div class="wishlist-item">
          <img src="${product.image}" alt="${product.alt}">
          <div>
            <strong>${product.title}</strong>
            <p>${product.collection} · ${product.salePrice || product.price}</p>
          </div>
        </div>
      `)
      .join("");
  }

  if (typeof wishlistDialog.showModal === "function") {
    wishlistDialog.showModal();
  }
}

function closeDialog(button) {
  button.closest("dialog")?.close();
}

function initEvents() {
  searchInput.addEventListener("input", (event) => filterProducts(event.target.value));

  collectionGrid.addEventListener("click", (event) => {
    const tile = event.target.closest("[data-collection]");
    if (!tile) return;
    searchInput.value = tile.dataset.collection;
    filterProducts(tile.dataset.collection);
    document.querySelector("#shop").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.addEventListener("click", (event) => {
    const favorite = event.target.closest("[data-favorite]");
    if (favorite) {
      toggleWishlist(favorite.dataset.favorite);
      if (favorite.closest("dialog")) {
        openProduct(favorite.dataset.favorite);
      }
    }

    const view = event.target.closest("[data-view]");
    if (view) {
      openProduct(view.dataset.view);
    }

    const buy = event.target.closest("[data-buy]");
    if (buy) {
      buy.textContent = "Checkout Link Coming Soon";
      buy.setAttribute("aria-label", "Checkout link ready to connect");
    }

    const close = event.target.closest(".dialog-close");
    if (close) {
      closeDialog(close);
    }
  });

  document.querySelector(".wishlist-toggle").addEventListener("click", openWishlist);

  faqList.addEventListener("click", (event) => {
    const button = event.target.closest(".faq-button");
    if (!button) return;
    const panel = document.querySelector(`#${button.getAttribute("aria-controls")}`);
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    panel.setAttribute("aria-hidden", String(isOpen));
  });

  document.querySelector("#freebieForm").addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#freebieMessage").textContent = "Thank you. Your free pages signup is ready to connect to an email service.";
    event.currentTarget.reset();
  });

  document.querySelector("#footer-newsletter").addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.querySelector("button").textContent = "Joined";
    event.currentTarget.reset();
  });

  [productDialog, wishlistDialog].forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  });
}

renderProducts();
renderCollections();
renderBlog();
renderTestimonials();
renderGallery();
renderFaqs();
updateWishlistButtons();
initEvents();

document.querySelector("#year").textContent = new Date().getFullYear();
