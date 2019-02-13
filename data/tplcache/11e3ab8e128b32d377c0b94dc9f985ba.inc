<li><!-- onclick=jumpSwt("{dede:field name='typeurl'/}") -->
                        	{dede:arclist addfields='zhicheng1,zhicheng2,zhicheng3,rongyu1,rongyu2,rongyu3,scly,czsj,ghf,fylx,czhz' channelid='19'}
							<img src="[field:picname/]">
							<div class="zjtd_art">
								<div class="zjtd_upper">
									<div class="zjtd_names" href="">
										<div class="zjtd_tit">[field:title /]</div>
										<div>
											<p>[field:zhicheng1 function='cn_substr(@me,16)/]</p>
											<p>[field:zhicheng2 function='cn_substr(@me,16)/]</p>
											<p>[field:zhicheng3 function='cn_substr(@me,16)/]</p>
										</div>
									</div>
									<div class="zjtd_des">
										<div><img src="/templets/jq/images/dian.png" />[field:rongyu1 function='cn_substr(@me,43)'/]</div>
										<div><img src="/templets/jq/images/dian.png" />[field:rongyu2 function='cn_substr(@me,43)'/]</div>
										<div><img src="/templets/jq/images/dian.png" />[field:rongyu3 function='cn_substr(@me,43)'/]</div>
                                        
									</div>
                                    {/dede:arclist}
                                    
									<div class="zjtd_swt">
										<a href="javascript:void(0)" onclick="openZoosUrl('chatwin');">
											<img src="/templets/jq/images/zjtd_gh.png">
											预约挂号
										</a>
										<a href="{dede:field name='typeurl'/}">
											<img src="/templets/jq/images/zjtd_zx.png">
											了解详情
										</a>
									</div>
                                    
								</div>
                                {dede:arclist addfields='zhicheng1,zhicheng2,zhicheng3,rongyu1,rongyu2,rongyu3,scly,czsj,ghf,fylx,czhz' channelid='19'}
								<div class="zjtd_under">
									<div>
										<p>擅长</p>
										<p>领域</p>
									</div>
									<div>
										[field:scly function='cn_substr(@me,240)' /]
									</div>
								</div>
                                <div class="zjtd_time">
                                	<div>[field:czhz /]<span>[field:czsj /]</span></div>
                                    <!--<div>[field:fylx /]<span>[field:ghf /]</span></div>-->
                                    <a href="javascript:void(0)" onclick="openZoosUrl('chatwin');" style=" display: flex; align-items: center; background: #ff5f6b; border-radius: 5px; color: #fff; line-height: 2rem;width:35%;">
                                        <img src="/templets/jq/images/zjtd_zx.png" style=" width: 20%; margin: 0 7%;">
                                        立即预约
                                    </a>
                                </div>
                                
							</div>
                            {/dede:arclist}
						</li>