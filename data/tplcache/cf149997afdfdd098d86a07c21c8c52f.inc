<li>
                    	<div><img src="[field:picname/]" /></div>
                        <div>
                        	<p>[field:title/]</p>
                            <p>
                            	<span>[field:pubdate function='GetDateTimeMK(@me)' /]</span>
                                <span><img src="/templets/jq/images/yndt_list.png" />[field:click/]</span>
                            </p>
                            <p>[field:description function='cn_substr(Html2text("@me")."...",100)'/]...</p>
                        </div>
                    </li>