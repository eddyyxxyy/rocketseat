import { GithubUser } from "./GithubUser.js";

class Favorites {
  constructor() {
    this.app = document.querySelector("#app");
    this.tbody = this.app.querySelector("tbody");
    this.searchInput = this.app.querySelector("#search input");
    this.favoriteButton = this.app.querySelector("#search button");
    this.load();
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    );
    this.entries = filteredEntries;
    this.update();
    this.save();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
  }
}

export class FavoritesView extends Favorites {
  constructor() {
    super();
    this.assignEvents();
    this.update();
  }

  async addUser(userName) {
    try {
      const userExists = this.entries.find((entry) => entry.login === userName);
      if (userExists) {
        throw new Error("Usuário já cadastrado!");
      }
      const user = await GithubUser.getUser(userName);
      if (user.login === undefined) {
        throw new Error("Usuário não encontrado!");
      }
      this.entries = [user, ...this.entries];
      this.save();
      this.update();
    } catch (error) {
      alert(error.message);
    }
  }

  createUserRow(user) {
    const tr = document.createElement("tr");
    const row = `\
      <td class="user">
        <figure>
          <img
            src="http://github.com/${user.login}.png"
            alt="Imagem do perfil de usuário do ${user.login}"
            decoding="async"
          />
          <figcaption class="sr-only">
            Imagem do perfil de usuário do ${user.login}}
          </figcaption>
        </figure>
        <a
          href="http://github.com/${user.login}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>${user.name}</p>
          <span>/${user.login}</span>
        </a>
      </td>
      <td>${user.public_repos}</td>
      <td>${user.followers}</td>
      <td>
        <button type="button" title="Remover usuário da lista">
          Remover
        </button>
      </td>\
    `;
    tr.innerHTML = row;
    return tr;
  }

  assignEvents() {
    this.searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.favoriteButton.click();
      }
    });

    this.favoriteButton.addEventListener("click", () => {
      const searchValue = this.searchInput.value;
      this.addUser(searchValue);
    });
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries));
  }

  update() {
    this.removeAllTr();
    this.entries.forEach((user) => {
      const row = this.createUserRow(user);

      row.querySelector("td button").onclick = () => {
        const isOk = confirm("Tem certeza que deseja deletar essa linha?");

        if (isOk) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });
  }
}
