
export class CookieService  {
    
        constructor(){}
    
        getCookie(cookieName){
            let cookies = {};
            const pairs = document.cookie.split('; ');
            for (let i in pairs){
              const pair = pairs[i].split('=');
              cookies[pair[0]] = decodeURIComponent(pair[1]);
            }
            return cookies[cookieName];
        }
    
        getUserCookie(){   
            const cookie = this.getCookie("app_cookie");
            if (cookie){
                return JSON.parse(cookie);
            } else{
                return undefined;
            }
        } 
    }