let emailImage = document.getElementById("email");

    emailImage.addEventListener('click', function(){
        navigator.clipboard.writeText('karovoets@hotmail.com');
        alert("Copied email" + " 'karovoets@hotmail.com' to clipboard");
    })
let phoneImage = document.getElementById("phone");

phoneImage.addEventListener('click', function(){
    navigator.clipboard.writeText('0498475237');
    alert("Copied phone number" + " '0498475237' to clipboard");
})