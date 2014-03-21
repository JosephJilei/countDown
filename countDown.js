/**
 * @author:Joseph
 * 计时器
 * @parameter {Number} timestamp
 * @parameter {Object} config 
 */
 (function(window,undefined){
 	var CountDown=function(timestamp,config){
		this.timestamp=timestamp;
		this.config=config;
		this.init();
	};
	CountDown.prototype={
		init:function(){
			this.main();
		},
		addZero:function(num,digit){
			var strNum=''+num;
			digit=digit || 2;
			if(strNum.length<digit){
				strNum='0'+strNum;
			}
			return strNum;
		},
		main:function(){
			var oResult={},
				oDateNow=null,
				iTimes=0;
			oDateNow=new Date();
			//时间差秒
			iTimes=(this.timestamp-oDateNow.getTime()) / 1000;
			oDateEnd=oDateNow=null;
			if(iTimes<0){
				clearInterval(this.timer);
				return false;
			}
			//天
			//取整数的天 余数的天取小时
			oResult.days=parseInt(iTimes / 86400);	
			iTimes=iTimes % 86400;
			//时
			oResult.hours=parseInt(iTimes/3600);
			iTimes=iTimes % 3600;
			//分
			oResult.minutes=parseInt(iTimes/60);
			iTimes=iTimes % 60;
			//秒
			oResult.seconds=parseInt(iTimes);
			this.config.days.innerHTML=this.addZero(oResult.days);
			this.config.hours.innerHTML=this.addZero(oResult.hours);
			this.config.minutes.innerHTML=this.addZero(oResult.minutes);
			this.config.seconds.innerHTML=this.addZero(oResult.seconds);
			var self=this;
			this.timer=setTimeout(function(){
				self.main();
			},1000);
		}
	};
	window.countdown=function(timestamp,config){
		new CountDown(timestamp,config);
	}
 })(this);
