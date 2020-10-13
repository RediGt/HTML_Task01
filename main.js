function post() {
    let name = document.querySelector("#post-author").value;
    let content = document.querySelector("#post-body").value;
    let avatar = document.querySelector("#post-avatar").value;

    let section = document.createElement("section");
    section.classList.add("post");
    document.body.append(section);

    let image = document.createElement("img");
    image.classList.add("avatar");
    section.append(image);
    image.src = avatar;

    let span = document.createElement("span");
    span.classList.add("author");
    section.append(span);
    span.innerHTML = name;

    let paragraph = document.createElement("p");
    section.append(paragraph);
    paragraph.innerHTML = content;
}