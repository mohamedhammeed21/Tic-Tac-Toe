$(document).ready(function(){
    var classes = ["o", "x"];
    var values = ["o", "x"];
    var turns = 0;
    var player  = $('.player');
    var switchPlayer = 1;
    var player1Score= 0;
    var player2Score= 0;
    $('.p1score').text(player1Score)
    $('.p2score').text(player2Score)
    var spot1 = $('.spot1')
    var spot2 = $('.spot2')
    var spot3 = $('.spot3')
    var spot4 = $('.spot4')
    var spot5 = $('.spot5')
    var spot6 = $('.spot6')
    var spot7 = $('.spot7')
    var spot8 = $('.spot8')
    var spot9 = $('.spot9')
    $('li').click(function(){
        

        if(switchPlayer %2 == 0){
            player.text('2')
        }else{
            player.text('1')
        }


        $(this).addClass(classes[~~(Math.random()*classes.length)]).addClass('disabled');

        $(this).text($(this).attr('class').split(' ')[1]);
        turns++;
        switchPlayer++; 
        
        if(turns == 9){
            alert('no one win')
            turns = 0;
            player = $('.player');
            switchPlayer = 1;
            console.log(turns)
            console.log(player)
            console.log(switchPlayer)
            $('li').each(function(){
                $(this).removeClass(['o','x','disabled'])
                $(this).text('+')
            });
        
        
        }if( 
            spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
            spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
            spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
            spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
            spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x') ||
            spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
            spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
            spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') 
        ){
                        alert('player 1 win')
                        $('li').each(function(){
                            $(this).addClass(['disabled'])
                        });
                        turns = 0;
                        player = $('.player');
                        switchPlayer = 1;
                        player1Score++
                        $('.p1score').text(player1Score)
                        $('.p2score').text(player2Score)
                        
                
        }else if(
                    spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
                    spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
                    spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
                    spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
                    spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o') ||
                    spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
                    spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
                    spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') 
                    

                ){
                        alert('player 2 win')
                        $('li').each(function(){
                            $(this).addClass(['disabled'])
                        });
                        turns = 0;
                        player = $('.player');
                        switchPlayer = 1;
                        player2Score++
                        $('.p1score').text(player1Score)
                        $('.p2score').text(player2Score)
                        
                        
                
        }   
    })    
    $('.reset').click(function(){
        turns = 0;
        player = $('.player');
        switchPlayer = 1;
        console.log(turns)
        console.log(player)
        console.log(switchPlayer)
        $('li').each(function(){
            $(this).removeClass(['o','x','disabled'])
            $(this).text('+')
        });
    })
    $('.resetScore').click(function(){
        $('.p1score').text('0')
        $('.p2score').text('0')
    })
})