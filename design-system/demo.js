console.log('loaded base.js');

$(window).ready(function () {

  // modal open demo，動態效果依照現行
  $('body').on('click', '.trigger-modal', function(e){ 
    $(this).siblings('.vi-modal').toggleClass('vi-modal-in');
    $('body').addClass('modal-open');
  });
  
  // modal close demo，關閉時的動態效果依照現行
  $('body').on('click', '.vi-modal .popup-footer .vi-btn', function(e){ 
    $(this).closest('.vi-modal').toggleClass('vi-modal-in');
    $('body').removeClass('modal-open');
  });
  $('body').on('click', '.vi-modal .vi-modal-backdrop', function(e){ 
    $(this).closest('.vi-modal').toggleClass('vi-modal-in');
    $('body').removeClass('modal-open');
  });
  
  // 超人卡片 close demo，關閉時的動態效果依照現行
  const modalClose = document.getElementsByClassName('vi-modal-close');
  for (var i = 0; i < modalClose.length; i++){
    modalClose[i].addEventListener('click', function(e) {
      e.preventDefault();
      this.closest('.vi-modal').classList.toggle('vi-modal-in');
      this.closest('.vi-modal').classList.toggle('hide');
      document.body.classList.remove('modal-open');
    });
  }
  
  // 超人卡片 btn click demo，關閉時的動態效果依照現行
  $('.super-card .vi-btn-group .vi-btn').on('click', function() {
    $(this).closest('.vi-modal').toggleClass('vi-modal-in hide');
    $('body').removeClass('modal-open');
  });
  
  
  
  
});