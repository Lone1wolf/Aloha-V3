/*===== HIDE SLIDER AND CONTENCT (active) =====*/

var tabteamlinks = document.getElementsByClassName("tabteam-links");
var tabteamcontencts = document.getElementsByClassName("tabteam-contencts");

    function opentab(tabname){
        for(tabteamlink of tabteamlinks){
            tabteamlink.classList.remove("active-links");
        }
        for(tabteamcontenct of tabteamcontencts){
            tabteamcontenct.classList.remove("active-tab");
        }

        // /*===== DISPLAY CONTACT ON PRESS =====*/
        event.currentTarget.classList.add("active-links");
        document.getElementById(tabname).classList.add("active-tab")

}



