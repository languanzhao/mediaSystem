
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
