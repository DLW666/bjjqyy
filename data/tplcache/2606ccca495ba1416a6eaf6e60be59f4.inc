<div class="goodat">
    	<h1><img src="/templets/jq/images/goddat2.jpg" />{dede:field name='typename'/}</h1>
        {dede:arclist row='3' orderby='pubdate'}
        <div class="patientr">
        	<dl>
            	<dt><img src="/templets/jq/images/partientr.jpg" /></dt>
                <dd><span class="l">[field:title/]</span>	<span class="r">[field:pubdate function='GetDateMK(@me)' /]</span></dd>
                <dd>[field:shorttitle/]</dd>
                <div class="clear"></div>
            </dl>
            <div class="clear"></div>
            <p>患者主观疗效：<b>很满意</b>　　态度：<b>很满意</b> </p>
            <p>[field:description function='cn_substr(Html2text("@me")."...",200)'/]</p>
        </div>
        {/dede:arclist}                  
    </div>