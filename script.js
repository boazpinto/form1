function previewPic(){
   document.getElementById("preview").src=URL.createObjectURL(document.getElementById("file").files[0]);
   // document.getElementById("preview").src="no name.jpg"
}
