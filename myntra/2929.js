function Audience(){if("undefined"===typeof window.data_2929){window.data_2929=[];if("undefined"!==typeof rtgsettings){window.data_2929.push(rtgsettings)}else{if("undefined"!==typeof window.data_0001){window.data_2929=window.data_0001}}}if("undefined"===typeof window.data_2929){return}else{if(window.data_2929.length===0){window.data_2929.push({pagetype:"generic",PageType:"generic"})}}CUDV();var m="";var r="MYNTRA_IN";var l="IND";var f="poo_mt_in|ami_mt_in";var c="2929";var e="62865,62927";var s="";s=null!==window.data_2929[0].pdt_url&&"undefined"!==window.data_2929[0].pdt_url&&Object!==window.data_2929[0].pdt_url&&undefined!==window.data_2929[0].pdt_url&&""!==window.data_2929[0].pdt_url&&!window.data_2929[0].pdt_url.toString().includes("$")?encodeURIComponent(window.data_2929[0].pdt_url):encodeURIComponent(window.location.href);var n=window.data_2929[0].OrderId;if(urlcheck(n,"OrderId")){n=""}if(lengthcheck(n)>200){n=n.toString().substring(0,200)}var b=window.data_2929[0].Amount;if(urlcheck(b,"Amount")){b=""}if(lengthcheck(b)>200){b=b.toString().substring(0,200)}var h=window.data_2929[0].CustomerType;if(urlcheck(h,"CustomerType")){h=""}if(lengthcheck(h)>200){h=h.toString().substring(0,200)}var q=window.data_2929[0].ProductId;if(urlcheck(q,"ProductId")){q=""}if(lengthcheck(q)>200){q=q.toString().substring(0,200)}var o=window.data_2929[0].PageType;o=PageTypeModBasic("www.myntra.com","/category","/buy","checkout/cart","/checkout/confirm",o,s);var p=window.data_2929[0].ProductCategoryList;if(urlcheck(p,"ProductCategoryList")){p=""}if(lengthcheck(p)>200){p=p.toString().substring(0,200)}var d=window.data_2929[0].Browsercheck;d=checkBrowser();var i=window.data_2929[0].gdpr;if(urlcheck(i,"gdpr")){i=""}if(lengthcheck(i)>200){i=i.toString().substring(0,200)}var j=window.data_2929[0].gdpr_consent;if(urlcheck(j,"gdpr_consent")){j=""}if(lengthcheck(j)>200){j=j.toString().substring(0,200)}var k=window.data_2929[0].gdpr_pd;if(urlcheck(k,"gdpr_pd")){k=""}if(lengthcheck(k)>200){k=k.toString().substring(0,200)}var t=window.data_2929[0].us_privacy;if(urlcheck(t,"us_privacy")){t=""}if(lengthcheck(t)>200){t=t.toString().substring(0,200)}var g=window.data_2929[0].CouponCode;if(urlcheck(g,"CouponCode")){g=""}if(lengthcheck(g)>200){g=g.toString().substring(0,200)}var a=window.data_2929[0].a15;a=auditcheck(r);m="&ProgramName="+r+"&AudienceId="+c+"&CampaignId="+e+"&Referrer="+s+"&OrderId="+n+"&Amount="+b+"&CustomerType="+h+"&ProductId="+q+"&PageType="+o+"&ProductCategoryList="+p+"&Browsercheck="+d+"&gdpr="+i+"&gdpr_consent="+j+"&gdpr_pd="+k+"&us_privacy="+t+"&CouponCode="+g+"&a15="+a;m=m.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"");if((o!="undefined")&&(o!="")&&(d=="true")){CIF("CIF25852","https://cm.g.doubleclick.net/pixel?google_nid=preciso_srl&google_ula=6490516189&google_cm&cok15="+f+"&cnty15="+l+""+m)}if((o=="product")){CAU("CAU25854","https://clk.2trk.info/audit.aspx?token=MYNTRA_IN&pagetype="+o+"&ref="+s,r,o)}if((o=="checkout")){CIG("CIG25857","https://rtgcloudsql.2trk.info/saletrack?s15=id="+f+"::oid="+n+"::amt="+b+"::cus="+h+"::cuscoupon="+g+"::cok=1::campaignId=62865,62927")}if((o=="category")||(o=="product")){CIF("CIF26006","https://my.rtmarks.net/f.php?f=sync&lr=1&partners=382x46c555d482fcf532dd6e266ca1fbcff2bbaae5528931d78ef71bcde52adc")}}function CDV(a){var b=document.getElementById("m20D");b.appendChild(a)}function CIG(a,c){var b=document.createElement("img");b.id=a,b.width=1,b.height=1,b.src=c,CDV(b)}function CST(a,c){var b=document.createElement("script");b.id=a,b.type="text/javascript",b.src=c,CDV(b)}function CAU(a,e,d,b){if(chk(d.trim().toLowerCase(),b)){var c=document.createElement("script");c.id=a,c.type="text/javascript",c.src=e,CDV(c)}}function CIF(a,c){var b=document.createElement("iframe");b.id=a,b.marginWidth=0,b.marginHeight=0,b.frameBorder=0,b.scrolling="no",b.allowTransparency=!0,b.width=0,b.height=0,b.style.position="absolute",b.style.bottom="0px",b.style.overflowX="hidden",b.style.overflowY="hidden",b.style.width="0px",b.style.height="0px",b.style.display="none",b.src=c,CDV(b)}function FDV(a){document.body.appendChild(a)}function CUDV(){var a=document.createElement("div");a.id="m20D",a.style.display="none",FDV(a)}function urlcheck(b,c){var a=true;if(b!=undefined&&(b.toString().toLowerCase().indexOf("undefined")<0)&&(c!=undefined||!isNaN(c))){a=b.toString().includes(c)}else{a=true}return a}function lengthcheck(b){var a=b.toString().length;return a}function diff_hours(a,c){try{var b=(a.getTime()-c.getTime())/1000;return b/=3600,Math.abs(Math.round(b))}catch(a){return 6}}function chkses(a){return"undefined"===typeof Storage||!sessionStorage.getItem(a)}function chk(a,b){var c=!1;return("undefined"==typeof Storage||!localStorage.getItem(a)||5<diff_hours(new Date,new Date(localStorage.getItem(a))))&&(c=!0),!!c&&chkses(a+"-"+b)}function PageTypeModBasic(d,b,g,a,c,f,j){var h=j;var e=0;while(!h.toLowerCase().includes("://")&&e<5){h=decodeURIComponent(h);e++}if(h.toLowerCase().includes(b)){f="category";return f}else{if(h.includes(g)){f="product";return f}else{if(h.includes(a)&&!h.includes(c)){f="basket";return f}else{if(h.includes(c)){f="checkout";return f}else{if(h.split("/")[2]===d){f="home";return f}else{f="generic";return f}}}}}}function checkBrowser(){var a="true";if((navigator.userAgent.toLowerCase().indexOf("safari")>-1)&&(navigator.userAgent.toLowerCase().indexOf("chrome")<0)){a="false"}else{if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1){a="false"}else{if(navigator.userAgent.toLowerCase().indexOf("iphone")>-1){a="false"}else{if(navigator.userAgent.toLowerCase().indexOf("mac os")>-1){a="false"}else{if(navigator.userAgent.toLowerCase().indexOf("facebook")>-1){a="false"}else{if(navigator.userAgent.toLowerCase().indexOf("googlebot")>-1){a="false"}}}}}}return a}function auditcheck(c){var a=["tik","facebook","instagram","google","amazon","ao-qa.com","utm","?f=","tagtag_uid","?ref=","&amc="];for(var b in a){if(window.location.href.indexOf(a[b])>-1){if(typeof(Storage)!=="undefined"){localStorage.setItem(c.toLowerCase(),new Date)}return"true"}}return"false"}Audience();