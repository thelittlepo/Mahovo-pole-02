$("img").mouseenter (function() {
  $("audio")[0].play()
})
$("img").mouseleave (function() {
  $("audio")[0].pause()
})
