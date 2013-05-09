// $Id: jquery.js,v 1.12.2.3 2008/06/25 09:38:39 goba Exp $ 

/*
 * jQuery 1.2.6 - New Wave Javascript
 *
 * Copyright (c) 2008 John Resig (jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Date: 2008-05-24 14:22:17 -0400 (Sat, 24 May 2008)
 * Rev: 5685
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H(){J w=1b.4M,3m$=1b.$;J D=1b.4M=1b.$=H(a,b){I 2B D.17.5j(a,b)};J u=/^[^<]*(<(.|\\s)+>)[^>]*$|^#(\\w+)$/,62=/^.[^:#\\[\\.]*$/,12;D.17=D.44={5j:H(d,b){d=d||S;G(d.16){7[0]=d;7.K=1;I 7}G(1j d=="23"){J c=u.2D(d);G(c&&(c[1]||!b)){G(c[1])d=D.4h([c[1]],b);N{J a=S.61(c[3]);G(a){G(a.2v!=c[3])I D().2q(d);I D(a)}d=[]}}N I D(b).2q(d)}N G(D.1D(d))I D(S)[D.17.27?"27":"43"](d);I 7.6Y(D.2d(d))},5w:"1.2.6",8G:H(){I 7.K},K:0,3p:H(a){I a==12?D.2d(7):7[a]},2I:H(b){J a=D(b);a.5n=7;I a},6Y:H(a){7.K=0;2p.44.1p.1w(7,a);I 7},P:H(a,b){I D.P(7,a,b)},5i:H(b){J a=-1;I D.2L(b&&b.5w?b[0]:b,7)},1K:H(c,a,b){J d=c;G(c.1q==56)G(a===12)I 7[0]&&D[b||"1K"](7[0],c);N{d={};d[c]=a}I 7.P(H(i){R(c 1n d)D.1K(b?7.V:7,c,D.1i(7,d[c],b,i,c))})},1g:H(b,a){G((b==\'2h\'||b==\'1Z\')&&3d(a)<0)a=12;I 7.1K(b,a,"2a")},1r:H(b){G(1j b!="49"&&b!=U)I 7.4E().3v((7[0]&&7[0].2z||S).5F(b));J a="";D.P(b||7,H(){D.P(7.3t,H(){G(7.16!=8)a+=7.16!=1?7.76:D.17.1r([7])})});I a},5z:H(b){G(7[0])D(b,7[0].2z).5y().39(7[0]).2l(H(){J a=7;1B(a.1x)a=a.1x;I a}).3v(7);I 7},8Y:H(a){I 7.P(H(){D(7).6Q().5z(a)})},8R:H(a){I 7.P(H(){D(7).5z(a)})},3v:H(){I 7.3W(19,M,Q,H(a){G(7.16==1)7.3U(a)})},6F:H(){I 7.3W(19,M,M,H(a){G(7.16==1)7.39(a,7.1x)})},6E:H(){I 7.3W(19,Q,Q,H(a){7.1d.39(a,7)})},5q:H(){I 7.3W(19,Q,M,H(a){7.1d.39(a,7.2H)})},3l:H(){I 7.5n||D([])},2q:H(b){J c=D.2l(7,H(a){I D.2q(b,a)});I 7.2I(/[^+>] [^+>]/.11(b)||b.1h("..")>-1?D.4r(c):c)},5y:H(e){J f=7.2l(H(){G(D.14.1f&&!D.4n(7)){J a=7.6o(M),5h=S.3h("1v");5h.3U(a);I D.4h([5h.4H])[0]}N I 7.6o(M)});J d=f.2q("*").5c().P(H(){G(7[E]!=12)7[E]=U});G(e===M)7.2q("*").5c().P(H(i){G(7.16==3)I;J c=D.L(7,"3w");R(J a 1n c)R(J b 1n c[a])D.W.1e(d[i],a,c[a][b],c[a][b].L)});I f},1E:H(b){I 7.2I(D.1D(b)&&D.3C(7,H(a,i){I b.1k(a,i)})||D.3g(b,7))},4Y:H(b){G(b.1q==56)G(62.11(b))I 7.2I(D.3g(b,7,M));N b=D.3g(b,7);J a=b.K&&b[b.K-1]!==12&&!b.16;I 7.1E(H(){I a?D.2L(7,b)<0:7!=b})},1e:H(a){I 7.2I(D.4r(D.2R(7.3p(),1j a==\'23\'?D(a):D.2d(a))))},3F:H(a){I!!a&&D.3g(a,7).K>0},7T:H(a){I 7.3F("."+a)},6e:H(b){G(b==12){G(7.K){J c=7[0];G(D.Y(c,"2A")){J e=c.64,63=[],15=c.15,2V=c.O=="2A-2V";G(e<0)I U;R(J i=2V?e:0,2f=2V?e+1:15.K;i<2f;i++){J d=15[i];G(d.2W){b=D.14.1f&&!d.at.2x.an?d.1r:d.2x;G(2V)I b;63.1p(b)}}I 63}N I(7[0].2x||"").1o(/\\r/g,"")}I 12}G(b.1q==4L)b+=\'\';I 7.P(H(){G(7.16!=1)I;G(b.1q==2p&&/5O|5L/.11(7.O))7.4J=(D.2L(7.2x,b)>=0||D.2L(7.34,b)>=0);N G(D.Y(7,"2A")){J a=D.2d(b);D("9R",7).P(H(){7.2W=(D.2L(7.2x,a)>=0||D.2L(7.1r,a)>=0)});G(!a.K)7.64=-1}N 7.2x=b})},2K:H(a){I a==12?(7[0]?7[0].4H:U):7.4E().3v(a)},7b:H(a){I 7.5q(a).21()},79:H(i){I 7.3s(i,i+1)},3s:H(){I 7.2I(2p.44.3s.1w(7,19))},2l:H(b){I 7.2I(D.2l(7,H(a,i){I b.1k(a,i,a)}))},5c:H(){I 7.1e(7.5n)},L:H(d,b){J a=d.1R(".");a[1]=a[1]?"."+a[1]:"";G(b===12){J c=7.5C("9z"+a[1]+"!",[a[0]]);G(c===12&&7.K)c=D.L(7[0],d);I c===12&&a[1]?7.L(a[0]):c}N I 7.1P("9u"+a[1]+"!",[a[0],b]).P(H(){D.L(7,d,b)})},3b:H(a){I 7.P(H(){D.3b(7,a)})},3W:H(g,f,h,d){J e=7.K>1,3x;I 7.P(H(){G(!3x){3x=D.4h(g,7.2z);G(h)3x.9o()}J b=7;G(f&&D.Y(7,"1T")&&D.Y(3x[0],"4F"))b=7.3H("22")[0]||7.3U(7.2z.3h("22"));J c=D([]);D.P(3x,H(){J a=e?D(7).5y(M)[0]:7;G(D.Y(a,"1m"))c=c.1e(a);N{G(a.16==1)c=c.1e(D("1m",a).21());d.1k(b,a)}});c.P(6T)})}};D.17.5j.44=D.17;H 6T(i,a){G(a.4d)D.3Y({1a:a.4d,31:Q,1O:"1m"});N D.5u(a.1r||a.6O||a.4H||"");G(a.1d)a.1d.37(a)}H 1z(){I+2B 8J}D.1l=D.17.1l=H(){J b=19[0]||{},i=1,K=19.K,4x=Q,15;G(b.1q==8I){4x=b;b=19[1]||{};i=2}G(1j b!="49"&&1j b!="H")b={};G(K==i){b=7;--i}R(;i<K;i++)G((15=19[i])!=U)R(J c 1n 15){J a=b[c],2w=15[c];G(b===2w)6M;G(4x&&2w&&1j 2w=="49"&&!2w.16)b[c]=D.1l(4x,a||(2w.K!=U?[]:{}),2w);N G(2w!==12)b[c]=2w}I b};J E="4M"+1z(),6K=0,5r={},6G=/z-?5i|8B-?8A|1y|6B|8v-?1Z/i,3P=S.3P||{};D.1l({8u:H(a){1b.$=3m$;G(a)1b.4M=w;I D},1D:H(a){I!!a&&1j a!="23"&&!a.Y&&a.1q!=2p&&/^[\\s[]?H/.11(a+"")},4n:H(a){I a.1C&&!a.1c||a.2j&&a.2z&&!a.2z.1c},5u:H(a){a=D.3k(a);G(a){J b=S.3H("6w")[0]||S.1C,1m=S.3h("1m");1m.O="1r/4t";G(D.14.1f)1m.1r=a;N 1m.3U(S.5F(a));b.39(1m,b.1x);b.37(1m)}},Y:H(b,a){I b.Y&&b.Y.2r()==a.2r()},1Y:{},L:H(c,d,b){c=c==1b?5r:c;J a=c[E];G(!a)a=c[E]=++6K;G(d&&!D.1Y[a])D.1Y[a]={};G(b!==12)D.1Y[a][d]=b;I d?D.1Y[a][d]:a},3b:H(c,b){c=c==1b?5r:c;J a=c[E];G(b){G(D.1Y[a]){2U D.1Y[a][b];b="";R(b 1n D.1Y[a])1X;G(!b)D.3b(c)}}N{1U{2U c[E]}1V(e){G(c.5l)c.5l(E)}2U D.1Y[a]}},P:H(d,a,c){J e,i=0,K=d.K;G(c){G(K==12){R(e 1n d)G(a.1w(d[e],c)===Q)1X}N R(;i<K;)G(a.1w(d[i++],c)===Q)1X}N{G(K==12){R(e 1n d)G(a.1k(d[e],e,d[e])===Q)1X}N R(J b=d[0];i<K&&a.1k(b,i,b)!==Q;b=d[++i]){}}I d},1i:H(b,a,c,i,d){G(D.1D(a))a=a.1k(b,i);I a&&a.1q==4L&&c=="2a"&&!6G.11(d)?a+"2X":a},1F:{1e:H(c,b){D.P((b||"").1R(/\\s+/),H(i,a){G(c.16==1&&!D.1F.3T(c.1F,a))c.1F+=(c.1F?" ":"")+a})},21:H(c,b){G(c.16==1)c.1F=b!=12?D.3C(c.1F.1R(/\\s+/),H(a){I!D.1F.3T(b,a)}).6s(" "):""},3T:H(b,a){I D.2L(a,(b.1F||b).6r().1R(/\\s+/))>-1}},6q:H(b,c,a){J e={};R(J d 1n c){e[d]=b.V[d];b.V[d]=c[d]}a.1k(b);R(J d 1n c)b.V[d]=e[d]},1g:H(d,e,c){G(e=="2h"||e=="1Z"){J b,3X={30:"5x",5g:"1G",18:"3I"},35=e=="2h"?["5e","6k"]:["5G","6i"];H 5b(){b=e=="2h"?d.8f:d.8c;J a=0,2C=0;D.P(35,H(){a+=3d(D.2a(d,"57"+7,M))||0;2C+=3d(D.2a(d,"2C"+7+"4b",M))||0});b-=29.83(a+2C)}G(D(d).3F(":4j"))5b();N D.6q(d,3X,5b);I 29.2f(0,b)}I D.2a(d,e,c)},2a:H(f,l,k){J e,V=f.V;H 3E(b){G(!D.14.2k)I Q;J a=3P.54(b,U);I!a||a.52("3E")==""}G(l=="1y"&&D.14.1f){e=D.1K(V,"1y");I e==""?"1":e}G(D.14.2G&&l=="18"){J d=V.50;V.50="0 7Y 7W";V.50=d}G(l.1I(/4i/i))l=y;G(!k&&V&&V[l])e=V[l];N G(3P.54){G(l.1I(/4i/i))l="4i";l=l.1o(/([A-Z])/g,"-$1").3y();J c=3P.54(f,U);G(c&&!3E(f))e=c.52(l);N{J g=[],2E=[],a=f,i=0;R(;a&&3E(a);a=a.1d)2E.6h(a);R(;i<2E.K;i++)G(3E(2E[i])){g[i]=2E[i].V.18;2E[i].V.18="3I"}e=l=="18"&&g[2E.K-1]!=U?"2F":(c&&c.52(l))||"";R(i=0;i<g.K;i++)G(g[i]!=U)2E[i].V.18=g[i]}G(l=="1y"&&e=="")e="1"}N G(f.4g){J h=l.1o(/\\-(\\w)/g,H(a,b){I b.2r()});e=f.4g[l]||f.4g[h];G(!/^\\d+(2X)?$/i.11(e)&&/^\\d/.11(e)){J j=V.1A,66=f.65.1A;f.65.1A=f.4g.1A;V.1A=e||0;e=V.aM+"2X";V.1A=j;f.65.1A=66}}I e},4h:H(l,h){J k=[];h=h||S;G(1j h.3h==\'12\')h=h.2z||h[0]&&h[0].2z||S;D.P(l,H(i,d){G(!d)I;G(d.1q==4L)d+=\'\';G(1j d=="23"){d=d.1o(/(<(\\w+)[^>]*?)\\/>/g,H(b,a,c){I c.1I(/^(aK|4f|7E|aG|4T|7A|aB|3n|az|ay|av)$/i)?b:a+"></"+c+">"});J f=D.3k(d).3y(),1v=h.3h("1v");J e=!f.1h("<au")&&[1,"<2A 7w=\'7w\'>","</2A>"]||!f.1h("<ar")&&[1,"<7v>","</7v>"]||f.1I(/^<(aq|22|am|ak|ai)/)&&[1,"<1T>","</1T>"]||!f.1h("<4F")&&[2,"<1T><22>","</22></1T>"]||(!f.1h("<af")||!f.1h("<ad"))&&[3,"<1T><22><4F>","</4F></22></1T>"]||!f.1h("<7E")&&[2,"<1T><22></22><7q>","</7q></1T>"]||D.14.1f&&[1,"1v<1v>","</1v>"]||[0,"",""];1v.4H=e[1]+d+e[2];1B(e[0]--)1v=1v.5T;G(D.14.1f){J g=!f.1h("<1T")&&f.1h("<22")<0?1v.1x&&1v.1x.3t:e[1]=="<1T>"&&f.1h("<22")<0?1v.3t:[];R(J j=g.K-1;j>=0;--j)G(D.Y(g[j],"22")&&!g[j].3t.K)g[j].1d.37(g[j]);G(/^\\s/.11(d))1v.39(h.5F(d.1I(/^\\s*/)[0]),1v.1x)}d=D.2d(1v.3t)}G(d.K===0&&(!D.Y(d,"3V")&&!D.Y(d,"2A")))I;G(d[0]==12||D.Y(d,"3V")||d.15)k.1p(d);N k=D.2R(k,d)});I k},1K:H(d,f,c){G(!d||d.16==3||d.16==8)I 12;J e=!D.4n(d),40=c!==12,1f=D.14.1f;f=e&&D.3X[f]||f;G(d.2j){J g=/5Q|4d|V/.11(f);G(f=="2W"&&D.14.2k)d.1d.64;G(f 1n d&&e&&!g){G(40){G(f=="O"&&D.Y(d,"4T")&&d.1d)7p"O a3 a1\'t 9V 9U";d[f]=c}G(D.Y(d,"3V")&&d.7i(f))I d.7i(f).76;I d[f]}G(1f&&e&&f=="V")I D.1K(d.V,"9T",c);G(40)d.9Q(f,""+c);J h=1f&&e&&g?d.4G(f,2):d.4G(f);I h===U?12:h}G(1f&&f=="1y"){G(40){d.6B=1;d.1E=(d.1E||"").1o(/7f\\([^)]*\\)/,"")+(3r(c)+\'\'=="9L"?"":"7f(1y="+c*7a+")")}I d.1E&&d.1E.1h("1y=")>=0?(3d(d.1E.1I(/1y=([^)]*)/)[1])/7a)+\'\':""}f=f.1o(/-([a-z])/9H,H(a,b){I b.2r()});G(40)d[f]=c;I d[f]},3k:H(a){I(a||"").1o(/^\\s+|\\s+$/g,"")},2d:H(b){J a=[];G(b!=U){J i=b.K;G(i==U||b.1R||b.4I||b.1k)a[0]=b;N 1B(i)a[--i]=b[i]}I a},2L:H(b,a){R(J i=0,K=a.K;i<K;i++)G(a[i]===b)I i;I-1},2R:H(a,b){J i=0,T,2S=a.K;G(D.14.1f){1B(T=b[i++])G(T.16!=8)a[2S++]=T}N 1B(T=b[i++])a[2S++]=T;I a},4r:H(a){J c=[],2o={};1U{R(J i=0,K=a.K;i<K;i++){J b=D.L(a[i]);G(!2o[b]){2o[b]=M;c.1p(a[i])}}}1V(e){c=a}I c},3C:H(c,a,d){J b=[];R(J i=0,K=c.K;i<K;i++)G(!d!=!a(c[i],i))b.1p(c[i]);I b},2l:H(d,a){J c=[];R(J i=0,K=d.K;i<K;i++){J b=a(d[i],i);G(b!=U)c[c.K]=b}I c.7d.1w([],c)}});J v=9B.9A.3y();D.14={5B:(v.1I(/.+(?:9y|9x|9w|9v)[\\/: ]([\\d.]+)/)||[])[1],2k:/75/.11(v),2G:/2G/.11(v),1f:/1f/.11(v)&&!/2G/.11(v),42:/42/.11(v)&&!/(9s|75)/.11(v)};J y=D.14.1f?"7o":"72";D.1l({71:!D.14.1f||S.70=="6Z",3X:{"R":"9n","9k":"1F","4i":y,72:y,7o:y,9h:"9f",9e:"9d",9b:"99"}});D.P({6W:H(a){I a.1d},97:H(a){I D.4S(a,"1d")},95:H(a){I D.3a(a,2,"2H")},91:H(a){I D.3a(a,2,"4l")},8Z:H(a){I D.4S(a,"2H")},8X:H(a){I D.4S(a,"4l")},8W:H(a){I D.5v(a.1d.1x,a)},8V:H(a){I D.5v(a.1x)},6Q:H(a){I D.Y(a,"8U")?a.8T||a.8S.S:D.2d(a.3t)}},H(c,d){D.17[c]=H(b){J a=D.2l(7,d);G(b&&1j b=="23")a=D.3g(b,a);I 7.2I(D.4r(a))}});D.P({6P:"3v",8Q:"6F",39:"6E",8P:"5q",8O:"7b"},H(c,b){D.17[c]=H(){J a=19;I 7.P(H(){R(J i=0,K=a.K;i<K;i++)D(a[i])[b](7)})}});D.P({8N:H(a){D.1K(7,a,"");G(7.16==1)7.5l(a)},8M:H(a){D.1F.1e(7,a)},8L:H(a){D.1F.21(7,a)},8K:H(a){D.1F[D.1F.3T(7,a)?"21":"1e"](7,a)},21:H(a){G(!a||D.1E(a,[7]).r.K){D("*",7).1e(7).P(H(){D.W.21(7);D.3b(7)});G(7.1d)7.1d.37(7)}},4E:H(){D(">*",7).21();1B(7.1x)7.37(7.1x)}},H(a,b){D.17[a]=H(){I 7.P(b,19)}});D.P(["6N","4b"],H(i,c){J b=c.3y();D.17[b]=H(a){I 7[0]==1b?D.14.2G&&S.1c["5t"+c]||D.14.2k&&1b["5s"+c]||S.70=="6Z"&&S.1C["5t"+c]||S.1c["5t"+c]:7[0]==S?29.2f(29.2f(S.1c["4y"+c],S.1C["4y"+c]),29.2f(S.1c["2i"+c],S.1C["2i"+c])):a==12?(7.K?D.1g(7[0],b):U):7.1g(b,a.1q==56?a:a+"2X")}});H 25(a,b){I a[0]&&3r(D.2a(a[0],b,M),10)||0}J C=D.14.2k&&3r(D.14.5B)<8H?"(?:[\\\\w*3m-]|\\\\\\\\.)":"(?:[\\\\w\\8F-\\8E*3m-]|\\\\\\\\.)",6L=2B 4v("^>\\\\s*("+C+"+)"),6J=2B 4v("^("+C+"+)(#)("+C+"+)"),6I=2B 4v("^([#.]?)("+C+"*)");D.1l({6H:{"":H(a,i,m){I m[2]=="*"||D.Y(a,m[2])},"#":H(a,i,m){I a.4G("2v")==m[2]},":":{8D:H(a,i,m){I i<m[3]-0},8C:H(a,i,m){I i>m[3]-0},3a:H(a,i,m){I m[3]-0==i},79:H(a,i,m){I m[3]-0==i},3o:H(a,i){I i==0},3S:H(a,i,m,r){I i==r.K-1},6D:H(a,i){I i%2==0},6C:H(a,i){I i%2},"3o-4u":H(a){I a.1d.3H("*")[0]==a},"3S-4u":H(a){I D.3a(a.1d.5T,1,"4l")==a},"8z-4u":H(a){I!D.3a(a.1d.5T,2,"4l")},6W:H(a){I a.1x},4E:H(a){I!a.1x},8y:H(a,i,m){I(a.6O||a.8x||D(a).1r()||"").1h(m[3])>=0},4j:H(a){I"1G"!=a.O&&D.1g(a,"18")!="2F"&&D.1g(a,"5g")!="1G"},1G:H(a){I"1G"==a.O||D.1g(a,"18")=="2F"||D.1g(a,"5g")=="1G"},8w:H(a){I!a.3R},3R:H(a){I a.3R},4J:H(a){I a.4J},2W:H(a){I a.2W||D.1K(a,"2W")},1r:H(a){I"1r"==a.O},5O:H(a){I"5O"==a.O},5L:H(a){I"5L"==a.O},5p:H(a){I"5p"==a.O},3Q:H(a){I"3Q"==a.O},5o:H(a){I"5o"==a.O},6A:H(a){I"6A"==a.O},6z:H(a){I"6z"==a.O},2s:H(a){I"2s"==a.O||D.Y(a,"2s")},4T:H(a){I/4T|2A|6y|2s/i.11(a.Y)},3T:H(a,i,m){I D.2q(m[3],a).K},8t:H(a){I/h\\d/i.11(a.Y)},8s:H(a){I D.3C(D.3O,H(b){I a==b.T}).K}}},6x:[/^(\\[) *@?([\\w-]+) *([!*$^~=]*) *(\'?"?)(.*?)\\4 *\\]/,/^(:)([\\w-]+)\\("?\'?(.*?(\\(.*?\\))?[^(]*?)"?\'?\\)/,2B 4v("^([:.#]*)("+C+"+)")],3g:H(a,c,b){J d,1t=[];1B(a&&a!=d){d=a;J f=D.1E(a,c,b);a=f.t.1o(/^\\s*,\\s*/,"");1t=b?c=f.r:D.2R(1t,f.r)}I 1t},2q:H(t,o){G(1j t!="23")I[t];G(o&&o.16!=1&&o.16!=9)I[];o=o||S;J d=[o],2o=[],3S,Y;1B(t&&3S!=t){J r=[];3S=t;t=D.3k(t);J l=Q,3j=6L,m=3j.2D(t);G(m){Y=m[1].2r();R(J i=0;d[i];i++)R(J c=d[i].1x;c;c=c.2H)G(c.16==1&&(Y=="*"||c.Y.2r()==Y))r.1p(c);d=r;t=t.1o(3j,"");G(t.1h(" ")==0)6M;l=M}N{3j=/^([>+~])\\s*(\\w*)/i;G((m=3j.2D(t))!=U){r=[];J k={};Y=m[2].2r();m=m[1];R(J j=0,3i=d.K;j<3i;j++){J n=m=="~"||m=="+"?d[j].2H:d[j].1x;R(;n;n=n.2H)G(n.16==1){J g=D.L(n);G(m=="~"&&k[g])1X;G(!Y||n.Y.2r()==Y){G(m=="~")k[g]=M;r.1p(n)}G(m=="+")1X}}d=r;t=D.3k(t.1o(3j,""));l=M}}G(t&&!l){G(!t.1h(",")){G(o==d[0])d.4s();2o=D.2R(2o,d);r=d=[o];t=" "+t.6v(1,t.K)}N{J h=6J;J m=h.2D(t);G(m){m=[0,m[2],m[3],m[1]]}N{h=6I;m=h.2D(t)}m[2]=m[2].1o(/\\\\/g,"");J f=d[d.K-1];G(m[1]=="#"&&f&&f.61&&!D.4n(f)){J p=f.61(m[2]);G((D.14.1f||D.14.2G)&&p&&1j p.2v=="23"&&p.2v!=m[2])p=D(\'[@2v="\'+m[2]+\'"]\',f)[0];d=r=p&&(!m[3]||D.Y(p,m[3]))?[p]:[]}N{R(J i=0;d[i];i++){J a=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];G(a=="*"&&d[i].Y.3y()=="49")a="3n";r=D.2R(r,d[i].3H(a))}G(m[1]==".")r=D.5m(r,m[2]);G(m[1]=="#"){J e=[];R(J i=0;r[i];i++)G(r[i].4G("2v")==m[2]){e=[r[i]];1X}r=e}d=r}t=t.1o(h,"")}}G(t){J b=D.1E(t,r);d=r=b.r;t=D.3k(b.t)}}G(t)d=[];G(d&&o==d[0])d.4s();2o=D.2R(2o,d);I 2o},5m:H(r,m,a){m=" "+m+" ";J c=[];R(J i=0;r[i];i++){J b=(" "+r[i].1F+" ").1h(m)>=0;G(!a&&b||a&&!b)c.1p(r[i])}I c},1E:H(t,r,h){J d;1B(t&&t!=d){d=t;J p=D.6x,m;R(J i=0;p[i];i++){m=p[i].2D(t);G(m){t=t.8r(m[0].K);m[2]=m[2].1o(/\\\\/g,"");1X}}G(!m)1X;G(m[1]==":"&&m[2]=="4Y")r=62.11(m[3])?D.1E(m[3],r,M).r:D(r).4Y(m[3]);N G(m[1]==".")r=D.5m(r,m[2],h);N G(m[1]=="["){J g=[],O=m[3];R(J i=0,3i=r.K;i<3i;i++){J a=r[i],z=a[D.3X[m[2]]||m[2]];G(z==U||/5Q|4d|2W/.11(m[2]))z=D.1K(a,m[2])||\'\';G((O==""&&!!z||O=="="&&z==m[5]||O=="!="&&z!=m[5]||O=="^="&&z&&!z.1h(m[5])||O=="$="&&z.6v(z.K-m[5].K)==m[5]||(O=="*="||O=="~=")&&z.1h(m[5])>=0)^h)g.1p(a)}r=g}N G(m[1]==":"&&m[2]=="3a-4u"){J e={},g=[],11=/(-?)(\\d*)n((?:\\+|-)?\\d*)/.2D(m[3]=="6D"&&"2n"||m[3]=="6C"&&"2n+1"||!/\\D/.11(m[3])&&"8q+"+m[3]||m[3]),3o=(11[1]+(11[2]||1))-0,d=11[3]-0;R(J i=0,3i=r.K;i<3i;i++){J j=r[i],1d=j.1d,2v=D.L(1d);G(!e[2v]){J c=1;R(J n=1d.1x;n;n=n.2H)G(n.16==1)n.4q=c++;e[2v]=M}J b=Q;G(3o==0){G(j.4q==d)b=M}N G((j.4q-d)%3o==0&&(j.4q-d)/3o>=0)b=M;G(b^h)g.1p(j)}r=g}N{J f=D.6H[m[1]];G(1j f=="49")f=f[m[2]];G(1j f=="23")f=6u("Q||H(a,i){I "+f+";}");r=D.3C(r,H(a,i){I f(a,i,m,r)},h)}}I{r:r,t:t}},4S:H(b,c){J a=[],1t=b[c];1B(1t&&1t!=S){G(1t.16==1)a.1p(1t);1t=1t[c]}I a},3a:H(a,e,c,b){e=e||1;J d=0;R(;a;a=a[c])G(a.16==1&&++d==e)1X;I a},5v:H(n,a){J r=[];R(;n;n=n.2H){G(n.16==1&&n!=a)r.1p(n)}I r}});D.W={1e:H(f,i,g,e){G(f.16==3||f.16==8)I;G(D.14.1f&&f.4I)f=1b;G(!g.24)g.24=7.24++;G(e!=12){J h=g;g=7.3M(h,H(){I h.1w(7,19)});g.L=e}J j=D.L(f,"3w")||D.L(f,"3w",{}),1H=D.L(f,"1H")||D.L(f,"1H",H(){G(1j D!="12"&&!D.W.5k)I D.W.1H.1w(19.3L.T,19)});1H.T=f;D.P(i.1R(/\\s+/),H(c,b){J a=b.1R(".");b=a[0];g.O=a[1];J d=j[b];G(!d){d=j[b]={};G(!D.W.2t[b]||D.W.2t[b].4p.1k(f)===Q){G(f.3K)f.3K(b,1H,Q);N G(f.6t)f.6t("4o"+b,1H)}}d[g.24]=g;D.W.26[b]=M});f=U},24:1,26:{},21:H(e,h,f){G(e.16==3||e.16==8)I;J i=D.L(e,"3w"),1L,5i;G(i){G(h==12||(1j h=="23"&&h.8p(0)=="."))R(J g 1n i)7.21(e,g+(h||""));N{G(h.O){f=h.2y;h=h.O}D.P(h.1R(/\\s+/),H(b,a){J c=a.1R(".");a=c[0];G(i[a]){G(f)2U i[a][f.24];N R(f 1n i[a])G(!c[1]||i[a][f].O==c[1])2U i[a][f];R(1L 1n i[a])1X;G(!1L){G(!D.W.2t[a]||D.W.2t[a].4A.1k(e)===Q){G(e.6p)e.6p(a,D.L(e,"1H"),Q);N G(e.6n)e.6n("4o"+a,D.L(e,"1H"))}1L=U;2U i[a]}}})}R(1L 1n i)1X;G(!1L){J d=D.L(e,"1H");G(d)d.T=U;D.3b(e,"3w");D.3b(e,"1H")}}},1P:H(h,c,f,g,i){c=D.2d(c);G(h.1h("!")>=0){h=h.3s(0,-1);J a=M}G(!f){G(7.26[h])D("*").1e([1b,S]).1P(h,c)}N{G(f.16==3||f.16==8)I 12;J b,1L,17=D.1D(f[h]||U),W=!c[0]||!c[0].32;G(W){c.6h({O:h,2J:f,32:H(){},3J:H(){},4C:1z()});c[0][E]=M}c[0].O=h;G(a)c[0].6m=M;J d=D.L(f,"1H");G(d)b=d.1w(f,c);G((!17||(D.Y(f,\'a\')&&h=="4V"))&&f["4o"+h]&&f["4o"+h].1w(f,c)===Q)b=Q;G(W)c.4s();G(i&&D.1D(i)){1L=i.1w(f,b==U?c:c.7d(b));G(1L!==12)b=1L}G(17&&g!==Q&&b!==Q&&!(D.Y(f,\'a\')&&h=="4V")){7.5k=M;1U{f[h]()}1V(e){}}7.5k=Q}I b},1H:H(b){J a,1L,38,5f,4m;b=19[0]=D.W.6l(b||1b.W);38=b.O.1R(".");b.O=38[0];38=38[1];5f=!38&&!b.6m;4m=(D.L(7,"3w")||{})[b.O];R(J j 1n 4m){J c=4m[j];G(5f||c.O==38){b.2y=c;b.L=c.L;1L=c.1w(7,19);G(a!==Q)a=1L;G(1L===Q){b.32();b.3J()}}}I a},6l:H(b){G(b[E]==M)I b;J d=b;b={8o:d};J c="8n 8m 8l 8k 2s 8j 47 5d 6j 5E 8i L 8h 8g 4K 2y 5a 59 8e 8b 58 6f 8a 88 4k 87 86 84 6d 2J 4C 6c O 82 81 35".1R(" ");R(J i=c.K;i;i--)b[c[i]]=d[c[i]];b[E]=M;b.32=H(){G(d.32)d.32();d.80=Q};b.3J=H(){G(d.3J)d.3J();d.7Z=M};b.4C=b.4C||1z();G(!b.2J)b.2J=b.6d||S;G(b.2J.16==3)b.2J=b.2J.1d;G(!b.4k&&b.4K)b.4k=b.4K==b.2J?b.6c:b.4K;G(b.58==U&&b.5d!=U){J a=S.1C,1c=S.1c;b.58=b.5d+(a&&a.2e||1c&&1c.2e||0)-(a.6b||0);b.6f=b.6j+(a&&a.2c||1c&&1c.2c||0)-(a.6a||0)}G(!b.35&&((b.47||b.47===0)?b.47:b.5a))b.35=b.47||b.5a;G(!b.59&&b.5E)b.59=b.5E;G(!b.35&&b.2s)b.35=(b.2s&1?1:(b.2s&2?3:(b.2s&4?2:0)));I b},3M:H(a,b){b.24=a.24=a.24||b.24||7.24++;I b},2t:{27:{4p:H(){55();I},4A:H(){I}},3D:{4p:H(){G(D.14.1f)I Q;D(7).2O("53",D.W.2t.3D.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("53",D.W.2t.3D.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3D";I D.W.1H.1w(7,19)}},3N:{4p:H(){G(D.14.1f)I Q;D(7).2O("51",D.W.2t.3N.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("51",D.W.2t.3N.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3N";I D.W.1H.1w(7,19)}}}};D.17.1l({2O:H(c,a,b){I c=="4X"?7.2V(c,a,b):7.P(H(){D.W.1e(7,c,b||a,b&&a)})},2V:H(d,b,c){J e=D.W.3M(c||b,H(a){D(7).4e(a,e);I(c||b).1w(7,19)});I 7.P(H(){D.W.1e(7,d,e,c&&b)})},4e:H(a,b){I 7.P(H(){D.W.21(7,a,b)})},1P:H(c,a,b){I 7.P(H(){D.W.1P(c,a,7,M,b)})},5C:H(c,a,b){I 7[0]&&D.W.1P(c,a,7[0],Q,b)},2m:H(b){J c=19,i=1;1B(i<c.K)D.W.3M(b,c[i++]);I 7.4V(D.W.3M(b,H(a){7.4Z=(7.4Z||0)%i;a.32();I c[7.4Z++].1w(7,19)||Q}))},7X:H(a,b){I 7.2O(\'3D\',a).2O(\'3N\',b)},27:H(a){55();G(D.2Q)a.1k(S,D);N D.3A.1p(H(){I a.1k(7,D)});I 7}});D.1l({2Q:Q,3A:[],27:H(){G(!D.2Q){D.2Q=M;G(D.3A){D.P(D.3A,H(){7.1k(S)});D.3A=U}D(S).5C("27")}}});J x=Q;H 55(){G(x)I;x=M;G(S.3K&&!D.14.2G)S.3K("69",D.27,Q);G(D.14.1f&&1b==1S)(H(){G(D.2Q)I;1U{S.1C.7V("1A")}1V(3e){3B(19.3L,0);I}D.27()})();G(D.14.2G)S.3K("69",H(){G(D.2Q)I;R(J i=0;i<S.4W.K;i++)G(S.4W[i].3R){3B(19.3L,0);I}D.27()},Q);G(D.14.2k){J a;(H(){G(D.2Q)I;G(S.3f!="68"&&S.3f!="1J"){3B(19.3L,0);I}G(a===12)a=D("V, 7A[7U=7S]").K;G(S.4W.K!=a){3B(19.3L,0);I}D.27()})()}D.W.1e(1b,"43",D.27)}D.P(("7R,7Q,43,85,4y,4X,4V,7P,"+"7O,7N,89,53,51,7M,2A,"+"5o,7L,7K,8d,3e").1R(","),H(i,b){D.17[b]=H(a){I a?7.2O(b,a):7.1P(b)}});J F=H(a,c){J b=a.4k;1B(b&&b!=c)1U{b=b.1d}1V(3e){b=c}I b==c};D(1b).2O("4X",H(){D("*").1e(S).4e()});D.17.1l({67:D.17.43,43:H(g,d,c){G(1j g!=\'23\')I 7.67(g);J e=g.1h(" ");G(e>=0){J i=g.3s(e,g.K);g=g.3s(0,e)}c=c||H(){};J f="2P";G(d)G(D.1D(d)){c=d;d=U}N{d=D.3n(d);f="6g"}J h=7;D.3Y({1a:g,O:f,1O:"2K",L:d,1J:H(a,b){G(b=="1W"||b=="7J")h.2K(i?D("<1v/>").3v(a.4U.1o(/<1m(.|\\s)*?\\/1m>/g,"")).2q(i):a.4U);h.P(c,[a.4U,b,a])}});I 7},aL:H(){I D.3n(7.7I())},7I:H(){I 7.2l(H(){I D.Y(7,"3V")?D.2d(7.aH):7}).1E(H(){I 7.34&&!7.3R&&(7.4J||/2A|6y/i.11(7.Y)||/1r|1G|3Q/i.11(7.O))}).2l(H(i,c){J b=D(7).6e();I b==U?U:b.1q==2p?D.2l(b,H(a,i){I{34:c.34,2x:a}}):{34:c.34,2x:b}}).3p()}});D.P("7H,7G,7F,7D,7C,7B".1R(","),H(i,o){D.17[o]=H(f){I 7.2O(o,f)}});J B=1z();D.1l({3p:H(d,b,a,c){G(D.1D(b)){a=b;b=U}I D.3Y({O:"2P",1a:d,L:b,1W:a,1O:c})},aE:H(b,a){I D.3p(b,U,a,"1m")},aD:H(c,b,a){I D.3p(c,b,a,"3z")},aC:H(d,b,a,c){G(D.1D(b)){a=b;b={}}I D.3Y({O:"6g",1a:d,L:b,1W:a,1O:c})},aA:H(a){D.1l(D.60,a)},60:{1a:5Z.5Q,26:M,O:"2P",2T:0,7z:"4R/x-ax-3V-aw",7x:M,31:M,L:U,5Y:U,3Q:U,4Q:{2N:"4R/2N, 1r/2N",2K:"1r/2K",1m:"1r/4t, 4R/4t",3z:"4R/3z, 1r/4t",1r:"1r/as",4w:"*/*"}},4z:{},3Y:H(s){s=D.1l(M,s,D.1l(M,{},D.60,s));J g,2Z=/=\\?(&|$)/g,1u,L,O=s.O.2r();G(s.L&&s.7x&&1j s.L!="23")s.L=D.3n(s.L);G(s.1O=="4P"){G(O=="2P"){G(!s.1a.1I(2Z))s.1a+=(s.1a.1I(/\\?/)?"&":"?")+(s.4P||"7u")+"=?"}N G(!s.L||!s.L.1I(2Z))s.L=(s.L?s.L+"&":"")+(s.4P||"7u")+"=?";s.1O="3z"}G(s.1O=="3z"&&(s.L&&s.L.1I(2Z)||s.1a.1I(2Z))){g="4P"+B++;G(s.L)s.L=(s.L+"").1o(2Z,"="+g+"$1");s.1a=s.1a.1o(2Z,"="+g+"$1");s.1O="1m";1b[g]=H(a){L=a;1W();1J();1b[g]=12;1U{2U 1b[g]}1V(e){}G(i)i.37(h)}}G(s.1O=="1m"&&s.1Y==U)s.1Y=Q;G(s.1Y===Q&&O=="2P"){J j=1z();J k=s.1a.1o(/(\\?|&)3m=.*?(&|$)/,"$ap="+j+"$2");s.1a=k+((k==s.1a)?(s.1a.1I(/\\?/)?"&":"?")+"3m="+j:"")}G(s.L&&O=="2P"){s.1a+=(s.1a.1I(/\\?/)?"&":"?")+s.L;s.L=U}G(s.26&&!D.4O++)D.W.1P("7H");J n=/^(?:\\w+:)?\\/\\/([^\\/?#]+)/;G(s.1O=="1m"&&O=="2P"&&n.11(s.1a)&&n.2D(s.1a)[1]!=5Z.al){J i=S.3H("6w")[0];J h=S.3h("1m");h.4d=s.1a;G(s.7t)h.aj=s.7t;G(!g){J l=Q;h.ah=h.ag=H(){G(!l&&(!7.3f||7.3f=="68"||7.3f=="1J")){l=M;1W();1J();i.37(h)}}}i.3U(h);I 12}J m=Q;J c=1b.7s?2B 7s("ae.ac"):2B 7r();G(s.5Y)c.6R(O,s.1a,s.31,s.5Y,s.3Q);N c.6R(O,s.1a,s.31);1U{G(s.L)c.4B("ab-aa",s.7z);G(s.5S)c.4B("a9-5R-a8",D.4z[s.1a]||"a7, a6 a5 a4 5N:5N:5N a2");c.4B("X-9Z-9Y","7r");c.4B("9W",s.1O&&s.4Q[s.1O]?s.4Q[s.1O]+", */*":s.4Q.4w)}1V(e){}G(s.7m&&s.7m(c,s)===Q){s.26&&D.4O--;c.7l();I Q}G(s.26)D.W.1P("7B",[c,s]);J d=H(a){G(!m&&c&&(c.3f==4||a=="2T")){m=M;G(f){7k(f);f=U}1u=a=="2T"&&"2T"||!D.7j(c)&&"3e"||s.5S&&D.7h(c,s.1a)&&"7J"||"1W";G(1u=="1W"){1U{L=D.6X(c,s.1O,s.9S)}1V(e){1u="5J"}}G(1u=="1W"){J b;1U{b=c.5I("7g-5R")}1V(e){}G(s.5S&&b)D.4z[s.1a]=b;G(!g)1W()}N D.5H(s,c,1u);1J();G(s.31)c=U}};G(s.31){J f=4I(d,13);G(s.2T>0)3B(H(){G(c){c.7l();G(!m)d("2T")}},s.2T)}1U{c.9P(s.L)}1V(e){D.5H(s,c,U,e)}G(!s.31)d();H 1W(){G(s.1W)s.1W(L,1u);G(s.26)D.W.1P("7C",[c,s])}H 1J(){G(s.1J)s.1J(c,1u);G(s.26)D.W.1P("7F",[c,s]);G(s.26&&!--D.4O)D.W.1P("7G")}I c},5H:H(s,a,b,e){G(s.3e)s.3e(a,b,e);G(s.26)D.W.1P("7D",[a,s,e])},4O:0,7j:H(a){1U{I!a.1u&&5Z.9O=="5p:"||(a.1u>=7e&&a.1u<9N)||a.1u==7c||a.1u==9K||D.14.2k&&a.1u==12}1V(e){}I Q},7h:H(a,c){1U{J b=a.5I("7g-5R");I a.1u==7c||b==D.4z[c]||D.14.2k&&a.1u==12}1V(e){}I Q},6X:H(a,c,b){J d=a.5I("9J-O"),2N=c=="2N"||!c&&d&&d.1h("2N")>=0,L=2N?a.9I:a.4U;G(2N&&L.1C.2j=="5J")7p"5J";G(b)L=b(L,c);G(c=="1m")D.5u(L);G(c=="3z")L=6u("("+L+")");I L},3n:H(a){J s=[];G(a.1q==2p||a.5w)D.P(a,H(){s.1p(3u(7.34)+"="+3u(7.2x))});N R(J j 1n a)G(a[j]&&a[j].1q==2p)D.P(a[j],H(){s.1p(3u(j)+"="+3u(7))});N s.1p(3u(j)+"="+3u(D.1D(a[j])?a[j]():a[j]));I s.6s("&").1o(/%20/g,"+")}});D.17.1l({1N:H(c,b){I c?7.2g({1Z:"1N",2h:"1N",1y:"1N"},c,b):7.1E(":1G").P(H(){7.V.18=7.5D||"";G(D.1g(7,"18")=="2F"){J a=D("<"+7.2j+" />").6P("1c");7.V.18=a.1g("18");G(7.V.18=="2F")7.V.18="3I";a.21()}}).3l()},1M:H(b,a){I b?7.2g({1Z:"1M",2h:"1M",1y:"1M"},b,a):7.1E(":4j").P(H(){7.5D=7.5D||D.1g(7,"18");7.V.18="2F"}).3l()},78:D.17.2m,2m:H(a,b){I D.1D(a)&&D.1D(b)?7.78.1w(7,19):a?7.2g({1Z:"2m",2h:"2m",1y:"2m"},a,b):7.P(H(){D(7)[D(7).3F(":1G")?"1N":"1M"]()})},9G:H(b,a){I 7.2g({1Z:"1N"},b,a)},9F:H(b,a){I 7.2g({1Z:"1M"},b,a)},9E:H(b,a){I 7.2g({1Z:"2m"},b,a)},9D:H(b,a){I 7.2g({1y:"1N"},b,a)},9M:H(b,a){I 7.2g({1y:"1M"},b,a)},9C:H(c,a,b){I 7.2g({1y:a},c,b)},2g:H(k,j,i,g){J h=D.77(j,i,g);I 7[h.36===Q?"P":"36"](H(){G(7.16!=1)I Q;J f=D.1l({},h),p,1G=D(7).3F(":1G"),46=7;R(p 1n k){G(k[p]=="1M"&&1G||k[p]=="1N"&&!1G)I f.1J.1k(7);G(p=="1Z"||p=="2h"){f.18=D.1g(7,"18");f.33=7.V.33}}G(f.33!=U)7.V.33="1G";f.45=D.1l({},k);D.P(k,H(c,a){J e=2B D.28(46,f,c);G(/2m|1N|1M/.11(a))e[a=="2m"?1G?"1N":"1M":a](k);N{J b=a.6r().1I(/^([+-]=)?([\\d+-.]+)(.*)$/),2b=e.1t(M)||0;G(b){J d=3d(b[2]),2M=b[3]||"2X";G(2M!="2X"){46.V[c]=(d||1)+2M;2b=((d||1)/e.1t(M))*2b;46.V[c]=2b+2M}G(b[1])d=((b[1]=="-="?-1:1)*d)+2b;e.3G(2b,d,2M)}N e.3G(2b,a,"")}});I M})},36:H(a,b){G(D.1D(a)||(a&&a.1q==2p)){b=a;a="28"}G(!a||(1j a=="23"&&!b))I A(7[0],a);I 7.P(H(){G(b.1q==2p)A(7,a,b);N{A(7,a).1p(b);G(A(7,a).K==1)b.1k(7)}})},9X:H(b,c){J a=D.3O;G(b)7.36([]);7.P(H(){R(J i=a.K-1;i>=0;i--)G(a[i].T==7){G(c)a[i](M);a.7n(i,1)}});G(!c)7.5A();I 7}});J A=H(b,c,a){G(b){c=c||"28";J q=D.L(b,c+"36");G(!q||a)q=D.L(b,c+"36",D.2d(a))}I q};D.17.5A=H(a){a=a||"28";I 7.P(H(){J q=A(7,a);q.4s();G(q.K)q[0].1k(7)})};D.1l({77:H(b,a,c){J d=b&&b.1q==a0?b:{1J:c||!c&&a||D.1D(b)&&b,2u:b,41:c&&a||a&&a.1q!=9t&&a};d.2u=(d.2u&&d.2u.1q==4L?d.2u:D.28.5K[d.2u])||D.28.5K.74;d.5M=d.1J;d.1J=H(){G(d.36!==Q)D(7).5A();G(D.1D(d.5M))d.5M.1k(7)};I d},41:{73:H(p,n,b,a){I b+a*p},5P:H(p,n,b,a){I((-29.9r(p*29.9q)/2)+0.5)*a+b}},3O:[],48:U,28:H(b,c,a){7.15=c;7.T=b;7.1i=a;G(!c.3Z)c.3Z={}}});D.28.44={4D:H(){G(7.15.2Y)7.15.2Y.1k(7.T,7.1z,7);(D.28.2Y[7.1i]||D.28.2Y.4w)(7);G(7.1i=="1Z"||7.1i=="2h")7.T.V.18="3I"},1t:H(a){G(7.T[7.1i]!=U&&7.T.V[7.1i]==U)I 7.T[7.1i];J r=3d(D.1g(7.T,7.1i,a));I r&&r>-9p?r:3d(D.2a(7.T,7.1i))||0},3G:H(c,b,d){7.5V=1z();7.2b=c;7.3l=b;7.2M=d||7.2M||"2X";7.1z=7.2b;7.2S=7.4N=0;7.4D();J e=7;H t(a){I e.2Y(a)}t.T=7.T;D.3O.1p(t);G(D.48==U){D.48=4I(H(){J a=D.3O;R(J i=0;i<a.K;i++)G(!a[i]())a.7n(i--,1);G(!a.K){7k(D.48);D.48=U}},13)}},1N:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1N=M;7.3G(0,7.1t());G(7.1i=="2h"||7.1i=="1Z")7.T.V[7.1i]="9m";D(7.T).1N()},1M:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1M=M;7.3G(7.1t(),0)},2Y:H(a){J t=1z();G(a||t>7.15.2u+7.5V){7.1z=7.3l;7.2S=7.4N=1;7.4D();7.15.45[7.1i]=M;J b=M;R(J i 1n 7.15.45)G(7.15.45[i]!==M)b=Q;G(b){G(7.15.18!=U){7.T.V.33=7.15.33;7.T.V.18=7.15.18;G(D.1g(7.T,"18")=="2F")7.T.V.18="3I"}G(7.15.1M)7.T.V.18="2F";G(7.15.1M||7.15.1N)R(J p 1n 7.15.45)D.1K(7.T.V,p,7.15.3Z[p])}G(b)7.15.1J.1k(7.T);I Q}N{J n=t-7.5V;7.4N=n/7.15.2u;7.2S=D.41[7.15.41||(D.41.5P?"5P":"73")](7.4N,n,0,1,7.15.2u);7.1z=7.2b+((7.3l-7.2b)*7.2S);7.4D()}I M}};D.1l(D.28,{5K:{9l:9j,9i:7e,74:9g},2Y:{2e:H(a){a.T.2e=a.1z},2c:H(a){a.T.2c=a.1z},1y:H(a){D.1K(a.T.V,"1y",a.1z)},4w:H(a){a.T.V[a.1i]=a.1z+a.2M}}});D.17.2i=H(){J b=0,1S=0,T=7[0],3q;G(T)ao(D.14){J d=T.1d,4a=T,1s=T.1s,1Q=T.2z,5U=2k&&3r(5B)<9c&&!/9a/i.11(v),1g=D.2a,3c=1g(T,"30")=="3c";G(T.7y){J c=T.7y();1e(c.1A+29.2f(1Q.1C.2e,1Q.1c.2e),c.1S+29.2f(1Q.1C.2c,1Q.1c.2c));1e(-1Q.1C.6b,-1Q.1C.6a)}N{1e(T.5X,T.5W);1B(1s){1e(1s.5X,1s.5W);G(42&&!/^t(98|d|h)$/i.11(1s.2j)||2k&&!5U)2C(1s);G(!3c&&1g(1s,"30")=="3c")3c=M;4a=/^1c$/i.11(1s.2j)?4a:1s;1s=1s.1s}1B(d&&d.2j&&!/^1c|2K$/i.11(d.2j)){G(!/^96|1T.*$/i.11(1g(d,"18")))1e(-d.2e,-d.2c);G(42&&1g(d,"33")!="4j")2C(d);d=d.1d}G((5U&&(3c||1g(4a,"30")=="5x"))||(42&&1g(4a,"30")!="5x"))1e(-1Q.1c.5X,-1Q.1c.5W);G(3c)1e(29.2f(1Q.1C.2e,1Q.1c.2e),29.2f(1Q.1C.2c,1Q.1c.2c))}3q={1S:1S,1A:b}}H 2C(a){1e(D.2a(a,"6V",M),D.2a(a,"6U",M))}H 1e(l,t){b+=3r(l,10)||0;1S+=3r(t,10)||0}I 3q};D.17.1l({30:H(){J a=0,1S=0,3q;G(7[0]){J b=7.1s(),2i=7.2i(),4c=/^1c|2K$/i.11(b[0].2j)?{1S:0,1A:0}:b.2i();2i.1S-=25(7,\'94\');2i.1A-=25(7,\'aF\');4c.1S+=25(b,\'6U\');4c.1A+=25(b,\'6V\');3q={1S:2i.1S-4c.1S,1A:2i.1A-4c.1A}}I 3q},1s:H(){J a=7[0].1s;1B(a&&(!/^1c|2K$/i.11(a.2j)&&D.1g(a,\'30\')==\'93\'))a=a.1s;I D(a)}});D.P([\'5e\',\'5G\'],H(i,b){J c=\'4y\'+b;D.17[c]=H(a){G(!7[0])I;I a!=12?7.P(H(){7==1b||7==S?1b.92(!i?a:D(1b).2e(),i?a:D(1b).2c()):7[c]=a}):7[0]==1b||7[0]==S?46[i?\'aI\':\'aJ\']||D.71&&S.1C[c]||S.1c[c]:7[0][c]}});D.P(["6N","4b"],H(i,b){J c=i?"5e":"5G",4f=i?"6k":"6i";D.17["5s"+b]=H(){I 7[b.3y()]()+25(7,"57"+c)+25(7,"57"+4f)};D.17["90"+b]=H(a){I 7["5s"+b]()+25(7,"2C"+c+"4b")+25(7,"2C"+4f+"4b")+(a?25(7,"6S"+c)+25(7,"6S"+4f):0)}})})();',62,669,'|||||||this|||||||||||||||||||||||||||||||||||if|function|return|var|length|data|true|else|type|each|false|for|document|elem|null|style|event||nodeName|||test|undefined||browser|options|nodeType|fn|display|arguments|url|window|body|parentNode|add|msie|css|indexOf|prop|typeof|call|extend|script|in|replace|push|constructor|text|offsetParent|cur|status|div|apply|firstChild|opacity|now|left|while|documentElement|isFunction|filter|className|hidden|handle|match|complete|attr|ret|hide|show|dataType|trigger|doc|split|top|table|try|catch|success|break|cache|height||remove|tbody|string|guid|num|global|ready|fx|Math|curCSS|start|scrollTop|makeArray|scrollLeft|max|animate|width|offset|tagName|safari|map|toggle||done|Array|find|toUpperCase|button|special|duration|id|copy|value|handler|ownerDocument|select|new|border|exec|stack|none|opera|nextSibling|pushStack|target|html|inArray|unit|xml|bind|GET|isReady|merge|pos|timeout|delete|one|selected|px|step|jsre|position|async|preventDefault|overflow|name|which|queue|removeChild|namespace|insertBefore|nth|removeData|fixed|parseFloat|error|readyState|multiFilter|createElement|rl|re|trim|end|_|param|first|get|results|parseInt|slice|childNodes|encodeURIComponent|append|events|elems|toLowerCase|json|readyList|setTimeout|grep|mouseenter|color|is|custom|getElementsByTagName|block|stopPropagation|addEventListener|callee|proxy|mouseleave|timers|defaultView|password|disabled|last|has|appendChild|form|domManip|props|ajax|orig|set|easing|mozilla|load|prototype|curAnim|self|charCode|timerId|object|offsetChild|Width|parentOffset|src|unbind|br|currentStyle|clean|float|visible|relatedTarget|previousSibling|handlers|isXMLDoc|on|setup|nodeIndex|unique|shift|javascript|child|RegExp|_default|deep|scroll|lastModified|teardown|setRequestHeader|timeStamp|update|empty|tr|getAttribute|innerHTML|setInterval|checked|fromElement|Number|jQuery|state|active|jsonp|accepts|application|dir|input|responseText|click|styleSheets|unload|not|lastToggle|outline|mouseout|getPropertyValue|mouseover|getComputedStyle|bindReady|String|padding|pageX|metaKey|keyCode|getWH|andSelf|clientX|Left|all|visibility|container|index|init|triggered|removeAttribute|classFilter|prevObject|submit|file|after|windowData|inner|client|globalEval|sibling|jquery|absolute|clone|wrapAll|dequeue|version|triggerHandler|oldblock|ctrlKey|createTextNode|Top|handleError|getResponseHeader|parsererror|speeds|checkbox|old|00|radio|swing|href|Modified|ifModified|lastChild|safari2|startTime|offsetTop|offsetLeft|username|location|ajaxSettings|getElementById|isSimple|values|selectedIndex|runtimeStyle|rsLeft|_load|loaded|DOMContentLoaded|clientTop|clientLeft|toElement|srcElement|val|pageY|POST|unshift|Bottom|clientY|Right|fix|exclusive|detachEvent|cloneNode|removeEventListener|swap|toString|join|attachEvent|eval|substr|head|parse|textarea|reset|image|zoom|odd|even|before|prepend|exclude|expr|quickClass|quickID|uuid|quickChild|continue|Height|textContent|appendTo|contents|open|margin|evalScript|borderTopWidth|borderLeftWidth|parent|httpData|setArray|CSS1Compat|compatMode|boxModel|cssFloat|linear|def|webkit|nodeValue|speed|_toggle|eq|100|replaceWith|304|concat|200|alpha|Last|httpNotModified|getAttributeNode|httpSuccess|clearInterval|abort|beforeSend|splice|styleFloat|throw|colgroup|XMLHttpRequest|ActiveXObject|scriptCharset|callback|fieldset|multiple|processData|getBoundingClientRect|contentType|link|ajaxSend|ajaxSuccess|ajaxError|col|ajaxComplete|ajaxStop|ajaxStart|serializeArray|notmodified|keypress|keydown|change|mouseup|mousedown|dblclick|focus|blur|stylesheet|hasClass|rel|doScroll|black|hover|solid|cancelBubble|returnValue|wheelDelta|view|round|shiftKey|resize|screenY|screenX|relatedNode|mousemove|prevValue|originalTarget|offsetHeight|keyup|newValue|offsetWidth|eventPhase|detail|currentTarget|cancelable|bubbles|attrName|attrChange|altKey|originalEvent|charAt|0n|substring|animated|header|noConflict|line|enabled|innerText|contains|only|weight|font|gt|lt|uFFFF|u0128|size|417|Boolean|Date|toggleClass|removeClass|addClass|removeAttr|replaceAll|insertAfter|prependTo|wrap|contentWindow|contentDocument|iframe|children|siblings|prevAll|wrapInner|nextAll|outer|prev|scrollTo|static|marginTop|next|inline|parents|able|cellSpacing|adobeair|cellspacing|522|maxLength|maxlength|readOnly|400|readonly|fast|600|class|slow|1px|htmlFor|reverse|10000|PI|cos|compatible|Function|setData|ie|ra|it|rv|getData|userAgent|navigator|fadeTo|fadeIn|slideToggle|slideUp|slideDown|ig|responseXML|content|1223|NaN|fadeOut|300|protocol|send|setAttribute|option|dataFilter|cssText|changed|be|Accept|stop|With|Requested|Object|can|GMT|property|1970|Jan|01|Thu|Since|If|Type|Content|XMLHTTP|th|Microsoft|td|onreadystatechange|onload|cap|charset|colg|host|tfoot|specified|with|1_|thead|leg|plain|attributes|opt|embed|urlencoded|www|area|hr|ajaxSetup|meta|post|getJSON|getScript|marginLeft|img|elements|pageYOffset|pageXOffset|abbr|serialize|pixelLeft'.split('|'),0,{}));
// $Id: drupal.js,v 1.41.2.4 2009/07/21 08:59:10 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
var Shadowbox=function(){var ua=navigator.userAgent.toLowerCase(),S={version:"3.0b",adapter:null,current:-1,gallery:[],cache:[],content:null,dimensions:null,plugins:null,path:"",options:{adapter:null,animate:true,animateFade:true,autoplayMovies:true,autoDimensions:false,continuous:false,counterLimit:10,counterType:"default",displayCounter:true,displayNav:true,ease:function(x){return 1+Math.pow(x-1,3)},enableKeys:true,errors:{fla:{name:"Flash",url:"http://www.adobe.com/products/flashplayer/"},qt:{name:"QuickTime",url:"http://www.apple.com/quicktime/download/"},wmp:{name:"Windows Media Player",url:"http://www.microsoft.com/windows/windowsmedia/"},f4m:{name:"Flip4Mac",url:"http://www.flip4mac.com/wmv_download.htm"}},ext:{img:["png","jpg","jpeg","gif","bmp"],swf:["swf"],flv:["flv"],qt:["dv","mov","moov","movie","mp4"],wmp:["asf","wm","wmv"],qtwmp:["avi","mpg","mpeg"],iframe:["asp","aspx","cgi","cfm","htm","html","jsp","pl","php","php3","php4","php5","phtml","rb","rhtml","shtml","txt","vbs"]},fadeDuration:0.35,flashParams:{bgcolor:"#000000",allowFullScreen:true},flashVars:{},flashVersion:"9.0.115",handleOversize:"resize",handleUnsupported:"link",initialHeight:160,initialWidth:320,language:"en",modal:false,onChange:null,onClose:null,onFinish:null,onOpen:null,overlayColor:"#000",overlayOpacity:0.8,players:["img"],resizeDuration:0.35,showOverlay:true,showMovieControls:true,skipSetup:false,slideshowDelay:0,useSizzle:true,viewportPadding:20},client:{isIE:ua.indexOf("msie")>-1,isIE6:ua.indexOf("msie 6")>-1,isIE7:ua.indexOf("msie 7")>-1,isGecko:ua.indexOf("gecko")>-1&&ua.indexOf("safari")==-1,isWebkit:ua.indexOf("applewebkit/")>-1,isWindows:ua.indexOf("windows")>-1||ua.indexOf("win32")>-1,isMac:ua.indexOf("macintosh")>-1||ua.indexOf("mac os x")>-1,isLinux:ua.indexOf("linux")>-1},regex:{domain:/:\/\/(.*?)[:\/]/,inline:/#(.+)$/,rel:/^(light|shadow)box/i,gallery:/^(light|shadow)box\[(.*?)\]/i,unsupported:/^unsupported-(\w+)/,param:/\s*([a-z_]*?)\s*=\s*(.+)\s*/},libraries:{Prototype:"prototype",jQuery:"jquery",MooTools:"mootools",YAHOO:"yui",dojo:"dojo",Ext:"ext"},applyOptions:function(opts){if(opts){default_options=apply({},S.options);apply(S.options,opts)}},buildCacheObj:function(link,opts){var href=link.href,obj={el:link,title:link.getAttribute("title"),options:apply({},opts||{}),content:href};each(["player","title","height","width","gallery"],function(o){if(typeof obj.options[o]!="undefined"){obj[o]=obj.options[o];delete obj.options[o]}});if(!obj.player){obj.player=getPlayer(href)}var rel=link.getAttribute("rel");if(rel){var m=rel.match(S.regex.gallery);if(m){obj.gallery=escape(m[2])}each(rel.split(";"),function(p){m=p.match(S.regex.param);if(m){if(m[1]=="options"){eval("apply(obj.options,"+m[2]+")")}else{obj[m[1]]=m[2]}}})}return obj},change:function(n){if(!S.gallery){return}if(!S.gallery[n]){if(!S.options.continuous){return}else{n=n<0?S.gallery.length-1:0}}S.current=n;if(typeof slide_timer=="number"){clearTimeout(slide_timer);slide_timer=null;slide_delay=slide_start=0}if(S.options.onChange){S.options.onChange()}loadContent()},clearCache:function(){each(S.cache,function(obj){if(obj.el){S.lib.removeEvent(obj.el,"click",handleClick)}});S.cache=[]},close:function(){if(!active){return}active=false;listenKeys(false);if(S.content){S.content.remove();S.content=null}if(typeof slide_timer=="number"){clearTimeout(slide_timer)}slide_timer=null;slide_delay=0;if(S.options.onClose){S.options.onClose()}S.skin.onClose();S.revertOptions();each(v_cache,function(c){c[0].style.visibility=c[1]})},contentId:function(){return content_id},getCounter:function(){var len=S.gallery.length;if(S.options.counterType=="skip"){var c=[],i=0,end=len,limit=parseInt(S.options.counterLimit)||0;if(limit<len&&limit>2){var h=Math.floor(limit/2);i=S.current-h;if(i<0){i+=len}end=S.current+(limit-h);if(end>len){end-=len}}while(i!=end){if(i==len){i=0}c.push(i++)}}else{var c=(S.current+1)+" "+S.lang.of+" "+len}return c},getCurrent:function(){return S.current>-1?S.gallery[S.current]:null},hasNext:function(){return S.gallery.length>1&&(S.current!=S.gallery.length-1||S.options.continuous)},init:function(opts){if(initialized){return}initialized=true;opts=opts||{};init_options=opts;if(opts){apply(S.options,opts)}for(var e in S.options.ext){S.regex[e]=new RegExp(".("+S.options.ext[e].join("|")+")s*$","i")}if(!S.path){var path_re=/(.+)shadowbox\.js/i,path;each(document.getElementsByTagName("script"),function(s){if((path=path_re.exec(s.src))!=null){S.path=path[1];return false}})}if(S.options.adapter){S.adapter=S.options.adapter}else{for(var lib in S.libraries){if(typeof window[lib]!="undefined"){S.adapter=S.libraries[lib];break}}if(!S.adapter){S.adapter="base"}}if(S.options.useSizzle&&!window.Sizzle){U.include(S.path+"libraries/sizzle/sizzle.js")}if(!S.lang){U.include(S.path+"languages/shadowbox-"+S.options.language+".js")}each(S.options.players,function(p){if((p=="swf"||p=="flv")&&!window.swfobject){U.include(S.path+"libraries/swfobject/swfobject.js")}if(!S[p]){U.include(S.path+"players/shadowbox-"+p+".js")}});if(!S.lib){U.include(S.path+"adapters/shadowbox-"+S.adapter+".js")}},isActive:function(){return active},isPaused:function(){return slide_timer=="paused"},load:function(){if(S.skin.options){apply(S.options,S.skin.options);apply(S.options,init_options)}var markup=S.skin.markup.replace(/\{(\w+)\}/g,function(m,p){return S.lang[p]});S.lib.append(document.body,markup);if(S.skin.init){S.skin.init()}var id;S.lib.addEvent(window,"resize",function(){if(id){clearTimeout(id);id=null}if(active){id=setTimeout(function(){if(S.skin.onWindowResize){S.skin.onWindowResize()}var c=S.content;if(c&&c.onWindowResize){c.onWindowResize()}},50)}});if(!S.options.skipSetup){S.setup()}},next:function(){S.change(S.current+1)},open:function(obj){if(U.isLink(obj)){obj=S.buildCacheObj(obj)}if(obj.constructor==Array){S.gallery=obj;S.current=0}else{if(!obj.gallery){S.gallery=[obj];S.current=0}else{S.current=null;S.gallery=[];each(S.cache,function(c){if(c.gallery&&c.gallery==obj.gallery){if(S.current==null&&c.content==obj.content&&c.title==obj.title){S.current=S.gallery.length}S.gallery.push(c)}});if(S.current==null){S.gallery.unshift(obj);S.current=0}}}obj=S.getCurrent();if(obj.options){S.revertOptions();S.applyOptions(obj.options)}var g,r,m,s,a,oe=S.options.errors,msg,el;for(var i=0;i<S.gallery.length;++i){g=S.gallery[i]=apply({},S.gallery[i]);r=false;if(g.player=="unsupported"){r=true}else{if(m=S.regex.unsupported.exec(g.player)){if(S.options.handleUnsupported=="link"){g.player="html";switch(m[1]){case"qtwmp":s="either";a=[oe.qt.url,oe.qt.name,oe.wmp.url,oe.wmp.name];break;case"qtf4m":s="shared";a=[oe.qt.url,oe.qt.name,oe.f4m.url,oe.f4m.name];break;default:s="single";if(m[1]=="swf"||m[1]=="flv"){m[1]="fla"}a=[oe[m[1]].url,oe[m[1]].name]}msg=S.lang.errors[s].replace(/\{(\d+)\}/g,function(m,n){return a[n]});g.content='<div class="sb-message">'+msg+"</div>"}else{r=true}}else{if(g.player=="inline"){m=S.regex.inline.exec(g.content);if(m){var el=U.get(m[1]);if(el){g.content=el.innerHTML}else{throw"Cannot find element with id "+m[1]}}else{throw"Cannot find element id for inline content"}}else{if(g.player=="swf"||g.player=="flv"){var version=(g.options&&g.options.flashVersion)||S.options.flashVersion;if(!swfobject.hasFlashPlayerVersion(version)){g.width=310;g.height=177}}}}}if(r){S.gallery.splice(i,1);if(i<S.current){--S.current}else{if(i==S.current){S.current=i>0?i-1:i}}--i}}if(S.gallery.length){if(!active){if(typeof S.options.onOpen=="function"&&S.options.onOpen(obj)===false){return}v_cache=[];each(["select","object","embed","canvas"],function(tag){each(document.getElementsByTagName(tag),function(el){v_cache.push([el,el.style.visibility||"visible"]);el.style.visibility="hidden"})});var h=S.options.autoDimensions&&"height" in obj?obj.height:S.options.initialHeight;var w=S.options.autoDimensions&&"width" in obj?obj.width:S.options.initialWidth;S.skin.onOpen(h,w,loadContent)}else{loadContent()}active=true}},pause:function(){if(typeof slide_timer!="number"){return}var time=new Date().getTime();slide_delay=Math.max(0,slide_delay-(time-slide_start));if(slide_delay){clearTimeout(slide_timer);slide_timer="paused";if(S.skin.onPause){S.skin.onPause()}}},play:function(){if(!S.hasNext()){return}if(!slide_delay){slide_delay=S.options.slideshowDelay*1000}if(slide_delay){slide_start=new Date().getTime();slide_timer=setTimeout(function(){slide_delay=slide_start=0;S.next()},slide_delay);if(S.skin.onPlay){S.skin.onPlay()}}},previous:function(){S.change(S.current-1)},revertOptions:function(){apply(S.options,default_options)},setDimensions:function(height,width,max_h,max_w,tb,lr,resizable){var h=height=parseInt(height),w=width=parseInt(width),pad=parseInt(S.options.viewportPadding)||0;var extra_h=2*pad+tb;if(h+extra_h>=max_h){h=max_h-extra_h}var extra_w=2*pad+lr;if(w+extra_w>=max_w){w=max_w-extra_w}var resize_h=height,resize_w=width,change_h=(height-h)/height,change_w=(width-w)/width,oversized=(change_h>0||change_w>0);if(resizable&&oversized&&S.options.handleOversize=="resize"){if(change_h>change_w){w=Math.round((width/height)*h)}else{if(change_w>change_h){h=Math.round((height/width)*w)}}resize_w=w;resize_h=h}S.dimensions={height:h+tb,width:w+lr,inner_h:h,inner_w:w,top:(max_h-(h+extra_h))/2+pad,left:(max_w-(w+extra_w))/2+pad,oversized:oversized,resize_h:resize_h,resize_w:resize_w};return S.dimensions},setup:function(links,opts){if(!links){var links=[],rel;each(document.getElementsByTagName("a"),function(a){rel=a.getAttribute("rel");if(rel&&S.regex.rel.test(rel)){links.push(a)}})}else{var len=links.length;if(len){if(window.Sizzle){if(typeof links=="string"){links=Sizzle(links)}else{if(len==2&&links.push&&typeof links[0]=="string"&&links[1].nodeType){links=Sizzle(links[0],links[1])}}}}else{links=[links]}}each(links,function(link){if(typeof link.shadowboxCacheKey=="undefined"){link.shadowboxCacheKey=S.cache.length;S.lib.addEvent(link,"click",handleClick)}S.cache[link.shadowboxCacheKey]=S.buildCacheObj(link,opts)})}},U=S.util={animate:function(el,p,to,d,cb){var from=parseFloat(S.lib.getStyle(el,p));if(isNaN(from)){from=0}var delta=to-from;if(delta==0){if(cb){cb()}return}var op=p=="opacity";function fn(ease){var to=from+ease*delta;if(op){U.setOpacity(el,to)}else{el.style[p]=to+"px"}}if(!d||(!op&&!S.options.animate)||(op&&!S.options.animateFade)){fn(1);if(cb){cb()}return}d*=1000;var begin=new Date().getTime(),end=begin+d,time,timer=setInterval(function(){time=new Date().getTime();if(time>=end){clearInterval(timer);fn(1);if(cb){cb()}}else{fn(S.options.ease((time-begin)/d))}},10)},apply:function(o,e){for(var p in e){o[p]=e[p]}return o},clearOpacity:function(el){var s=el.style;if(window.ActiveXObject){if(typeof s.filter=="string"&&(/alpha/i).test(s.filter)){s.filter=s.filter.replace(/[\w\.]*alpha\(.*?\);?/i,"")}}else{s.opacity=""}},each:function(obj,fn,scope){for(var i=0,len=obj.length;i<len;++i){if(fn.call(scope||obj[i],obj[i],i,obj)===false){return}}},get:function(id){return document.getElementById(id)},include:function(){var includes={};return function(file){if(includes[file]){return}includes[file]=true;document.write('<script type="text/javascript" src="'+file+'"><\/script>')}}(),isLink:function(obj){if(!obj||!obj.tagName){return false}var up=obj.tagName.toUpperCase();return up=="A"||up=="AREA"},removeChildren:function(el){while(el.firstChild){el.removeChild(el.firstChild)}},setOpacity:function(el,o){var s=el.style;if(window.ActiveXObject){s.zoom=1;s.filter=(s.filter||"").replace(/\s*alpha\([^\)]*\)/gi,"")+(o==1?"":" alpha(opacity="+(o*100)+")")}else{s.opacity=o}}},apply=U.apply,each=U.each,init_options,initialized=false,default_options={},content_id="sb-content",active=false,slide_timer,slide_start,slide_delay=0,v_cache=[];if(navigator.plugins&&navigator.plugins.length){var names=[];each(navigator.plugins,function(p){names.push(p.name)});names=names.join();var detectPlugin=function(n){return names.indexOf(n)>-1};var f4m=detectPlugin("Flip4Mac");S.plugins={fla:detectPlugin("Shockwave Flash"),qt:detectPlugin("QuickTime"),wmp:!f4m&&detectPlugin("Windows Media"),f4m:f4m}}else{function detectPlugin(n){try{var axo=new ActiveXObject(n)}catch(e){}return !!axo}S.plugins={fla:detectPlugin("ShockwaveFlash.ShockwaveFlash"),qt:detectPlugin("QuickTime.QuickTime"),wmp:detectPlugin("wmplayer.ocx"),f4m:false}}function getPlayer(url){var re=S.regex,p=S.plugins,m=url.match(re.domain),d=m&&document.domain==m[1];if(url.indexOf("#")>-1&&d){return"inline"}var q=url.indexOf("?");if(q>-1){url=url.substring(0,q)}if(re.img.test(url)){return"img"}if(re.swf.test(url)){return p.fla?"swf":"unsupported-swf"}if(re.flv.test(url)){return p.fla?"flv":"unsupported-flv"}if(re.qt.test(url)){return p.qt?"qt":"unsupported-qt"}if(re.wmp.test(url)){if(p.wmp){return"wmp"}if(p.f4m){return"qt"}if(S.client.isMac){return p.qt?"unsupported-f4m":"unsupported-qtf4m"}return"unsupported-wmp"}if(re.qtwmp.test(url)){if(p.qt){return"qt"}if(p.wmp){return"wmp"}return S.client.isMac?"unsupported-qt":"unsupported-qtwmp"}if(!d||re.iframe.test(url)){return"iframe"}return"unsupported"}function handleClick(e){var link;if(U.isLink(this)){link=this}else{link=S.lib.getTarget(e);while(!U.isLink(link)&&link.parentNode){link=link.parentNode}}if(link){var key=link.shadowboxCacheKey;if(typeof key!="undefined"&&typeof S.cache[key]!="undefined"){link=S.cache[key]}S.open(link);if(S.gallery.length){S.lib.preventDefault(e)}}}function listenKeys(on){if(!S.options.enableKeys){return}S.lib[(on?"add":"remove")+"Event"](document,"keydown",handleKey)}function handleKey(e){var code=S.lib.keyCode(e);S.lib.preventDefault(e);switch(code){case 81:case 88:case 27:S.close();break;case 37:S.previous();break;case 39:S.next();break;case 32:S[(typeof slide_timer=="number"?"pause":"play")]()}}function loadContent(){var obj=S.getCurrent();if(!obj){return}var p=obj.player=="inline"?"html":obj.player;if(typeof S[p]!="function"){throw"Unknown player: "+p}var change=false;if(S.content){S.content.remove();change=true;S.revertOptions();if(obj.options){S.applyOptions(obj.options)}}U.removeChildren(S.skin.bodyEl());S.content=new S[p](obj);listenKeys(false);S.skin.onLoad(S.content,change,function(){if(!S.content){return}if(typeof S.content.ready!="undefined"){var id=setInterval(function(){if(S.content){if(S.content.ready){clearInterval(id);id=null;S.skin.onReady(contentReady)}}else{clearInterval(id);id=null}},100)}else{S.skin.onReady(contentReady)}});if(S.gallery.length>1){var next=S.gallery[S.current+1]||S.gallery[0];if(next.player=="img"){var a=new Image();a.src=next.content}var prev=S.gallery[S.current-1]||S.gallery[S.gallery.length-1];if(prev.player=="img"){var b=new Image();b.src=prev.content}}}function contentReady(){if(!S.content){return}S.content.append(S.skin.bodyEl(),content_id,S.dimensions);S.skin.onFinish(finishContent)}function finishContent(){if(!S.content){return}if(S.content.onLoad){S.content.onLoad()}if(S.options.onFinish){S.options.onFinish()}if(!S.isPaused()){S.play()}listenKeys(true)}return S}();Shadowbox.skin=function(){var e=Shadowbox,d=e.util,o=false,k=["sb-nav-close","sb-nav-next","sb-nav-play","sb-nav-pause","sb-nav-previous"];function l(){d.get("sb-container").style.top=document.documentElement.scrollTop+"px"}function g(p){var q=d.get("sb-overlay"),r=d.get("sb-container"),t=d.get("sb-wrapper");if(p){if(e.client.isIE6){l();e.lib.addEvent(window,"scroll",l)}if(e.options.showOverlay){o=true;q.style.backgroundColor=e.options.overlayColor;d.setOpacity(q,0);if(!e.options.modal){e.lib.addEvent(q,"click",e.close)}t.style.display="none"}r.style.visibility="visible";if(o){var s=parseFloat(e.options.overlayOpacity);d.animate(q,"opacity",s,e.options.fadeDuration,p)}else{p()}}else{if(e.client.isIE6){e.lib.removeEvent(window,"scroll",l)}e.lib.removeEvent(q,"click",e.close);if(o){t.style.display="none";d.animate(q,"opacity",0,e.options.fadeDuration,function(){r.style.display="";t.style.display="";d.clearOpacity(q)})}else{r.style.visibility="hidden"}}}function b(r,p){var q=d.get("sb-nav-"+r);if(q){q.style.display=p?"":"none"}}function i(r,q){var t=d.get("sb-loading"),v=e.getCurrent().player,u=(v=="img"||v=="html");if(r){function s(){d.clearOpacity(t);if(q){q()}}d.setOpacity(t,0);t.style.display="";if(u){d.animate(t,"opacity",1,e.options.fadeDuration,s)}else{s()}}else{function s(){t.style.display="none";d.clearOpacity(t);if(q){q()}}if(u){d.animate(t,"opacity",0,e.options.fadeDuration,s)}else{s()}}}function a(s){var u=e.getCurrent();d.get("sb-title-inner").innerHTML=u.title||"";var x,r,t,y,q;if(e.options.displayNav){x=true;var w=e.gallery.length;if(w>1){if(e.options.continuous){r=q=true}else{r=(w-1)>e.current;q=e.current>0}}if(e.options.slideshowDelay>0&&e.hasNext()){y=!e.isPaused();t=!y}}else{x=r=t=y=q=false}b("close",x);b("next",r);b("play",t);b("pause",y);b("previous",q);var x="";if(e.options.displayCounter&&e.gallery.length>1){var v=e.getCounter();if(typeof v=="string"){x=v}else{d.each(v,function(p){x+='<a onclick="Shadowbox.change('+p+');"';if(p==e.current){x+=' class="sb-counter-current"'}x+=">"+(p+1)+"</a>"})}}d.get("sb-counter").innerHTML=x;s()}function h(r,q){var w=d.get("sb-wrapper"),z=d.get("sb-title"),s=d.get("sb-info"),p=d.get("sb-title-inner"),x=d.get("sb-info-inner"),y=parseInt(e.lib.getStyle(p,"height"))||0,v=parseInt(e.lib.getStyle(x,"height"))||0;function u(){p.style.visibility=x.style.visibility="hidden";a(q)}if(r){d.animate(z,"height",0,0.35);d.animate(s,"height",0,0.35);d.animate(w,"paddingTop",y,0.35);d.animate(w,"paddingBottom",v,0.35,u)}else{z.style.height=s.style.height="0px";w.style.paddingTop=y+"px";w.style.paddingBottom=v+"px";u()}}function j(r){var q=d.get("sb-wrapper"),u=d.get("sb-title"),s=d.get("sb-info"),x=d.get("sb-title-inner"),w=d.get("sb-info-inner"),v=parseInt(e.lib.getStyle(x,"height"))||0,p=parseInt(e.lib.getStyle(w,"height"))||0;x.style.visibility=w.style.visibility="";if(x.innerHTML!=""){d.animate(u,"height",v,0.35);d.animate(q,"paddingTop",0,0.35)}d.animate(s,"height",p,0.35);d.animate(q,"paddingBottom",0,0.35,r)}function c(q,x,w,p){var y=d.get("sb-body"),v=d.get("sb-wrapper"),u=parseInt(q),r=parseInt(x);if(w){d.animate(y,"height",u,e.options.resizeDuration);d.animate(v,"top",r,e.options.resizeDuration,p)}else{y.style.height=u+"px";v.style.top=r+"px";if(p){p()}}}function f(u,x,v,p){var t=d.get("sb-wrapper"),r=parseInt(u),q=parseInt(x);if(v){d.animate(t,"width",r,e.options.resizeDuration);d.animate(t,"left",q,e.options.resizeDuration,p)}else{t.style.width=r+"px";t.style.left=q+"px";if(p){p()}}}function n(p){var r=e.content;if(!r){return}var q=m(r.height,r.width,r.resizable);switch(e.options.animSequence){case"hw":c(q.inner_h,q.top,true,function(){f(q.width,q.left,true,p)});break;case"wh":f(q.width,q.left,true,function(){c(q.inner_h,q.top,true,p)});break;default:f(q.width,q.left,true);c(q.inner_h,q.top,true,p)}}function m(p,s,r){var q=d.get("sb-body-inner");sw=d.get("sb-wrapper"),so=d.get("sb-overlay"),tb=sw.offsetHeight-q.offsetHeight,lr=sw.offsetWidth-q.offsetWidth,max_h=so.offsetHeight,max_w=so.offsetWidth;return e.setDimensions(p,s,max_h,max_w,tb,lr,r)}return{markup:'<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><a onclick="Shadowbox.close()">{cancel}</a></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div><div style="clear:both"></div></div></div></div></div>',options:{animSequence:"sync"},init:function(){if(e.client.isIE6){d.get("sb-body").style.zoom=1;var r,p,q=/url\("(.*\.png)"\)/;d.each(k,function(s){r=d.get(s);if(r){p=e.lib.getStyle(r,"backgroundImage").match(q);if(p){r.style.backgroundImage="none";r.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="+p[1]+",sizingMethod=scale);"}}})}},bodyEl:function(){return d.get("sb-body-inner")},onOpen:function(r,q,p){d.get("sb-container").style.display="block";var s=m(r,q);c(s.inner_h,s.top,false);f(s.width,s.left,false);g(p)},onLoad:function(q,r,p){i(true);h(r,function(){if(!q){return}if(!r){d.get("sb-wrapper").style.display=""}p()})},onReady:function(p){n(function(){j(p)})},onFinish:function(p){i(false,p)},onClose:function(){g(false)},onPlay:function(){b("play",false);b("pause",true)},onPause:function(){b("pause",false);b("play",true)},onWindowResize:function(){var r=e.content;if(!r){return}var q=m(r.height,r.width,r.resizable);f(q.width,q.left,false);c(q.inner_h,q.top,false);var p=d.get(e.contentId());if(p){if(r.resizable&&e.options.handleOversize=="resize"){p.height=q.resize_h;p.width=q.resize_w}}}}}();;
if(typeof jQuery=="undefined"){throw"Unable to load Shadowbox adapter, jQuery not found"}if(typeof Shadowbox=="undefined"){throw"Unable to load Shadowbox adapter, Shadowbox not found"}Shadowbox.lib=function(a){return{getStyle:function(c,b){return a(c).css(b)},remove:function(b){a(b).remove()},getTarget:function(b){return b.target},getPageXY:function(b){return[b.pageX,b.pageY]},preventDefault:function(b){b.preventDefault()},keyCode:function(b){return b.keyCode},addEvent:function(d,b,c){a(d).bind(b,c)},removeEvent:function(d,b,c){a(d).unbind(b,c)},append:function(c,b){a(c).append(b)}}}(jQuery);jQuery(Shadowbox.load);(function(a){a.fn.shadowbox=function(b){return this.each(function(){var d=a(this);var e=a.extend({},b||{},a.metadata?d.metadata():a.meta?d.data():{});var c=this.className||"";e.width=parseInt((c.match(/w:(\d+)/)||[])[1])||e.width;e.height=parseInt((c.match(/h:(\d+)/)||[])[1])||e.height;Shadowbox.setup(d,e)})}})(jQuery);;
if(typeof Shadowbox=="undefined"){throw"Unable to load Shadowbox language file, Shadowbox not found."}Shadowbox.lang={code:"en",of:"of",loading:"loading",cancel:"Cancel",next:"Next",previous:"Previous",play:"Play",pause:"Pause",close:"Close",errors:{single:'You must install the <a href="{0}">{1}</a> browser plugin to view this content.',shared:'You must install both the <a href="{0}">{1}</a> and <a href="{2}">{3}</a> browser plugins to view this content.',either:'You must install either the <a href="{0}">{1}</a> or the <a href="{2}">{3}</a> browser plugin to view this content.'}};;
(function(h){var e=h.util,i,k,j="sb-drag-layer",d;function b(){i={x:0,y:0,start_x:null,start_y:null}}function c(m,o,l){if(m){b();var n=["position:absolute","height:"+o+"px","width:"+l+"px","cursor:"+(h.client.isGecko?"-moz-grab":"move"),"background-color:"+(h.client.isIE?"#fff;filter:alpha(opacity=0)":"transparent")].join(";");h.lib.append(h.skin.bodyEl(),'<div id="'+j+'" style="'+n+'"></div>');h.lib.addEvent(e.get(j),"mousedown",g)}else{var p=e.get(j);if(p){h.lib.removeEvent(p,"mousedown",g);h.lib.remove(p)}k=null}}function g(m){h.lib.preventDefault(m);var l=h.lib.getPageXY(m);i.start_x=l[0];i.start_y=l[1];k=e.get(h.contentId());h.lib.addEvent(document,"mousemove",f);h.lib.addEvent(document,"mouseup",a);if(h.client.isGecko){e.get(j).style.cursor="-moz-grabbing"}}function a(){h.lib.removeEvent(document,"mousemove",f);h.lib.removeEvent(document,"mouseup",a);if(h.client.isGecko){e.get(j).style.cursor="-moz-grab"}}function f(o){var q=h.content,p=h.dimensions,n=h.lib.getPageXY(o);var m=n[0]-i.start_x;i.start_x+=m;i.x=Math.max(Math.min(0,i.x+m),p.inner_w-q.width);k.style.left=i.x+"px";var l=n[1]-i.start_y;i.start_y+=l;i.y=Math.max(Math.min(0,i.y+l),p.inner_h-q.height);k.style.top=i.y+"px"}h.img=function(m){this.obj=m;this.resizable=true;this.ready=false;var l=this;d=new Image();d.onload=function(){l.height=m.height?parseInt(m.height,10):d.height;l.width=m.width?parseInt(m.width,10):d.width;l.ready=true;d.onload="";d=null};d.src=m.content};h.img.prototype={append:function(l,o,n){this.id=o;var m=document.createElement("img");m.id=o;m.src=this.obj.content;m.style.position="absolute";m.setAttribute("height",n.resize_h);m.setAttribute("width",n.resize_w);l.appendChild(m)},remove:function(){var l=e.get(this.id);if(l){h.lib.remove(l)}c(false);if(d){d.onload="";d=null}},onLoad:function(){var l=h.dimensions;if(l.oversized&&h.options.handleOversize=="drag"){c(true,l.resize_h,l.resize_w)}},onWindowResize:function(){if(k){var p=h.content,o=h.dimensions,n=parseInt(h.lib.getStyle(k,"top")),m=parseInt(h.lib.getStyle(k,"left"));if(n+p.height<o.inner_h){k.style.top=o.inner_h-p.height+"px"}if(m+p.width<o.inner_w){k.style.left=o.inner_w-p.width+"px"}}}}})(Shadowbox);;
(function(b){var a=b.util;b.swf=function(c){this.obj=c;this.resizable=true;this.height=c.height?parseInt(c.height,10):300;this.width=c.width?parseInt(c.width,10):300};b.swf.prototype={append:function(k,d,m){this.id=d;var i=document.createElement("div");i.id=d;k.appendChild(i);var j=m.resize_h,n=m.resize_w,e=this.obj.content,l=b.options.flashVersion,c=b.path+"libraries/swfobject/expressInstall.swf",f=b.options.flashVars,g=b.options.flashParams;swfobject.embedSWF(e,d,n,j,l,c,f,g)},remove:function(){swfobject.expressInstallCallback();swfobject.removeSWF(this.id)}}})(Shadowbox);;
(function(b){var a=b.util,c=20;b.flv=function(d){this.obj=d;this.resizable=true;this.height=d.height?parseInt(d.height,10):300;if(b.options.showMovieControls==true){this.height+=c}this.width=d.width?parseInt(d.width,10):300};b.flv.prototype={append:function(l,e,n){this.id=e;var j=document.createElement("div");j.id=e;l.appendChild(j);var k=n.resize_h,o=n.resize_w,f=b.path+"libraries/mediaplayer/player.swf",m=b.options.flashVersion,d=b.path+"libraries/swfobject/expressInstall.swf",g=a.apply({file:this.obj.content,height:k,width:o,autostart:(b.options.autoplayMovies?"true":"false"),controlbar:(b.options.showMovieControls?"bottom":"none"),backcolor:"0x000000",frontcolor:"0xCCCCCC",lightcolor:"0x557722"},b.options.flashVars),i=b.options.flashParams;swfobject.embedSWF(f,e,o,k,m,d,g,i)},remove:function(){swfobject.expressInstallCallback();swfobject.removeSWF(this.id)}}})(Shadowbox);;
(function(a){var b=16;a.qt=function(c){this.obj=c;this.height=c.height?parseInt(c.height,10):300;if(a.options.showMovieControls==true){this.height+=b}this.width=c.width?parseInt(c.width,10):300};a.qt.prototype={append:function(l,e,n){this.id=e;var f=a.options,g=String(f.autoplayMovies),o=String(f.showMovieControls);var k="<object",i={id:e,name:e,height:this.height,width:this.width,kioskmode:"true"};if(a.client.isIE){i.classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";i.codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0"}else{i.type="video/quicktime";i.data=this.obj.content}for(var h in i){k+=" "+h+'="'+i[h]+'"'}k+=">";var j={src:this.obj.content,scale:"aspect",controller:o,autoplay:g};for(var c in j){k+='<param name="'+c+'" value="'+j[c]+'">'}k+="</object>";l.innerHTML=k},remove:function(){var f=this.id;try{document[f].Stop()}catch(d){}var c=document.getElementById(f);if(c){a.lib.remove(c)}}}})(Shadowbox);;
(function(a){var b=(a.client.isIE?70:45);a.wmp=function(c){this.obj=c;this.height=c.height?parseInt(c.height,10):300;if(a.options.showMovieControls){this.height+=b}this.width=c.width?parseInt(c.width,10):300};a.wmp.prototype={append:function(c,j,i){this.id=j;var e=a.options,f=e.autoplayMovies?1:0;var d='<object id="'+j+'" name="'+j+'" height="'+this.height+'" width="'+this.width+'"',h={autostart:e.autoplayMovies?1:0};if(a.client.isIE){d+=' classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6"';h.url=this.obj.content;h.uimode=e.showMovieControls?"full":"none"}else{d+=' type="video/x-ms-wmv"';d+=' data="'+this.obj.content+'"';h.showcontrols=e.showMovieControls?1:0}d+=">";for(var g in h){d+='<param name="'+g+'" value="'+h[g]+'">'}d+="</object>";c.innerHTML=d},remove:function(){var f=this.id;if(a.client.isIE){try{window[f].controls.stop();window[f].URL="non-existent.wmv";window[f]=function(){}}catch(d){}}var c=document.getElementById(f);if(c){setTimeout(function(){a.lib.remove(c)},10)}}}})(Shadowbox);;
(function(a){a.html=function(b){this.obj=b;this.height=b.height?parseInt(b.height,10):300;this.width=b.width?parseInt(b.width,10):500};a.html.prototype={append:function(b,e,c){this.id=e;var d=document.createElement("div");d.id=e;d.className="html";d.innerHTML=this.obj.content;b.appendChild(d)},remove:function(){var b=document.getElementById(this.id);if(b){a.lib.remove(b)}}}})(Shadowbox);;
(function(a){a.iframe=function(c){this.obj=c;var b=document.getElementById("sb-overlay");this.height=c.height?parseInt(c.height,10):b.offsetHeight;this.width=c.width?parseInt(c.width,10):b.offsetWidth};a.iframe.prototype={append:function(b,e,d){this.id=e;var c='<iframe id="'+e+'" name="'+e+'" height="100%" width="100%" frameborder="0" marginwidth="0" marginheight="0" scrolling="auto"';if(a.client.isIE){c+=' allowtransparency="true"';if(a.client.isIE6){c+=" src=\"javascript:false;document.write('');\""}}c+="></iframe>";b.innerHTML=c},remove:function(){var b=document.getElementById(this.id);if(b){a.lib.remove(b);if(a.client.isGecko){delete window.frames[this.id]}}},onLoad:function(){var b=a.client.isIE?document.getElementById(this.id).contentWindow:window.frames[this.id];b.location.href=this.obj.content}}})(Shadowbox);;
// $Id: shadowbox_auto.js,v 1.1.4.4.2.4 2010/01/04 10:00:33 psynaptic Exp $

Drupal.behaviors.shadowbox = function (context) {
  var settings = Drupal.settings.shadowbox;
  if (settings.auto_enable_all_images == 1) {
    $("a[href$='jpg'], a[href$='png'], a[href$='gif'], a[href$='jpeg'], a[href$='bmp'], a[href$='JPG'], a[href$='PNG'], a[href$='GIF'], a[href$='JPEG'], a[href$='BMP']").each(function() {
      if (settings.auto_gallery == 1) {
        $(this).attr('rel', 'shadowbox[gallery]');
      }
      else {
        $(this).attr('rel', 'shadowbox');
      };
    });
  };
};
;
/**
 * jQuery Galleriffic plugin
 *
 * Copyright (c) 2008 Trent Foley (http://trentacular.com)
 * Licensed under the GPL 2:
 *   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 *
 * Much thanks to primary contributer Ponticlaro (http://www.ponticlaro.com)
 */
;(function($) {
	// Globally keep track of all images by their unique hash.  Each item is an image data object.
	var allImages = {};
	var imageCounter = 0;

	// Galleriffic static class
	$.galleriffic = {
		version: '2.0.1',

		// Strips invalid characters and any leading # characters
		normalizeHash: function(hash) {
			return hash.replace(/^.*#/, '').replace(/\?.*$/, '');
		},

		getImage: function(hash) {
			if (!hash)
				return undefined;

			hash = $.galleriffic.normalizeHash(hash);
			return allImages[hash];
		},

		// Global function that looks up an image by its hash and displays the image.
		// Returns false when an image is not found for the specified hash.
		// @param {String} hash This is the unique hash value assigned to an image.
		gotoImage: function(hash) {
			var imageData = $.galleriffic.getImage(hash);
			if (!imageData)
				return false;

			var gallery = imageData.gallery;
			gallery.gotoImage(imageData);
			
			return true;
		},

		// Removes an image from its respective gallery by its hash.
		// Returns false when an image is not found for the specified hash or the
		// specified owner gallery does match the located images gallery.
		// @param {String} hash This is the unique hash value assigned to an image.
		// @param {Object} ownerGallery (Optional) When supplied, the located images
		// gallery is verified to be the same as the specified owning gallery before
		// performing the remove operation.
		removeImageByHash: function(hash, ownerGallery) {
			var imageData = $.galleriffic.getImage(hash);
			if (!imageData)
				return false;

			var gallery = imageData.gallery;
			if (ownerGallery && ownerGallery != gallery)
				return false;

			return gallery.removeImageByIndex(imageData.index);
		}
	};

	var defaults = {
		delay:                     3000,
		numThumbs:                 20,
		preloadAhead:              40, // Set to -1 to preload all images
		enableTopPager:            false,
		enableBottomPager:         true,
		maxPagesToShow:            7,
		imageContainerSel:         '',
		captionContainerSel:       '',
		controlsContainerSel:      '',
		loadingContainerSel:       '',
		renderSSControls:          true,
		renderNavControls:         true,
		playLinkText:              'Play',
		pauseLinkText:             'Pause',
		prevLinkText:              'Previous',
		nextLinkText:              'Next',
		nextPageLinkText:          'Next &rsaquo;',
		prevPageLinkText:          '&lsaquo; Prev',
		enableHistory:             false,
		enableKeyboardNavigation:  true,
		autoStart:                 false,
		syncTransitions:           false,
		defaultTransitionDuration: 1000,
		onSlideChange:             undefined, // accepts a delegate like such: function(prevIndex, nextIndex) { ... }
		onTransitionOut:           undefined, // accepts a delegate like such: function(slide, caption, isSync, callback) { ... }
		onTransitionIn:            undefined, // accepts a delegate like such: function(slide, caption, isSync) { ... }
		onPageTransitionOut:       undefined, // accepts a delegate like such: function(callback) { ... }
		onPageTransitionIn:        undefined, // accepts a delegate like such: function() { ... }
		onImageAdded:              undefined, // accepts a delegate like such: function(imageData, $li) { ... }
		onImageRemoved:            undefined  // accepts a delegate like such: function(imageData, $li) { ... }
	};

	// Primary Galleriffic initialization function that should be called on the thumbnail container.
	$.fn.galleriffic = function(settings) {
		//  Extend Gallery Object
		$.extend(this, {
			// Returns the version of the script
			version: $.galleriffic.version,

			// Current state of the slideshow
			isSlideshowRunning: false,
			slideshowTimeout: undefined,

			// This function is attached to the click event of generated hyperlinks within the gallery
			clickHandler: function(e, link) {
				this.pause();

				if (!this.enableHistory) {
					// The href attribute holds the unique hash for an image
					var hash = $.galleriffic.normalizeHash($(link).attr('href'));
					$.galleriffic.gotoImage(hash);
					e.preventDefault();
				}
			},

			// Appends an image to the end of the set of images.  Argument listItem can be either a jQuery DOM element or arbitrary html.
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			appendImage: function(listItem) {
				this.addImage(listItem, false, false);
				return this;
			},

			// Inserts an image into the set of images.  Argument listItem can be either a jQuery DOM element or arbitrary html.
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			// @param {Integer} position The index within the gallery where the item shouold be added.
			insertImage: function(listItem, position) {
				this.addImage(listItem, false, true, position);
				return this;
			},

			// Adds an image to the gallery and optionally inserts/appends it to the DOM (thumbExists)
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			// @param {Boolean} thumbExists Specifies whether the thumbnail already exists in the DOM or if it needs to be added.
			// @param {Boolean} insert Specifies whether the the image is appended to the end or inserted into the gallery.
			// @param {Integer} position The index within the gallery where the item shouold be added.
			addImage: function(listItem, thumbExists, insert, position) {
				var $li = ( typeof listItem === "string" ) ? $(listItem) : listItem;				
				var $aThumb = $li.find('a.thumb');
				var slideUrl = $aThumb.attr('href');
				var title = $aThumb.attr('title');
				var $caption = $li.find('.caption').remove();
				var hash = $aThumb.attr('name');

				// Increment the image counter
				imageCounter++;

				// Autogenerate a hash value if none is present or if it is a duplicate
				if (!hash || allImages[''+hash]) {
					hash = imageCounter;
				}

				// Set position to end when not specified
				if (!insert)
					position = this.data.length;
				
				var imageData = {
					title:title,
					slideUrl:slideUrl,
					caption:$caption,
					hash:hash,
					gallery:this,
					index:position
				};

				// Add the imageData to this gallery's array of images
				if (insert) {
					this.data.splice(position, 0, imageData);

					// Reset index value on all imageData objects
					this.updateIndices(position);
				}
				else {
					this.data.push(imageData);
				}

				var gallery = this;

				// Add the element to the DOM
				if (!thumbExists) {
					// Update thumbs passing in addition post transition out handler
					this.updateThumbs(function() {
						var $thumbsUl = gallery.find('ul.thumbs');
						if (insert)
							$thumbsUl.children(':eq('+position+')').before($li);
						else
							$thumbsUl.append($li);
						
						if (gallery.onImageAdded)
							gallery.onImageAdded(imageData, $li);
					});
				}

				// Register the image globally
				allImages[''+hash] = imageData;

				// Setup attributes and click handler
				$aThumb.attr('rel', 'history')
					.attr('href', '#'+hash)
					.removeAttr('name')
					.click(function(e) {
						gallery.clickHandler(e, this);
					});

				return this;
			},

			// Removes an image from the gallery based on its index.
			// Returns false when the index is out of range.
			removeImageByIndex: function(index) {
				if (index < 0 || index >= this.data.length)
					return false;
				
				var imageData = this.data[index];
				if (!imageData)
					return false;
				
				this.removeImage(imageData);
				
				return true;
			},

			// Convenience method that simply calls the global removeImageByHash method.
			removeImageByHash: function(hash) {
				return $.galleriffic.removeImageByHash(hash, this);
			},

			// Removes an image from the gallery.
			removeImage: function(imageData) {
				var index = imageData.index;
				
				// Remove the image from the gallery data array
				this.data.splice(index, 1);
				
				// Remove the global registration
				delete allImages[''+imageData.hash];
				
				// Remove the image's list item from the DOM
				this.updateThumbs(function() {
					var $li = gallery.find('ul.thumbs')
						.children(':eq('+index+')')
						.remove();

					if (gallery.onImageRemoved)
						gallery.onImageRemoved(imageData, $li);
				});

				// Update each image objects index value
				this.updateIndices(index);

				return this;
			},

			// Updates the index values of the each of the images in the gallery after the specified index
			updateIndices: function(startIndex) {
				for (i = startIndex; i < this.data.length; i++) {
					this.data[i].index = i;
				}
				
				return this;
			},

			// Scraped the thumbnail container for thumbs and adds each to the gallery
			initializeThumbs: function() {
				this.data = [];
				var gallery = this;

				this.find('ul.thumbs > li').each(function(i) {
					gallery.addImage($(this), true, false);
				});

				return this;
			},

			isPreloadComplete: false,

			// Initalizes the image preloader
			preloadInit: function() {
				if (this.preloadAhead == 0) return this;
				
				this.preloadStartIndex = this.currentImage.index;
				var nextIndex = this.getNextIndex(this.preloadStartIndex);
				return this.preloadRecursive(this.preloadStartIndex, nextIndex);
			},

			// Changes the location in the gallery the preloader should work
			// @param {Integer} index The index of the image where the preloader should restart at.
			preloadRelocate: function(index) {
				// By changing this startIndex, the current preload script will restart
				this.preloadStartIndex = index;
				return this;
			},

			// Recursive function that performs the image preloading
			// @param {Integer} startIndex The index of the first image the current preloader started on.
			// @param {Integer} currentIndex The index of the current image to preload.
			preloadRecursive: function(startIndex, currentIndex) {
				// Check if startIndex has been relocated
				if (startIndex != this.preloadStartIndex) {
					var nextIndex = this.getNextIndex(this.preloadStartIndex);
					return this.preloadRecursive(this.preloadStartIndex, nextIndex);
				}

				var gallery = this;

				// Now check for preloadAhead count
				var preloadCount = currentIndex - startIndex;
				if (preloadCount < 0)
					preloadCount = this.data.length-1-startIndex+currentIndex;
				if (this.preloadAhead >= 0 && preloadCount > this.preloadAhead) {
					// Do this in order to keep checking for relocated start index
					setTimeout(function() { gallery.preloadRecursive(startIndex, currentIndex); }, 500);
					return this;
				}

				var imageData = this.data[currentIndex];
				if (!imageData)
					return this;

				// If already loaded, continue
				if (imageData.image)
					return this.preloadNext(startIndex, currentIndex); 
				
				// Preload the image
				var image = new Image();
				
				image.onload = function() {
					imageData.image = this;
					gallery.preloadNext(startIndex, currentIndex);
				};

				image.alt = imageData.title;
				image.src = imageData.slideUrl;

				return this;
			},
			
			// Called by preloadRecursive in order to preload the next image after the previous has loaded.
			// @param {Integer} startIndex The index of the first image the current preloader started on.
			// @param {Integer} currentIndex The index of the current image to preload.
			preloadNext: function(startIndex, currentIndex) {
				var nextIndex = this.getNextIndex(currentIndex);
				if (nextIndex == startIndex) {
					this.isPreloadComplete = true;
				} else {
					// Use setTimeout to free up thread
					var gallery = this;
					setTimeout(function() { gallery.preloadRecursive(startIndex, nextIndex); }, 100);
				}

				return this;
			},

			// Safe way to get the next image index relative to the current image.
			// If the current image is the last, returns 0
			getNextIndex: function(index) {
				var nextIndex = index+1;
				if (nextIndex >= this.data.length)
					nextIndex = 0;
				return nextIndex;
			},

			// Safe way to get the previous image index relative to the current image.
			// If the current image is the first, return the index of the last image in the gallery.
			getPrevIndex: function(index) {
				var prevIndex = index-1;
				if (prevIndex < 0)
					prevIndex = this.data.length-1;
				return prevIndex;
			},

			// Pauses the slideshow
			pause: function() {
				this.isSlideshowRunning = false;
				if (this.slideshowTimeout) {
					clearTimeout(this.slideshowTimeout);
					this.slideshowTimeout = undefined;
				}

				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.ss-controls a').removeClass().addClass('play')
						.attr('title', this.playLinkText)
						.attr('href', '#play')
						.html(this.playLinkText);
				}
				
				return this;
			},

			// Plays the slideshow
			play: function() {
				this.isSlideshowRunning = true;

				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.ss-controls a').removeClass().addClass('pause')
						.attr('title', this.pauseLinkText)
						.attr('href', '#pause')
						.html(this.pauseLinkText);
				}

				if (!this.slideshowTimeout) {
					var gallery = this;
					this.slideshowTimeout = setTimeout(function() { gallery.ssAdvance(); }, this.delay);
				}

				return this;
			},

			// Toggles the state of the slideshow (playing/paused)
			toggleSlideshow: function() {
				if (this.isSlideshowRunning)
					this.pause();
				else
					this.play();

				return this;
			},

			// Advances the slideshow to the next image and delegates navigation to the
			// history plugin when history is enabled
			// enableHistory is true
			ssAdvance: function() {
				if (this.isSlideshowRunning)
					this.next(true);

				return this;
			},

			// Advances the gallery to the next image.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.  
			next: function(dontPause, bypassHistory) {
				this.gotoIndex(this.getNextIndex(this.currentImage.index), dontPause, bypassHistory);
				return this;
			},

			// Navigates to the previous image in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			previous: function(dontPause, bypassHistory) {
				this.gotoIndex(this.getPrevIndex(this.currentImage.index), dontPause, bypassHistory);
				return this;
			},

			// Navigates to the next page in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			nextPage: function(dontPause, bypassHistory) {
				var page = this.getCurrentPage();
				var lastPage = this.getNumPages() - 1;
				if (page < lastPage) {
					var startIndex = page * this.numThumbs;
					var nextPage = startIndex + this.numThumbs;
					this.gotoIndex(nextPage, dontPause, bypassHistory);
				}

				return this;
			},

			// Navigates to the previous page in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			previousPage: function(dontPause, bypassHistory) {
				var page = this.getCurrentPage();
				if (page > 0) {
					var startIndex = page * this.numThumbs;
					var prevPage = startIndex - this.numThumbs;				
					this.gotoIndex(prevPage, dontPause, bypassHistory);
				}
				
				return this;
			},

			// Navigates to the image at the specified index in the gallery
			// @param {Integer} index The index of the image in the gallery to display.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			gotoIndex: function(index, dontPause, bypassHistory) {
				if (!dontPause)
					this.pause();
				
				if (index < 0) index = 0;
				else if (index >= this.data.length) index = this.data.length-1;
				
				var imageData = this.data[index];
				
				if (!bypassHistory && this.enableHistory)
					$.historyLoad(String(imageData.hash));  // At the moment, historyLoad only accepts string arguments
				else
					this.gotoImage(imageData);

				return this;
			},

			// This function is garaunteed to be called anytime a gallery slide changes.
			// @param {Object} imageData An object holding the image metadata of the image to navigate to.
			gotoImage: function(imageData) {
				var index = imageData.index;

				if (this.onSlideChange)
					this.onSlideChange(this.currentImage.index, index);
				
				this.currentImage = imageData;
				this.preloadRelocate(index);
				
				this.refresh();
				
				return this;
			},

			// Returns the default transition duration value.  The value is halved when not
			// performing a synchronized transition.
			// @param {Boolean} isSync Specifies whether the transitions are synchronized.
			getDefaultTransitionDuration: function(isSync) {
				if (isSync)
					return this.defaultTransitionDuration;
				return this.defaultTransitionDuration / 2;
			},

			// Rebuilds the slideshow image and controls and performs transitions
			refresh: function() {
				var imageData = this.currentImage;
				if (!imageData)
					return this;

				var index = imageData.index;

				// Update Controls
				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.nav-controls a.prev').attr('href', '#'+this.data[this.getPrevIndex(index)].hash).end()
						.find('div.nav-controls a.next').attr('href', '#'+this.data[this.getNextIndex(index)].hash);
				}

				var previousSlide = this.$imageContainer.find('span.current').addClass('previous').removeClass('current');
				var previousCaption = 0;

				if (this.$captionContainer) {
					previousCaption = this.$captionContainer.find('span.current').addClass('previous').removeClass('current');
				}

				// Perform transitions simultaneously if syncTransitions is true and the next image is already preloaded
				var isSync = this.syncTransitions && imageData.image;

				// Flag we are transitioning
				var isTransitioning = true;
				var gallery = this;

				var transitionOutCallback = function() {
					// Flag that the transition has completed
					isTransitioning = false;

					// Remove the old slide
					previousSlide.remove();

					// Remove old caption
					if (previousCaption)
						previousCaption.remove();

					if (!isSync) {
						if (imageData.image && imageData.hash == gallery.data[gallery.currentImage.index].hash) {
							gallery.buildImage(imageData, isSync);
						} else {
							// Show loading container
							if (gallery.$loadingContainer) {
								gallery.$loadingContainer.show();
							}
						}
					}
				};

				if (previousSlide.length == 0) {
					// For the first slide, the previous slide will be empty, so we will call the callback immediately
					transitionOutCallback();
				} else {
					if (this.onTransitionOut) {
						this.onTransitionOut(previousSlide, previousCaption, isSync, transitionOutCallback);
					} else {
						previousSlide.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0, transitionOutCallback);
						if (previousCaption)
							previousCaption.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0);
					}
				}

				// Go ahead and begin transitioning in of next image
				if (isSync)
					this.buildImage(imageData, isSync);

				if (!imageData.image) {
					var image = new Image();
					
					// Wire up mainImage onload event
					image.onload = function() {
						imageData.image = this;

						// Only build image if the out transition has completed and we are still on the same image hash
						if (!isTransitioning && imageData.hash == gallery.data[gallery.currentImage.index].hash) {
							gallery.buildImage(imageData, isSync);
						}
					};

					// set alt and src
					image.alt = imageData.title;
					image.src = imageData.slideUrl;
				}

				// This causes the preloader (if still running) to relocate out from the currentIndex
				this.relocatePreload = true;

				return this.syncThumbs();
			},

			// Called by the refresh method after the previous image has been transitioned out or at the same time
			// as the out transition when performing a synchronous transition.
			// @param {Object} imageData An object holding the image metadata of the image to build.
			// @param {Boolean} isSync Specifies whether the transitions are synchronized.
			buildImage: function(imageData, isSync) {
				var gallery = this;
				var nextIndex = this.getNextIndex(imageData.index);

				// Construct new hidden span for the image
				var newSlide = this.$imageContainer
					.append('<span class="image-wrapper current"><a class="advance-link" rel="history" href="#'+this.data[nextIndex].hash+'" title="'+imageData.title+'"></a></span>')
					.find('span.current').css('opacity', '0');
				
				newSlide.find('a')
					.append(imageData.image)
					.click(function(e) {
						gallery.clickHandler(e, this);
					});
				
				var newCaption = 0;
				if (this.$captionContainer) {
					// Construct new hidden caption for the image
					newCaption = this.$captionContainer
						.append('<span class="image-caption current"></span>')
						.find('span.current').css('opacity', '0')
						.append(imageData.caption);
				}

				// Hide the loading conatiner
				if (this.$loadingContainer) {
					this.$loadingContainer.hide();
				}

				// Transition in the new image
				if (this.onTransitionIn) {
					this.onTransitionIn(newSlide, newCaption, isSync);
				} else {
					newSlide.fadeTo(this.getDefaultTransitionDuration(isSync), 1.0);
					if (newCaption)
						newCaption.fadeTo(this.getDefaultTransitionDuration(isSync), 1.0);
				}
				
				if (this.isSlideshowRunning) {
					if (this.slideshowTimeout)
						clearTimeout(this.slideshowTimeout);

					this.slideshowTimeout = setTimeout(function() { gallery.ssAdvance(); }, this.delay);
				}

				return this;
			},

			// Returns the current page index that should be shown for the currentImage
			getCurrentPage: function() {
				return Math.floor(this.currentImage.index / this.numThumbs);
			},

			// Applies the selected class to the current image's corresponding thumbnail.
			// Also checks if the current page has changed and updates the displayed page of thumbnails if necessary.
			syncThumbs: function() {
				var page = this.getCurrentPage();
				if (page != this.displayedPage)
					this.updateThumbs();

				// Remove existing selected class and add selected class to new thumb
				var $thumbs = this.find('ul.thumbs').children();
				$thumbs.filter('.selected').removeClass('selected');
				$thumbs.eq(this.currentImage.index).addClass('selected');

				return this;
			},

			// Performs transitions on the thumbnails container and updates the set of
			// thumbnails that are to be displayed and the navigation controls.
			// @param {Delegate} postTransitionOutHandler An optional delegate that is called after
			// the thumbnails container has transitioned out and before the thumbnails are rebuilt.
			updateThumbs: function(postTransitionOutHandler) {
				var gallery = this;
				var transitionOutCallback = function() {
					// Call the Post-transition Out Handler
					if (postTransitionOutHandler)
						postTransitionOutHandler();
					
					gallery.rebuildThumbs();

					// Transition In the thumbsContainer
					if (gallery.onPageTransitionIn)
						gallery.onPageTransitionIn();
					else
						gallery.show();
				};

				// Transition Out the thumbsContainer
				if (this.onPageTransitionOut) {
					this.onPageTransitionOut(transitionOutCallback);
				} else {
					this.hide();
					transitionOutCallback();
				}

				return this;
			},

			// Updates the set of thumbnails that are to be displayed and the navigation controls.
			rebuildThumbs: function() {
				var needsPagination = this.data.length > this.numThumbs;

				// Rebuild top pager
				if (this.enableTopPager) {
					var $topPager = this.find('div.top');
					if ($topPager.length == 0)
						$topPager = this.prepend('<div class="top pagination"></div>').find('div.top');
					else
						$topPager.empty();

					if (needsPagination)
						this.buildPager($topPager);
				}

				// Rebuild bottom pager
				if (this.enableBottomPager) {
					var $bottomPager = this.find('div.bottom');
					if ($bottomPager.length == 0)
						$bottomPager = this.append('<div class="bottom pagination"></div>').find('div.bottom');
					else
						$bottomPager.empty();

					if (needsPagination)
						this.buildPager($bottomPager);
				}

				var page = this.getCurrentPage();
				var startIndex = page*this.numThumbs;
				var stopIndex = startIndex+this.numThumbs-1;
				if (stopIndex >= this.data.length)
					stopIndex = this.data.length-1;

				// Show/Hide thumbs
				var $thumbsUl = this.find('ul.thumbs');
				$thumbsUl.find('li').each(function(i) {
					var $li = $(this);
					if (i >= startIndex && i <= stopIndex) {
						$li.show();
					} else {
						$li.hide();
					}
				});

				this.displayedPage = page;

				// Remove the noscript class from the thumbs container ul
				$thumbsUl.removeClass('noscript');
				
				return this;
			},

			// Returns the total number of pages required to display all the thumbnails.
			getNumPages: function() {
				return Math.ceil(this.data.length/this.numThumbs);
			},

			// Rebuilds the pager control in the specified matched element.
			// @param {jQuery} pager A jQuery element set matching the particular pager to be rebuilt.
			buildPager: function(pager) {
				var gallery = this;
				var numPages = this.getNumPages();
				var page = this.getCurrentPage();
				var startIndex = page * this.numThumbs;
				var pagesRemaining = this.maxPagesToShow - 1;
				
				var pageNum = page - Math.floor((this.maxPagesToShow - 1) / 2) + 1;
				if (pageNum > 0) {
					var remainingPageCount = numPages - pageNum;
					if (remainingPageCount < pagesRemaining) {
						pageNum = pageNum - (pagesRemaining - remainingPageCount);
					}
				}

				if (pageNum < 0) {
					pageNum = 0;
				}

				// Prev Page Link
				if (page > 0) {
					var prevPage = startIndex - this.numThumbs;
					pager.append('<a rel="history" href="#'+this.data[prevPage].hash+'" title="'+this.prevPageLinkText+'">'+this.prevPageLinkText+'</a>');
				}

				// Create First Page link if needed
				if (pageNum > 0) {
					this.buildPageLink(pager, 0, numPages);
					if (pageNum > 1)
						pager.append('<span class="ellipsis">&hellip;</span>');
					
					pagesRemaining--;
				}

				// Page Index Links
				while (pagesRemaining > 0) {
					this.buildPageLink(pager, pageNum, numPages);
					pagesRemaining--;
					pageNum++;
				}

				// Create Last Page link if needed
				if (pageNum < numPages) {
					var lastPageNum = numPages - 1;
					if (pageNum < lastPageNum)
						pager.append('<span class="ellipsis">&hellip;</span>');

					this.buildPageLink(pager, lastPageNum, numPages);
				}

				// Next Page Link
				var nextPage = startIndex + this.numThumbs;
				if (nextPage < this.data.length) {
					pager.append('<a rel="history" href="#'+this.data[nextPage].hash+'" title="'+this.nextPageLinkText+'">'+this.nextPageLinkText+'</a>');
				}

				pager.find('a').click(function(e) {
					gallery.clickHandler(e, this);
				});

				return this;
			},

			// Builds a single page link within a pager.  This function is called by buildPager
			// @param {jQuery} pager A jQuery element set matching the particular pager to be rebuilt.
			// @param {Integer} pageNum The page number of the page link to build.
			// @param {Integer} numPages The total number of pages required to display all thumbnails.
			buildPageLink: function(pager, pageNum, numPages) {
				var pageLabel = pageNum + 1;
				var currentPage = this.getCurrentPage();
				if (pageNum == currentPage)
					pager.append('<span class="current">'+pageLabel+'</span>');
				else if (pageNum < numPages) {
					var imageIndex = pageNum*this.numThumbs;
					pager.append('<a rel="history" href="#'+this.data[imageIndex].hash+'" title="'+pageLabel+'">'+pageLabel+'</a>');
				}
				
				return this;
			}
		});

		// Now initialize the gallery
		$.extend(this, defaults, settings);
		
		// Verify the history plugin is available
		if (this.enableHistory && !$.historyInit)
			this.enableHistory = false;
		
		// Select containers
		if (this.imageContainerSel) this.$imageContainer = $(this.imageContainerSel);
		if (this.captionContainerSel) this.$captionContainer = $(this.captionContainerSel);
		if (this.loadingContainerSel) this.$loadingContainer = $(this.loadingContainerSel);

		// Initialize the thumbails
		this.initializeThumbs();
		
		if (this.maxPagesToShow < 3)
			this.maxPagesToShow = 3;

		this.displayedPage = -1;
		this.currentImage = this.data[0];
		var gallery = this;

		// Hide the loadingContainer
		if (this.$loadingContainer)
			this.$loadingContainer.hide();

		// Setup controls
		if (this.controlsContainerSel) {
			this.$controlsContainer = $(this.controlsContainerSel).empty();
			
			if (this.renderSSControls) {
				if (this.autoStart) {
					this.$controlsContainer
						.append('<div class="ss-controls"><a href="#pause" class="pause" title="'+this.pauseLinkText+'">'+this.pauseLinkText+'</a></div>');
				} else {
					this.$controlsContainer
						.append('<div class="ss-controls"><a href="#play" class="play" title="'+this.playLinkText+'">'+this.playLinkText+'</a></div>');
				}

				this.$controlsContainer.find('div.ss-controls a')
					.click(function(e) {
						gallery.toggleSlideshow();
						e.preventDefault();
						return false;
					});
			}
		
			if (this.renderNavControls) {
				this.$controlsContainer
					.append('<div class="nav-controls"><a class="prev" rel="history" title="'+this.prevLinkText+'">'+this.prevLinkText+'</a><a class="next" rel="history" title="'+this.nextLinkText+'">'+this.nextLinkText+'</a></div>')
					.find('div.nav-controls a')
					.click(function(e) {
						gallery.clickHandler(e, this);
					});
			}
		}

		var initFirstImage = !this.enableHistory || !location.hash;
		if (this.enableHistory && location.hash) {
			var hash = $.galleriffic.normalizeHash(location.hash);
			var imageData = allImages[hash];
			if (!imageData)
				initFirstImage = true;
		}

		// Setup gallery to show the first image
		if (initFirstImage)
			this.gotoIndex(0, false, true);

		// Setup Keyboard Navigation
		if (this.enableKeyboardNavigation) {
			$(document).keydown(function(e) {
				var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
				switch(key) {
					case 32: // space
						gallery.next();
						e.preventDefault();
						break;
					case 33: // Page Up
						gallery.previousPage();
						e.preventDefault();
						break;
					case 34: // Page Down
						gallery.nextPage();
						e.preventDefault();
						break;
					case 35: // End
						gallery.gotoIndex(gallery.data.length-1);
						e.preventDefault();
						break;
					case 36: // Home
						gallery.gotoIndex(0);
						e.preventDefault();
						break;
					case 37: // left arrow
						gallery.previous();
						e.preventDefault();
						break;
					case 39: // right arrow
						gallery.next();
						e.preventDefault();
						break;
				}
			});
		}

		// Auto start the slideshow
		if (this.autoStart)
			this.play();

		// Kickoff Image Preloader after 1 second
		setTimeout(function() { gallery.preloadInit(); }, 1000);

		return this;
	};
})(jQuery);
;
Drupal.behaviors.ViewsGalleriffic = function () { 
  var settings = Drupal.settings.views_galleriffic;
  
  // Initially set opacity on thumbs and add
  // additional styling for hover effect on thumbs
  var onMouseOutOpacity = 0.67;
  $('#thumbs ul.thumbs li').css('opacity', onMouseOutOpacity)
   .hover(
     function () {
       $(this).not('.selected').fadeTo('fast', 1.0);
     },
     function () {
      $(this).not('.selected').fadeTo('fast', onMouseOutOpacity);
     }
   );

        // Initialize Advanced Galleriffic Gallery
        var gallery = $('#thumbs').galleriffic({ 
          delay:                  settings.delay,
          numThumbs:              settings.numbthumbs,
          preloadAhead:           settings.numbthumbs,
          enableTopPager:         settings.enableTopPager,
          enableBottomPager:      settings.enableBottomPager,
          imageContainerSel:      '#slideshow',
          controlsContainerSel:   '#controls',
          captionContainerSel:    '#caption',
          loadingContainerSel:    '#loading',
          renderSSControls:       settings.renderSSControls,
          renderNavControls:      settings.renderNavControls,
          playLinkText:           settings.playLinkText,
          pauseLinkText:          settings.pauseLinkText,
          prevLinkText:           settings.prevLinkText,
          nextLinkText:           settings.nextLinkText,
          nextPageLinkText:       settings.nextPageLinkText,
          prevPageLinkText:       settings.prevPageLinkText,
          enableHistory:          settings.enableHistory,
          autoStart:              settings.autoStart,
          onSlideChange: function(prevIndex, nextIndex) {
            // 'this' refers to the gallery, which is an extension of $('#thumbs')
            this.find('ul.thumbs').children()
            .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
            .eq(nextIndex).fadeTo('fast', 1.0);
          },
          onPageTransitionOut: function(callback) {
            this.fadeTo('fast', 0.0, callback);
          },
          onPageTransitionIn: function() {
             this.fadeTo('fast', 1.0);
          } 
        });
}










;
