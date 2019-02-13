<?php
$z[0]=Array("field","",492,511);
$z[0][4]=array();
$z[0][4]['name']="title";
$z[1]=Array("global","",512,538);
$z[1][4]=array();
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",615,667);
$z[2][4]=array();
$z[2][4]['name']="description";
$z[2][4]['function']="html2text(@me)";
$z[3]=Array("field","",732,754);
$z[3][4]=array();
$z[3][4]['name']="keywords";
$z[4]=Array("include","",1128,1169);
$z[4][4]=array();
$z[4][4]['filename']="public_nav.htm";
$z[5]=Array("field","",1379,1408);
$z[5][4]=array();
$z[5][4]['name']="position";
$z[6]=Array("arclist","\r\n                	<li class=\"yndt_allList\" >\r\n                    	<div class=\"list_img\"><a href=\"[field:arcurl/]\"><img src=\"[field:picname/]\" /></a></div>\r\n                        <div class=\"list_cont\">\r\n                        	<p class=\"list_tit\"><a href=\"[field:arcurl/]\">[field:title/]</a></p>\r\n                            <p class=\"list_intro\">\r\n                            	<span>[field:pubdate function='GetDateMK(@me)' /]</span>\r\n                                <span>\r\n                                	<img src=\"/templets/jq/images/yndt_list.png\" />\r\n									<script src=\"[field:phpurl/]/contclick.php?view=yes&aid=[field:id/]&mid=[field:mid/]\"type='text/javascript' language=\"javascript\"></script>人已读\r\n                                </span>\r\n                            </p>\r\n                            <p class=\"list_des\">\r\n                            	<a href=\"[field:arcurl/]\">[field:description function='cn_substr(Html2text(\"@me\").\"...\",100)'/]...</a>\r\n                            </p>\r\n                        </div>\r\n                    </li>\r\n                    ",1573,2717);
$z[6][4]=array();
$z[6][4]['orderby']="id";
$z[6][4]['row']="10";
$z[7]=Array("arclist","\r\n                	<li class=\"yndt_allList\" >\r\n                    	<div class=\"list_img\"><a href=\"[field:arcurl/]\"><img src=\"[field:picname/]\" /></a></div>\r\n                        <div class=\"list_cont\">\r\n                        	<p class=\"list_tit\"><a href=\"[field:arcurl/]\">[field:title/]</a></p>\r\n                            <p class=\"list_intro\">\r\n                            	<span>[field:pubdate function='GetDateMK(@me)' /]</span>\r\n                                <span>\r\n                                	<img src=\"/templets/jq/images/yndt_list.png\" />\r\n									<script src=\"[field:phpurl/]/contclick.php?view=yes&aid=[field:id/]&mid=[field:mid/]\"type='text/javascript' language=\"javascript\"></script>人已读\r\n                                </span>\r\n                            </p>\r\n                            <p class=\"list_des\">\r\n                            	<a href=\"[field:arcurl/]\">[field:description function='cn_substr(Html2text(\"@me\").\"...\",100)'/]...</a>\r\n                            </p>\r\n                        </div>\r\n                    </li>\r\n                    ",2739,3873);
$z[7][4]=array();
$z[7][4]['typeid']="62";
$z[8]=Array("include","",3967,4011);
$z[8][4]=array();
$z[8][4]['filename']="public_footer.htm";

?>