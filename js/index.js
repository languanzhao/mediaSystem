
	    var list = [
			{
				name:'系统开'
			},
			{
				name:'开讲台锁'
			},
			{
				name:'投影机开'
			},
			{
				name:'幕布升'
			}
		]
		var btn1 = document.querySelector('.btn1')
		var html1 = ""
		for(var i = 0;i < list.length;i++){
           html1 += '<div>' + list[i].name + '</div>'
		}
		btn1.innerHTML = html1
		
//中间模块 遍历
var arr = [
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
	{
		name:'一教',
		ip:'172.19.15.7'
	},
]
		var center = document.querySelector('.centerBox')
		var html2 = ''
		for(var i= 0;i < arr.length;i++){
			html2 += `<div style="display: flex;justify-content:space-between;align-items: center;border-bottom: 1px solid #F3F3F3;height: 30px;padding:6px 6px 6px 20px;">
							<div class="iconfont duomeiti"></div>
							<div style="display: flex;flex-direction:column;">
								<div>` + arr[i].name + `</div>
								<div>` + arr[i].ip + `</div>
							</div>
							<div style="width: 12px;height: 12px;border-radius: 50%;background: #f3f3f3;"></div>
						</div>`
		}
		// center.innerHTML = html2

	var box = document.querySelector('.box')
var bar = document.querySelector('.bar')
var all = document.querySelector('.all')
var p = document.querySelector('p')
var cha = bar.offsetWidth - box.offsetWidth
box.onmousedown = function (ev) {
let boxL = box.offsetLeft
let e = ev || window.event //兼容性
let mouseX = e.clientX //鼠标按下的位置
window.onmousemove = function (ev) {
let e = ev || window.event
let moveL = e.clientX - mouseX //鼠标移动的距离
let newL = boxL + moveL //left值
// 判断最大值和最小值
if (newL < 0) {
newL = 0
}
if (newL >= cha) {
newL = cha
}
// 改变left值
box.style.left = newL + 'px'
// 计算比例
let bili = newL / cha * 100
p.innerHTML = '投影状态数据'+ Math.ceil(bili) + '%'
return false //取消默认事件
}
window.onmouseup = function () {
window.onmousemove = false //解绑移动事件
return false
}
return false
};
// 点击音量条
bar.onclick = function (ev) {
let left = ev.clientX - all.offsetLeft - box.offsetWidth / 2
if (left < 0) {
left = 0
}
if (left >= cha) {
left = cha
}
box.style.left = left + 'px'
let bili = left / cha * 100
p.innerHTML = '投影状态数据'+ Math.ceil(bili) + '%'
console.log(left)
return false
}
