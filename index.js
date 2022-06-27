
const output=document.getElementById('output');   
const boxnumbers=document.getElementById('boxnumbers');
const h1=document.getElementById('title');
const ul=document.querySelector('#cargoDiv');
const email=document.getElementById('emails'); 
const titles= document.getElementById('title');
const list= document.createDocumentFragment();
const url="https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json";

const cargoData=[];



function fetchData(){
    fetch(url)
.then((response) => response.json())
.then(data => {
      cargoData.push(...data)
})
.catch(err => console.log(err))}


window.addEventListener("load", ()=>{
    fetchData()
})

function displayList(data){
    ul.addEventListener("click", (e)=>{
        let li=e.target;

        let findCargo=data.find((usr)=> usr.name==e.target.innerText)
        document.getElementById('emails').innerHTML=findCargo.email;
        document.getElementById('boxnumbers').value=findCargo.boxes; 
        document.getElementById('title').innerHTML=findCargo.name;
    

   let  array=boxnumbers.value.split(',').map(n=> Number(n));

    
  function sum(para2){
   let result=0;
   for(let i=0; i<para2.length; i++){
              result=result+para2[i];     
         }
         return Math.ceil(result/10)
}

         document.getElementById('output').innerHTML=sum(array);
  
    })
}

displayList(cargoData);






