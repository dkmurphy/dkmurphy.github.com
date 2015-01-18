

function toggle_visible_class(className) {
    elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = (elements[i].style.display == 'none') ? '' : 'none';
    }
}




function write_conversation(conversation) {

  document.write("<h2>" + conversation[0]["french"] + "</h2>")

  document.write("<table>")
  document.write("<tr>")
  var button_list = [["french","Fr"], ["ipa", "FP"], ["audio", "FA"], ["spanish", "Es"], ["english", "En"], ["korean", "Ko"]];
  for (var j=0; j < button_list.length; j++) {
    if (button_list[j][0] in conversation[0]) {
      document.write("<td>")
      document.write("<button onclick=\"toggle_visible_class(\'")
      document.write(button_list[j][0])
      document.write("\')\">")
      document.write(button_list[j][1])
      document.write("</button>")
      document.write("</td>")
    }
  }
  document.write("</tr>")
  document.write("</table>")


  document.write("<table class=\"conversation\">")
  for (var i=0; i < conversation.length; i++) {
    for (var j=0; j < button_list.length; j++) {
      if (button_list[j][0] in conversation[i]) {
        if (button_list[j][0] !== "audio") {
          document.write("<tr class=\"")
          document.write(button_list[j][0])
          document.write("\"")
          if (button_list[j][0] == "spanish" || button_list[j][0] == "english" || button_list[j][0] == "korean") { // default these to hidden
          document.write(" style=\"display: none;\"")
          }
          document.write("><td>")
          if (button_list[j][0] == "ipa") {
            document.write("/");
            document.write(conversation[i][button_list[j][0]])
            document.write("/");
          } else {
          document.write(conversation[i][button_list[j][0]])
          }
          document.write("</td></tr>");
        } else {
          document.write("<tr class=\"audio\"><td colspan=\"2\"><audio class=\"fullwidth\" controls><source src=\"" + conversation[i]["audio"] + "\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio></td></tr>")
        }
      } else { }
    }   
    if (i+1 < conversation.length) {
    document.write("<tr class=\"rule\"><td>" + "<hr>" + "</td></tr>");
    }
  }

  document.write("</table>");
}

primeAudio = function(audio) { // just a hack so that when audio links are displayed, already primed
audio.play()
audio.pause()
primeAudio = function() {};
}

var audio = document.getElementById('conversation');
var segmentEnd;

audio.addEventListener('timeupdate', function (){
    if (segmentEnd && audio.currentTime >= segmentEnd) {
        audio.pause();
        segmentEnd = null;
    }   
    // console.log(audio.currentTime);
}, false);

function playSegment(startTime, endTime){
    segmentEnd = endTime;
    audio.currentTime = startTime;
    audio.play();
}




function write_conversation_segment(conversation) {

  document.write("<h2>" + conversation[0]["french"] + "</h2>")

  document.write("<table>")
  document.write("<tr>")
  var button_list = [["french","Fr"], ["ipa", "FP"], ["audio", "FA"], ["audio_segment", "FA"], ["spanish", "Es"], ["english", "En"], ["korean", "Ko"]];
  for (var j=0; j < button_list.length; j++) {
    if (button_list[j][0] in conversation[0]) {
      document.write("<td>")
      if (button_list[j][0] == "audio_segment") {
        document.write("<button onclick=\"primeAudio(audio); toggle_visible_class(\'")
      } else {
        document.write("<button onclick=\"toggle_visible_class(\'")
      }
      document.write(button_list[j][0])
      document.write("\')\">")
      document.write(button_list[j][1])
      document.write("</button>")
      document.write("</td>")
    }
  }
  document.write("</tr>")
  document.write("</table>")


  document.write("<table class=\"conversation\">")
  for (var i=0; i < conversation.length; i++) {
    for (var j=0; j < button_list.length; j++) {
      if (button_list[j][0] in conversation[i]) {
        if (button_list[j][0] !== "audio" && button_list[j][0] !== "audio_segment") {
          document.write("<tr class=\"")
          document.write(button_list[j][0])
          document.write("\"")
          if (button_list[j][0] == "spanish" || button_list[j][0] == "english" || button_list[j][0] == "korean") { // default these to hidden
          document.write(" style=\"display: none;\"")
          }
          document.write("><td>")
          if (button_list[j][0] == "ipa") {
            document.write("/");
            document.write(conversation[i][button_list[j][0]])
            document.write("/");
          } else {
          document.write(conversation[i][button_list[j][0]])
          }
          document.write("</td></tr>");
        } else if (button_list[j][0] == "audio") {
          document.write("<tr class=\"audio\"><td colspan=\"2\"><audio class=\"fullwidth\" controls><source src=\"" + conversation[i]["audio"] + "\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio></td></tr>")
        } else {
          if (conversation[i]["audio_segment"].length == 1) {
              var playRange = conversation[i]["audio_segment"][0].toString()
          } else {
              var playRange = conversation[i]["audio_segment"][0].toString() + ", " + conversation[i]["audio_segment"][1].toString()
          }
          document.write("<tr class=\"audio_segment\" style=\"display: none;\"><td colspan=\"2\"><a href=\"javascript:playSegment(" + playRange +");\">Play Audio Segment</a></td></tr>")
           // audio_segment initially display none because when it is displayed byu button press, the audio gets primed
        }
      } else { }
    }   
    if (i+1 < conversation.length) {
    document.write("<tr class=\"rule\"><td>" + "<hr>" + "</td></tr>");
    }
  }

  document.write("</table>");
}



