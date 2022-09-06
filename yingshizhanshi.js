// 点击添加键，出现添加界面
function btnbtn() {
    var btnbtn = document.querySelector(".btnbtn");
    var yingshi = document.querySelector(".yingshi");
    var add1 = document.querySelector(".add1");
    yingshi.style.filter = "blur(10px)";
    add1.style.display = "block";
}
//上传图片并展示
$("#logoimg").on('change', function () {
    var file = this.files[0];//获取文件信息
    if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        //监听文件读取结束后事件    
        reader.onloadend = function (e) {
            $("#showlogo").attr("src", e.target.result);
        };
    }
})
// 点击添加界面的确定，添加新的记录
function sure() {
    var sure = document.querySelector(".sure");
    var yingshi = document.querySelector(".yingshi");
    var add1 = document.querySelector(".add1");
    yingshi.style.display = "block";
    add1.style.display = "none";
    yingshi.style.filter = "blur(0px)";

    // 1、获取输入的值
    var filename = document.getElementById("filename");
    var filecategory = document.getElementById("filecategory");
    var filetime = document.getElementById("filetime");
    var fileevaluation = document.getElementById("fileevaluation");
    if (filename.value != '' && filecategory.value != '' && filetime.value != '' && fileevaluation.value != '') {
        // 2、给类ystable添加子元素tr，给tr添加子元素td
        // 3、将获取的值赋值给新添加的元素
        var ystable1 = document.querySelector(".ystable1");
        var tr = document.createElement('tr');
        tr.classList.add("ystr");
        ystable1.appendChild(tr);
        var td1 = document.createElement("td");
        var img = document.createElement("img");
        var showlogo = document.querySelector("#showlogo");
        img.src = showlogo.src;
        img.classList.add("slt");
        td1.appendChild(img);
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.innerHTML = filename.value;
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        td3.innerHTML = filecategory.value;
        tr.appendChild(td3);
        var td4 = document.createElement("td");
        td4.innerHTML = filetime.value;
        tr.appendChild(td4);
        var td5 = document.createElement("td");
        td5.innerHTML = fileevaluation.value;
        td5.style.display = "none";
        tr.appendChild(td5);
        var td6 = document.createElement("td");
        td6.innerHTML = '<a href="#" class="brown edit" onclick="edit(this)">编辑</a>  <a href="#" class="blue" onclick="del(this)">删除</a>';
        tr.appendChild(td6);

        showlogo.src = '';
        filename.value = '';
        filecategory.value = '';
        filetime.value = '';
        fileevaluation.value = '';
    }


}

// 点击取消键，返回主页
function cancel() {
    var cancel = document.querySelector(".cancel");
    var yingshi = document.querySelector(".yingshi");
    var add1 = document.querySelector(".add1");
    var ask19881 = document.querySelector(".ask19881");
    yingshi.style.display = "block";
    add1.style.display = "none";
    ask19881.style.display = "none";
    yingshi.style.filter = "blur(0px)";
}
//点击删除键，删除某条记录
function del(obj) {
    var msg = "您真的确定要删除吗？\n请确认！";
    if (confirm(msg) == true) {
        obj.parentNode.parentNode.remove();
    } else {
        return false;
    }
}

//详情页
// 点击编辑，弹出详情页
function edit(obj) {
    var father = obj.parentNode.parentNode;
    var son1 = obj.parentNode.parentNode.children;
    for (var i = 0; i < son1.length; i++) {
        if (i == 0) {
            var a = son1[i].firstElementChild;
            console.log(a.src);
        } else console.log(son1[i].innerHTML);

    }
    //详情页面，tbody
    var detialimg = document.querySelector('.detialimg');
    detialimg.src = son1[0].firstElementChild.src;
    detialimg.alt = son1[1].innerHTML;
    var detialname = document.querySelector('.detialname');
    detialname.value = son1[1].innerHTML;
    var detialcategory = document.querySelector('.detialcategory');
    detialcategory.value = son1[2].innerHTML;
    var detialtime = document.querySelector('.detialtime');
    detialtime.value = son1[3].innerHTML;
    var detialevaluation = document.querySelector('.detialevaluation');
    detialevaluation.innerHTML = son1[4].innerHTML;

    var yingshi = document.querySelector(".yingshi");
    var ask19881 = document.querySelector(".ask19881");
    ask19881.style.display = "block";
    yingshi.style.display = "none";

    var detialsure = document.querySelector('.detialsure');
    detialsure.onclick = function () {
        var yingshi = document.querySelector(".yingshi");
        var ask19881 = document.querySelector(".ask19881");
        yingshi.style.display = "block";
        ask19881.style.display = "none";

        son1[1].innerHTML = detialname.value;
        son1[2].innerHTML = detialcategory.value;
        son1[3].innerHTML = detialtime.value;
        son1[4].innerHTML = detialevaluation.innerHTML;
    }

}

