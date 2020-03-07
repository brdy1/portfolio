function showDialog(title, message, message2) {
    var dialog;
    var dialogheader;
    var dialogclose;
    var dialogtitle;
    var dialogcontent;
    var contentlineone;
    var contentlinetwo;
    dialog = document.getElementById('dialog');
    dialogtitle = document.getElementById('dialog-title');
    dialogcontent = document.getElementById('dialog-content');
    contentlineone = document.getElementById('content-lineone');
    contentlinetwo = document.getElementById('content-linetwo');
    dialog.style.visibility = "visible";
    dialogtitle.innerHTML = title;
    contentlineone.innerHTML = message;
    contentlinetwo.innerHTML = message2;
    dialogheader.setAttribute('style', 'width:' + dialogcontent.clientWidth + 'px')
}

function hideDialog() {
    var dialog = document.getElementById('dialog');
    dialog.style.visibility = "hidden"
}