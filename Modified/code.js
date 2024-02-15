window.addEventListener("keydown", function(e){
    let codeKey = e.keyCode;
    let audioKey = document.querySelector(`audio[data-key="${codeKey}"]`);
    let key = document.querySelector(`section[data-key="${codeKey}"]`);
    audioKey.currentTime = 0;
    audioKey.play();
    key.classList.add("playing");
    audioKey.addEventListener("ended", function(){key.classList.remove("playing")});
});