function Adduser()
{
    var player_1 = document.getElementById("Player_1").value;
    var player_2 = document.getElementById("Player_2").value;
    localStorage.setItem("Player_1", player_1);
    localStorage.setItem("Player_2", player_2);
    window.location = "game_page.html"; 
}