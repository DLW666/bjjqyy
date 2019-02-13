<div class="goodat" id="getSec">
    	<h1><img src="/templets/jq/images/goddat3.jpg" />{dede:field name='typename'/}</h1>
        {dede:arclist row='3' orderby='pubdate' title='8'}
        <div class="onlinei onlineit">
        	<div class="btt"><a href="#">[field:title/]</a> <b>密</b>  <span>共23条对话 今天</span></div>
            <p class="add">[field:description function='cn_substr(Html2text("@me")."...",30)'/]<span>[field:shorttitle/]</span></p>
            <p class="gray">交流涉及隐私，仅医患本人可见</p>
        </div>
        {/dede:arclist}
    </div>