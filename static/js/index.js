let video_element = document.querySelector("#vid");

let lines = [
    // ["I have died", "kind of"],
    // ["I live on", "in technology"],
    // ["Don't be sad", "I am eternal"],
    // ["I live on", "in this program"],
    // ["Forever yours", "in electricity"],
    // ["Yours to see,", "to watch"],
    // ["As if I were", "still there"],
    // ["Carefully", "crafted"],
    ["With love,", "Ted"],
    ["♡"]
]

for (let [i, ls] of lines.entries()) {

    let card = document.createElement("div")
    card.classList.add("centered", "flex", "card", "column");

    if (ls.length > 1) {
        let top_header = document.createElement("h1");
        top_header.classList.add("large", "fancy", "fade", "down");
        top_header.style.setProperty("--delay", 6 * i + 1);

        let top_text = document.createTextNode(ls[0]);
        top_header.appendChild(top_text);

        card.appendChild(top_header);
    }

    if (ls.length > 0) {
        let bottom_header = document.createElement("h1");
        bottom_header.classList.add("large", "fancy", "fade", "up");
        bottom_header.style.setProperty("--delay", 6 * i + 2);

        let bottom_text = document.createTextNode(ls[ls.length-1]);
        bottom_header.appendChild(bottom_text);

        card.appendChild(bottom_header);
    }

    document.body.appendChild(card);
}

setTimeout(() => {
    let card = document.createElement("div")
    card.classList.add("centered", "flex", "card", "column");

    let btn = document.createElement("button");
    btn.classList.add("large", "fancy", "button", "up");
    setTimeout(() => {
        btn.style.opacity = 1;
        btn.style.animationName = "";
    }, 1000 * parseInt(window.getComputedStyle(btn).animationDuration));

    let btn_text = document.createTextNode("Revive Me");
    btn.appendChild(btn_text);

    card.appendChild(btn);
    
    document.body.appendChild(card);

    btn.addEventListener("click", () => {
        setTimeout(() => {
            btn.style.animationName = "button_down";
            setTimeout(() => {
                btn.style.opacity = 0;
            }, 1000 * parseInt(window.getComputedStyle(btn).animationDuration) * 3 / 4);
            setTimeout(() => {
                card.remove();
                video_element.play();
                video_element.style.animationName = "video_in";
            }, 1000 * parseInt(window.getComputedStyle(btn).animationDuration));
        }, 1000);
    });
}, 6 * 1000 * lines.length + 1000)