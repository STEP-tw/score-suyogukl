const Game=function(){
}
Game.prototype={
  updateNewScore:function(score){
    let newScore=score+10;
    document.getElementById('score').innerHTML=`Score: ${newScore}`;
    return;
  },
  getPreviousScore:function(){
    let element=document.getElementById('score').innerHTML;
    return +element.split(' ')[1];
  }
}
