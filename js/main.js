import dialogueItem from "./app.js";

const dialogueContainer = document.querySelector(".js--dialogue");
const dialogueMurkup = createDialogueItem(dialogueItem);
const formEl = document.querySelector(".js--form");
const textArea = document.querySelector(".js--textarea");

dialogueContainer.insertAdjacentHTML("beforeend", dialogueMurkup);
formEl.addEventListener("submit", writeArea);
formEl.addEventListener("keydown", onEnterPress);
findAtrrEl();

function createDialogueItem(dialogueItem) {
  return dialogueItem
    .map(({ avatar, description, sentence, name }) => {
      return `
    <li class="dialogue-list__item" data-name="${name}">
      <img
      class="dialogue-list__img"
      src="${avatar}"
      alt="${description}"
      />
      <p class="dialogue-list__text">
      ${sentence}
      </p>
  </li>
`;
    })
    .join("");
}
function writeArea(e) {
  e.preventDefault();
  const value = textArea.value;
  textArea.value = "";
  if (value === "") {
    return;
  }
  const newEl = `
  <li class="dialogue-list__item" data-name=Richardo>
    <img
    class="dialogue-list__img"
    src="https://randomuser.me/api/portraits/lego/2.jpg"
    alt="Richardo"
    />
    <p class="dialogue-list__text">
    ${value}
    </p>
</li>`;
  dialogueContainer.insertAdjacentHTML("beforeend", newEl);
  dialogueContainer.scrollTop = dialogueContainer.scrollHeight;
  findAtrrEl();
}
function findAtrrEl() {
  const liEl = document.querySelectorAll("[data-name]");
  for (let i of liEl) {
    if (i.matches("[data-name]")) {
      i.classList.add("animation");
    }
    if (i.matches("[data-name=Richardo]")) {
      i.classList.add("current--reverse");
    }
  }
}
function onEnterPress(e) {
  if (e.code === "Enter") {
    writeArea(e);
  }
}
