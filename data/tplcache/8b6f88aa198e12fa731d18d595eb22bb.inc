<div class="goodat" id="getSec">
    	<h1><img src="/templets/jq/images/goddat3.jpg" />{dede:field name='typename'/}</h1>
        {dede:arclist row='3' orderby='pubdate' titlelen='18'}
        <div class="onlinei onlineit">
        	<div class="btt">
            	<a href="#">[field:title/]</a> 
                <b id="mimi"></b>  
                <span>共<em id="random1" style="font-style: normal;"></em>条对话 今天</span>
            </div>
            <p class="add">[field:description function='cn_substr(Html2text("@me")."...",30)'/]<span>[field:shorttitle/]</span></p>
            <p class="gray" style="display:none" id="mi_yinsi">交流涉及隐私，仅医患本人可见</p>
        </div>
        {/dede:arclist}
    </div>