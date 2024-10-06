console.log("PopoutMap active");

open_window();

function open_window() {
    console.log("opening window");
    console.log(window.opener);
    if (window.opener) {
        for (var i = 0; i < document.body.children.length; i++) {
            if (document.body.children[i].tagName == 'DIV') {
                document.body.children[i].style.display = 'none';
            }
        }
        document.getElementById('editor-wrapper').style.display = 'block';
        document.getElementById('editor-wrapper').style.left = '0px';
        document.body.classList.add('sidebarhidden');
        document.getElementById('page-button').style.display = 'none';
    } else {
        var popup = window.open('https://app.roll20.net/editor/', '', 'width=1280, height=720');
    }
}