/////// newNote.js ////////
////// Write By Ashraf Hebboul //////

$(document).ready(function(){
    
    /// check if is already a CountTotal of Tasks
    var CheckCountTasks = localStorage.getItem('TotalNotes');

    if (CheckCountTasks === null) {
        localStorage.setItem("TotalNotes","0");
    }

    $("#addNote").click(function() {

        var NotesTotal = 0;
        var isAlreadyTaken = false;
        var noteName = $("#noteName").val();
        var noteDesc = $("#noteDesc").val();
        var TotalNotes = parseInt(localStorage.getItem("TotalNotes"));

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


        /// Check if Note Name & Note Description is Empty or Not!
        if (noteName === "") {
            if(noteDesc === "") {

                alert("Please fill Note Name & Note Description!");
                return;

            } else {

                alert("Please fill Note Name!");
                return;

            }

        } else if (noteDesc === "") {
            if (noteName !== "") {
                alert("Please fill Note Description!");
                return;
            }
        }

        if (TotalNotes === 0) {
            /// Add Note to Local Storage When TotalNotes Equal 0

            NotesTotal = parseInt(localStorage.getItem("TotalNotes"));
            NotesTotal++;

            localStorage.setItem("TotalNotes",NotesTotal.toString());
            localStorage.setItem('NoteName_'+NotesTotal,noteName);
            localStorage.setItem('NoteDesc_'+NotesTotal,noteDesc);
            localStorage.setItem('NoteDate_'+NotesTotal,thisDay+"/"+thisMonth+"/"+thisYear);

            /// DONE!!
            alert("Note was Added Successfully!");
        
        } else {

            var i = 1;

            while (i <= TotalNotes) {

                i = i.toString();
                var getNoteName = localStorage.getItem('NoteName_'+i);

                if (getNoteName === null) {

                    i++

                } else if (getNoteName !== null) {
       
                    if (getNoteName === noteName) {
    
                        isAlreadyTaken = true;
                        alert("Please Select Another Name of Note, This Name is Already Taken!");
                        return;
    
                    } else {
    
                        i++
                    }

                }

            }

            isAlreadyTaken = false;

            if (isAlreadyTaken === false) {

                /// Add Note to Local Storage
                NotesTotal = parseInt(localStorage.getItem("TotalNotes"));
                NotesTotal++;

                localStorage.setItem("TotalNotes",NotesTotal.toString());
                localStorage.setItem('NoteName_'+NotesTotal,noteName);
                localStorage.setItem('NoteDesc_'+NotesTotal,noteDesc);
                localStorage.setItem('NoteDate_'+NotesTotal,thisDay+"/"+thisMonth+"/"+thisYear);
                
                /// DONE!!
                alert("Note was Added Successfully!");
            }
        }
    
    });

    $("#clearData").click(function() {
        $("#noteName").val("");
        $("#noteDesc").val("");
    });

    $("#cancelNote").click(function() {
        location.href = 'home.html';
    });

    $("#viewNote").click(function() {
        location.href = 'notes.html';
    });

});