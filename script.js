function hello(){
   console.log('HI');
}
function start_game(game){
   //setTimeout(game.pick_a_number, 3000);
   //game.pick_a_number();
   game.draw_the_draw();
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


class Game{
   constructor () {
      this.number = [];
      this.number_max = 90;
      this.len_number = 90;
      this.list_number_picked = [];
      for (let i = 1; i <= this.number_max; i++){
         this.number.push(i);
      }
      this.iteration_animation = 0;
      this.music_name = [  "Benny hill", "Feeling Good", 
                           "Générique Loto - 1",
                           "Générique Loto - 2",
                           "Générique Loto - 3",
                           "Générique Loto - 4",
                           "Générique Loto - 5",
                           "Générique Loto - 6",
                           "Mission Impossible Theme",
                           "Moment for Morricone - Ennio Morricone",
                           "Top Gun Anthem",
                           "20th Century Fox"
                           
                           ]
      for (let i = 0; i < this.music_name.length; i++)
      {
         this.music_name[i] = new Audio("Sound/"+ this.music_name[i] + ".mp3");
      }
      this.music_on = true;
   }
   
   pick_a_number() {
      //console.log(this);
      const ball_div = document.getElementById("ball");
      ball_div.style.left  = '10%';
      const number = this.choice_number();
      const color_ball = Math.floor( Math.random()* 3);
      let image_ball = ""; 
      if (color_ball === 0){
         image_ball = "Image/Boule bleue-1.png";
      } else if (color_ball === 1){
         image_ball = "Image/Boule rouge-1.png";
      } else {
         image_ball = "Image/Boule verte-1.png";
      }
     
      this.ball = document.getElementById("ball_image");
      this.ball.src  = image_ball;
      
      this.list_number_picked.push( number );
      
      function remove_number(element){
         return element !== number;
      }
      this.number = this.number.filter(remove_number);
      this.len_number -= 1;
      
      
      
      const number_case = document.getElementById(number);
      number_case.style.backgroundColor = "red";
      
      const number_in_ball = document.getElementById("last_number");
      
      number_in_ball.innerHTML = ""+number;
   
   }
   
   choice_number(){
      //console.log(this.number);
      return this.number[ Math.floor( Math.random()* this.len_number)];
   }
   
   draw_the_draw(){
      function pick_a_number() {
      //console.log(this);
      const number = this.choice_number();
      const color_ball = Math.floor( Math.random()* 3);
      let image_ball = ""; 
      if (color_ball === 0){
         image_ball = "Image/Boule bleue-1.png";
      } else if (color_ball === 1){
         image_ball = "Image/Boule rouge-1.png";
      } else {
         image_ball = "Image/Boule verte-1.png";
      }
     
      this.ball = document.getElementById("ball_image");
      this.ball.src  = image_ball;
      
      this.list_number_picked.push( number );
      
      function remove_number(element){
         return element !== number;
      }
      this.number = this.number.filter(remove_number);
      this.len_number -= 1;
      
      
      
      const number_case = document.getElementById(number);
      number_case.style.backgroundColor = "red";
      
      const number_in_ball = document.getElementById("last_number");
      
      number_in_ball.innerHTML = ""+number;
   
      }
      
      function animation() {
         
         const number = this.choice_number();
         const color_ball = Math.floor( Math.random()* 3);
         let image_ball = ""; 
         if (color_ball === 0){
            image_ball = "Image/Boule bleue-1.png";
         } else if (color_ball === 1){
            image_ball = "Image/Boule rouge-1.png";
         } else {
            image_ball = "Image/Boule verte-1.png";
         }
         
         this.ball = document.getElementById("ball_image");
         this.ball.src  = image_ball;
         const ball_div = document.getElementById("ball");
         let width = ball_div.offsetWidth;
         width = document.body.offsetWidth / 2 - width / 2;
         width = "" + width + "px";
         ball_div.style.left  = width;
         const number_in_ball = document.getElementById("last_number");
      
         number_in_ball.innerHTML = ""+number;
      }
      function end_animation() {
         const table_number = document.getElementById("number_picked");
         const button_draw = document.getElementById("draw");
         table_number.style.visibility = "visible";
         button_draw.style.visibility = "visible";
         const title = document.getElementById("contenair");
         title.style.visibility = "visible";
         this.pick_a_number();
         
         if (this.music_on){
         music.pause();
         music.currentTime = 0;
         }
      }
      const table_number = document.getElementById("number_picked");
      const button_draw = document.getElementById("draw");
      table_number.style.visibility = "hidden";
      button_draw.style.visibility = "hidden";
      const title = document.getElementById("contenair");
      title.style.visibility = "hidden";
      
      const music = this.random_music();
      if (this.music_on){
         music.play();
      }
         
      let previousTimer = 0;
      for (let i = 0; i < 34; i++)
      {
         setTimeout( animation.bind(this, music) ,previousTimer + i * 8);
         previousTimer = previousTimer + i * 8;
      }
      
      setTimeout( end_animation.bind(this),previousTimer+ 35 * 10);
        
      
      
      
   }
   random_music(){
      return this.music_name[ Math.floor( Math.random()* this.music_name.length)];
   }
   
   turn_on_off_music()
   {
      this.music_on = !this.music_on;
   }
   
   
}

const game = new Game();

