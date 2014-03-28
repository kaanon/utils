// Adding this template function
if (typeof String.prototype.template !== 'function') {
  String.prototype.apply = function (obj) {
    var tpl = this, r;
    for(var k in obj)
    {
      r = new RegExp('{'+k+'}','g'); //We need to use a regex object so it can be greedy
      tpl = tpl.replace(r,obj[k]);
    }
    return tpl;
  };
}
