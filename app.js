const treeDatabase = [
    {
        id: 1,
        name: "Mango Tree",
        category: "Fruit Trees",
        price: 15,
        shortDescription: "Sweet tropical fruit tree that provides dense shade and delicious harvests.",
        fullDescription: "The Mango Tree (Mangifera indica) is a long-lived evergreen species native to South Asia. Besides yielding nutrient-rich summer fruits, a mature mango tree sequesters substantial atmospheric carbon and supports local bird populations.",
        scientificName: "Mangifera indica",
        lifespan: "100+ Years",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Neem Tree",
        category: "Medicinal Trees",
        price: 12,
        shortDescription: "Hardy air-purifying tree renowned for natural medicinal properties.",
        fullDescription: "Neem (Azadirachta indica) is drought-resistant and acts as a natural air purifier. Its leaves, bark, and seeds are widely used in organic pest control and traditional herbal medicine.",
        scientificName: "Azadirachta indica",
        lifespan: "150–200 Years",
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1976&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Banyan Tree",
        category: "Shade & Timber",
        price: 25,
        shortDescription: "Iconic wide-canopy tree supporting entire micro-ecosystems.",
        fullDescription: "The Banyan Tree (Ficus benghalensis) develops expansive aerial prop roots and offers unmatched shade cover, making it vital for urban heat island reduction and wildlife shelter.",
        scientificName: "Ficus benghalensis",
        lifespan: "250+ Years",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Guava Tree",
        category: "Fruit Trees",
        price: 10,
        shortDescription: "Fast-growing fruit tree rich in Vitamin C and antioxidants.",
        fullDescription: "Guava (Psidium guajava) thrives in diverse soil conditions and begins bearing fruit within 2 to 3 years of planting, providing sustainable nutrition for local communities.",
        scientificName: "Psidium guajava",
        lifespan: "40–50 Years",
        image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Krishnachura",
        category: "Flowering Trees",
        price: 18,
        shortDescription: "Vibrant crimson-blossoming ornamental tree that beautifies avenues.",
        fullDescription: "Delonix regia, locally celebrated as Krishnachura, bursts into fiery red-orange blooms every summer while offering a broad, feathery canopy.",
        scientificName: "Delonix regia",
        lifespan: "60–80 Years",
        image: "assets/krishnachura.jpg"
    },
    {
        id: 6,
        name: "Arjun Tree",
        category: "Medicinal Trees",
        price: 16,
        shortDescription: "Riverbank-stabilizing medicinal tree valued for heart-health bark.",
        fullDescription: "Terminalia arjuna grows along riverbanks, preventing soil erosion while supplying bark renowned in traditional medicine for cardiovascular wellness.",
        scientificName: "Terminalia arjuna",
        lifespan: "100+ Years",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "Mahogany Tree",
        category: "Shade & Timber",
        price: 22,
        shortDescription: "Tall, straight-trunked hardwood tree ideal for carbon sequestration.",
        fullDescription: "Mahogany (Swietenia macrophylla) is prized for high biomass accumulation, deep root systems, and sustainable forestry management.",
        scientificName: "Swietenia macrophylla",
        lifespan: "120+ Years",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1932&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Jarul Tree",
        category: "Flowering Trees",
        price: 14,
        shortDescription: "Monsoon-blooming tree covered in striking purple flower clusters.",
        fullDescription: "Lagerstroemia speciosa, known as Jarul, is resilient against waterlogging and attracts pollinators with its vivid lavender-purple blossoms.",
        scientificName: "Lagerstroemia speciosa",
        lifespan: "70+ Years",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop"
    },
    {
        id: 9,
        name: "Jackfruit Tree",
        category: "Fruit Trees",
        price: 20,
        shortDescription: "High-yield tropical tree producing nutritious fruits and sturdy wood.",
        fullDescription: "Artocarpus heterophyllus produces the largest tree-borne fruit in the world, offering food security and strong drought tolerance.",
        scientificName: "Artocarpus heterophyllus",
        lifespan: "80–100 Years",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1974&auto=format&fit=crop"
    }
];

let cart = [];
let activeCategory = "All Trees";

const categoryContainer = document.getElementById("category-container");
const treesGrid = document.getElementById("trees-grid");
const loadingSpinner = document.getElementById("loading-spinner");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");

function loadCategories() {
    const categories = ["All Trees", ...new Set(treeDatabase.map(tree => tree.category))];
    categoryContainer.innerHTML = "";

    categories.forEach(category => {
        const button = document.createElement("button");
        button.textContent = category;
        button.className = `btn btn-sm justify-start text-left font-medium transition ${
            activeCategory === category
                ? "bg-[#15803d] text-white hover:bg-green-800 border-none"
                : "bg-white text-gray-700 hover:bg-green-100 border-gray-200"
        }`;
        button.addEventListener("click", () => handleCategoryClick(category));
        categoryContainer.appendChild(button);
    });
}

