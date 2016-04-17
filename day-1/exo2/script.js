window.onload  = function(){
    document.getElementById("logButton").onclick = function(){
        document.getElementById("volet").style.display = "table";
        document.getElementById("backgroundFilter").style.display = "block";

        return false;
    };

    document.getElementById("close").onclick = function(){
        document.getElementById("volet").style.display = "none";
        document.getElementById("backgroundFilter").style.display = "none";
        return false;
    };

};