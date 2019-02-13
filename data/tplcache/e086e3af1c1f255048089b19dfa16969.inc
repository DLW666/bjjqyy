<div class="goodat">
    	<h1><img src="/templets/jq/images/goddat4.jpg" />{dede:field name='typename'/}</h1>
        {dede:arclist row='3' orderby='pubdate' titlelen='90'}
        <div class="expert">
        	<h4><span>医学科普</span><a href="#">[field:title/]</a></h4>
            <p><span><b id="reviews"></b>条评价 <b id="readys"></b>人已读</span> <span class="r">发表于[field:pubdate function='GetDateMK(@me)' /]</span></p>
        </div>
        {/dede:arclist}
    </div>