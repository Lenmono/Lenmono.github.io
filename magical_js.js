//为所有行中的删除链接添加事件处理
function Delete(index)
{
	if(confirm("确认删除？"))
	{
		index.parentNode.parentNode.remove();
	}
	else 
	    return false;
}

// 点击取消键，返回主页
function cancel() 
{
    var cancel = document.querySelector(".cancel");
    var yingshi = document.querySelector(".container");
    var add1 = document.querySelector(".add");
    var ask19881 = document.querySelector(".edit");
    yingshi.style.display = "block";
    add1.style.display = "none";
    ask19881.style.display = "none";
    yingshi.style.filter = "blur(0px)";
}

//为所有行中的编辑链接添加事件处理
function modify(obj) 
{
    var father = obj.parentNode.parentNode;
    var son1 = obj.parentNode.parentNode.children;
    for(var i=0; i<son1.length; i++) 
	{
        if(i==0) 
		{
            var a = son1[i].firstElementChild;
            console.log(a.src);
        } 
		else 
		    console.log(son1[i].innerHTML);
    }
    //详情页面，tbody
    var detialimg = document.querySelector('.detialimg');  //剧照
    detialimg.src = son1[0].firstElementChild.src;
    detialimg.alt = son1[1].innerHTML;
    var detialname = document.querySelector('.detialname');  //影视名称
    detialname.value = son1[1].innerHTML;
    var detialcategory = document.querySelector('.detialclass');  //影视类别
    detialcategory.value = son1[2].innerHTML;
    var detialevaluation = document.querySelector('.detialsum');  //影评
    detialevaluation.innerHTML = son1[3].innerHTML;

    var yingshi = document.querySelector(".container");
    var ask19881 = document.querySelector(".edit");
    ask19881.style.display = "block";
    yingshi.style.display = "none";

    var detialsure = document.querySelector('.editsure');   //确定按钮
    detialsure.onclick = function () 
	{
        var yingshi = document.querySelector(".container");
        var ask19881 = document.querySelector(".edit");
        yingshi.style.display = "block";
        ask19881.style.display = "none";
        son1[1].innerHTML = detialname.value;
        son1[2].innerHTML = detialcategory.value;
        son1[3].innerHTML = detialevaluation.innerHTML;
    }
}

// 点击添加键，出现添加界面
function btn() 
{
    var btn = document.querySelector(".btn");
    var yingshi = document.querySelector(".container");
    var add1 = document.querySelector(".add");
    yingshi.style.filter = "blur(10px)";
    add1.style.display = "block";
}
//上传图片并展示
$("#logo").on('change', function () 
{
    var file = this.files[0];//获取文件信息
    if (window.FileReader) 
	{
        var fr = new FileReader();
        fr.readAsDataURL(file);
        //监听文件读取结束后事件    
        fr.onloadend = function (e) 
		{
            $("#showlogo").attr("src", e.target.result);
        };
    }
})
// 点击添加界面的确定，添加新的记录
function sure() 
{
    var sure = document.querySelector(".sure");
    var yingshi = document.querySelector(".container");
    var add1 = document.querySelector(".add");
    yingshi.style.display = "block";
    add1.style.display = "none";
    yingshi.style.filter = "blur(0px)";

    //获取输入的值
    var filename = document.getElementById("name");
    var filecategory = document.getElementById("class");
    var fileevaluation = document.getElementById("summary");
    if (filename.value != '' && filecategory.value != '' && fileevaluation.value != '') 
	{
        var ystable1 = document.querySelector(".tbodylist");
        var tr = document.createElement('tr');
        tr.classList.add("ttt");
        ystable1.appendChild(tr);
        var td1 = document.createElement("td");
        var img = document.createElement("img");
        var showlogo = document.querySelector("#showlogo");
        img.src = showlogo.src;
        img.classList.add("Pic");
        td1.appendChild(img);
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.innerHTML = filename.value;
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        td3.innerHTML = filecategory.value;
        tr.appendChild(td3);
        var td4 = document.createElement("td");
        td4.innerHTML = fileevaluation.value;
        tr.appendChild(td4);
        var td5 = document.createElement("td");
        td5.innerHTML = '<a href="#" id="e" class="button" onclick="modify(this)">编辑</a><br/><br/><br/><a href="#" id="d" class="button" onclick="Delete(this)">删除</a>';
        tr.appendChild(td5);
        showlogo.src = '';
        filename.value = '';
        filecategory.value = '';
        fileevaluation.value = '';
    }
}
