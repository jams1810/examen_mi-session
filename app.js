class Speaker {
    constructor(
        name,
        description,
        price,
        brand,
        hasFreeDelivery,
        isInStock,
        rating,
        colour
    ){
        this.name = name;
        this.description = description; 
        this.price = price;
        this.brand = brand; 
        this.hasFreeDelivery = hasFreeDelivery; 
        this.isInStock = isInStock;
        this.rating = rating;
        this.colour = colour;
    }

    toHtml() {
        const div = document.createElement('div');
        const entries = Object.entries(this);

        entries.forEach(entry => {
            const nameSpan = document.createElement('span');
            const valueSpan = document.createElement('span');

            nameSpan.textContent = entry[0];
            valueSpan.textContent = entry[1];

            div.appendChild(nameSpan);
            div.appendChild(valueSpan);
        })

        return div;
    } 
}

 const speakers = [
    new Speaker(
        "Echo Dot",
        "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
        "47.99",
        "Amazon",
        true,
        true,
        4.5,
        "black"
    ),
    new Speaker(
        "Echo Dot",
        "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
        "47.99",
        "Amazon",
        true,
        true,
        4.5,
        "black"
    ),
    new Speaker(
        "Echo Dot",
        "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
        "47.99",
        "Amazon",
        true,
        true,
        4.5,
        "black"
    ),
    new Speaker(
        "Echo Dot",
        "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
        "47.99",
        "Amazon",
        true,
        true,
        4.5,
        "black"
), ];

speakers.forEach(speaker => {
    document.body.appendChild(speaker.toHtml());
})