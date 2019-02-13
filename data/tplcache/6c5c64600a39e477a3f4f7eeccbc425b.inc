<li>
                        	{dede:arclist addfields='zhicheng1,zhicheng2,zhicheng3,rongyu1,rongyu2,rongyu3,scly' channelid='19'}
							<img src="/templets/jq/images/zjtd_ljj.jpg">
							<div class="zjtd_art">
								<div class="zjtd_upper">
									<div class="zjtd_names">
										<div>[field:title /]</div>
										<div>
											<p>[field:zhicheng1 /]</p>
											<p>[field:zhicheng2 /]</p>
											<p>[field:zhicheng3 /]</p>
										</div>
									</div>
									<div class="zjtd_des">
										<div><img src="/templets/jq/images/dian.png" />[field:rongyu1 function='cn_substr(@me,54)'/]</div>
										<div><img src="/templets/jq/images/dian.png" />[field:rongyu2 function='cn_substr(@me,240)'/]</div>
										<div><img src="/templets/jq/images/dian.png" />[field:rongyu3 function='cn_substr(@me,240)'/]</div>
									</div>
									<div class="zjtd_swt">
										<a href="javascript:void(0)" onclick="openZoosUrl('chatwin');">
											<img src="/templets/jq/images/zjtd_gh.png">
											预约挂号
										</a>
										<a href="javascript:void(0)" onclick="openZoosUrl('chatwin');">
											<img src="/templets/jq/images/zjtd_zx.png">
											在线咨询
										</a>
									</div>
								</div>
								<div class="zjtd_under">
									<div>
										<p>擅长</p>
										<p>领域</p>
									</div>
									<div>
										[field:scly function='cn_substr(@me,240)' /]
									</div>
								</div>
							</div>
                            {/dede:arclist}
						</li>