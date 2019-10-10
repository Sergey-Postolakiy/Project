/*
You probably know the "like"

You probably know the "like"
system from Facebook and other pages.People can "like"
blog posts, pictures or other items.We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes[] // must be "no one likes this"
likes["Peter"] // must be "Peter likes this"
likes["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

For 4 or more names, the number in and 2 others simply increases.*/

function likes(names) {
   if (names.length == 0) { //если массив пустой
      return "no one likes this";
   } else if (names.length == 1) { //если массив состоит из 1 элемента
      return names[0] + " " + "likes this";
   } else if (names.length == 2) { //если массив состоит из 2 элементов
      return names[0] + " and " + names[1] + " " + "like this";
   } else if (names.length == 3) { //если массив состоит из 3 элементов
      return names[0] + ", " + names[1] + " and " + names[2] + " " + "like this";
   } else if (names.length > 3) { //если массив состоит из 4 элементов
      return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
   }
}

// let array = [];
// let array = ["Peter"];
// let array = ["Jacob", "Alex"]
// let array = ["Max", "John", "Mark"]
let array = ["Alex", "Jacob", "Mark", "Max"]

let response = likes(array);
console.log(response)