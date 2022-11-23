var container = document.createElement("div");
container.setAttribute("class", "container p-4");

var pageHeading = document.createElement("div");
pageHeading.setAttribute("class", "h2");
pageHeading.innerHTML = "DOM Manipulation with Forms";
pageHeading.style.textAlign = "center";

var domForm = document.createElement("form");
domForm.setAttribute("class", "p-5");

var fname   = createFormElements("FirstName", "text", "fname");
var lname   = createFormElements("LastName ", "text", "lname");
var address = createFormElements("Address ", "textarea", "address");
var pincode = createFormElements("Pincode ", "number", "pin");
var gender  = createRadio();
var favFood = createMultiSelect();
var state   = createState();
var country = createCountry();
var submit  = createButton();

var divTable = document.createElement("div")
divTable.setAttribute('class','row')

var tbl = document.createElement("table")
tbl.setAttribute('class','table mt-5')

var tblHead = document.createElement("thead")
var tblBody = document.createElement("tbody")

var tblRow = document.createElement('tr')

var tblHead1 =  document.createElement("th");
tblHead1.innerHTML = "First Name"

var tblHead2 = document.createElement("th");
tblHead2.innerHTML = "Last Name";

var tblHead3 = document.createElement("th");
tblHead3.innerHTML = "Address";

var tblHead4 = document.createElement("th");
tblHead4.innerHTML = "Pincode";

var tblHead5 = document.createElement("th");
tblHead5.innerHTML = "Gender";

var tblHead6 = document.createElement("th");
tblHead6.innerHTML = "Favourite Food";

var tblHead7 = document.createElement("th");
tblHead7.innerHTML = "State";

var tblHead8 = document.createElement("th");
tblHead8.innerHTML = "Country";

// appending
document.body.append(container);
container.append(pageHeading,domForm,divTable);
divTable.append(tbl);
tbl.append(tblHead,tblBody);
tblHead.append(tblRow);
tblRow.append(tblHead1,tblHead2,tblHead3,tblHead4,tblHead5,tblHead6,tblHead7,tblHead8);
domForm.append(fname,lname,address,pincode,gender,favFood,state,country,submit);

// function

function createButton() {
    var d = document.createElement("div");
    d.setAttribute("class", "row offset-6");
  
    // submit button
    var btn = document.createElement("button");
    btn.innerHTML = "Submit";
    btn.type = "button";
    btn.setAttribute("class", "btn btn-info text-center mt-5");
    btn.onclick = action;
  
    d.append(btn);
    return d;
  }

  function createFormElements(lbltxt, typ, idname) {
    var d = document.createElement("div");
    d.setAttribute("class", "form-group row");
    var lbl = document.createElement("label");
    lbl.classList.add("label", "col-4", "col-form-label");
    lbl.innerHTML = lbltxt;
    var input = document.createElement("input");
    input.setAttribute("type", typ);
    input.id = idname;
    input.placeholder = lbltxt;
    input.setAttribute("class", "form-control col-6");
    input.required = true;
    d.append(lbl, input);
    return d;
  }

  