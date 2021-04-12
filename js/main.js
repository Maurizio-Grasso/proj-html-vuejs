var app = new Vue ( {
    el : '#app' ,
    data : {

        logoSrc : 'img/logo-2x.png' ,
        
        mainMenuItems : [
            {
                innerHtml : 'Home' ,
                class : 'main-menu-item active-item'
            } ,

            {
                innerHtml : 'Apple' ,
                class : 'main-menu-item'
            } ,

            {
                innerHtml : 'Microsoft' ,
                class : 'main-menu-item'
            } ,

            {
                innerHtml : 'Android' ,
                class : 'main-menu-item'
            } ,

            {
                innerHtml : 'Forum' ,
                class : 'main-menu-item'
            } ,
            
            {
                innerHtml : 'Contact us' ,
                class : 'main-menu-item'
            } ,

            {
                innerHtml : '<button class="btn btn-black">Join us</button>' ,
                class : 'main-menu-item join-us-button'
            } ,

            {
                innerHtml : '<i class="fas fa-search"></i>' ,
                class : 'main-menu-item header-search-button'
            }
        ] ,
        
        footerMenus : [
            {
                heading : 'avada tech forum' ,
                type : 'p' ,
                content : 'Quibusdam praesentium, voluptatem placeat dolore, officia porro voluptatum et cum eligendi deleniti, cupiditate quos quis fugit molestiae iure repudiandae. Minima, repudiandae illum.'
            } ,
            {
                heading : 'popular topics' ,
                type : 'ul' ,
                content : [ 'commodi blanditiis repudiandae illum officia porro' , 
                            'eligendi deleniti dignissimos magni' , 
                            'Repudiandae minus quis praesentium eligendi deleniti' , 
                            'placeat dolore quia id elit' 
                        ]
            } ,
            {
                heading : 'recent topics' ,
                type : 'ul' ,
                content : [ 'Quibusdam praesentium sit amet' , 
                            'Lorem ipsum dolor officia porro' , 
                            'placeat dolore praesentium consectetur adipisicing' , 
                            'ex laboriosam a quos quis fugit' 
                        ]
            } ,
            {
                heading : 'latest replies' ,
                type : 'ul' ,
                content : [ 'et cum eligendi sunt repellat' , 
                            'consectetur eius nisi quos quis fugit officia porro' , 
                            'cupiditate quos ullam voluptates' , 
                            'repudiandae illum reprehenderit eum ratione' 
                        ]
            } ,

        ] ,

        footerSocialIcons : [ 
            { name  : 'Facebook' ,
            iconHtml  : '<i class="fab fa-facebook-f"></i>' ,
            color : '#3c5998'
            } ,

            { name  : 'Twitter' ,
              iconHtml  : '<i class="fab fa-twitter"></i>' ,
              color : '#54acee'
            } ,

            { name  : 'Instagram' ,
              iconHtml  : '<i class="fab fa-instagram"></i>' ,
              color : '#3f729b'
            } ,

            { name  : 'YouTube' ,
              iconHtml  : '<i class="fab fa-youtube"></i>' ,
              color : '#cd201f'
            }
        ] ,

        copyrightBar : '&copy; Copyright 2012 - 2021' +
            ' &vert; Avada Theme by <a href="#">Theme Fusion</a> &vert; ' + 
            'All Rights Reserved &vert; ' +
            'Powered by <a href="#">WordPress</a>'
    } ,
    methods : {
        printFooterMenu(index) {
            var currentMenu = this.footerMenus[index];
            var outputHtml = '<h4>'+ currentMenu.heading +'</h4>';

            if (currentMenu.type == 'p') {
                outputHtml += '<p>' + currentMenu.content + '<p>' ;
            }
            else if(currentMenu.type == 'ul') {
                
                outputHtml += '<ul>'
                
                currentMenu.content.forEach( item => {
                    outputHtml += '<li><a href="#">' + item + '</a></li>';
                });

                outputHtml += '</ul>'
            }
            return outputHtml;
        }
    }
});