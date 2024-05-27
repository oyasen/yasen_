
function submit()
{
  
  var name = document.getElementById('name').value;
  var id = document.getElementById('id').value;
  var age = document.getElementById('age').value;
  var num = document.getElementById('num').value;
  var namearr = name.split(' ');
  console.log(namearr);
  if(namearr.length == 3)
  {
    if(id.length == 14)
    {
      if(age > 16)
      {
        if(num.length == 11)
        {
          var user = 
          {
            name: name,
            id: id,
            age: age,
            num: num
          }
          console.log(user);
          alert("done");
        }
        else
        {
          alert("phone number must be 11 number")
        }
      }
      else
      {
        alert("age must be greater than 16");
      }
    }
    else
    {
      alert("national id must be 14 number");
    }
  }
  else
  {
    alert("you must enter the first three names");
  }

  
}