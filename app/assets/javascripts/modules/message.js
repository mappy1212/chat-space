$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageBox" data-message-id=${message.id}>
          <div class="message">
            <div class="message__info">
              <div class="message__info--user">
                ${message.user_name}
              </div>
              <div class="message__info--time">
                ${message.created_at}
              </div>
            </div>
            <div class="message__content">
              <p class="Message__content">
                ${message.content}
              </p>
              <img class="Message__image" src="${message.image}">
            </div>
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
          <div class="message">
            <div class="message__info">
              <div class="message__info--user">
                ${message.user_name}
              </div>
              <div class="message__info--time">
                ${message.created_at}
              </div>
            </div>
              <div class="message__content">
                ${message.content}
              </div>
          </div>
        </div>`
      return html;
    };
  }

  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Main-Chat__message--list').append(html);      
      $('form')[0].reset();
      $('.Main-Chat__message--list').animate({ scrollTop: $('.Main-Chat__message--list')[0].scrollHeight});
      $('.send').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.send').prop("disabled", false);
    });
  });
});