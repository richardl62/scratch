var boxes = document.querySelectorAll(".box")
var n_boxes = boxes.length;

function random_int(limit)
{
    return Math.floor(Math.random() * limit)
}

function random_rgb()
{
    return "rgb(" + 
        random_int(256) + ", " +
        random_int(256) + ", " +
        random_int(256) + ")";
}

var selected_col;

function pick_colours() {
    for (i = 0; i < boxes.length; i++) {
        var col = random_rgb();
        console.log(col);

        boxes[i].style.backgroundColor = col;
        boxes[i].innerHTML = "Is it me?";
    }

    selected_col = boxes[random_int(n_boxes)].style.backgroundColor;

    document.querySelector("#target").innerHTML = selected_col;
}

pick_colours();

function box_click(box)
{
    if(box.style.backgroundColor == selected_col)
    {
        alert("You've found me!");
        pick_colours();
    }
    else
    {
        box.innerHTML = "Not me: I'm " + box.style.backgroundColor;
    }
}
