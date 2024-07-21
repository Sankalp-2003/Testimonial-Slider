const arr = [
  {
    name: '- Johnson',
    img: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
    text: "I am beyond impressed with Apple's laptops - they are sleek, powerful, and extremely user-friendly. The design is unmatched and the performance is top-notch. I would highly recommend Apple to anyone in need of a reliable and stylish laptop."
  },
  {
    name: '- Sarah Thompson',
    img: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
    text: "I can't thank Apple enough for their user-friendly laptops. They've truly made my life so much easier. From design to performance, Apple never disappoints."
  },
  {
    name: '- Emily Johnson',
    img: 'https://plus.unsplash.com/premium_photo-1664099905313-f391570783fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
    text: "I am extremely impressed with the quality of laptops from apple. Their user-friendly design and top-notch performance make them stand out from the competition. I highly recommend apple to anyone in need of a reliable and sleek laptop."
  },
  {
    name: '- Alex',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
    text: "I couldn't be happier with my purchase from apple! Their laptops are sleek, fast, and incredibly user-friendly. I've been able to work more efficiently since switching to their products. Thank you, apple, for making such great technology available to us."
  },
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const nameEl = document.querySelector('.username');

let idx = 0;

updateTestimonial();

function updateTestimonial(){
  const {name, img, text} = arr[idx]; 
  imgEl.src = img;
  textEl.innerText = text;
  nameEl.innerText = name;
  idx++;
  if(idx === arr.length){
    idx = 0;
  }
  setTimeout(()=>{
    updateTestimonial();
  },3000)
}