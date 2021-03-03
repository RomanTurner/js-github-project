
const init = () => {
  const inputForm = document.getElementById("github-form");
  // console.log(inputForm.value);

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let userInput = document.querySelector("input#search").value;
    userSearch(userInput);
  });

  function userSearch(userInput) {
    let userName = userInput.split(" ").join("");
    fetch("https://api.github.com/users/" + userName, {
      Accept: "application / vnd.github.v3 + json",
    })
      .then((resp) => resp.json())
      .then((json) => displayUser(json));
  }

  function displayUser(user) {
    let parentUl = document.getElementById("user-list"),
      parentLi = document.createElement("li"),
      img = document.createElement("img"), 
      childUl = document.createElement("ul")
      childli = document.createElement("li")

    let name = user.name,
      avatar = user.avatar_url,
      bio = user.bio,
      link = user.html_url;
    let userInfo = [name, bio, link];
      img.src = avatar;

      appender(parentUl, parentLi);
      appender(parentLi, img);
      appender(parentLi, childUl);
      appender(childUl, childli);

      
    userInfo.map((info) => {
      let p = document.createElement("p");
      p.innerText = info;
      appender(childli, p);
    });
      
      function appender(parent, child) {
          parent.appendChild(child);
      }
      parentUl.addEventListener("click", (e) => {
          let repos = user.repos_url;
    document.location.href = repos;
});
  }
};

document.addEventListener("DOMContentLoaded", init);
