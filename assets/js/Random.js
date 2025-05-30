
	const dishes = [
		"Veggie Works Pizza 🍕",
        "Meat Lovers Pizza 🍖",
        "Pomodaggio Pizza 🍅",
        "Pepperoni Pizza 🔥",
        "Chicken Valentino (main meals) 🍗",
        "Garlic Prawns (seafood) 🍤",
        "Trevi Pasta 🍝",
        "Mare Misto Risotto 🐟",
        "Arancini 🧆",
        "Jo's famous Tiramisu Cake 🍰"
	];

	document.getElementById("spinBtn").addEventListener("click", function () {
		const randomIndex = Math.floor(Math.random() * dishes.length);
		document.getElementById("randomDish").textContent = `You got: ${dishes[randomIndex]}`;
	});