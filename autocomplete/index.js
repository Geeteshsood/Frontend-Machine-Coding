const arr = [
  "apple",
  "apricot",
  "avocado",
  "almond",
  "banana",
  "blueberry",
  "blackberry",
  "cranberry",
  "cherry",
  "coconut",
  "date",
  "dragonfruit",
  "elderberry",
  "fig",
  "grape",
  "guava",
  "honeydew",
  "kiwi",
  "lemon",
  "lime",
  "mango",
  "melon",
  "nectarine",
  "orange",
  "olive",
  "papaya",
  "peach",
  "pear",
  "pineapple",
  "plum",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "watermelon",
  "apartment",
  "accordion",
  "arrow",
  "astronomy",
  "aquarium",
  "alien",
  "asteroid",
  "athlete",
  "author",
  "architect",
  "bagel",
  "banana",
  "bicycle",
  "balloon",
  "beach",
  "butterfly",
  "book",
  "bird",
  "boat",
  "bus",
  "carrot",
  "cat",
  "cake",
  "cookie",
  "candle",
  "cupcake",
  "chocolate",
  "cheese",
  "coffee",
  "cereal",
  "dog",
  "donut",
  "dolphin",
  "dinosaur",
  "dragon",
  "deer",
  "desk",
  "duck",
  "daisy",
  "diamond",
  "elephant",
  "eagle",
  "ear",
  "egg",
  "engine",
  "envelope",
  "elbow",
  "eyelash",
  "earth",
  "emerald",
  "flower",
  "frog",
  "fish",
  "fox",
  "ferry",
  "fridge",
  "fire",
  "flag",
  "forest",
  "flamingo",
  "giraffe",
  "goat",
  "grapefruit",
  "guitar",
  "gorilla",
  "glacier",
  "globe",
  "gem",
  "garden",
  "garlic",
];

const handleClick1 = () => {
  const inpVal = document.getElementById("inp").value;

  const filter = arr.filter((ele) => ele.startsWith(inpVal));

  let list = document.getElementById("myDiv");
  list.innerHTML = "";

  let item = "";

  for (let i = 0; i < filter.length; i++) {
    let mylist = "<li>" + filter[i] + "</li>";
    item += mylist;
  }

  list.innerHTML = "<ul>" + item + "</ul>";
};

const handleClick2 = () => {
  const inpVal = document.getElementById("inp").value;

  const filter = arr.filter((ele) => ele.startsWith(inpVal));

  let list = document.getElementById("myDiv");
  list.innerHTML = "";

  for (let i = 0; i < filter.length; i++) {
    let mylist = document.createElement("li");
    mylist.innerHTML = filter[i];
    list.appendChild(mylist);
  }
};
