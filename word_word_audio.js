function write_word_word_audio(word_list) { //(heading, word_list)

  //document.write("<div class=\"section\"><div class=\"container\">");
  //document.write("<h2>" + heading + "</h2>")
  document.write("<table class=\"word-word-audio\">")
  for (i in word_list) {
    document.write("</tr><td>" + word_list[i][0] + "</td><td>" + word_list[i][1] + "</td></tr>");
    document.write("</tr><td colspan=\"2\"><audio class=\"fullwidth\" controls><source src=\"" + word_list[i][2] + "\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio></td></tr>")
  }
  document.write("</table>")
  //document.write("</div></div>");
}

function write_numbers(word_list) { // needs array of {"#":#, "number":number, "ipa":ipa, "audio":audio}


  document.write("<table class=\"word-word-audio-short\">")
  for (i in word_list) {
    document.write("</tr><td>" + word_list[i]["#"] + "</td><td>" + word_list[i]["number"] + "</td>");
    document.write("<td colspan=\"2\"><audio><source src=\"" + word_list[i]["audio"] + "\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio><button onclick=\"this.previousSibling.play()\">/")
document.write(word_list[i]["ipa"]);
document.write("/</button></td></tr>")
  }
  document.write("</table>")
}

