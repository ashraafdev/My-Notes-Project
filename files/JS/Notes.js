////// Notes.js //////
////// Written By Ashref Hebboul //////

$(document).ready(function(){

  var noteName = "";
  var noteDesc = "";
  var NoteID = 1;
  var TotalNotes = parseInt(localStorage.getItem('TotalNotes'));
  var TotalNotesAdded = 0;
  var LastModification = "";

  if ( TotalNotes === 0 || TotalNotes === null ) {

    alert('No Notes Found, Please Write a New Note!');
    location.href = 'newnote.html';

  } else {

    while (TotalNotesAdded <= TotalNotes) {

      if (TotalNotesAdded === TotalNotes) {
        break;
      }

      noteName = localStorage.getItem('NoteName_'+NoteID);
  
      if (noteName === null) {
        NoteID++;
  
      } else if (noteName !== null) { 

        var newNoteID = parseInt(TotalNotes) - 1;
  
        noteDesc = localStorage.getItem('NoteDesc_'+NoteID);
        LastModification = localStorage.getItem('NoteDate_'+NoteID);

        $('#notesTable').append(
            "<tr><td>"+noteName+"</td>"+
            "<td style='display: flex; justify-content: center; flex-wrap: wrap;'>"+
            "<button type='button' class='btn btn-primary' style='background-color:#6862c6; margin-right:4px; border:none; box-shadow: none;' onclick='sessionStorage.setItem("+'"'+'NoteID'+'"'+","+'"'+NoteID+'"'+"); sessionStorage.setItem("+'"'+'noteName'+'"'+","+'"'+noteName+'"'+"); sessionStorage.setItem("+'"'+'noteDesc'+'"'+","+'"'+noteDesc+'"'+"); sessionStorage.setItem("+'"'+'LastModification'+'"'+","+'"'+LastModification+'"'+"); location.href ="+'"'+'note-management.html'+'"'+";'>View/Modify Note</button>"+
            "<button type='button' class='btn btn-primary' style='background-color:#cd7e7e; margin-left:4px; border:none; box-shadow: none;' onclick='localStorage.removeItem("+'"'+'NoteName_'+NoteID+'"'+"); localStorage.removeItem("+'"'+'NoteDesc_'+NoteID+'"'+"); localStorage.removeItem("+'"'+'NoteDate_'+NoteID+'"'+"); localStorage.setItem("+'"'+'TotalNotes'+'"'+","+'"'+newNoteID.toString()+'"'+"); location.href ="+'"'+'notes.html'+'"'+";'>Delete Note</button></tr>"
        );
          
        NoteID++;
        TotalNotesAdded++;
      }
    }
  }
  
  $("#newNote").click(function() {
    location.href = 'newNote.html';
  });

});