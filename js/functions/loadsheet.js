// CREATED BY CHINMAY PATIL -> TOOK FOREVER, DONT STEAL


function insertData(data) {


  
  //console.log(data)
  //console.log(data.feed.entry);
  //console.log(data.feed.entry.length)
  sheet = data.feed.title.$t

  /*
  var headers = []
  for (var i = 0; i < data.feed.entry.length; i++) {
    cell = data.feed.entry[i].title.$t
    content = data.feed.entry[i].content.$t
    len = cell.length
    if (len === 2) {
      if (cell.substring(1) === "1") {
        //console.log(cell)
        headers.push(content)
      }
    }
  }
  */
  

  var cells = {}


  for (i in data.feed.entry) {
    x = data.feed.entry[i]
    cell = x.title.$t
    num = cell.substring(1)
    letter = cell.substring(0, 1)
    content = x.content.$t

    if (num in cells) {} else {
      cells[num] = {}
    }

    cells[num][letter] = content

  }

  console.log("=======Cells: "+sheet+"=======")
  console.log(cells)
  /*
  console.log("=======Headers=======")
  console.log(headers)
  console.log("==============")
  */

  tout = ""
  dout = ""

  for (i in cells) {
    if (i !== "1") {
      cell = cells[i]

      crow = {}
      
      crow.name = cell.B
      crow.id = cell.A
      crow.desc = cell.C
      crow.exDesc = cell.D
      crow.img = cell.E
      crow.loc = cell.F

      crow.avail = cell.K
      crow.rentee = cell.L
      crow.due = cell.M
      crow.group = cell.G

      //console.log(crow)

      for (l in crow) {
        if (crow[l] === undefined) {
          crow[l] = ""
        }
      }

      

      if (crow.exDesc === "") {
        crow.exDesc = crow.desc
      }

      //console.log(name)

      tout += "<tr class='trowid"+crow.id+"'><td>"+crow.name+"</td><td>"+crow.id+"</td><td>"+crow.group+"</td><td>"+crow.desc+"</td><td onclick='show("+'"'+crow.id+'"'+");'>[Click Here]</td></tr>"
      



      dout += "<div id='"+crow.id+"' class='exData drowid"+crow.id+"'><h1>"+crow.name+"</h1><h2>"+crow.id+"</h2>"

      if (crow.img !== "") {
        dout +="<img src="+crow.img+" class='eximg'>"
      }
      
      dout +="<p class='exDesc'>"+crow.exDesc+"</p><h3 class='location'>Last known location: "+crow.loc+"</h3><div class='rent "+crow.avail+"'><h3>Available: "+crow.avail+"</h3><p class='rentee'>Taken Out by: "+crow.rentee+"</p><p class='due'>Due: "+crow.due+"</p><button class='checkout'>Check Out</button></div><img src='media/Fancy X.png' class='closeX' onclick='hide("+'"'+crow.id+'"'+")'></div>"




    }
  }

  $('#datatable').append(tout)
  $('#extraData').append(dout)
}