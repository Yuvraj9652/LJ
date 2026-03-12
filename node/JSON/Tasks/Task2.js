const sub ={
"FSD": [
    {
        "Topic": "HTML",
        "course": "Beginer",
        "content": ["tags", "table", "form"],
    },
    {
        "Topic": "CSS",
        "course": "Beginer",
        "content": ["tags", "table", "form"]
    }
]};

console.log("Method 1: Using for loop");

for (let i = 0; i < sub.FSD.length; i++) {
    console.log(sub.FSD[i].Topic);
    console.log(sub.FSD[i].course);
    console.log(sub.FSD[i].content);
}

console.log("------");
console.log("Method 2: Using for...of loop");


for (let item of sub.FSD) {
  console.log("Topic:", item.Topic);
  console.log("Course:", item.course);

  for (let c of item.content) {
    console.log("Content:", c);
  }

  console.log("------");
}

console.log("Method 3: Using forEach loop");

sub.FSD.forEach(function(item) {
  console.log("Topic:", item.Topic);
  console.log("Course:", item.course);
    item.content.forEach(function(c) {
    console.log("Content:", c);
    });
    console.log("------");
});

console.log("Method 4: Using map method");//Still Needed to understand(REDO)
sub.FSD.map(function(item) {
  console.log("Topic:", item.Topic);
  console.log("Course:", item.course);
    item.content.map(function(c) {
    console.log("Content:", c);
    });
    console.log("------");
});