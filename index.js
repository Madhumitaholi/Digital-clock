function clock()
{
    var hours=document.getElementById("hour");
    var minutes=document.getElementById("minu");
    var seconds=document.getElementById("seco");
    var am=document.getElementById("am");
    
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm="AM";
    
    if(hrs==0)
    {
        hrs=12;
    }
    if(hrs>12)
    {
        hrs=hrs-12;
        am_pm="PM";
    }
    if(hrs<10)
    {
        hrs="0"+hrs;
    }
    if(mins<10)
    {
        mins="0"+mins;
    }
    if(secs<10)
    {
        secs="0"+secs;
    }
    
    hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs;
    am.innerText=am_pm
}
setInterval(clock,1000)

function setTime()
{
    var a=document.getElementById("morning").value;
    var x=document.getElementById("afternoon").value;
    var y=document.getElementById("evening").value;
    var z=document.getElementById("night").value;
    
    var hour=new Date().getHours();
    if(a==hour){
        document.getElementById("txt1").innerText="GRAB SOME HEALTHY BREAKFAST"
        document.getElementById("box4").style.backgroundImage="url(./girl.png)"
        document.getElementById("txt2").innerText="GOOD MORNING!! WAKE UP!!"
        let res=document.getElementById("morning")
        let res1=res.value
        document.getElementById("out1").innerText=res1
    }
    if(x==hour)
    {
        document.getElementById("txt1").innerText="LET'S HAVE SOME LUNCH!!"
        document.getElementById("box4").style.backgroundImage="url(./lunch_time.png)"
        document.getElementById("txt2").innerText="GOOD AFTERNOON!!TAKE SOME SLEEP"
        let res=document.getElementById("afternoon").value
        document.getElementById("out2").innerText=res
    }
    if(y==hour)
    {
        document.getElementById("txt1").innerText="STOP YAWNING,GET SOME TEA..ITS JUST EVENING!"
        document.getElementById("box4").style.backgroundImage="url(./nap_time.png)"
        document.getElementById("txt2").innerText="GOOD EVENING!!"
        let res=document.getElementById("evening").value
        document.getElementById("out3").innerText=res
    }
    if(z==hour)
    {
        document.getElementById("txt1").innerText="CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById("box4").style.backgroundImage="url(./night.png)"
        document.getElementById("txt2").innerText="GOOD NIGHT!!"
        let res=document.getElementById("night").value
        document.getElementById("out4").innerText=res
    }
}
setTime()
