
const bookdata = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQS7rQ0r12WhVPVoEsKNimziIH_ZSDNlUUes_sHCzUg&s=10",
        price: 465
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4t4mj_Ue-Wt3LM9i3g6pkT62BG9jzJPEfyEwp3MFv4A&s=10",
        price: 729
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSOJOEN8OCO0sPX1Kv_N7pbFOUxX_r7vrSIyuRWsDcA&s=10",
        price: 629
    }
];

function Book(data) {

    const div = document.createElement("div");
    div.setAttribute("class", "book");

    const image = document.createElement("img");
    image.setAttribute("src", data.image);
    image.setAttribute("height", "100px");
    image.setAttribute("width", "100px");

    const heading = document.createElement("h2");
    heading.innerText = "Price: " + data.price + "₹";

    const bt = document.createElement("button");
    bt.innerText = "Add to cart";

    div.appendChild(image);
    div.appendChild(heading);
    div.appendChild(bt);

    return div;
}

const parent = document.getElementById("root");

const books = bookdata.map((i) => {
    return Book(i);
});

for (let b of books) {
    parent.appendChild(b);
}