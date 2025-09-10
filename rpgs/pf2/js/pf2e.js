function add_quickref_item(parent, data, type) {
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";

    var item = document.createElement("div");
    item.className += "item itemsize"
    item.innerHTML =
    '\
    <div class="item-icon iconsize icon-' + icon + '"></div>\
    <div class="item-text-container text">\
        <div class="item-title">' + title + '</div>\
        <div class="item-desc">' + subtitle + '</div>\
    </div>\
    ';

    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;

    item.onclick = function () {
        show_modal(data, color, type);
    }

    parent.appendChild(item);
}

function show_modal(data, color, type) {
    var title = data.title || "[no title]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    color = color || "black"

    $("body").addClass("modal-open");
    $("#modal").addClass("modal-visible");
    $("#modal-backdrop").css("height", window.innerHeight + "px");
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").text(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").text(subtitle);
    $("#modal-reference").text(reference);

    var bullets_html = bullets.map(function (item) { return "<p class=\"fonstsize\">" + item + "</p>"; }).join("\n<hr>\n");
    $("#modal-bullets").html(bullets_html);
}

function hide_modal() {
    $("body").removeClass("modal-open");
    $("#modal").removeClass("modal-visible");
}

function fill_section(data, parentname, type) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item, type);
    });
}

function init() {
    fill_section(data_action, "basic-actions", "Actions");
    fill_section(data_skill_acrobatics, "skill-acrobatics", "Skills");
    fill_section(data_skill_arcana, "skill-arcana", "Skills");
    fill_section(data_skill_athletics, "skill-athletics", "Skills");
    fill_section(data_skill_crafting, "skill-crafting", "Skills");
    fill_section(data_skill_deception, "skill-deception", "Skills");
    fill_section(data_skill_diplomacy, "skill-diplomacy", "Skills");
    fill_section(data_skill_intimidation, "skill-intimidation", "Skills");
    fill_section(data_skill_lore, "skill-lore", "Skills");
    fill_section(data_skill_medicine, "skill-medicine", "Skills");
    fill_section(data_skill_nature, "skill-nature", "Skills");
    fill_section(data_skill_occultism, "skill-occultism", "Skills");
    fill_section(data_skill_perception, "skill-perception", "Skills");
    fill_section(data_skill_performance, "skill-performance", "Skills");
    fill_section(data_skill_religion, "skill-religion", "Skills");
    fill_section(data_skill_society, "skill-society", "Skills");
    fill_section(data_skill_stealth, "skill-stealth", "Skills");
    fill_section(data_skill_thievery, "skill-thievery", "Skills");
    fill_section(data_skill_action, "skill-action", "Skills");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(init);
