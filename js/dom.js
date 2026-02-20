
window.onload = function () {
    document.getElementById("newContent").style.display = "none";
    document.getElementById("filterContent").style.display = "none";
};



function showFilter() {
    let filterForm = document.getElementById("filterContent");
    let addForm = document.getElementById("newContent");

    addForm.style.display = "none";

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}


function showAddNew() {
    let filterForm = document.getElementById("filterContent");
    let addForm = document.getElementById("newContent");

    filterForm.style.display = "none";

    if (addForm.style.display === "none") {
        addForm.style.display = "block";
    } else {
        addForm.style.display = "none";
    }
}



function filterArticles() {
    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;

    let articles = document.querySelectorAll("#articleList article");

    articles.forEach(function (article) {

        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        }

        if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        }

        if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }

    });
}




function addNewArticle() {

    let title = document.getElementById("inputHeader").value;
    let text = document.getElementById("inputArticle").value;

    let type = "";
    let markerText = "";

    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
        markerText = "Opinion";
    }

    if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
        markerText = "Recipe";
    }

    if (document.getElementById("lifeRadio").checked) {
        type = "update";
        markerText = "Update";
    }

    if (title === "" || text === "" || type === "") {
        alert("Please complete all fields.");
        return;
    }

    let newArticle = document.createElement("article");
    newArticle.classList.add(type);

    let marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = markerText;

    let heading = document.createElement("h2");
    heading.textContent = title;

    let paragraph = document.createElement("p");
    paragraph.textContent = text;

    newArticle.appendChild(marker);
    newArticle.appendChild(heading);
    newArticle.appendChild(paragraph);

    document.getElementById("articleList").prepend(newArticle);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;

    document.getElementById("newContent").style.display = "none";
}
