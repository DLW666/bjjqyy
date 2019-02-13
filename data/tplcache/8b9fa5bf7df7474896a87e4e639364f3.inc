<li class="yndt_allList">
                    	<div class="list_img"><img src="[field:picname/]" /></div>
                        <div class="list_cont">
                        	<p class="list_tit">[field:title/]</p>
                            <p class="list_intro">
                            	<span>[field:pubdate function='GetDateTimeMK(@me)' /]</span>
                                <span><img src="/templets/jq/images/yndt_list.png" />[field:click/]人已读</span>
                            </p>
                            <p class="list_des">[field:description function='cn_substr(Html2text("@me")."...",100)'/]...</p>
                        </div>
                    </li>