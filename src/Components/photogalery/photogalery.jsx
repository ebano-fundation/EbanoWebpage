import react from 'react';


import './photogalery.css';


export default function photogalery() {

    var pic;

    function change() {
        var pics = ['https://cdn.discordapp.com/attachments/926549421083197481/1012263255839875142/unknown.png', 'https://media.discordapp.net/attachments/926549421083197481/1012263370034008085/unknown.png?width=720&height=450', 'https://cdn.discordapp.com/attachments/926549421083197481/1012263369677471786/unknown.png','https://cdn.discordapp.com/attachments/926549421083197481/1012263370809946112/unknown.png']

        
        var photo = document.getElementById('photos');

        var photo1 = document.getElementsByClassName('photo1');
        var photo2 = document.getElementsByClassName('photo2');
        var photo3 = document.getElementsByClassName('photo3');
        var photo4 = document.getElementsByClassName('photo4');

        switch (photo) {
            case photo1:
                pic = pics[0];
                break;

            case photo2:
                pic = pics[1];
                break;

            case photo3:
                pic = pics[2];
                break;

            case photo4:
                pic = pics[3];
                break;
        }



    }



    return (
        <div className = 'App'>
            <div className='photogalery'>
                <div className='Container'>
                    <div className='visor'>
                        <img src={pic} />
                    </div>
                    <div className='photos'>
                        <img id='ph' className="photo1" src="photo1" alt='' onMouseOver={change} />
                        <img id='ph' className="photo2" src="photo2" alt='' onMouseOver={change} />
                        <img id='ph' className="photo3" src="photo3" alt='' onMouseOver={change} />
                        <img id='ph' className="photo4" src="photo4" alt='' onMouseOver={change} />
                    </div>
                </div>
            </div>
        </div>
        
        );
}