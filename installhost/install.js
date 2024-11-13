$(document).ready(function() {
    $('.restart').click(function() {
        downloadHost()
    })

    function downloadHost() {
        var downloadUrl = "./growland.txt"; 
        var anchor = document.createElement('a');
        anchor.href = downloadUrl;
        anchor.download = "growland.txt";
        document.body.appendChild(anchor);
      
        anchor.click();
      
        document.body.removeChild(anchor);
        $('.restart').fadeIn().css('display','flex')
    }
    downloadHost()
})
