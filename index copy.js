
// When the `form#new-color-form` is submitted, make a POST request to create a new
// color:

// *```txt
// *POST /colors

// *Headers:
// *- Content-Type: application/json

// *Body:
// *{ color: "string" }
// ```

//* Using the response from the server, create a new `<li>`, and add it to the
// *`ul#colors`. Use the style attribute to set its font color.

// ```html
// *<li style="color: red">red</li>
// ```

function init() {




    let colorForm = document.getElementById("new-color-form");
    colorForm.addEventListener("submit", (e) => colorChange(e));

    function colorChange(e) {
      e.preventDefault();
      let userInput = document.getElementById("color");
      postData(userInput.value);
    }

    function postData(color) {
      let formData = {
        color: color,
      };
      let configObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      fetch("http://localhost:3000/colors", configObject)
        .then((response) => response.json())
        .then((result) => appendColor(result))
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    function appendColor(result) {
      let li = document.createElement("li");
      let ul = document.getElementById("colors");
      li.textContent = result.color;
      li.style.color = result.color;
      ul.appendChild(li);
    }



    
}

init();