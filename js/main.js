var app = new Vue ( {
    el : '#app' ,
    data : {

        logoSrc : 'img/logo-2x.png' ,
        
        mainMenuItems : [

            //  Ogni oggetto di questo array corrisponderà ad un <li> del menu.
            //
            //  Struttura di base dell'oggetto (tutte le proprietà sono facoltative):
            //
            //
            // {
            //     name :      '' ,                         Nome della voce del menu
            //     class :     '' ,                         Classi assegnate all'elemento <li>
            //     onclick:    '' ,                         Evento assegnato al click dell'elemento <li>
            //     childElement : {                         Oggetto corrispondente ad un eventuale elemento figlio di <li>
            //         tag :      '' ,                      tag dell'elemento figlio (Esempi: 'a' , 'button' , 'i')
            //         class: false ,                       classi assegnate all'elemento figlio
            //         attributes : {                       Attributi dell'elemento figlio: ogni proprietà dell'oggetto corrisponde ad un attributo. Esempi:
            //                                                  href    : '/about.html' ,
            //                                                  onclick : 'myFunction()'
            //                                                  rel     : 'nofollow,
            //             } ,
            //         }
            // }
            
            
            {    
                name :           'Home' ,
                class :          'active-item' ,
                childElement : {
                    tag :           'a' ,
                    class:          false ,
                    attributes : {                            
                        href :  '#' ,
                    } ,                
                }
            } ,
            
            {
                name :      'Apple' ,
                class :     '' ,
                childElement : {
                    tag :      'a' ,
                    class: false ,
                    attributes : {                            
                        href : '' ,
                    } ,                
                }
            } ,
            {
                name :      'Microsoft' ,
                class :     '' ,
                childElement : {
                    tag :      'a' ,
                    class: false ,
                    attributes : {                            
                        href : '' ,
                    } ,                
                }
            } ,
            {
                name :      'Android' ,
                class :     '' ,
                childElement : {
                    tag :      'a' ,
                    class: false ,
                    attributes : {                            
                        href : '' ,
                    } ,                
                }
            } ,
            {
                name :      'Forum' ,
                class :     '' ,
                childElement : {
                    tag :      'a' ,
                    class: false ,
                    attributes : {                            
                        href : '' ,
                    } ,                
                }
            } ,
            {
                name :      'Contact us' ,
                class :     '' ,
                childElement : {
                    tag :      'a' ,
                    class: false ,
                    attributes : {                            
                        href : '' ,
                    } ,                
                }
            } ,
            {    
                name :           '' ,
                class :          'outer-logo' ,
                childElement : {
                    tag :           'img' ,
                    class:          'header-logo cursor-pointer' ,
                    attributes : {                            
                            src :  'img/logo-2x.png' ,
                            alt : 'avada forum logo'
                        } ,                
                    }
            } ,
            {
                name :      '' ,
                class :     'search-button cursor-pointer' ,
                onclick :   'app.search()',
                childElement : {
                    tag :      'i' ,
                    class: 'fas fa-search' ,
                    }
            } , 
            {
                name :      'Join us' ,
                class :     '' ,
                childElement : {
                    tag :      'button' ,
                    class: 'btn btn-black' ,
                    }
            } ,
        ] ,
        
        copyrightBar : '&copy; Copyright 2012 - 2021' +
            ' &vert; Avada Theme by <a href="#">Theme Fusion</a> &vert; ' + 
            'All Rights Reserved &vert; ' +
            'Powered by <a href="#">WordPress</a>' ,
        
        footerMenus : [
            {
                heading : 'avada tech forum' ,
                childTag : 'p' ,
                content : 'Quibusdam praesentium, voluptatem placeat dolore, officia porro voluptatum et cum eligendi deleniti, cupiditate quos quis fugit molestiae iure repudiandae. Minima, repudiandae illum.'
            } ,

            {
                heading : 'popular topics' ,
                childTag : 'ul' ,
                content : [ 'commodi blanditiis repudiandae illum officia porro' , 
                            'eligendi deleniti dignissimos magni' , 
                            'Repudiandae minus quis praesentium eligendi deleniti' , 
                            'placeat dolore quia id elit' 
                        ]
            } ,

            {
                heading : 'recent topics' ,
                childTag : 'ul' ,
                content : [ 'Quibusdam praesentium sit amet' , 
                            'Lorem ipsum dolor officia porro' , 
                            'placeat dolore praesentium consectetur adipisicing' , 
                            'ex laboriosam a quos quis fugit' 
                        ]
            } ,

            {
                heading : 'latest replies' ,
                childTag : 'ul' ,
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
        ]

    } ,
    methods : {

        search() {
            // Metodo richiamato al click sul pulsante di ricerca
            alert("Search Button Clicked");
        } ,

        printFooterMenu(menu) {
            var outputHtml = '';
            if(menu.childTag == 'p') {
                outputHtml = menu.content;
            }
            else if(menu.childTag == 'ul') {                
                menu.content.forEach( item => {
                    outputHtml += `<li><a href="#">${item}</a></li>`;
                });
            }
            return `<h4>${menu.heading}</h4><${menu.childTag}>${outputHtml}</${menu.childTag}>`;
        } ,

        printMenuItem(item) {
        //  Questo metodo stampa le voci del menu principale in base ai dati contentui nell'array 'mainMenuItems'

            if(!item.childElement) {
                return item.name;            
            }
            
            else {                
                var childElement = item.childElement;
                var outputHtml = `<${childElement.tag}`; 
                
                if(childElement.class){
                    outputHtml += ` class="${childElement.class}"`;
                }
                
                if(childElement.attributes){
                    for(let key in childElement.attributes) {
                        outputHtml += ` ${key}="${childElement.attributes[key]}"`;
                    }
                }
                
                outputHtml += '>';

                if(childElement.tag != 'img') {
                    // Not Self Closing Tags
                    outputHtml += `${item.name}</${childElement.tag}>`;
                }

                return outputHtml;

            }
        }
    }
});