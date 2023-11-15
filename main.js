Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 camera=document.getElementById("camera");
 Webcam.attach('camera');

 function start(){
    Webcam.snap(function(data_uri)
    {
            document.getElementById("OUTPUT").innerHTML='<img id="selfie_image1" src="'+data_uri+'">'
});
 }