var showPop = (function(){
   var Ment_attend = $('.menu_attend');
   var popAttend = document.getElementById('popAttend');
   var popButton = $('.pop_button');
  
   Ment_attend.onclick = function(){
     popAttend.style.display = '';
   }
   popButton.onclick = function(){
    popAttend.style.display = 'none';
   }
 
    var close = $$('.pop_close');
    for(var i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var contaion = this.parentElement.parentElement;
            contaion.style.display = 'none';
        }
    }


    var popBtn = $('#popFAQ .pop_button');
    var popFAQ = $('#popFAQ');
    popBtn.onclick = function(){
      popFAQ.style.display = 'none';
    }


   var popWx = $('.pop_wx');
   var popQq = $('.pop_qq');
   popWx.onclick = function(){
        popQq.classList.remove('selected');
        popWx.classList.add('selected');
   }
   popQq.onclick = function(){
    popWx.classList.remove('selected');
    popQq.classList.add('selected');
   }

   var popVideo = document.getElementById('popVideo');
   var AllVideo = popVideo.querySelector('video');
   var attendPlay = $('.attend_play');
attendPlay.onclick = function(){
  popVideo.style.display = '';
  AllVideo.play();
}
var closeBtn = $('#popVideo .pop_close')
closeBtn.addEventListener('click',function(){
  AllVideo.pause();
});
var gameDeatail = $('.game_detail');
var popDetail = $('#popDetail');
gameDeatail.onclick = function(){
  popDetail.style.display = '';
}
function showPop(id){
  var containers = $('#' + id);
  containers.style.display = '';
}
return showPop;
})()