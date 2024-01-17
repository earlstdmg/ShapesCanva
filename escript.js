const c = document.getElementById("oval1");
const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.ellipse(150, 70, 130, 30, 0, 0, Math.PI * 2);
        ctx.stroke();

const c1 = document.getElementById("oval2");
const ctx1 = c1.getContext("2d");
        ctx1.beginPath();
        ctx1.ellipse(150, 70, 130, 30, 0, 0, Math.PI * 2);
        ctx1.fill();

const c2 = document.getElementById("oval3");
const ctx2 = c2.getContext("2d");
        ctx2.beginPath();
        ctx2.ellipse(150, 70, 130, 30, 0, 0, Math.PI * 2);
        ctx2.fillStyle = 'white';
        ctx2.fill();

const circle1 = document.getElementById('circle1');
const c3Ctx = circle1.getContext('2d');
    c3Ctx.beginPath();
    c3Ctx.arc(140, 80, 50, 0, Math.PI * 2);
    c3Ctx.stroke();

const circle2 = document.getElementById('circle2');
const c4Ctx = circle2.getContext('2d');
    c4Ctx.beginPath();
    c4Ctx.arc(140, 80, 50, 0, Math.PI * 2); 
    c4Ctx.lineWidth = 3;
    c4Ctx.fill();

const circle3 = document.getElementById('circle3');
const c4Ctxx = circle3.getContext('2d');
    c4Ctxx.beginPath();
    c4Ctxx.arc(140, 80, 50, 0, Math.PI * 2); 
    c4Ctxx.fillStyle = 'red';
    c4Ctxx.lineWidth = 3;
    c4Ctxx.fill();

const rect1 = document.getElementById('rect1');
const rect1Ctx = rect1.getContext('2d');
    rect1Ctx.rect(55, 30, 200,90);
    rect1Ctx.stroke();
     
const rect2 = document.getElementById('rect2');
const rect2Ctx = rect2.getContext('2d');
    rect2Ctx.rect(55, 30, 200,90);
    rect2Ctx.fill();
     
const rect3 = document.getElementById('rect3');
const rect3Ctx = rect3.getContext('2d');
    rect3Ctx.rect(55, 30, 200,90);
    rect3Ctx.fillStyle = 'blue';
    rect3Ctx.fill();
     

const tri1 = document.getElementById('tri1');
const trictx1 = tri1.getContext('2d');

        trictx1.moveTo(100,20);
        trictx1.lineTo(175,100);
        trictx1.lineTo(20,100);
        trictx1.lineTo(100,20);
        trictx1.stroke();
        
const tri2 = document.getElementById('tri2');
const trictx2 = tri2.getContext('2d');

        trictx2.moveTo(100,20);
        trictx2.lineTo(175,100);
        trictx2.lineTo(20,100);
        trictx2.lineTo(100,20);
        trictx2.fill();

const tri3 = document.getElementById('tri3');
const trictx3 = tri3.getContext('2d');
        
        trictx3.moveTo(100,20);
        trictx3.lineTo(175,100);
        trictx3.lineTo(20,100);
        trictx3.lineTo(100,20);
        trictx3.fillStyle = 'purple';
        trictx3.fill();