window.onload = showData;
var _data = [
  { id:1, ing: 'Good Morning', az: 'Sabahınız xeyir' },
  { id:2, ing: 'Good afternoon', az: 'Günortanız xeyir' },
  { id:3, ing: 'Good evening', az: 'Axşamınız xeyir' },
  { id:5, ing: 'Good night', az: 'Gecəniz xeyrə' },
  { id:6, ing: 'I am happy', az: 'Mən xoşbəxtəm' },
  { id:7, ing: 'I am sad', az: 'Mən məyusam' },
  { id:8, ing: 'I am hungry', az: 'Mən acam' },
  { id:9, ing: 'I am hot', az: 'Mənə istidi' },
  { id:10, ing: 'I am cold', az: 'Mənə soyuqdu' },
  { id:11, ing: 'I am thirsty', az: 'Mən susamışam' },
  { id:12, ing: 'I am sorry', az: 'Bağışlayın' }
];


function showData() {
  var _head,_srch,_str;
  _head = '<h5 class="alert alert-primary mt-3">' + "Welcome Ramin's Dictionary" + '</h5>';
  _srch = '<div class="row d-flex justify-content-around"><input type="text" id="searchEng" class="form-control mb-3 col-5" autocomplete="off" onkeyup="searchEng()" placeholder="Search For English"><input type="text" id="searchAze" class="form-control mb-3 col-5" autocomplete="off" onkeyup="searchAze()" placeholder="Azərbaycanca axtar"></div>'
  _str = '<table id="table" class="table table-bordered">';
  _str += '<thead class="indigo text-white"><tr><th>ID</th><th>English</th><th>Azərbaycan</th></tr></thead>';
  for (var i = 0; i < _data.length; i++) {
    var brows = _data[i];
    _str +=
      '<tr><td>' + brows.id + '</td><td>' + brows.ing + '</td><td>' + brows.az + '</td>';
  }
  _str += '</table>';
  var _tableReady = _str;
  var tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = _head + _srch + _tableReady;
}
_data.sort((a, b) => (a.id > b.id) ? 1 : -1)

var searchEng = () => {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchEng");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
  }
  var searchAze = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchAze");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



      