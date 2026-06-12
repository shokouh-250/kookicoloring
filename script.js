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
  { name: "Free Pages", color: "#dce9b2", icon: "M7 3h7l4 4v14H7zM14 3v5h5M9 13h6M9 17h6" },
  { name: "Bold & Easy", color: "#f5df89", icon: "M7 7h10v10H7zM4 12h16" },
  { name: "Seasonal", color: "#f7c98c", icon: "M12 3v18M5 8l14 8M19 8 5 16" },
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
    answer: "Physical Kooki Coloring books can be purchased through the Amazon and Etsy buttons on each available book card.",
  },
  {
    question: "How do digital downloads work?",
    answer: "Digital downloads are printable PDF files. Free sample pages are shared through the signup form, and paid digital listings can be linked to Etsy or your preferred checkout.",
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

function externalLinkIcon() {
  return iconPath("M14 4h6v6M20 4l-9 9M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5");
}

function createPurchaseLinks(product, variant = "card") {
  const marketplaces = [
    { key: "amazon", label: "Amazon" },
    { key: "etsy", label: "Etsy" },
  ];
  const links = marketplaces.filter((marketplace) => product.purchaseLinks?.[marketplace.key]);

  if (!links.length) {
    return "";
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
            aria-label="Buy ${product.title} on ${marketplace.label} (opens in a new tab)"
          >
            <span>Buy on ${marketplace.label}</span>
            ${externalLinkIcon()}
          </a>
        `)
        .join("")}
    </div>
  `;
}

function createFlipPages(product) {
  const pages = product.flipImages?.slice(0, 3) || [];
  if (!pages.length) {
    return "";
  }

  return `
    <div class="flip-pages" aria-hidden="true">
      ${pages
        .map((image, index) => `
          <img class="flip-page flip-page-${index + 1}" src="${image}" alt="" loading="lazy">
        `)
        .join("")}
    </div>
  `;
}

function createProductCard(product) {
  const card = document.createElement("article");
  const imageStyle = product.imagePosition ? ` style="object-position: ${product.imagePosition};"` : "";
  card.className = "product-card";
  card.dataset.search = `${product.title} ${product.description} ${product.badge} ${product.collection} ${product.format}`.toLowerCase();
  card.dataset.productId = product.id;
  card.tabIndex = 0;
  card.setAttribute("aria-label", `View ${product.title} details`);
  card.innerHTML = `
    <div class="product-media">
      <div class="book-flip">
        <img class="product-cover" src="${product.image}" alt="${product.alt}" loading="lazy"${imageStyle}>
        ${createFlipPages(product)}
      </div>
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
      ${createPurchaseLinks(product)}
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
      .filter((product) => sectionName === "all" || product.sections.includes(sectionName))
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
    section.closest(".product-section").hidden = Boolean(normalized && !sectionVisible);
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
          ${createPurchaseLinks(product, "dialog")}
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

function isInteractiveTarget(target) {
  return Boolean(target.closest("a, button, input, textarea, select, label, summary"));
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
      return;
    }

    const view = event.target.closest("[data-view]");
    if (view) {
      openProduct(view.dataset.view);
      return;
    }

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
    if (!card || event.target !== card || !["Enter", " "].includes(event.key)) {
      return;
    }

    event.preventDefault();
    openProduct(card.dataset.productId);
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
