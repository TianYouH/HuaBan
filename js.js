var obj = new Object;//创建一个对象
obj.bgcolor = "white";
obj.pencilColor = "black";
obj.pencilSize = 10;

function xiuGai(parameter){//每次修改参数调用此方法修改
    console.log("方法被调用")
    if (parameter.id =="bgcolor") {
        obj.bgcolor = parameter.value;
        bgReplace();
    }else if (parameter.id == "pencilColor") {
        obj.pencilColor = parameter.value;
    }else if (parameter.id == "pencilSize") {
        parameter.onblur = function () {//大小用失去焦点判断
            obj.pencilSize = parameter.value;
        }
    }
}

function bgReplace() {//背景选项更改调用
    document.body.style.backgroundColor = obj.bgcolor;
}



var header = document.getElementById("setLabel");//找到设置label
var headerBool = true;//创建一个为真的布尔
window.onmousemove = function (e) {   

     if (e.clientY<2&&headerBool) {//双判断防止方法持续调用
            headerBool = !headerBool;
           header.removeAttribute("hidden");
           console.log(header.hight);
       }
    if (e.clientY>220&&!headerBool) {
        headerBool = !headerBool;
        header.setAttribute("hidden","hidden");
    }
}

var huaBan = document.getElementById("drawingBoard");//找到画板div
var drawBool = true; //判断鼠标点击顺序
huaBan.onmousedown = function (e) {//画板上发生点击事件
    console.log("正在绘图");
        
        if (drawBool) {//为真开始绘图
            drawBool = !drawBool;
        huaBan.onmousemove = function (e) {
        var div = document.createElement('div');
        huaBan.appendChild(div);
        div.style.backgroundColor = obj.pencilColor;
        div.style.position = 'absolute';
        div.style.width = obj.pencilSize + "px";
        div.style.height = obj.pencilSize + "px";
        div.style.borderRadius = 50 + '%';
        div.style.top = e.clientY-obj.pencilSize/2 + 'px';
        div.style.left = e.clientX-obj.pencilSize/2 + 'px';
        
        }

        }else{//为假结束绘图
            drawBool = !drawBool;
            huaBan.onmousemove = null;
        }

}
header.onmouseover = function(){//当鼠标移动到设置板上时，将正在绘图结束。
    console.log("进入");
    if (!drawBool) {
        drawBool = !drawBool;
        huaBan.onmousemove = null;
    }
}

function qingKong() {//清空画板上所有标签
    console.log("清空")
    huaBan.innerHTML = '';
}