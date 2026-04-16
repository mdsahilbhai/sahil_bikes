const bikes = [
    {
        name: "Kawasaki Ninja H2",
        image: "https://via.placeholder.com/300x200",
        engine: "998cc",
        power: "200+ bhp",
        topSpeed: "300+ km/h",
        price: "₹35 - 80 Lakh"
    },
    {
        name: "Yamaha R1",
        image: "https://via.placeholder.com/300x200",
        engine: "998cc",
        power: "200 bhp",
        topSpeed: "299 km/h",
        price: "₹20 Lakh"
    },
    {
        name: "Ducati Panigale V4",
        image: "https://via.placeholder.com/300x200",
        engine: "1103cc",
        power: "215 bhp",
        topSpeed: "300 km/h",
        price: "₹27 Lakh"
    },
    {
        name: "BMW S1000RR",
        image: "https://via.placeholder.com/300x200",
        engine: "999cc",
        power: "205 bhp",
        topSpeed: "299 km/h",
        price: "₹20 - 25 Lakh"
    },
    {
        name: "Kawasaki Ninja ZX-10R",
        image: "https://via.placeholder.com/300x200",
        engine: "998cc",
        power: "203 bhp",
        topSpeed: "299 km/h",
        price: "₹16 Lakh"
    }
];

const container = document.getElementById("bikeContainer");

bikes.forEach(bike => {
    const card = document.createElement("div");
    card.classList.add("bike-card");

    card.innerHTML = `
        <img src="${bike.image}" alt="${bike.name}">
        <h2>${bike.name}</h2>
        <div class="specs">
            <p><strong>Engine:</strong> ${bike.engine}</p>
            <p><strong>Power:</strong> ${bike.power}</p>
            <p><strong>Top Speed:</strong> ${bike.topSpeed}</p>
        </div>
        <div class="price">${bike.price}</div>
    `;

    container.appendChild(card);
});
