import * as information from './information.json';

export const help = ():String => {
    let helpMenu:String = '';

    helpMenu += '\nYou can use the following commands here.\n\n' +
        'about - shows basic information about myself\n' +
        'contact - shows contact information\n' +
        'instagram - opens a new tab with my Instagram\n' +
        'github - takes you to my github profile\n' +
        'linkedin - shows my linkedin profile\n' ;
        
    return helpMenu;
};

export const about = (): String => {
    let info:String = '';

    info += `\nHi! I'm ${information.name}.\n` +
        `I'm currently a ${information.currentJob} ${information.job}\n` +
        `Recently I completed ${information.bsDegree} from ${information.bsUni}. ` +
        `I'm from ${information.hometown}, currently living in Jammu.\n` +
        '\n\n' 
        ;

    return info
};

export const contact = ():String => {
    return `\nemail - ${information.email}` +
        `\ngithub - ${information.github}` +
        `\npo - ${information.portfolio}` +
        `\ninstagram - ${information.instagram}` +
        `\ntwitter - ${information.twitter}` + 
        `\nlinkedin - ${information.linkedin}` 
};

export const takeTo = (key:string):string => {
    let url:string = '';

    switch (key) {
        case 'portfolio':
            url = information.portfolio;
            break;
        case 'instagram':
            url = information.instagram;
            break;
        case 'github':
            url = information.github;
            break;
        case 'linkedin': 
            url= information.linkedin;
            break;
        default:
            break;
    }


    window.open(url, '_blank');
    return url;
};

