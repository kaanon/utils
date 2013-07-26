//Cookie data
_COOKIE = (function(){
  var cookies = document.cookie.split('; '),
      cookie_len = cookies.length,
      parts, cookie_obj = {};
  for(var i = 0; i< cookie_len; i++)
  { 
    parts = cookies[i].split('='); 
    key = parts[0];
    value = cookies[i].replace(key+'=',''); //Everything after the first "=" sign
    cookie_obj[key] = unescape(value); 
  }
  
  cookie_obj.set = function (key,value,days)
  {
  	var date, expires = "", domain = '.'+/([\w-]*)\.([\w.]{2,5})$/.exec(document.location.host).shift();
		if (days) 
    {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = "; expires="+date.toGMTString();
    }
    
    document.cookie = key+"="+value+expires+";domain="+domain+";path=/";
    this[key] = value; //_COOKIE[key]
  };
  cookie_obj.get = function(key)
  {
    if(typeof this[key] != "undefined")
    {
      return this[key]; //_COOKIE[key]
    }
    return '';
  };
  cookie_obj.remove = function(key)
  {
    this.set(key,'',-1);
  };
  return cookie_obj;
}());
