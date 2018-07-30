function htmlNewMsgUser(person, msg) {
      
      console.log('user');
      var msgHtml = '<li class="other">' +
        //'<a class="user" href="#"><img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/toffeenutdesign/128.jpg" /></a>' +
        '<div class="date">' +
          "Me" +
        '</div>' +
        '<div class="message">' +
          '<div class="hider">' +
            '<span>Click to read</span>' +
          '</div>' +
          '<p>' + msg +
          '</p>' +
        '</div>' +
      '</li>';
    return msgHtml;
}
function htmlNewMsgOther(person, msg) {
      
      var msgHtml = '<li class="you">' +
        //'<a class="user" href="#"><img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg" /></a>'
        '<div class="date">' +
          person.nickname +
        '</div>' +
        '<div class="message">' +
          '<div class="hider">' +
            '<span>Click to read</span>' +
          '</div>' +
          '<p>' +
          msg +
          '</p>' +
        '</div>' +
      '</li>';
    return msgHtml;
}
function htmlNewPerson(person) {
      
      var msgHtml = '<li class="other">' +
        '<div class="date">' +
          'Chat' +
        '</div>' +
        '<div class="message">' +
          '<div class="hider">' +
            '<span>Click to read</span>' +
          '</div>' +
          '<p>' + person.nickname + ' is now connected' +
          '</p>' +
        '</div>' +
      '</li>';
    return msgHtml;
}