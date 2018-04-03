function randDir() {return Math.random()>0.5?1:-1}
function createStack(parent,count){var node=parent.querySelector('*')
var nodes=[node]
for(var i=0;i<count-1;i++){var newNode=node.cloneNode()
var offsetX=Math.random()>0.9?8:1
var offsetY=Math.random()>0.9?8:1
var rot=Math.random()>0.9?9:3
newNode.style.marginLeft=(randDir()*offsetX*Math.random())+'px'
newNode.style.marginTop=(i*4)+(randDir()*offsetY*Math.random())+'px'
newNode.style.transform='rotate('+(randDir()*rot*Math.random())+'deg)'
newNode.style.display='none'
parent.appendChild(newNode)
nodes.push(newNode)}
return nodes}
var stack=createStack(document.querySelector('.stack'),100)
var input=document.querySelector('.stack-input')
noUiSlider.create(input,{start:[0],step:1,range:{min:[0],max:[100]}})
var timeout
var prevValue=0
input.noUiSlider.on('update',function(values,handle){var origin=this.target.querySelector('.noUi-origin')
var handleX=origin.getBoundingClientRect().right
var label=this.target.querySelector('.label')
var labelLeft=label.getBoundingClientRect().left
var labelWidth=handleX-labelLeft+19
var value=parseInt(values[handle],10)
label.style.width=labelWidth+'px'
label.textContent=value+'%'
clearTimeout(timeout)
timeout=setTimeout(function(){var dir=value>prevValue?1:-1
for(var i=prevValue;dir>0?i<value:i>value;i+=dir){setTimeout((function(j){return function(){stack[j].style.display=dir>0?'block':'none'}})(i),5*(dir>0?i:prevValue-i))}
prevValue=value},100)})