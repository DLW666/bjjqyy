<div class="goodat">
                <h1><img src="/templets/jq/images/goddat2.jpg" />{dede:field name='typename'/}</h1>
                
                <div class="reviewsBox">
                    <div class="reviewsBd">
                        <ul>
                        	{dede:arclist orderby='pubdate'}
                            <li>
                                <div class="patientr">
                                    <a href="javascript:void(0)" onclick="openZoosUrl('chatwin');">
                                        <dl>
                                            <dt><img src="/templets/jq/images/partientr.jpg" /></dt>
                                            <dd><span class="l">[field:title/]</span>	<span class="r">[field:pubdate function='GetDateMK(@me)' /]</span></dd>
                                            <dd>[field:shorttitle/]</dd>
                                            <div class="clear"></div>
                                        </dl>
                                        <div class="clear"></div>
                                        <p>患者主观疗效：<b>很满意</b>　　态度：<b>很满意</b> </p>
                                        <p>[field:description/]</p>
                                    </a>
                                </div>
                            </li>
                            {/dede:arclist} 
                        </ul>
                    </div>
                </div>
                                 
            </div>