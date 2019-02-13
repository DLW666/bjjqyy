<div class="goodat">
    	<h1><img src="/templets/jq/images/goddat2.jpg" />{dede:field name='typename'/}</h1>
        {dede:arclist row='3'}
        <div class="patientr">
        	<dl>
            	<dt><img src="/templets/jq/images/partientr.jpg" /></dt>
                <dd><span class="l">[field:shorttitle/]</span>	<span class="r">[field:pubdate function='GetDateTimeMK(@me)' /]</span></dd>
                <dd>[field:title/]</dd>
                <div class="clear"></div>
            </dl>
            <div class="clear"></div>
            <p>患者主观疗效：<b>很满意</b>　　态度：<b>很满意</b> </p>
            <p>[field:description function='cn_substr(Html2text("@me")."...",140)'/]</p>
        </div>
        {/dede:arclist}                  
    </div>