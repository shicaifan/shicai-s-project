$(function() {
		//提示信息
		var tip = $("#tips");
		var marqHtml = [
					'<div id="tips" style="text-align:left;color:red;margin-bottom:10px;">',
					 '<Strong style="font-size:18px">',
					'More information is coming!',
					'</Strong>',
					'</div>',
		].join('');
		tip.append(marqHtml);

//-----------------------------地图---------------------------------
// 百度地图API功能
	/*var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom("珠海", 15);  // 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("珠海");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
*/
    // header插入
    var header = $("#header");
    var headerHTML = [
		
        '<header>',
        '    <a class="logo" href="http://www.ieee.org/"><img src="images/ieee_white.png" alt="ieee"></a>',
        '    <div class="banner">',
        '        <h1>IEEE ICNSC 2019</h1>',
        '        <p>16th IEEE International Conference on Networking, Sensing and Control</p>',
        '        <p>May 9-11, 2019</p>',
        '        <p>Banff, Canada</p>',
        '        <a href="calls_for_papers.html" class="btn">Call for Papers</a>',
        '    </div>',  
        '    <nav class="text-center">',
        '        <ul class="list-inline">',
        '            <li class="nav-top"><a href="index.html">Home</a>',
        '            </li>',
        '            <li class="nav-top">',
        '                <a>Committees&nbsp;&nbsp;</a>',
        '                <ul class="slideDown text-left">',
		'					<li>',
        '                        <a href="Steering_Committee.html">Steering Committee</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="Organizing_committee.html">Organizing committee</a>',    
        '                   </li>',
        '                    <li>',
        '                        <a href="Program_committee.html">Program committee</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="Contact.html">Contact</a>',
        '                    </li>',
        '                </ul>',
        '            </li>',
		'            <li class="nav-top"><a>Submissions&nbsp;&nbsp;</a>',
        '                <ul class="slideDown text-left">',
        '                    <li>',
        '                        <a href="calls_for_papers.html">Call for Papers</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="Special_Issues.html">Special Issues</a>',
        '                    </li>',
        '                </ul>',
        '            </li>',
		'            <li class="nav-top"><a href="finalSubmission.html">Final Submission&nbsp;&nbsp;</a>',
        '                <ul class="slideDown text-left">',
        '                </ul>',
        '            </li>',
        '            <li class="nav-top"><a>Program&nbsp;&nbsp;</a>',// <span class="fa fa-sort-desc"></span> 小方框 语句
        '                <ul class="slideDown text-left">',
        '                    <li>',
        '                        <a href="Program.html">ICNSC Conference Program</a>',
        '                    </li>',
        '                </ul>',
        '            </li>',
        '            <li class="nav-top"><a href="Registration.html">Registration&nbsp;&nbsp;</a>',
        '                <ul class="slideDown text-left">',
        '                </ul>',
        '            </li>',
        '            <li class="nav-top"><a href="Lodging_Travel.html">Lodging/Travel </a>',
        '                <ul class="slideDown text-left">',
        '                </ul>',
        '            </li>',
        '        </ul>',
        '    </nav>',
		
        '</header>',

    ].join('');

    header.html(headerHTML);

    // footer插入
    var footer = $("#footer")
    var footerHTML = [

        '<footer class="text-center container">',
        '   <h4 class="text-left">Sponsors & Organizers:</h4>',
        '    <ul class="list-inline text-center container">',
        //        <li class="col-lg-3">',
        //            <a href="http://www.ieee.org/"><img src="images/logo1.jpg" alt="ieee"></a>',
        //        </li>',
        '        <li class="col-lg-3">',
        '            <a href="http://www.ieeesmc.org/"><img src="images/logo2.jpg" alt="ras"></a>',
        '        </li>',
        //    </ul>',
        //    <ul class="list-inline text-center container">',
        '        <li class="col-lg-3">',
        '            <a href="http://www.jnu.edu.cn/"><img src="images/nanligong.jpg" alt="nlg"></a>',
        '        </li>',
        //        <li class="col-lg-3">',
        //            <a href="http://www.must.edu.mo/"><img src="images/macautechnology.jpg" alt="must"></a>',
        //        </li>',
                // <li class="col-lg-3">',
                    // <a href="http://www.whut.edu.cn/"><img src="images/wuhan.jpg" alt="must"></a>',
        //        </li>',
        '    </ul>',
        '</footer>',
    ].join('');

    footer.html(footerHTML);

    // 插入模态框
    var modalHtml = [
        '<div class="modal fade" id="modal">',
        '    <div class="modal-dialog modal-lg" style="width:80%;">',
        '        <div class="modal-content">',
        '            <div class="modal-header">',
        '                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>',
        '                <h4 class="modal-title" id="myModalLabel">Lodgin/Travel</h4>',
        '            </div>',
        '            <div class="modal-body">',
        '            </div>',
        '            <div class="modal-footer">',
        '                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
        '            </div>',
        '        </div>',
        '    </div>',
        '</div>',
        '<script src="bootstrap.js"></script>'
    ].join('');

    $('body').append(modalHtml)
	
	
    // 点击查看原图
    $(".img-thumbnail").click(function(e) {
        var modal = $("#modal");
        var modalTitle = $(".modal-title")
        var modalBody = $(".modal-body");
        var _this = $(this).clone();
        $(".modal-body img").remove();
        modalTitle.text(_this.attr("alt"));
        modalBody.append(_this);
        modal.modal();
    })

    // 添加active, 路径导航
    var navTop = $('.nav-top');
    var slideDown = $('.slideDown');
    chooseActive();
    breadcrumb_title();


    // 导航栏事件绑定    
    navTop.hover(function(e) {
        var _this = $(this);
        var index = _this.index() - 1;
        _this.addClass('active');
        if (index >= 0) {
            slideDown.eq(index).show();
        }

    }, function(e) {
        var _this = $(this);
        var index = _this.index() - 1;
        _this.removeClass('active');
        if (index >= 0) {
            slideDown.eq(index).hide();
        }
        chooseActive();
    })

    // 导航栏active, 路径导航
    function chooseActive() {
        var pathname = window.location.pathname;
		  var path = pathname.substring(pathname.lastIndexOf('/')+1,pathname.lastIndexOf('.'));
        switch (path) {
            case 'index':
                navTop.eq(0).addClass('active');
                break;
			case 'Steering_Committee':
                navTop.eq(1).addClass('active');
                break;
            case 'Organizing_committee':
                navTop.eq(1).addClass('active');
                break;
            case 'Program_committee':
                navTop.eq(1).addClass('active');
                break;
            case 'Contact':
                navTop.eq(1).addClass('active');
                break;
            case 'calls_for_papers':
                navTop.eq(2).addClass('active');
                break;
            case 'Special_Issues':
                navTop.eq(2).addClass('active');
                break;
			case 'finalSubmission':
				navTop.eq(3).addClass('active');
				break;
			case 'Program':
				navTop.eq(4).addClass('active');
				break;
			case 'Registration':
				navTop.eq(5).addClass('active');
				break;
			case 'Lodging_Travel':
				navTop.eq(6).addClass('active');
				break;
			
            default:
                navTop.eq(0).addClass('active');
        }
    }
    function breadcrumb_title() {
		if($("h2").text()!=""){
		var bcTitle = $("h2").text();
        var pagetitle = $("h2").text()+"_ICNSC2019";
        var title = $("title");
        if (pagetitle !== '') {

            if (pagetitle === 'Templates') {
                liHtml = [

                    '<ul class="breadcrumb container">',
                    '<li><a href="/">Home</a></li>',
                    '<li>' + 'Paper Submission' + '</li>',
                    '</ul>'
                ].join('');
                header.append(liHtml);
                title.text('Paper Submission');
                return;
            }
            liHtml = [
             //   '<ul class="breadcrumb container">',
             //   '<li><a href="/">Home</a></li>',
              //  '<li>' + bcTitle + '</li>',
              //  '</ul>'
            ].join('');
            $('#anchor').append(liHtml);
            title.text(pagetitle);
        }}
    }

})