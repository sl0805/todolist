function _Del_all(){
    var list=document.querySelectorAll("#List>li");
    var i;
    for(i=0;i<list.length;i++)
    {
        list[i].remove();
    }
}
function del_single(d){
    d.parentNode.remove(d.parentNode);
}
function revise(edit){
    var el=document.createElement("li");
    var e=document.createElement("input");
    el.id="edit_thing";
    e.type="text";
    e.id="revise";
    e.value=edit.parentNode.children[0].innerHTML;
    el.appendChild(e);
    var ok=document.createElement("button");
    ok.appendChild(document.createTextNode("修改完成"));
    ok.className="edit_button";
    ok.onclick=function(){
        var record=document.createElement("li");
        var content=e;
        var _r=document.createElement("li");
        if(content.value=='')
        alert("修改内容不能为空！");
        else{
            _r.innerHTML=content.value;
            record.appendChild(_r);
            var button=document.createElement("button");
            button.appendChild(document.createTextNode("删除"));
            button.id="button";
            button.onclick=function(){ 
                del_single(button);
            };
            record.appendChild(button);
            var edit=document.createElement("button");
            edit.appendChild(document.createTextNode("修改"));
            edit.id="button";
            edit.onclick=function(){
                revise(edit);
            };
            record.appendChild(edit);
            record.id="thing";
            ok.parentNode.parentNode.replaceChild(record,ok.parentNode);
        }
    };
    el.appendChild(ok);
    edit.parentNode.parentNode.replaceChild(el,edit.parentNode);
    edit.parentNode.parentNode.appendChild(el);
}
function _Add(){
    var l=document.getElementById("_add").value;
    if(l=='')
    alert("内容不能为空！");
    else{
        var a_l=document.createElement("li");
        var li=document.createElement("li");
        var ul=document.getElementById("List");
        a_l.innerHTML=l;
        li.appendChild(a_l);
        ul.appendChild(li);
        var button=document.createElement("button");
        button.appendChild(document.createTextNode("删除"));
        button.id="button";
        button.onclick=function(){ 
            del_single(button);
        };
        ul.lastChild.appendChild(button);
        var edit=document.createElement("button");
        edit.appendChild(document.createTextNode("修改"));
        edit.id="button";
        edit.onclick=function(){
            revise(edit);
        }
        li.id="thing";
        ul.lastChild.appendChild(edit);
        document.getElementById("_add").value='';
    }
}