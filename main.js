img=""
status1=""
object=[]
function setup(){
    canvas=createCanvas(380,380)
    video=createCapture(VIDEO)
    video.size(380,380)
    video.hide()
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modelloaded)
    document.getElementById("status").innerHTML="Status: Detecting object"
}
function draw(){
    image(video,0,0,380,380)
    if(status1 !="" )
    {
        r=random(255)
        g=random(255)
        b=random(255)
        objectDetector.detect(video,gotResult)
        for (var i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="status : object detected"
            document.getElementById("objectdetect").innerHTML="No. of Object Detected Are : "+object.length
            fill(r,g,b)
            percent=floor(object[i].confidence *100)
            text(object[i].label+" "+percent+" % ",object[i].x+15,object[i].y+15)
            noFill()
            stroke(r,g,b)
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }

    
}
    function modelloaded(){
        console.log("model loaded")
        status1=true
        
    }
    function gotResult(error,results){
        if(error){
            console.log(error)
        }
        else{
            console.log(results)
            object=results
        }
        
    }
