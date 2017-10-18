(function() {
	'use strict';
	/**
	 * (en)Tooltip for english 
	 * @ko 영문 Tooltip
	 * @group Config
	 * @name pinpointApp#helpContent-en
	 */
	var oHelp = {
		configuration: {
			general: {
				warning: "(用户配置存储在浏览器缓存中。服务器端存储将在未来的版本中得到支持。)",
				empty: "Favorite list empty"
			},
			alarmRules: {
				mainStyle: "",
				title: "报警规则类型",
				desc: "Pinpoint支持以下类型的警报规则。",
				category: [{
					title: "[Type]",
					items: [{
						name: "SLOW COUNT / 慢请求数",
						desc: "当应用发出的慢请求数量超过配置阈值时触发。"
					},{
						name: "SLOW RATE / 慢请求比例",
						desc: "当应用发出的慢请求百分比超过配置阈值时触发。"
					},{
						name: "ERROR COUNT / 请求失败数",
						desc: "当应用发出的失败请求数量超过配置阈值时触发。"
					},{
						name: "ERROR RATE / 请求失败率",
						desc: "当应用发出的失败请求百分比超过配置阈值时触发。"
					},{
						name: "TOTAL COUNT / 总数量",
						desc: "当应用发出的所有请求数量超过配置阈值时触发。"
					},{
						name: "SLOW COUNT TO CALLEE / 被调用的慢请求数量",
						desc: "当发送给应用的慢请求数量超过配置阈值时触发。"
					},{
						name: "SLOW RATE TO CALLEE / 被调用的慢请求比例",
						desc: "当发送给应用的慢请求百分比超过配置阈值时触发。"
					},{
						name: "ERROR COUNT TO CALLEE / 被调用的请求错误数",
						desc: "当发送给应用的请求失败数量超过配置阈值时触发。"
					},{
						name: "ERROR RATE TO CALLEE / 被调用的请求错误率",
						desc: "当发送给应用的请求失败百分比超过配置阈值时触发。"
					},{
						name: "TOTAL COUNT TO CALLEE / 被调用的总数量",
						desc: "当发送给应用的所有请求数量超过配置阈值时触发。"
					},{
						name: "HEAP USAGE RATE / 堆内存使用率",
						desc: "当应用的堆内存使用率超过配置阈值时触发。"
					},{
						name: "JVM CPU USAGE RATE / JVM CPU使用率",
						desc: "当应用的CPU使用率超过配置阈值时触发。"
					}]
				}]
			}
		},	
		navbar : {
			searchPeriod : {
				guide: "Search duration may not be greater than {{day}} days."
			},
			applicationSelector: {
				mainStyle: "",
				title: "应用程序列表",
				desc: "显示已安装的应用程序列表。",
				category : [{
					title: "[Legend]",
					items: [{
						name: "Icon",
						desc: "Application Type"
					}, {
						name: "Text",
						desc: "应用程序名称。在启动Pinpoint代理时使用applicationName名称的值。"
					}]
				}]
			},
			depth : {
				mainStyle: "",
				title: '<img src="images/inbound.png" width="22px" height="22px" style="margin-top:-4px;"> Inbound and <img src="images/outbound.png" width="22px" height="22px" style="margin-top:-4px"> Outbound',
				desc: "Search-depth of server map.",
				category : [{
					title: "[Legend]",
					items: [{
						name: "Inbound",
						desc: "向所选择的节点发送请求的深度的数量。"
					}, {
						name: "Outbound",
						desc: "从所选节点发出的请求的深度的数量"
					}]
				}]
			},
			periodSelector: {
				mainStyle: "",
				title: "时间选择",
				desc: "选择查询数据的时间段。",
				category: [{
					title: "[Usage]",
					items: [{
						name: "<button type='button' class='btn btn-success btn-xs'><span class='glyphicon glyphicon-th-list'></span></button>",
						desc: "查询在最近被选中的时间段内的数据。<br/>支持5分钟、20分钟、3小时等的时间查询周期自动刷新。"
					},{
						name: "<button type='button' class='btn btn-success btn-xs'><span class='glyphicon glyphicon-calendar'></span></button>",
						desc: "查询两个选择时间之间的数据，最长为48小时。"
					}]
				}]
			}
		},
		servermap : {
			"default": {
				mainStyle: "width:560px;",
				title: "Server Map / 服务器地图",
				desc: "显示分布式服务器映射的拓扑视图。",
				category: [{
					title: "[Node]",
					list: [
				       "每个节点都是应用程序的逻辑单元。",
				       "右上角的值表示分配给该应用程序的服务器实例的数量。(没有显示只有一个这样的实例)",
				       "如果在一个服务器实例中检测到错误/异常，就会在左上角显示一个警报图标。",
				       "单击一个节点将在屏幕右侧显示所有传入事务的信息。"
					]
				},{
					title: "[箭头指向]",
					list: [
						"每个箭头指向表示一个事务流。",
						"该数字显示事务计数，并且当事务有错误时用红色显示。",
						"<span class='glyphicon glyphicon-filter' style='color:green;'></span> 当一个过滤器被应用时就会显示出来。",
						"单击箭头将在屏幕右侧显示所选部分的所有事务的信息。"
				    ]
				},{
					title: "[Applying Filter]",
					list: [
				        "右键单击箭头会显示一个过滤器菜单。",
				        "'Filter' 过滤服务器映射，只显示经过选择的部分的事务。",
				        "'Filter Wizard' 允许额外的过滤配置。"
					]
				},{
					title: "[Chart Configuration]",
					list: [
				        "右键单击一个空白区域会显示一个图表配置菜单。",
				        "Node Setting / Merge Unknown : 将所有无代理的应用程序分组到一个单独的节点中。",
				        "双击一个空白区域，将重新设置服务器地图的缩放级别。"
					]
				}]
			} 
		},
		realtime: {
			"default": {
				mainStyle: "",
				title: "Realtime Active Thread Chart / 实时活动线程图表",
				desc: "实时显示每个代理的活动线程数。",
				category: [{
					title: "[Error Messages]",
					items: [{
						name: "UNSUPPORTED VERSION",
						desc: "Agent版本太老了。(请将Agent升级到1.5.0+)",
						nameStyle: "width:120px;border-bottom:1px solid gray",
						descStyle: "border-bottom:1px solid gray"
					},{
						name: "CLUSTER OPTION NOTSET",
						desc: "Option disabled by agent. (Please set profiler.pinpoint.activethread to true in profiler.config)",
						nameStyle: "width:120px;border-bottom:1px solid gray",
						descStyle: "border-bottom:1px solid gray"
					},{
						name: "TIMEOUT",
						desc: "Agent connection timed out receiving active thread count. Please contact the administrator if problem persists.",
						nameStyle: "width:120px;border-bottom:1px solid gray",
						descStyle: "border-bottom:1px solid gray"
					},{
						name: "NOT FOUND",
						desc: "Agent not found. (If you get this message while the agent is running, please set profiler.tcpdatasender.command.accept.enable to true in profiler.config)",
						nameStyle: "width:120px;border-bottom:1px solid gray",
						descStyle: "border-bottom:1px solid gray"
					},{
						name: "CLUSTER CHANNEL CLOSED",
						desc: "代理会话过期。",
						nameStyle: "width:120px;border-bottom:1px solid gray",
						descStyle: "border-bottom:1px solid gray"
					},{
						name: "PINPOINT INTERNAL ERROR",
						desc: "Pinpoint 内部错误。请与开发人员联系。",
						nameStyle: "width:120px;border-bottom:1px solid gray",
						descStyle: "border-bottom:1px solid gray"
					},{
						name: "No Active Thread",
						desc: "代理当前没有活动的线程。",
						nameStyle: "width:120px;border-bottom:1px solid gray",
						descStyle: "border-bottom:1px solid gray"
					},{
						name: "No Response",
						desc: "pinpoint没有响应。请与管理员联系。",
						nameStyle: "width:120px;border-bottom:1px solid gray",
						descStyle: "border-bottom:1px solid gray"
					}]
				}]
			}
		},	
		scatter : {
			"default": {
				mainStyle: "",
				title: "响应时间散点图",
				desc: "",
				category: [{
					title: "[Legend]",
					items: [{
						name: "<span class='glyphicon glyphicon-stop' style='color:#2ca02c'></span>",
						desc: "Successful Transaction"
					},{
						name: "<span class='glyphicon glyphicon-stop' style='color:#f53034'></span>",
						desc: "Failed Transaction"
					},{
						name: "X-axis",
						desc: "Transaction Timestamp (hh:mm)"
					},{
						name: "Y-axis",
						desc: "Response Time (ms)"
					}]
				},{
					title: "[Usage]",
					image: "<img src='/images/help/scatter_01.png' width='200px' height='125px'>",
					items: [{
						name: "<span class='glyphicon glyphicon-plus'></span>",
						desc: "拖动散点图表以显示所选事务的详细信息。"
					},{
						name: "<span class='glyphicon glyphicon-cog'></span>",
						desc: "设置y轴的最小值/最大值(响应时间)。"
					},{
						name: "<span class='glyphicon glyphicon-download-alt'></span>",
						desc: "下载图表作为一个图像文件。"
					},{
						name: "<span class='glyphicon glyphicon-fullscreen'></span>",
						desc: "在新窗口打开图表。"
					}]
				}]
			}
		},
		nodeInfoDetails: {
			responseSummary: {
				mainStyle: "",
				title: "响应总结表",
				desc: "",
				category: [{
					title: "[Legend]",
					items: [{
						name: "X-Axis",
						desc: "Response Time"
					},{
						name: "Y-Axis",
						desc: "Transaction Count"
					},{
						name: "<spanstyle='color:#2ca02c'>1s</span>",
						desc: "No. of Successful transactions (less than 1 second)"
					},{
						name: "<span style='color:#3c81fa'>3s</span>",
						desc: "No. of Successful transactions (1 ~ 3 seconds)"
					},{
						name: "<span style='color:#f8c731'>5s</span>",
						desc: "No. of Successful transactions (3 ~ 5 seconds)"
					},{
						name: "<span style='color:#f69124'>Slow</span>",
						desc: "No. of Successful transactions (greater than 5 seconds)"
					},{
						name: "<span style='color:#f53034'>Error</span>",
						desc: "不管响应时间如何，失败的请求数量。"
					}]
				}]
			},
			load: {
				mainStyle: "",
				title: "Load Chart",
				desc: "",
				category: [{
					title: "[Legend]",
					items: [{
						name: "X-Axis",
						desc: "Transaction Timestamp (in minutes)"
					},{
						name: "Y-Axis",
						desc: "Transaction Count"
					},{
						name: "<spanstyle='color:#2ca02c'>1s</span>",
						desc: "No. of Successful transactions (less than 1 second)"
					},{
						name: "<span style='color:#3c81fa'>3s</span>",
						desc: "No. of Successful transactions (1 ~ 3 seconds)"
					},{
						name: "<span style='color:#f8c731'>5s</span>",
						desc: "No. of Successful transactions (3 ~ 5 seconds)"
					},{
						name: "<span style='color:#f69124'>Slow</span>",
						desc: "No. of Successful transactions (greater than 5 seconds)"
					},{
						name: "<span style='color:#f53034'>Error</span>",
						desc: "No. of Failed transactions regardless of response time"
					}]
				},{
					title: "[Usage]",
					list: [
				       "单击一个图例显示/隐藏所选组中的所有事务。",
				       "Dragging on the chart zooms in to the dragged area."
					]
				}]
			},
			nodeServers: {
				mainStyle: "width:400px;",
				title: "Server Information",
				desc: "List of physical servers and their server instances.(物理服务器及其服务实例的列表。)",
				category: [{
					title: "[Legend]",
					items: [{
						name: "<span class='glyphicon glyphicon-home'></span>",
						desc: "物理服务器的主机名"
					},{
						name: "<span class='glyphicon glyphicon-hdd'></span>",
						desc: "在物理服务器上运行的服务实例上安装的pinpoint代理的AgentId"
					}]
				},{
					title: "[Usage]",
					items: [{
						name: "<button type='button' class='btn btn-default btn-xs'>Inspector</button>",
						desc: "Open a new window with detailed information on the WAS with Pinpoint installed."
					},{
						name: "<span class='glyphicon glyphicon-record' style='color:#3B99FC'></span>",
						desc: "Display statistics on transactions carried out by the server instance."
					},{
						name: "<span class='glyphicon glyphicon-hdd' style='color:red'></span>",
						desc: "Display statistics on transactions (with error) carried out by the server instance."
					}]
				}]
			},
			unknownList: {
				mainStyle: "",
				title: "UnknownList",
				desc: "From the chart's top-right icon",
				category: [{
					title: "[Usage]",
					items: [{
						name: "1st",
						desc: "Toggle between Response Summary Chart / Load Chart"
					},{
						name: "2nd",
						desc: "Show Node Details"
					}]
				}]
			},
			searchAndOrder: {
				mainStyle: "",
				title: "Search and Fliter",
				desc: "Filter by server name or total count.Clicking Name or Count sorts the list in ascending/descending order."
			}			
		},
		linkInfoDetails: {
			responseSummary: {
				mainStyle: "",
				title: "Response Summary Chart",
				desc: "",
				category: [{
					title: "[Legend]",
					items: [{
						name: "X-Axis",
						desc: "Response Time"
					},{
						name: "Y-Axis",
						desc: "Transaction Count"
					},{
						name: "<spanstyle='color:#2ca02c'>1s</span>",
						desc: "No. of Successful transactions (less than 1 second)"
					},{
						name: "<span style='color:#3c81fa'>3s</span>",
						desc: "No. of Successful transactions (1 ~ 3 seconds)"
					},{
						name: "<span style='color:#f8c731'>5s</span>",
						desc: "No. of Successful transactions (3 ~ 5 seconds)"
					},{
						name: "<span style='color:#f69124'>Slow</span>",
						desc: "No. of Successful transactions (greater than 5 seconds)"
					},{
						name: "<span style='color:#f53034'>Error</span>",
						desc: "No. of Failed transactions regardless of response time"
					}]
				},{
					title: "[Usage]",
					list: ["Click on the bar to query for transactions within the selected response time."]
				}]
			},
			load: {
				mainStyle: "",
				title: "Load Chart",
				desc: "",
				category: [{
					title: "[Legend]",
					items: [{
						name: "X-Axis",
						desc: "Transaction Timestamp (in minutes)"
					},{
						name: "Y-Axis",
						desc: "Transaction Count"
					},{
						name: "<spanstyle='color:#2ca02c'>1s</span>",
						desc: "No. of Successful transactions (less than 1 second)"
					},{
						name: "<span style='color:#3c81fa'>3s</span>",
						desc: "No. of Successful transactions (1 ~ 3 seconds)"
					},{
						name: "<span style='color:#f8c731'>5s</span>",
						desc: "No. of Successful transactions (3 ~ 5 seconds)"
					},{
						name: "<span style='color:#f69124'>Slow</span>",
						desc: "No. of Successful transactions (greater than 5 seconds)"
					},{
						name: "<span style='color:#f53034'>Error</span>",
						desc: "No. of Failed transactions regardless of response time"
					}]
				},{
					title: "[Usage]",
					list: [
				       "Clicking on a legend item shows/hides all transactions within the selected group.",
				       "Dragging on the chart zooms in to the dragged area."
					]
				}]
			},
			linkServers: {
				mainStyle: "width:350px;",
				title: "Server Information",
				desc: "List of physical servers and their server instances.",
				category: [{
					title: "[Legend]",
					items: [{
						name: "<span class='glyphicon glyphicon-home'></span>",
						desc: "Hostname of the physical server"
					},{
						name: "<span class='glyphicon glyphicon-hdd'></span>",
						desc: "AgentId of the Pinpoint agent installed on the server instance running on the physical server"
					}]
				},{
					title: "[Usage]",
					items: [{
						name: "<button type='button' class='btn btn-default btn-xs'>Inspector</button>",
						desc: "Open a new window with detailed information on the WAS with Pinpoint installed."
					},{
						name: "<button type='button' class='btn btn-default btn-xs'><span class='glyphicon glyphicon-plus'></span></button>",
						desc: "Display statistics on transactions carried out by the server instance."
					},{
						name: "<button type='button' class='btn btn-danger btn-xs'><span class='glyphicon glyphicon-plus'></span></button>",
						desc: "Display statistics on transactions (with error) carried out by the server instance."
					}]
				}]
			},
			unknownList: {
				mainStyle: "",
				title: "UnknownList",
				desc: "From the chart's top-right icon,",
				category: [{
					title: "[Usage]",
					items: [{
						name: "1st",
						desc: "Toggle between Response Summary Chart"
					},{
						name: "2dn",
						desc: "Show Node Details"
					}]
				}]
			},
			searchAndOrder: {
				mainStyle: "",
				title: "Search and Filter",
				desc: "Filter by server name or total count.<br/>Clicking Name or Count sorts the list in ascending/descending order."
			}
		},
		inspector: {
			list: {
				mainStyle: "",
				title: "Agent list",
				desc: "在当前应用程序名称下注册的代理列表",
				category: [{
					title: "[Legend]",
					items: [{
						name: "<span class='glyphicon glyphicon-home'></span>",
						desc: "代理机器的主机名"
					},{
						name: "<span class='glyphicon glyphicon-hdd'></span>",
						desc: "已安装代理的Agent-id"
					},{
						name: "<span class='glyphicon glyphicon-ok-sign' style='color:#40E340'></span>",
						desc: "代理在查询时运行"
					},{
						name: "<span class='glyphicon glyphicon-minus-sign' style='color:#F00'></span>",
						desc: "代理在查询时被关闭"
					},{
						name: "<span class='glyphicon glyphicon-remove-sign' style='color:#AAA'></span>",
						desc: "代理在查询时断开连接"
					},{
						name: "<span class='glyphicon glyphicon-question-sign' style='color:#AAA'></span>",
						desc: "在查询时，代理状态是未知的"
					}]
				}]
			},
			heap: {
				mainStyle: "",
				title: "Heap",
				desc: "JVM的堆信息和完整的垃圾收集时间(如果有的话)",
				category: [{
					title: "[Legend]",
					items: [{
						name: "Max",
						desc: "Maximum heap size"
					},{
						name: "Used",
						desc: "Heap currently in use"
					},{
						name: "FGC",
						desc: "Full garbage collection duration (number of FGCs in parenthesis if it occurred more than once)"
					}]
				}]
			},
			permGen: {
				mainStyle: "",
				title: "PermGen",
				desc: "JVM's PermGen information and full garbage collection times(if any)",
				category: [{
					title: "[Legend]",
					items: [{
						name: "Max",
						desc: "Maximum heap size"
					},{
						name: "Used",
						desc: "Heap currently in use"
					},{
						name: "FGC",
						desc: "Full garbage collection duration (number of FGCs in parenthesis if it occurred more than once)"
					}]
				}]
			},
			cpuUsage: {
				mainStyle: "",
				title: "Cpu Usage",
				desc: "JVM/System's CPU Usage - For multi-core CPUs, displays the average CPU usage of all the cores",
				category: [{
					title: "[Legend]",
					items: [{
						name: "Java 1.6",
						desc: "Only the JVM's CPU usage is collected"
					},{
						name: "Java 1.7+",
						desc: "Both the JVM's and the system's CPU usage are collected"
					}]
				}]
			},
            tps: {
                mainStyle: "",
                title: "TPS",
                desc: "Transactions per second received by the server",
                category: [{
                    title: "[Legend]",
                    items: [{
                        name: "Sampled New (S.N)",
                        desc: "Profiled transactions that started from the current agent"
                    },{
                        name: "Sampled Continuation (S.C)",
                        desc: "Profiled transactions that started from another agent"
                    },{
                        name: "Unsampled New (U.N)",
                        desc: "Unprofiled transactions that started from the current agent"
                    },{
                        name: "Unsampled Continuation (U.C)",
                        desc: "Unprofiled transactions that started from another agent"
                    },{
                        name: "Total",
                        desc: "All transactions"
                    }]
                }]
            },
			activeThread: {
				mainStyle: "",
				title: "Active Thread",
				desc: "Snapshots of the agent's active thread count, categorized by how long they have active for serving a request.",
				category: [{
					title: "[Legend]",
					items: [{
						name: "Fast (1s)",
						desc: "Number of threads that have been active for less than or equal to 1s"
					},{
						name: "Normal (3s)",
						desc: "Number of threads that have been active for less than or equal to 3s but longer than 1s"
					},{
						name: "Slow (5s)",
						desc: "Number of threads that have been active for less than or equal to 5s but longer than 3s"
					},{
						name: "Very Slow (slow)",
						desc: "Number of threads that have been active for longer than 5s"
					}]
				}]
			},
			dataSource: {
				mainStyle: "",
				title: "Data Source",
				desc: "Show the status of agent's data source.",
				category: [{
					title: "[Legend]",
					items: [{
						name: "Active Avg",
						desc: "Average number of active connections"
					},{
						name: "Active Max",
						desc: "Maximum number of active connections"
					},{
						name: "Total Max",
						desc: "The maximum number of active connections that can be allocated at the same time"
					},{
						name: "Type",
						desc: "DB Connection Pool Type"
					}]
				}]
			},
			wrongApp: [
				"<div style='font-size:12px'>The agent is currently registered under {{application2}} due to the following:<br>",
				"1. The agent has moved from {{application1}} to {{application2}}<br>",
				"2. A different agent with the same agent id has been registered to {{application2}}<hr>",
				"For the former case, you should delete the mapping between {{application1}} and {{agentId}}.<br>",
				"For the latter case, the agent id of the duplicate agent must be changed.</div>"
			].join("")
		},
		callTree: {
			column: {
				mainStyle: "",
				title: "Call Tree",
				desc: "",
				category: [{
					title: "[Column]",
					items: [{
						name: "Gap",
						desc: "在前面方法的开始和这个方法的入口之间的时间间隔"
					},{
						name: "Exec",
						desc: "从方法入口到方法退出的方法调用的整个持续时间\n"
					},{
						name: "Exec(%)",
						desc: "<img src='/images/help/callTree_01.png'/>"
					},{
						name: "",
						desc: "<span style='background-color:#FFFFFF;color:#5bc0de'>Light blue</span>方法调用的执行时间是事务总执行时间的百分比。"
					},{
						name: "",
						desc: "<span style='background-color:#FFFFFF;color:#4343C8'>Dark blue</span> 自我执行时间的百分比"
					},{
						name: "Self",
						desc: "仅用于执行此方法的时间，不包括嵌套方法调用中的时间"
					}]
				}]
			}
		},
		transactionTable: {
			log: {}
		},
		transactionList: {
			openError: {
				noParent: "Scatter data of parent window had been changed.\r\nso can\'t scan the data any more.",
				noData: "There is no {{application}} scatter data in parent window."
			}
		}
	};
	pinpointApp.constant('helpContent-en', oHelp );
})();