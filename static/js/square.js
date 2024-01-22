const buttons = document.querySelectorAll(".square");

for (const button of buttons) {
    button.addEventListener("click", UpdateSquares);
}

let array_sqr = new Set();

function UpdateSquares(event) {
    const btn = event.target;
    btn.style.backgroundColor = 'green';

    // Convert btn.id to a number before adding to the set
    array_sqr.add(Number(btn.id));

    if (array_sqr.size === 6) {
        setTimeout(() => {ReverseSquares()}, 1000)
    }
}

function ReverseSquares() {
    const reversedArray = Array.from(array_sqr).reverse();

    // Iterate over the reversed array with a delay
    reversedArray.forEach((id, index) => {
        setTimeout(() => {
            const reverse_btn = document.getElementById(id.toString());

            // Remove the color 
            reverse_btn.style.backgroundColor = 'white';

            // Clear the color if it's the last button in the sequence
            if (index === reversedArray.length - 1) {
                array_sqr.clear();
            }
        }, index * 1000); // Adjust the timeout duration (in milliseconds) as needed
    });
}