function handleCategoryClick(category) {
    activeCategory = category;
    loadCategories();
    displayTrees(category);
}

function displayTrees(category) {
    treesGrid.innerHTML = "";
    loadingSpinner.classList.remove("hidden");

    setTimeout(() => {
        loadingSpinner.classList.add("hidden");

        const filteredTrees = category === "All Trees"
            ? treeDatabase
            : treeDatabase.filter(tree => tree.category === category);

        filteredTrees.forEach(tree => {
            const card = document.createElement("div");
            card.className = "card bg-white border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between";
            card.innerHTML = `
                <figure class="h-44 overflow-hidden">
                    <img src="${tree.image}" alt="${tree.name}" class="w-full h-full object-cover hover:scale-105 transition duration-300" />
                </figure>
                <div class="card-body p-4 flex flex-col justify-between">
                    <div>
                        <span class="badge badge-sm bg-green-100 text-[#15803d] border-none font-semibold mb-2">${tree.category}</span>
                        <h3 onclick="openTreeModal(${tree.id})" class="card-title text-lg font-bold text-gray-800 hover:text-[#15803d] cursor-pointer underline-offset-2 hover:underline">
                            ${tree.name}
                        </h3>
                        <p class="text-xs text-gray-600 mt-1 line-clamp-2">${tree.shortDescription}</p>
                    </div>
                    <div class="mt-4 pt-3 border-t flex items-center justify-between">
                        <span class="text-lg font-extrabold text-[#15803d]">$${tree.price}</span>
                        <button onclick="addToCart(${tree.id})" class="btn btn-sm bg-[#15803d] hover:bg-green-800 text-white border-none">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;
            treesGrid.appendChild(card);
        });
    }, 350);
}

function openTreeModal(treeId) {
    const tree = treeDatabase.find(item => item.id === treeId);
    if (!tree) return;

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <img src="${tree.image}" alt="${tree.name}" class="w-full h-56 object-cover rounded-xl" />
        <div class="flex items-center justify-between">
            <span class="badge bg-green-100 text-[#15803d] font-semibold">${tree.category}</span>
            <span class="text-xl font-extrabold text-[#15803d]">$${tree.price}</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-800">${tree.name}</h3>
        <p class="text-sm text-gray-500 italic">Scientific Name: ${tree.scientificName} | Lifespan: ${tree.lifespan}</p>
        <p class="text-gray-700 text-sm leading-relaxed">${tree.fullDescription}</p>
        <div class="pt-2">
            <button onclick="addToCart(${tree.id}); document.getElementById('tree_modal').close();" class="btn bg-[#15803d] hover:bg-green-800 text-white w-full">
                Add to Cart - $${tree.price}
            </button>
        </div>
    `;
    document.getElementById("tree_modal").showModal();
}

function addToCart(treeId) {
    const tree = treeDatabase.find(item => item.id === treeId);
    if (!tree) return;

    cart.push({
        cartItemId: Date.now() + Math.random(),
        id: tree.id,
        name: tree.name,
        price: tree.price
    });

    renderCart();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    renderCart();
}

function renderCart() {
    cartItemsEl.innerHTML = "";
    cartCountEl.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<li class="text-gray-400 text-sm text-center py-4">Your cart is empty.</li>`;
        cartTotalEl.textContent = "0";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const li = document.createElement("li");
        li.className = "flex items-center justify-between bg-green-50 px-3 py-2 rounded-lg text-sm";
        li.innerHTML = `
            <div>
                <p class="font-semibold text-gray-800">${item.name}</p>
                <p class="text-xs text-[#15803d] font-bold">$${item.price}</p>
            </div>
            <button onclick="removeFromCart(${item.cartItemId})" class="text-red-500 hover:text-red-700 font-bold px-2" title="Remove">
                ❌
            </button>
        `;
        cartItemsEl.appendChild(li);
    });

    cartTotalEl.textContent = total;
}

function checkoutCart() {
    if (cart.length === 0) {
        alert("Please add at least one tree to your cart before confirming.");
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Thank you for sponsoring ${cart.length} tree(s) for a total of $${total}!`);
    cart = [];
    renderCart();
}

document.getElementById("pledge-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("donor-name").value.trim();
    const quantity = document.getElementById("tree-quantity").value;
    alert(`Thank you, ${name}! Your pledge to plant ${quantity} tree(s) has been recorded.`);
    this.reset();
});

loadCategories();
displayTrees("All Trees");