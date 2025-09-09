function add_quickref_item(parent, data, type) {
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";
    var url = data.url || "#";

    var link = document.createElement("a");
    link.href = url;
    link.className = "item-link";

    var item = document.createElement("div");
    item.className += "item itemsize";
    item.innerHTML =
        '<div class="item-icon iconsize icon-' + icon + '"></div>' +
        '<div class="item-text-container text">' +
        '<div class="item-title">' + title + '</div>' +
        '<div class="item-desc">' + subtitle + '</div>' +
        '</div>';

    link.appendChild(item);
    parent.appendChild(link);
}


function fill_section(data, parentname, type) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item, type);
    });
}

function init() {
    fill_section(data_index, "basic-index", "Index");
}

$(window).load(init);
