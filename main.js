var images = ["Family.jpg" ,  "irfan.jpg", "FILIZ.jpg", "Ezgi2.jpg", "DENIZ.jpg", "OZAN.jpg", "Deniz+Ezgii.JPG", "sibilings2.jpg"];
var names = ["Family","Irfan Kula", "Filiz Kula", "Ezgi Kula", "Deniz Kula", "Ozan Kula", "Deniz and Ezgi", "Ezgi, Deniz, and Ozan"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 8
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
