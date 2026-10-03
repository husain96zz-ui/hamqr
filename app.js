const categories = [
  {
    id: "all",
    name: "الكل",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "pizza",
    name: "البيتزا",
    title: "أصل النكهة",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "burger",
    name: "البرغر",
    title: "طازج وشهي",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "chicken",
    name: "الدجاج",
    title: "مذاق لا يُنسى",
    img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "salad",
    name: "السلطات",
    title: "خيار صحي ولذيذ",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "pasta",
    name: "المعكرونة",
    title: "طعم إيطالي أصيل",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "drinks",
    name: "المشروبات",
    title: "انتعاش في كل رشفة",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "dessert",
    name: "الحلويات",
    title: "نكهات لا تُقاوم",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85",
  },
];
const products = [
  [
    1,
    "pizza",
    "بيتزا مارغريتا",
    "صلصة طماطم، موزاريلا، ريحان طازج",
    11000,
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=88",
  ],
  [
    2,
    "pizza",
    "بيتزا بيبروني",
    "موزاريلا، صلصة طماطم، شرائح بيبروني",
    13000,
    "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=88",
  ],
  [
    3,
    "pizza",
    "بيتزا ميكس لحوم",
    "لحم بقري، دجاج، بيبروني، موزاريلا",
    15000,
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=88",
  ],
  [
    4,
    "pizza",
    "بيتزا خضار",
    "فلفل، زيتون، مشروم، بصل، موزاريلا",
    12000,
    "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=88",
  ],
  [
    5,
    "burger",
    "برغر كلاسيك",
    "لحم بقري مشوي، جبن، خس، طماطم وصوص خاص",
    12000,
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=88",
  ],
  [
    6,
    "burger",
    "برغر دبل تشيز",
    "قطعتان لحم، جبن شيدر، بصل وصوص خاص",
    15000,
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=88",
  ],
  [
    7,
    "chicken",
    "دجاج كرسبي",
    "قطع دجاج مقرمشة مع صوص خاص",
    10000,
    "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=88",
  ],
  [
    8,
    "chicken",
    "دجاج مشوي",
    "صدر دجاج مشوي مع أعشاب وخضار",
    14000,
    "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=88",
  ],
  [
    9,
    "salad",
    "سلطة سيزر",
    "خس، دجاج مشوي، بارميزان وصوص سيزر",
    9000,
    "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=88",
  ],
  [
    10,
    "pasta",
    "باستا ألفريدو",
    "فيتوتشيني، صوص كريمي، بارميزان وفطر",
    13000,
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=88",
  ],
  [
    11,
    "drinks",
    "عصير برتقال طازج",
    "برتقال طازج يقدم بارداً",
    5000,
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=88",
  ],
  [
    12,
    "dessert",
    "كيكة الشوكولاتة",
    "كيكة شوكولاتة غنية مع توت وصوص خاص",
    8000,
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=88",
  ],
].map((x) => ({
  id: x[0],
  cat: x[1],
  name: x[2],
  desc: x[3],
  price: x[4],
  img: x[5],
}));
let activeCat = "all",
  cart = JSON.parse(localStorage.getItem("hamqr-cart") || "[]");
const $ = (s) => document.querySelector(s),
  money = (n) => new Intl.NumberFormat("ar-IQ").format(n) + " د.ع";
