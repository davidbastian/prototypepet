function HomeController($scope, $http, $routeParams) {

    $scope.message = 'This is Home'
    $scope.slug = $routeParams.slug
        //console.log($routeParams.slug)
        // $scope.home = data;
        // Simple GET request example:

    /* $http({
         method: 'GET',
         url: 'http://dev.lovelinks/wp-json/posts'
     }).then(function successCallback(response) {
         // this callback will be called asynchronously
         // when the response is available

        // console.log('is home nad load the last post');

     }, function errorCallback(response) {
         // called asynchronously if an error occurs
         // or server returns response with an error status.
     });*/

    $scope.cat = require('./cat.png');
    $scope.dog = require('./dog.png');
    $scope.dog2 = require('./dog2.png');



    var count = 0;


    angular.element(document).ready(function () {
       var sizeItem = $('img').size();
        $('img').each(function() {
            if ($(this)[0].complete === true) {
                count = count + 1;
                console.log(count)

                var done = ((count * 100) / sizeItem);


                console.log(Math.round(done) + '%') // show the percent 
                    //$('#home .white h1').text(Math.round(done) + '.');

                if (done === 100) {
                    // console.log('yes') // ready 
                    count = 0; // reset counter

                    hola();
                }



            }

        })
    });



        




     function hola() {

        TweenMax.to($('.cat'), 1, {
            opacity: 1,
            ease: Expo.easeOut,
        })



        TweenMax.to($('h1 .bar'), 1, {
            x: '-100%',
            // opacity: 0,
            scaleX: 1,
            delay: 1.2,
            ease: Expo.easeOut,
        })

        TweenMax.to($('h1 .bar-white'), 0.9, {
            width: '0%',
            delay: 1.2,
            ease: Expo.easeOut,
        })

        TweenMax.to($('h1 span'), 1, {
            x: '0%',
            delay: 1.2,
            ease: Expo.easeOut,
        })

        TweenMax.to($('.lead'), 1, {
            y: '0%',
            opacity: 1,
            delay: 1.3,
            ease: Expo.easeOut,
        })

        TweenMax.to($('.btn'), 1, {
            y: '0%',
            opacity: 1,
            delay: 1.3,
            ease: Expo.easeOut,
        })

        TweenMax.to($('.btn-line'), 1, {
            width: '3vw',
            opacity: 1,
            delay: 1.6,
            ease: Expo.easeOut,
        })

        TweenMax.to($('.btn-circle'), 0.4, {
            scale: '1',
            delay: 1.9,
            ease: Back.easeOut,
        })


        TweenMax.to($('.white-bg'), 0.8, {
            ease: Expo.easeOut,
            width: '100vw',
            height: '100%',
            top: '0vh',
            left: '0vw',
            delay: 1,
            onComplete: function() {

            }
        })

        TweenMax.to($('.one .main-line'), 2, {
            ease: Expo.easeOut,
            width: '50vw',
            delay: 2,
            opacity: 1,
        })


        TweenMax.to($('.cat'), 2, {
            scale: 1,
            delay: 1,
            ease: Expo.easeOut,
        })




    }






    $('.start').click(function() {


        TweenMax.to($('.one'), 1.6, {
            x: '-100%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.cat'), 1.6, {
            scale: '1.2',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })


        TweenMax.to($('.two'), 1.6, {
            x: '0%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.timeline'), 1.6, {
            opacity: '1',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })


        TweenMax.to($('.percent'), 2, {
            width: '100%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
            delay: 1,
        })


        TweenMax.staggerTo('.line-wrap .dot', 0.5, {
            opacity: 1,
            y: '0%',
            delay: 0.3,
            backgroundColor: '#ccc',
            ease: Expo.easeOut
        }, 0.05);





        return false;
    });


    $('.back-one').click(function() {


        TweenMax.to($('.one'), 1.6, {
            x: '0%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })
        TweenMax.to($('.two'), 1.6, {
            x: '100%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.cat'), 1.6, {
            scale: '1',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })



        TweenMax.to($('.timeline'), 1.6, {
            opacity: '0',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })


        TweenMax.to($('.percent'), 0.5, {
            width: '0%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })


        TweenMax.staggerTo('.line-wrap .dot', 0.5, {
            opacity: 0,
            y: '3vw',
            backgroundColor: '#ccc',
            ease: Expo.easeOut
        }, 0.05);





        return false;
    });


    $('.select li').click(function() {



        TweenMax.to($('.select li').find('.bg-color'), 0.4, {
            opacity: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.select li').find('.icon-container'), 0.4, {
            scale: '0.8',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.select li').find('span'), 0.4, {
            color: '#242424',
            ease: Expo.easeOut,
        })


        TweenMax.to($(this).find('.bg-color'), 0.4, {
            opacity: '1',
            ease: Expo.easeOut,
        })

        TweenMax.to($(this).find('.icon-container'), 0.4, {
            scale: '1',
            ease: Expo.easeOut,
        })

        TweenMax.to($(this).find('span'), 0.4, {
            color: '#fff',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.next'), 0.4, {
            scale: '1',
            delay: 0.15,
            ease: Expo.easeOut,
        })

        TweenMax.to($('.next div'), 0.4, {
            opacity: '1',
            delay: 0.2,
            ease: Expo.easeOut,
        })

    });



    $('.next, .dot-two').click(function() {

        TweenMax.to($('.two'), 1.6, {
            x: '-100%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        });

        TweenMax.to($('.dog'), 1.6, {
            scale: '1.4',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.three'), 1.6, {
            x: '0%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.timeline'), 1.6, {
            x: '-95%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })


        TweenMax.to($('.dot-one .here'), .6, {
            opacity: '0',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

         TweenMax.to($('.dot-one'), .6, {
            backgroundColor: '#4a90e2',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })



         TweenMax.to($('.dot-two .place'), .6, {
            opacity: '1',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.dot-two h3, .dot-two p,  .dot-two .read'), .6, {
            opacity: '1',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.dot-one h3, .dot-one p,  .dot-one .read'), .6, {
            opacity: '0',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.dot-one .circle-two'), .6, {
            scale: '0',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.percent .sublue'), 0.5, {
            width: '5.5vw',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.inner-line-d'), 0.5, {
            height: '100%',
            delay: 1,
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.info p'), 0.6, {
            delay: 1.3,
            opacity: 1,
            // autoAlpha: '0',
            ease: Expo.easeOut
        })

    });


    $('.back-two, .dot-one').click(function() {

        TweenMax.to($('.two'), 1.6, {
            x: '0%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        });

        TweenMax.to($('.dog'), 1.6, {
            scale: '1',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.three'), 1.6, {
            x: '100%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.timeline'), 1.6, {
            x: '-64%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })


        TweenMax.to($('.dot-one .here'), .6, {
            opacity: '1',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.dot-two .place'), .6, {
            opacity: '0',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })



        TweenMax.to($('.dot-two h3, .dot-two p,  .dot-two .read'), .6, {
            opacity: '0',
            
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.dot-one h3, .dot-one p,  .dot-one .read'), .6, {
            opacity: '1',

            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.dot-one .circle-two'), .6, {
            scale: '1',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.percent .sublue'), 0.5, {
            width: '0vw',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.inner-line-d'), 0.5, {
            height: '0%',
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

        TweenMax.to($('.info p'), 0.6, {
            opacity: 0,
            // autoAlpha: '0',
            ease: Expo.easeOut,
        })

    });



    Draggable.create($('.ball'), {
        type: "x",
        edgeResistance: 0.65,
        bounds: ".draggi",
        throwProps: true,
        onDrag: function() {
            var suPos = 1 * (parseInt(this.x, 10)),
                percent = ((suPos * 100) / $('.draggi').width()),
                pert = Math.round(percent / 10);

            $('.ball').addClass('take');

            TweenMax.to($('.info'), 0.5, {
                opacity: 0,
                // autoAlpha: '0',
                ease: Expo.easeOut,
            })


            if (pert === 0) {
                TweenMax.to($('.ball .number'), .4, {
                    fontSize: (1) + 'vw',
                    // autoAlpha: '0',
                    ease: Expo.easeOut,
                });

            } else {

                TweenMax.to($('.ball .number'), .4, {
                    fontSize: (1 * pert) + 'vw',
                    // autoAlpha: '0',
                    ease: Expo.easeOut,
                });

            }

            if ((pert > 0) && (pert < 4)) {
                $('.busy').removeClass('blue');
                $('.super').removeClass('blue');

                $('.never').addClass('blue');

            } else if ((pert >= 4) && (pert < 6)) {
                $('.super').removeClass('blue');
                $('.never').removeClass('blue');
                $('.busy').addClass('blue');

            } else if ((pert >= 6)) {
                $('.super').addClass('blue');
                $('.never').removeClass('blue');
                $('.busy').removeClass('blue');
            }

            $('.ball .number').text(pert)

            TweenMax.to($('.ball-container'), .4, {
                scale: '0.6',
                // autoAlpha: '0',
                ease: Expo.easeOut,
            });


        },
        onDragEnd: function() {
            $('.ball').removeClass('take');
            TweenMax.to($('.ball-container'), .4, {
                scale: '0.8',
                // autoAlpha: '0',
                ease: Expo.easeOut,
            });

        },

        onThrowUpdate: function() {
            var suPos = 1 * (parseInt(this.x, 10)),
                percent = ((suPos * 100) / $('.draggi').width()),
                pert = Math.round(percent / 10);


            if (pert === 0) {
                TweenMax.to($('.ball .number'), .4, {
                    fontSize: (1) + 'vw',
                    // autoAlpha: '0',
                    ease: Back.easeOut,
                });

            } else {

                TweenMax.to($('.ball .number'), .4, {
                    fontSize: (1 * pert) + 'vw',
                    // autoAlpha: '0',
                    ease: Back.easeOut,
                });

            }
            $('.ball .number').text(pert)

            if ((pert > 0) && (pert < 4)) {
                $('.busy').removeClass('blue');
                $('.super').removeClass('blue');

                $('.never').addClass('blue');

            } else if ((pert >= 4) && (pert < 6)) {
                $('.super').removeClass('blue');
                $('.never').removeClass('blue');
                $('.busy').addClass('blue');

            } else if ((pert >= 6)) {
                $('.super').addClass('blue');
                $('.never').removeClass('blue');
                $('.busy').removeClass('blue');
            }


        }
    });


}
export {
    HomeController
};