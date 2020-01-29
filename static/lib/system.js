function SYS_include_css(_fileName){
	if(typeof(SYS_including_css_files[_fileName])!='undefined')return;
	var objHead = document.getElementsByTagName('head')[0];
	var objStyle = document.createElement('link');
	objStyle.rel='stylesheet';
	objStyle.type='text/css';
	objStyle.href=_fileName+((SYS_current_theme != '')?'_':'')+SYS_current_theme+((_fileName.indexOf('.css')!=-1)?'':'.css');


        var intID = setInterval(function(){
            try
            {
                if(objStyle.sheet && objStyle.sheet.cssRules)
                {
                    SYS_CSS_not_loaded--;
                    clearInterval(intID);
                }
            }catch(e)
            {
            }
        },10);
        SYS_CSS_not_loaded++;
        objHead.appendChild(objStyle);
	SYS_including_css_files[_fileName]=objStyle;
}