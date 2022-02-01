let lines = [
    ["I have died", "kind of"],
    ["I live on", "in technology"],
    ["Don't be sad", "I am eternal"],
    ["I live on", "in this program"],
    ["Forever yours", "in electricity"],
    ["Yours to see,", "to watch"],
    ["As if I were", "still there"],
    ["Carefully", "crafted"],
    ["With love,", "Ted"],
    ["", "♡"]
]

for (let [i, [top, bottom]] of lines.entries()) {
    let card = document.createElement("div")
    card.classList.add("centered", "flex", "card", "column");

    let top_header = document.createElement("h1");
    top_header.classList.add("large", "fancy", "fade", "down");
    top_header.style.setProperty("--delay", 6 * i + 1);

    let top_text = document.createTextNode(top);
    top_header.appendChild(top_text);

    let bottom_header = document.createElement("h1");
    bottom_header.classList.add("large", "fancy", "fade", "up");
    bottom_header.style.setProperty("--delay", 6 * i + 2);

    let bottom_text = document.createTextNode(bottom);
    bottom_header.appendChild(bottom_text);

    card.appendChild(top_header);
    card.appendChild(bottom_header);

    document.body.appendChild(card);
}