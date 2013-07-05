//Query Parameters
_GET = (function(){
  var query = document.location.search.substring(1), //Everything but the ?
        query_params = query.length > 0 ? query.split("&") : [], //Split into pairs
        regex = new RegExp('[^a-zA-Z0-9-_@.]+', 'g'),keypair = [], query_data = {}, key, value,i;
  if(query_params.length > 0)
  {
    for (i = 0; i < query_params.length; i += 1)
    {
      keypair = query_params[i].split("=");
      if (keypair.length === 2)
      {
        key = keypair[0].replace(regex, '');
        value = decodeURIComponent(keypair[1]).replace(regex, '');

        //Make sure value is not empty
        if(typeof(value) === 'string' && value.length > 0)
        {
          query_data[key] = value;
        }
      }
      else if (keypair.length > 0)  //If there is nothing on the other side of the equal sign, just set to true
      {
        query_data[keypair] = true;
      }
    }
  }
  return query_data;
}());
