var arr = [];

function add() {
  var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var area = document.getElementById("area").value;

  if ((name == "" || gender == "" || area == "") == true) {
    alert("values are missing");
  } else {
    var i = document.getElementById("form").value;
    if (i != "") {
      var newobj = { name, gender, area };
      // arr = arr.splice(i, 1, newobj);
      const arrayIndex = parseInt(i);
      arr[arrayIndex] = newobj;
      console.log(arr);
    } else {
      var obj = { name, gender, area };
      alert(JSON.stringify(obj));
      arr.push(obj);
      console.log(arr);

      document.getElementById("name").value = null;
      document.getElementById("gender").value = null;
      document.getElementById("area").value = null;
    }
  }
}

function Edit() {
  var i = document.getElementById("form").value;
  var indexArray = arr[parseInt(i)];
  document.getElementById("name").value = indexArray.name;
  document.getElementById("gender").value = indexArray.gender;
  document.getElementById("area").value = indexArray.area;
}