function renderCategories() {
  $("#categories").innerHTML = categories
    .filter((c) => c.id !== "all")
    .map(
      (c) =>
        `<article class="category ${ activeCat === c.id ? "active" : "" }" data-cat="${c.id}"><img src="${c.img}" alt="${ c.name }" loading="lazy"><div class="category-info"><strong>${ c.name }</strong><small>${c.title}</small></div></article>`
    )
    .join("");
  document.querySelectorAll(".category").forEach(
    (e) =>
      (e.onclick = () => {
        activeCat = e.dataset.cat;
        renderAll();
      })
  );
}
function renderFilters() {
  $("#filterBar").innerHTML = categories
    .map(
      (c) =>
        `<button class="filter ${ activeCat === c.id ? "active" : "" }" data-filter="${c.id}">${c.name}</button>`
    )
    .join("");
  document.querySelectorAll(".filter").forEach(
    (e) =>
      (e.onclick = () => {
        activeCat = e.dataset.filter;
        renderAll();
      })
  );
}
function renderProducts() {
  let q = $("#searchInput").value.trim().toLowerCase(),
    list = products.filter(
      (p) =>
        (activeCat === "all" || p.cat === activeCat) &&
        (!q || (p.name + " " + p.desc).toLowerCase().includes(q))
    );
  $("#products").innerHTML = list
    .map(
      (p) =>
        `<article class="product"><div class="product-img"><img src="${ p.img }" alt="${p.name}" loading="lazy"></div><div class="product-body"><h3>${ p.name }</h3><p>${ p.desc }</p><div class="product-bottom"><span class="price">${money( p.price )}</span><button class="add" data-add="${ p.id }">+</button></div></div></article>`
    )
    .join("");
  $("#emptyState").hidden = list.length > 0;
  document
    .querySelectorAll("[data-add]")
    .forEach((b) => (b.onclick = () => addToCart(+b.dataset.add)));
}
function renderAll() {
  renderCategories();
  renderFilters();
  renderProducts();
  updateCount();
}
function addToCart(id) {
  let x = cart.find((i) => i.id === id);
  x ? x.qty++ : cart.push({ id, qty: 1 });
  saveCart();
  toast("تمت إضافة الصنف إلى السلة");
}
function saveCart() {
  localStorage.setItem("hamqr-cart", JSON.stringify(cart));
  updateCount();
}
function updateCount() {
  $("#cartCount").textContent = cart.reduce((s, x) => s + x.qty, 0);
}
function renderCart() {
  let rows = cart
    .map((i) => {
      let p = products.find((x) => x.id === i.id);
      return `<div class="cart-row"><img src="${p.img}" alt="${ p.name }"><div class="grow"><strong>${p.name}</strong><small>${money( p.price )}</small></div><div class="qty"><button data-dec="${ p.id }">−</button><span>${i.qty}</span><button data-inc="${ p.id }">+</button></div></div>`;
    })
    .join("");
  $("#cartItems").innerHTML =
    rows ||
    '<p style="color:#777;text-align:center;padding:30px">السلة فارغة حالياً.</p>';
  $("#cartTotal").textContent = money(
    cart.reduce(
      (s, i) => s + products.find((p) => p.id === i.id).price * i.qty,
      0
    )
  );
  document
    .querySelectorAll("[data-inc]")
    .forEach((b) => (b.onclick = () => changeQty(+b.dataset.inc, 1)));
  document
    .querySelectorAll("[data-dec]")
    .forEach((b) => (b.onclick = () => changeQty(+b.dataset.dec, -1)));
}
function changeQty(id, d) {
  let x = cart.find((i) => i.id === id);
  if (!x) return;
  x.qty += d;
  if (x.qty <= 0) cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
}
function toast(t) {
  let e = $("#toast");
  e.textContent = t;
  e.classList.add("show");
  setTimeout(() => e.classList.remove("show"), 1800);
}
$("#searchInput").oninput = renderProducts;
$("#cartBtn").onclick = () => {
  $("#cartModal").classList.add("open");
  renderCart();
};
document
  .querySelectorAll("[data-close]")
  .forEach((e) => (e.onclick = () => $("#cartModal").classList.remove("open")));
$("#checkoutBtn").onclick = () =>
  toast(
    cart.length ? "هذه نسخة تجريبية — سيتم ربط الطلبات لاحقاً." : "السلة فارغة."
  );
$("#year").textContent = new Date().getFullYear();
renderAll();
