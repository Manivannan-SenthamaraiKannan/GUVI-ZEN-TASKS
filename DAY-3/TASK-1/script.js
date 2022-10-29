//JSON iterate for loops (for, for in, for of, forEach)
let iterate = [
    {
      createdAt: "2022-07-22T16:30:36.901Z",
      name: "JS GUVI Content",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1211.jpg",
      id: "2",
    },
    {
      createdAt: "2022-07-24T23:46:52.685Z",
      name: "Holly Kihn",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/542.jpg",
      id: "3",
    },
  ];
  // for loop
  for (let i = 0; i < iterate.length; i++) {
    let obj = iterate[i];
  
    console.log(iterate[0].createdAt);
    console.log(iterate[0].name);
    console.log(iterate[0].avatar);
    console.log(iterate[0].id);
  }
  
  //for each
  iterate.forEach((element) => console.log(element));
  
  //for in
  let txt = "";
  for (let x in iterate[key].id) {
    txt += x;
  }
  console.log(txt);
  
  //for of
  for (const element of iterate) {
    console.log(element);
  }
  