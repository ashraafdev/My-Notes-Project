////// noteManagement.js //////
////// Written by Ashraf Hebboul //////

$(document).ready(function(){

  var OldNoteName = sessionStorage.getItem('noteName');
  var OldNoteDesc = sessionStorage.getItem('noteDesc');
  var lastModification = sessionStorage.getItem('LastModification');
  var NoteID = sessionStorage.getItem('NoteID');

  var date = new Date();

  var thisYear = date.getFullYear();

  var thisMonth = date.getMonth();
      thisMonth++;
      thisMonth = thisMonth.toString();

  var thisDay = date.getDate();
      thisDay = thisDay.toString();

  if (thisDay.length === 1) {
      thisDay = '0' + thisDay;
  }

  if (thisMonth.length === 1) {
      thisMonth = '0' + thisMonth;
  }


  $("#noteName").val(OldNoteName);
  $("#noteDesc").val(OldNoteDesc);
  $("#LastModification").val(lastModification);
    
  if ($("#noteName").val() === '' ) {
    if ($("#noteDesc").val() === '') {

      alert('Please Select a Note First!');
      location.href = 'Notes.html';

    }
  }

  $("#modifyNote").click(function() {

    if ($("#modifyNote").text() == "modify the note") {

      $("#noteName").removeAttr('disabled');
      $("#noteDesc").removeAttr('disabled');

      $("#modifyNote").text("Save Modification");

    } else {

      var newNoteName = $("#noteName").val();
      var newNoteDesc = $("#noteDesc").val();

      if (newNoteName === "") {
          if(newNoteDesc === "") {
              alert("Please fill Note Name & Note Description!");
              return;

          } else {
              alert("Please fill Note Name!");
              return;
          }

      } else if (newNoteDesc === "") {

          if (newNoteName !== "") {
              alert("Please fill Note Description!");
              return;
          }

      } else {
        
        localStorage.setItem('NoteName_'+NoteID,newNoteName);
        localStorage.setItem('NoteDesc_'+NoteID,newNoteDesc);
        localStorage.setItem('NoteDate_'+NoteID,thisDay+"/"+thisMonth+"/"+thisYear);

        $("#LastModification").val(thisDay+"/"+thisMonth+"/"+thisYear);
        alert("Note Was Changed Successfully!");
      }

      $("#noteName").attr('disabled','');
      $("#noteDesc").attr('disabled','');

      $("#modifyNote").text('modify the note');
    }

  });

  $("#cancelModification").click(function() {
    location.href = 'home.html';
  });

  $("#viewNotes").click(function() {
    location.href = 'Notes.html';
  });

  $("#newNote").click(function() {
    location.href = 'newNote.html';
  });

});