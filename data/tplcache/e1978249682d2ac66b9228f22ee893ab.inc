<div class="list">
					<div class="list_left">
						{dede:field name='typename'/}
					</div>
					<ul class="list_right">
                    	{dede:channel row="6" }
						<li class="longName"><a href="[field:typeurl/]">[field:typename/]</a></li>
                    <div style="display:none;">
                    	{dede:field.content/}
                    </div>
                        {/dede:channel}
					</ul>
				</div>