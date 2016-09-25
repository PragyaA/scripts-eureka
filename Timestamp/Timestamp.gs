function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Insert Date', 'insertDate')
      .addToUi();

}

function insertDate() {
  var cursor = DocumentApp.getActiveDocument().getCursor();
  if (cursor) {
      var d = new Date();
      var dd = d.getDate();
      dd = pad(dd, 2)
      var mm = d.getMonth() + 1;
      mm = pad(mm, 2)
      var yyyy = d.getFullYear();
    var date = dd + ":" + mm + ":" + yyyy + "::";
      var currentTime = d.toLocaleTimeString();
      var element = cursor.insertText(date + currentTime);
      if (element) {
        element.setForegroundColor('#5A6986');
      } else {
        DocumentApp.getUi().alert('Cannot insert text at this cursor location.');
      }
    } else {
      DocumentApp.getUi().alert('Cannot find a cursor in the document.');
  }

}
function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}