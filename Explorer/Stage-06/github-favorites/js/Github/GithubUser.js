import { modalDialog, tBody } from "./elements.js";

export default class GithubUser {
  static getUser(username) {
    fetch("https://api.github.com/users/" + username)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.log("There was an error!", error);
        modalDialog.toggleAttribute("open");
      })
      .then((data) => {
        const user = data;
        console.log(user);
        this.buildUserElements(user);
      });
  }

  static buildUserElements(user) {
    const tr = document.createElement("tr");

    // User <td>
    const tdUser = document.createElement("td");
    const avatarImg = document.createElement("img");
    const linksWrapper = document.createElement("div");
    const links = document.createElement("a");
    const linkP = document.createElement("p");
    const linkSpan = document.createElement("span");
    tdUser.className = "user";
    avatarImg.src = user.avatar_url;
    avatarImg.alt = `Foto de perfil de @${user.login}`;
    linksWrapper.className = "links-wrapper";
    links.href = user.html_url;
    links.target = "_blank";
    linkP.innerText = user.name ?? "";
    linkSpan.innerText = user.login;
    links.appendChild(linkP);
    links.appendChild(linkSpan);
    linksWrapper.appendChild(links);
    tdUser.appendChild(avatarImg);
    tdUser.appendChild(linksWrapper);

    // Repos
    const tdRepos = document.createElement("td");
    tdRepos.className = "repositories";
    tdRepos.innerText = user.public_repos;

    // Followers
    const tdFollowers = document.createElement("td");
    tdFollowers.className = "followers";
    tdFollowers.innerText = user.followers;

    // Remove user button
    const tdRemoveUser = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove-user";
    tdRemoveUser.title = "Remover usuário";
    tdRemoveUser.appendChild(removeButton);

    // Inserts into dom
    tr.appendChild(tdUser);
    tr.appendChild(tdRepos);
    tr.appendChild(tdFollowers);
    tr.appendChild(tdRemoveUser);
    tBody.appendChild(tr);
  }
}
