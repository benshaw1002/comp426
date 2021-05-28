/**
 * Course: COMP 426
 * Assignment: a04
 * Author: Ben Shaw
 *
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
    // TODO: Generate HTML elements to represent the hero
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<div>${hero.name}</div>`;
    var $layout = $(`<div id="${hero.id}" class="column" style="padding: 12px; margin:8px; height: 450px;float: left; width: 375px; background-color:${hero.backgroundColor};">`);
    $layout.append('<img src='+hero.img+ '>');
    $layout.append('<div id="name"   style="color:'+hero.color+';">'+hero.name+'</div>');
    $layout.append('<div id="subtitle" style="font-style: italic;">"'+hero.subtitle+'"</div>');
    $layout.append('<div id="real name">Alter<span> </span>ego: '+hero.first+' '+hero.last+'</div>'); 
    $layout.append('<p id="description">'+hero.description+'</p>');
    $layout.append('<button type="button" style="position:relative;">Edit</button>');
    return  $layout
};

/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Generate HTML elements to represent the hero edit form
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<form>${hero.name}</form>`;
    //   var box = `<form> <input type = "text" name = '${hero.name}'
    //   </form>`
    //   `<textarea>${hero.description}</textarea>`

    var $form=$('<div id="form">');
    var $formtop=$('<div id="top" class="column" style="float: left; width: 400px; background-color:'+hero.backgroundColor+';">');
    $formtop.append('<img src='+hero.img+ '>');
    var $formbot=$('<div id="bot" style="background-color: #F8F8FF;>');
    var $info=$('<form></form>');
    $info.append('Hero Name:<br><input type="text" name="herotname" value="'+hero.name+'"><br>')
    $info.append('First Name:<br><input type="text" name="firstname" value="'+hero.first+'"><br>')
    $info.append('Last Name:<br><input type="text" name="lastname" value="'+hero.last+'"><br>')
    $info.append('Subtitle Name:<br><input type="text" name="subtitle" value="'+hero.subtitle+'"><br>')
    $info.append('Description:<br><textarea name="message" style="width:200px;">'+hero.description+'</textarea><br>')
    $info.append('<button type="reset" value="Cancel">Cancel</button>')
    $content.append('<button type="submit" value="Save">Save</button>')  
    $formbot.append($info);
    $form.append($formtop);
    $formtop.append($info);
    return $form;
};



/**
 * Given an array of hero objects, this function converts the data into HTML and
 *     loads it into the DOM.
 * @param heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()

    let arrayHeroes = [];
    // TODO: Append the hero cards to the $root element
    for (let a = 0; a < heroes.length; a++)
    {
        arrayHeroes[a] = renderHeroCard(heroes[a]);
    }
    $root.append(arrayHeroes);
    // Pick a hero from the list at random
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

    // TODO: Generate the hero edit form using renderHeroEditForm()

    // TODO: Append the hero edit form to the $root element
    $root.append(renderHeroEditForm(randomHero));
    return $root;
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
});
