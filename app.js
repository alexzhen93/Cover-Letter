var index = 0,
  text;
text = "Creative Cover Letter";

function typing() {
  if (index < text.length) {
    document.getElementById("text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typing, 100);
  }
}
typing();
