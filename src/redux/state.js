import { rerenderEntireTree } from "../render";

const state = {

  my_profile: {
    id: "6452356",
    user_name: "Никита Шульга",
    user_avatar: "https://dota-blog.ru/wp-content/uploads/2020/01/20c67aa9c18bb17dd8ffaa3dc97b8225.jpg",
    about_user: "Меня зовут Никита Шульга. Играю в доту, ебашу на заводе. Ещё я патлатый хуй.",
    user_posts: [
      { id: "iaOaBCS3cD3", user_id: "6452356", user_name: "Никита Шульга", user_avatar: "https://dota-blog.ru/wp-content/uploads/2020/01/20c67aa9c18bb17dd8ffaa3dc97b8225.jpg", message: "Вы такие придурки...", date: "10.05.2024", likes_count: 3 },
      { id: "8VOCQ2ABjSz", user_id: "2154334", user_name: "Пиздач Амогусович", user_avatar: "https://yt3.googleusercontent.com/vdxnlql549JcK3q-vp9owZjFS-gMxW_C1bdinENVSYHe9v7mjdfTHRJQ-QBeup4Qq-k8ixjg=s900-c-k-c0x00ffffff-no-rj", message: "ХАХАХАХАХАХАХАХАХАХА", date: "05.05.2024", likes_count: 4 },
      { id: "9XU3rkLKrN5", user_id: "0345678", user_name: "Oleg Shulga", user_avatar: "https://escorenews.com/media/news/n44442.jpeg", message: "Ты че ахуел, я своему брату сосу. Он не гей!", date: "01.05.2024", likes_count: 2 },
      { id: "AOnX81tqyx1", user_id: "2154334", user_name: "Пиздач Амогусович", user_avatar: "https://yt3.googleusercontent.com/vdxnlql549JcK3q-vp9owZjFS-gMxW_C1bdinENVSYHe9v7mjdfTHRJQ-QBeup4Qq-k8ixjg=s900-c-k-c0x00ffffff-no-rj", message: "Никита Шульга гей!", date: "01.05.2024", likes_count: 4 },
    ],
    user_friends: [
      { id: "2154334", user_name: "Пиздач Амогусович", user_avatar: "https://yt3.googleusercontent.com/vdxnlql549JcK3q-vp9owZjFS-gMxW_C1bdinENVSYHe9v7mjdfTHRJQ-QBeup4Qq-k8ixjg=s900-c-k-c0x00ffffff-no-rj" },
      { id: "9267004", user_name: "Дмитрий Анакондович", user_avatar: "https://sun9-47.userapi.com/c9485/u51519439/148203535/x_216e6725.jpg" },
      { id: "2146328", user_name: "Ilya Kargin", user_avatar: "https://sun9-2.userapi.com/c5311/u133736693/130484679/x_b3375624.jpg", },
      { id: "0345678", user_name: "Oleg Shulga", user_avatar: "https://escorenews.com/media/news/n44442.jpeg" },
    ],
  },

  my_dialogs: {
    my_id: "6452356",

    dialogs: [
      { id: "0025219", user_id: "2154334", user_name: "Пиздач Амогусович", user_avatar: "https://yt3.googleusercontent.com/vdxnlql549JcK3q-vp9owZjFS-gMxW_C1bdinENVSYHe9v7mjdfTHRJQ-QBeup4Qq-k8ixjg=s900-c-k-c0x00ffffff-no-rj" },
      { id: "8653480", user_id: "9267004", user_name: "Дмитрий Анакондович", user_avatar: "https://sun9-47.userapi.com/c9485/u51519439/148203535/x_216e6725.jpg" },
    ],

    messages: [
      { id: "2386532", dialog_id: "8653480", user_id: "6452356", message: "Пиздач, что по матеше задали?", date: "30.04.24", user_name: "Никита Шульга", user_avatar: "https://dota-blog.ru/wp-content/uploads/2020/01/20c67aa9c18bb17dd8ffaa3dc97b8225.jpg" },
      { id: "8523941", dialog_id: "8653480", user_id: "2154334", message: "Я ваще не ебу", date: "01.05.24", user_name: "Пиздач Амогусович", user_avatar: "https://yt3.googleusercontent.com/vdxnlql549JcK3q-vp9owZjFS-gMxW_C1bdinENVSYHe9v7mjdfTHRJQ-QBeup4Qq-k8ixjg=s900-c-k-c0x00ffffff-no-rj" },
      { id: "5800536", dialog_id: "8653480", user_id: "6452356", message: "Ты вообще домашку записываешь? Я просто уже заебался эту домашку хуярить...", date: "01.05.24", user_name: "Никита Шульга", user_avatar: "https://dota-blog.ru/wp-content/uploads/2020/01/20c67aa9c18bb17dd8ffaa3dc97b8225.jpg" },
      { id: "0005463", dialog_id: "8653480", user_id: "2154334", message: "Я рот этих учетелей ебал!", date: "01.05.24", user_name: "Пиздач Амогусович", user_avatar: "https://yt3.googleusercontent.com/vdxnlql549JcK3q-vp9owZjFS-gMxW_C1bdinENVSYHe9v7mjdfTHRJQ-QBeup4Qq-k8ixjg=s900-c-k-c0x00ffffff-no-rj" },
      { id: "6042931", dialog_id: "8653480", user_id: "6452356", message: "Бля, ты такой еблан", date: "01.05.24", user_name: "Никита Шульга", user_avatar: "https://dota-blog.ru/wp-content/uploads/2020/01/20c67aa9c18bb17dd8ffaa3dc97b8225.jpg" },
      { id: "7543802", dialog_id: "8653480", user_id: "2154334", message: "))", date: "02.05.24", user_name: "Пиздач Амогусович", user_avatar: "https://yt3.googleusercontent.com/vdxnlql549JcK3q-vp9owZjFS-gMxW_C1bdinENVSYHe9v7mjdfTHRJQ-QBeup4Qq-k8ixjg=s900-c-k-c0x00ffffff-no-rj" },
    ],
  },

  foreign_profile: {
    id: "2154334",
    user_name: "Пиздач Амогусович",
    user_avatar: "https://yt3.googleusercontent.com/vdxnlql549JcK3q-vp9owZjFS-gMxW_C1bdinENVSYHe9v7mjdfTHRJQ-QBeup4Qq-k8ixjg=s900-c-k-c0x00ffffff-no-rj",
    about_user: "Привет, меня зовут Дима. Это мой фейк-аккаунт. Сделал его, чтобы тролить Некета",
    user_posts: [
      { id: "246813", user_id: "2154334", user_name: "Пиздач Амогусович", user_avatar: "https://yt3.googleusercontent.com/vdxnlql549JcK3q-vp9owZjFS-gMxW_C1bdinENVSYHe9v7mjdfTHRJQ-QBeup4Qq-k8ixjg=s900-c-k-c0x00ffffff-no-rj", message: "ЙО-ХО-ХО!", date: "22.04.24", likes_count: 1 },
      { id: "987654", user_id: "2154334", user_name: "Пиздач Амогусович", user_avatar: "https://yt3.googleusercontent.com/vdxnlql549JcK3q-vp9owZjFS-gMxW_C1bdinENVSYHe9v7mjdfTHRJQ-QBeup4Qq-k8ixjg=s900-c-k-c0x00ffffff-no-rj", message: "ГА-ГА-ГА!", date: "22.04.24", likes_count: 1 },
    ],
    user_friends: [
      { id: "6452356", user_name: "Никита Шульга", user_avatar: "https://dota-blog.ru/wp-content/uploads/2020/01/20c67aa9c18bb17dd8ffaa3dc97b8225.jpg", },
    ],
  },

  nav_bar: {
    user_id: "6452356",
  },
}

function generateRandomId() { // генерация рандомоного индетификатора
  let index = 0;
  let result = '';
  let characters = '0123456789QqWwEeRrTtYyUuIiOoPpAaSsDdFfGgHhJjKkLlZzXxCcVvBbNnMm';
  while (index < 11) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    index++
  }
  return result;
}

export let addPost = (postMessage, user_id, user_name, user_avatar) => { 
  var currentDate = new Date(); 
  var dd = String(currentDate.getDate()).padStart(2, '0');
  var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); 
  var yyyy = currentDate.getFullYear();
  let post_date = dd + '.' + mm + '.' + yyyy;

  let newPost = {
    id: generateRandomId(),
    user_id: user_id,
    user_name: user_name,
    user_avatar: user_avatar,
    message: postMessage,
    date: post_date,
    likes_count: 0
  }
  console.log(newPost);
  state.my_profile.user_posts.push(newPost)
  rerenderEntireTree(state)
}

export default state;