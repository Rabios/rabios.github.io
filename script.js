bubbly({
  colorStart: "#4c004c",
  colorStop: "#1a001a",
  bubbleFunc: function() {
    return "hsla(" + (Math.random() * 360).toString() + ", 100%, 50%, " + (Math.random() * 0.25).toString() + ")";
  }
});

var projects_list = [
  {
    name: "Orange.hx",
    description: "Collection of Haxe stuff for folks!",
    url: "https://github.com/Orange-hx",
    languages: [ "Haxe" ]
  },
  {
    name: "steria773-archive",
    description: "Archive of my old stuff...",
    url: "https://github.com/steria773-archive",
    languages: [ "Python", "Lua", "JavaScript" ]
  },
  {
    name: "dragonblocks",
    description: "Blockly for DragonRuby!",
    url: "https://github.com/Rabios/dragonblocks",
    languages: [ "JavaScript", "XML", "JSON", "Ruby" ]
  },
  {
    name: "blockly-nelua",
    description: "Blockly that generates Nelua!",
    url: "https://github.com/Rabios/blockly-nelua",
    languages: [ "JavaScript", "JSON", "Nelua" ]
  },
  {
    name: "sigil_loader",
    description: "Loader for SIGIL library to use with C for no compilation hassle!",
    url: "https://github.com/Rabios/sigil_loader",
    languages: [ "ANSI C" ]
  },
  {
    name: "hxtizen",
    description: "Haxe externs for Tizen SDK APIs!",
    url: "https://github.com/Rabios/hxtizen",
    languages: [ "Haxe" ]
  },
  {
    name: "hxwebos",
    description: "Haxe externs for webOSTV JavaScript library!",
    url: "https://github.com/Rabios/hxwebos",
    languages: [ "Haxe" ]
  },
  {
    name: "sigil-bindings",
    description: "Bindings of SIGIL library for Boo, Lua, Nim, FreePascal, and FreeBASIC!",
    url: "https://github.com/Rabios/sigil-bindings",
    languages: [ "Boo", "Lua (LuaJIT)", "Nim", "FreePascal", "FreeBASIC" ]
  },
  {
    name: "drtouch",
    description: "Touch input library written in Ruby for DragonRuby GTK!",
    url: "https://github.com/Rabios/drtouch",
    languages: [ "Ruby" ]
  },
  {
    name: "Lancelot",
    description: "Open-Source Game Launcher written in Ruby via DragonRuby GTK",
    url: "https://github.com/Rabios/Lancelot",
    languages: [ "Ruby", "Batchscript", "Bash", "Powershell" ]
  },
  {
    name: "ice_libs",
    description: "Collection of cross-platform single-header C libraries for doing a lot of stuff! (Still WIP)",
    url: "https://github.com/Rabios/ice_libs",
    languages: [ "ANSI C", "C++", "Objective-C" ]
  },
  {
    name: "awesome-raylib",
    description: "Curated list of awesome stuff for raylib",
    url: "https://github.com/Rabios/awesome-raylib",
    languages: [ "Markdown" ]
  },
  {
    name: "raylib-boo",
    description: "Single-file Boo bindings for raylib!",
    url: "https://github.com/Rabios/raylib-boo",
    languages: [ "Boo" ]
  },
  {
    name: "raylua",
    description: "Cross-Platform, Modern, And updated LuaJIT bindings for raylib library",
    url: "https://github.com/Rabios/raylua",
    languages: [ "Lua (LuaJIT)" ]
  },
  {
    name: "lovr-joystick",
    description: "Module that provides Joystick support for LOVR",
    url: "https://github.com/Rabios/lovr-joystick",
    languages: [ "Lua (LuaJIT)" ]
  },
  {
    name: "lovr-clipboard",
    description: "Module that provides Clipboard support for LOVR",
    url: "https://github.com/Rabios/lovr-clipboard",
    languages: [ "Lua (LuaJIT)" ]
  },
  {
    name: "squids-docs",
    description: "Documentation for Sleepless's Squids game engine!",
    url: "https://github.com/Rabios/squids-docs",
    languages: [ "Markdown" ]
  },
  {
    name: "rayutils",
    description: "Single-Header library that extends raylib with some functionality!",
    url: "https://github.com/Rabios/rayutils",
    languages: [ "C99" ]
  },
  {
    name: "cherry",
    description: "Super LuaJIT package manager for everyone!",
    url: "https://github.com/Rabios/cherry",
    languages: [ "Lua (LuaJIT)" ]
  },
  {
    name: "polyfill.lua",
    description: "Polyfills for Lua and LuaJIT in one file, Improvement of CLua",
    url: "https://github.com/Rabios/polyfill.lua",
    languages: [ "Lua (LuaJIT)" ]
  },
  {
    name: "CLua",
    description: "Reimplementation of Lua modules via LuaJIT's FFI",
    url: "https://github.com/Rabios/CLua",
    languages: [ "Lua (LuaJIT)" ]
  },
  {
    name: "Pancake",
    description: "Lightweight, Fast, Easy-to-use HTML5 game programming library/Game framework for everything!",
    url: "https://github.com/Rabios/Pancake",
    languages: [ "JavaScript", "Python" ]
  },
  {
    name: "Pancake.hx",
    description: "Haxe port of the awesome HTML5 game framework Pancake!",
    url: "https://github.com/Rabios/Pancake.hx",
    languages: [ "Haxe" ]
  },
  {
    name: "rayport",
    description: "Header-Only rayfork wrapper for raylib!",
    url: "https://github.com/Rabios/rayport",
    languages: [ "C99" ]
  },
  {
    name: "c99-game-template",
    description: "C99 Template for writing games, Made with love and passion!",
    url: "https://github.com/Rabios/c99-game-template",
    languages: [ "C99" ]
  },
  {
    name: "polygl.js",
    description: "Tiny 2D graphics rendering library!",
    url: "https://github.com/Rabios/polygl.js",
    languages: [ "JavaScript" ]
  },
  {
    name: "bouncing-dvd-logo-raylib",
    description: "Port of Bouncing DVD Logo from a DragonRuby GTK gist, Using raylib with C99!",
    url: "https://github.com/Rabios/bouncing-dvd-logo-raylib",
    languages: [ "C99" ]
  },
  {
    name: "chailove-examples-collection",
    description: "Awesome collection of ChaiLove examples, For everyone!",
    url: "https://github.com/Rabios/chailove-examples-collection",
    languages: [ "ChaiScript" ]
  },
  {
    name: "CARRIER",
    description: "Set of LuaJIT game development libraries!",
    url: "https://github.com/Rabios/CARRIER",
    languages: [ "Lua (LuaJIT)" ]
  },
  {
    name: "webscreenconsole",
    description: "My attempt to do a custom web console with JavaScript :)",
    url: "https://github.com/Rabios/webscreenconsole",
    languages: [ "JavaScript" ]
  },
  {
    name: "TARGET",
    description: "Simple Gradius-inspired shooter game made with raylua!",
    url: "https://github.com/Rabios/TARGET",
    languages: [ "Lua (LuaJIT)" ]
  },
  {
    name: "rayfork-games",
    description: "Full port of raylib sample games to rayfork!",
    url: "https://github.com/Rabios/rayfork-games",
    languages: [ "C99" ]
  },
  {
    name: "Tyrius",
    description: "My experiment of creating 3D FPS game prototype in C with raylib",
    url: "https://github.com/Rabios/Tyrius",
    languages: [ "C99" ]
  },
  {
    name: "LINES-PORTS",
    description: "Linux, Web and Mobile ports of LINES game",
    url: "https://github.com/Rabios/LINES-PORTS",
    languages: [ "Lua (LuaJIT)", "JavaScript" ]
  },
  {
    name: "cherry-test",
    description: "Test for the LuaJIT package manager cherry",
    url: "https://github.com/Rabios/cherry-test",
    languages: [ "Lua (LuaJIT)" ]
  },
  {
    name: "load.js",
    description: "Tiny JavaScript library to load external JavaScript files (scripts) or libraries",
    url: "https://github.com/steria773-archive/load.js",
    languages: [ "JavaScript" ]
  },
  {
    name: "ICECREAMBOY",
    description: "Simple icecream game sample made with raylua",
    url: "https://github.com/steria773-archive/ICECREAMBOY",
    languages: [ "Lua (LuaJIT)" ]
  },
  {
    name: "Lotus",
    description: "Simple Lua and MoonScript IDE aimed towards software and game development and also for basic needs",
    url: "https://github.com/steria773-archive/Lotus",
    languages: [ "Python", "Batchscript" ]
  },
  {
    name: "Crosskit",
    description: "Simple web rendering engine that can renders graphics in canvas2d, WebGL, SVG, DOM",
    url: "https://github.com/steria773-archive/Crosskit",
    languages: [ "JavaScript" ]
  },
  {
    name: "raytaiko",
    description: "Taiko no Tatsujin engine written in Lua using TSnake41's LuaJIT raylib bindings",
    url: "https://github.com/steria773-archive/raytaiko",
    languages: [ "Lua (LuaJIT)" ]
  },
  {
    name: "freebasicgl",
    description: "Playing with OpenGL in GLBasic and FreeBASIC",
    url: "https://github.com/steria773-archive/freebasicgl/",
    languages: [ "GLBASIC", "FreeBASIC" ]
  },
  {
    name: "raylib-v7",
    description: "JavaScript 5.1 bindings for raylib powered by cesanta's v7 JavaScript engine!",
    url: "https://github.com/Rabios/raylib-v7",
    languages: [ "C99", "JavaScript 5.1" ]
  },
  {
    name: "rabios.github.io",
    description: "Yes you guessed, It's the website's source code!",
    url: "https://github.com/Rabios/rabios.github.io",
    languages: [ "HTML", "CSS", "JavaScript" ]
  }
];

var games_list = [
  {
    name: "LINES!!!",
    link: [ "https://rabios.itch.io/lines", "https://github.com/Rabios/LINES" ],
    image: "images/lines.png",
    genres: [ "Survival" ],
    platforms: [ "Desktop (Except OSX)", "Windows Phone", "Android", "Web" ],
    engine: "raylib, Pancake",
    engine_link: "https://raylib.com",
    programming_languages: [ "C99", "Lua", "JavaScript" ],
    team: [ "Rabia Alhaffar (Me)", "darltrash", "anatagawa" ],
    release_date: "July 8, 2020",
    description: "Hilariously hard game about surviving fast drawn lasers in no time!!!"
  },
  {
    name: "OpenSenet",
    link: [ "https://rabios.itch.io/opensenet", "https://github.com/Rabios/OpenSenet" ],
    image: "images/opensenet.png",
    genres: [ "Board", "Strategy" ],
    platforms: [ "Desktop", "Android", "Web" ],
    engine: "DragonRuby GTK",
    engine_link: "https://dragonruby.org/toolkit/game",
    programming_languages: [ "Ruby" ],
    team: [ "Rabia Alhaffar (Me)" ],
    release_date: "November 13, 2020",
    description: "Senet board game written in Ruby via DragonRuby GTK!"
  },
  {
    name: "cakestack",
    link: [ "https://rabios.itch.io/cakestack", "https://github.com/Rabios/cakestack" ],
    image: "images/cakestack.png",
    genres: [ "Arcade", "Casual" ],
    platforms: [ "Desktop", "Android", "Web" ],
    engine: "DragonRuby GTK",
    engine_link: "https://dragonruby.org/toolkit/game",
    programming_languages: [ "Ruby" ],
    team: [ "Rabia Alhaffar (Me)" ],
    release_date: "November 14, 2020",
    description: "Simple cake stacking game done in 1 hour for TeenyTiny DragonRuby MiniGameJam."
  },
  {
    name: "luckpaint",
    link: [ "https://rabios.itch.io/luckpaint", "https://github.com/Rabios/luckpaint" ],
    image: "images/luckpaint.png",
    genres: [ "Casual" ],
    platforms: [ "Desktop", "Android", "Web" ],
    engine: "DragonRuby GTK",
    engine_link: "https://dragonruby.org/toolkit/game",
    programming_languages: [ "Ruby" ],
    team: [ "Rabia Alhaffar (Me)" ],
    release_date: "May 6, 2021",
    description: "8x8 Hybrid pixel art painting game i tried to make in 48 hours just for Juicy Jam #1"
  },
  {
    name: "BLACKVOID",
    link: [ "https://rabios.itch.io/blackvoid", "https://github.com/Rabios/BLACKVOID" ],
    image: "images/BLACKVOID.png",
    genres: [ "Action", "Arcade", "Tower-Defense" ],
    platforms: [ "Desktop", "Android", "Web" ],
    engine: "DragonRuby GTK",
    engine_link: "https://dragonruby.org/toolkit/game",
    programming_languages: [ "Ruby" ],
    team: [ "Rabia Alhaffar (Me)" ],
    release_date: "June 1, 2021",
    description: "Roguelike shooter tower-defense-like Arcade game where you defend your ship and shoot asteroids with challenging difficulty!"
  },
];

function arr_comp(strarr) {
  var res = "";

  for (var i = 0; i < strarr.length; i++) {
    res += strarr[i] + ((i != strarr.length - 1) ? ", " : "");
  }

  return res;
}

// Then, Let's push'em!
function load_projects_list() {
  for (var i = 0; i < projects_list.length; i++) {
    var tr = document.createElement("tr");
    
    var td1 = document.createElement("td");
    td1.style.color = "white";
    td1.style.fontFamily = "pixelated";
    td1.style.padding = "8px";
    td1.style.fontSize = "18px";
    td1.innerHTML = projects_list[i].name;

    var td2 = document.createElement("td");
    td2.style.color = "white";
    td2.style.fontFamily = "pixelated";
    td2.style.padding = "8px";
    td2.style.fontSize = "18px";
    td2.innerHTML = projects_list[i].description;
  
    var td3 = document.createElement("td");
    td3.style.color = "white";
    td3.style.fontFamily = "pixelated";
    td3.style.padding = "8px";
    td3.style.fontSize = "18px";
    td3.innerHTML = arr_comp(projects_list[i].languages);
    
    var td4 = document.createElement("td");
    td4.style.color = "white";
    td4.style.fontFamily = "pixelated";
    td4.style.padding = "8px";
    td4.style.fontSize = "18px";
    td4.innerHTML = `<a href="${projects_list[i].url}" style="padding: 8px;"><img src="images/GitHub-Mark-64px.png"></a>`;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    
    var br = document.createElement("br");
    document.getElementById("kuro").parentNode.appendChild(tr);
    document.getElementById("kuro").parentNode.appendChild(br);
  }
}

var game_index = 0;

function game_info(i) {
  if (game_image) {
    document.getElementById("game_image").src = games_list[i].image;
    document.getElementById("game_image").style.visibility = "hidden";
    document.getElementById("game_image").onload = function() {
      document.getElementById("game_image").style.visibility = "visible";
    };
  } else {
    var game_image = document.createElement("img");
    game_image.id = "game_image";
    game_image.style.width = "50%";
    game_image.style.padding = "20px";
    game_image.style.float = "left";
    game_image.style.visibility = "hidden";
    
    document.getElementById("game_link").parentNode.appendChild(game_image);
  }

  document.getElementById("game_name").innerHTML = games_list[i].name;
  document.getElementById("game_link").href = games_list[i].link[0];
  document.getElementById("game_source_link").href = games_list[i].link[1];
  document.getElementById("game_itchio_link").href = games_list[i].link[0];
  document.getElementById("game_genre").innerHTML = "GENRES: " + arr_comp(games_list[i].genres);
  document.getElementById("game_image").src = games_list[i].image;
  document.getElementById("game_image").style.visibility = "hidden";
  document.getElementById("game_image").onload = function() {
    document.getElementById("game_image").style.visibility = "visible";
  };
  document.getElementById("game_platforms").innerHTML = "PLATFORMS: " + arr_comp(games_list[i].platforms);
  document.getElementById("game_engine").innerHTML = "ENGINE/FRAMEWORK/LIBRARY: " + games_list[i].engine;
  document.getElementById("game_prog_langs").innerHTML = "PROGRAMMING LANGUAGES: " + arr_comp(games_list[i].programming_languages);
  document.getElementById("game_team").innerHTML = "DEVELOPMENT TEAM: " + arr_comp(games_list[i].team);
  document.getElementById("game_release_date").innerHTML = "RELEASE DATE: " + games_list[i].release_date;
  document.getElementById("game_description").innerHTML = games_list[i].description;
}

function next_game() {
  if (game_index + 1 == games_list.length) {
    game_index = 0;
  } else {
    game_index++;
  }
  game_info(game_index);
}

function previous_game() {
  if (game_index - 1 < 0) {
  game_index = games_list.length - 1;
  } else {
  game_index--;
  }
  game_info(game_index);
}

function project_info(i) {
  document.getElementById("projects").style.visibility = "visible";
  document.getElementById("name").innerHTML = projects[i].name;
  document.getElementById("description").innerHTML = projects[i].description;
  document.getElementById("url").innerHTML = projects[i].url;
  document.getElementById("url").href = projects[i].url;
}

var codes = [
  {
    file: "cherry0.lua",
    language: "Lua",
    src: "https://github.com/Rabios/cherry/blob/master/cherry.lua#L87"
  },
  {
    file: "cherry1.lua",
    language: "Lua",
    src: "https://github.com/Rabios/cherry/blob/master/cherry.lua#L185"
  },
  {
    file: "cherry2.lua",
    language: "Lua",
    src: "https://github.com/Rabios/cherry/blob/master/cherry.lua#L195"
  },
  {
    file: "cherry3.lua",
    language: "Lua",
    src: "https://github.com/Rabios/cherry/blob/master/cherry.lua#L380"
  },
  {
    file: "cherry4.lua",
    language: "Lua",
    src: "https://github.com/Rabios/cherry/blob/master/cherry.lua#L411"
  },
  {
    file: "sqr.lsp",
    language: "Fennel",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/sqr.lsp"
  },
  {
    file: "player.lsp",
    language: "Fennel",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/player.lsp"
  },
  {
    file: "obj.lsp",
    language: "Fe",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/obj.lsp"
  },
  {
    file: "Screen.hx",
    language: "Haxe",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/Screen.hx"
  },
  {
    file: "lovr-clipboard.lua",
    language: "Lua",
    src: "https://github.com/Rabios/lovr-clipboard/blob/master/lovr-clipboard.lua"
  },
  {
    file: "sfml_test.lua",
    language: "Lua",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/sfml_test.lua"
  },
  {
    file: "arr_match.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/luckpaint/blob/main/app/main.rb#L28"
  },
  {
    file: "flash.lua",
    language: "Lua",
    src: "https://github.com/Rabios/TARGET/blob/master/utils.lua#L174"
  },
  {
    file: "stars.lua",
    language: "Lua",
    src: "https://github.com/Rabios/TARGET/blob/master/utils.lua#L104"
  },
  {
    file: "Native.hx",
    language: "Haxe",
    src: "https://github.com/Rabios/Pancake.hx/blob/master/src/pancake/Native.hx"
  },
  {
    file: "genstr.js",
    language: "JavaScript",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/genstr.js"
  },
  {
    file: "heal.lua",
    language: "Lua",
    src: "https://github.com/Rabios/TARGET/blob/master/logic.lua#L22"
  },
  {
    file: "portal.lua",
    language: "Lua",
    src: "https://github.com/Rabios/TARGET/blob/master/logic.lua#L38"
  },
  {
    file: "correct_tables.lua",
    language: "Lua",
    src: "https://github.com/steria773-archive/ICECREAMBOY/blob/master/logic.lua#L117"
  },
  {
    file: "rows_cols.rb",
    language: "Ruby",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/rows_cols.rb"
  },
  {
    file: "arr_take.js",
    language: "JavaScript",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/arr_take.js"
  },
  {
    file: "fib.js",
    language: "JavaScript",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/fib.js"
  },
  {
    file: "fact.js",
    language: "JavaScript",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/fact.js"
  },
  {
    file: "multicall.js",
    language: "JavaScript",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/multicall.js"
  },
  {
    file: "infinite_calls.js",
    language: "JavaScript",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/infinite_calls.js"
  },
  {
    file: "a_crashes_b.js",
    language: "JavaScript",
    src: "https://gist.githubusercontent.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74/raw/1f232640d7fb17ecc5717e11f0318a33905f0d07/a_crashes_b.js"
  },
  {
    file: "random_hit_sound.lua",
    language: "Lua",
    src: "https://github.com/Rabios/TARGET/blob/master/utils.lua#L132"
  },
  {
    file: "other_pieces.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/OpenSenet/blob/main/app/utils.rb#L12"
  },
  {
    file: "check_winner.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/OpenSenet/blob/main/app/utils.rb#L60"
  },
  {
    file: "remove_piece.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/OpenSenet/blob/main/app/pieces.rb#L191"
  },
  {
    file: "piece_clicked.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/OpenSenet/blob/main/app/pieces.rb#L255"
  },
  {
    file: "roll.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/OpenSenet/blob/main/app/sticks.rb#L27"
  },
  {
    file: "ice_arr_sort_ex.c",
    language: "ANSI C",
    src: "https://github.com/Rabios/ice_libs/blob/master/ice_arr.h#L756"
  },
  {
    file: "ice_str_split.c",
    language: "ANSI C",
    src: "https://github.com/Rabios/ice_libs/blob/master/ice_str.h#L451"
  },
  {
    file: "ice_math_pow.c",
    language: "ANSI C",
    src: "https://github.com/Rabios/ice_libs/blob/master/ice_math.h#L864"
  },
  {
    file: "ice_test_assert_str_equ.c",
    language: "ANSI C",
    src: "https://github.com/Rabios/ice_libs/blob/master/ice_test.h#L121"
  },
  {
    file: "table_move.lua",
    language: "Lua",
    src: "https://github.com/Rabios/polyfill.lua/blob/master/polyfill.lua#L602"
  },
  {
    file: "table_maxn.lua",
    language: "Lua",
    src: "https://github.com/Rabios/polyfill.lua/blob/master/polyfill.lua#L781"
  },
  {
    file: "table_keys.lua",
    language: "Lua",
    src: "https://github.com/Rabios/polyfill.lua/blob/master/polyfill.lua#L888"
  },
  {
    file: "sizeof.js",
    language: "JavaScript",
    src: "https://gist.github.com/Rabios/97a059ec18f6dee477dee7fe061901e8"
  },
  {
    file: "arr2obj.js",
    language: "JavaScript",
    src: "https://gist.github.com/Rabios/607a001fcbf59076d0d4a1f51cfab864"
  },
  {
    file: "pyramid.lua",
    language: "Lua",
    src: "https://gist.github.com/Rabios/8bb69963e147986447498d1dfd09b1fc"
  },
  {
    file: "copy_array.js",
    language: "JavaScript",
    src: "https://gist.github.com/Rabios/5f0d6ca722e61aa8c5371063581fc6a5"
  },
  {
    file: "even_or_odd.lua",
    language: "Lua",
    src: "https://gist.github.com/Rabios/2eb0f1cbf55b487902ba74f0e7213961"
  },
  {
    file: "biggest_and_smallest_number_in_table.lua",
    language: "Lua",
    src: "https://gist.github.com/Rabios/d3c5368e77c11ddf2bf53c155688aaa7"
  },
  {
    file: "generate_environment.c",
    language: "ANSI C",
    src: "https://github.com/Rabios/Tyrius/blob/master/tyrius.c#L704"
  },
  {
    file: "openproject.py",
    language: "Python",
    src: "https://github.com/steria773-archive/Lotus/blob/master/main.py#L316"
  },
  {
    file: "take_screenshot.rb",
    language: "Python",
    src: "https://github.com/Rabios/luckpaint/blob/main/app/main.rb#L158"
  },
  {
    file: "locate_drives.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/Lancelot/blob/main/app/main.rb#L243"
  },
  {
    file: "is_executable.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/Lancelot/blob/main/app/main.rb#L265"
  },
  {
    file: "is_image.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/Lancelot/blob/main/app/main.rb#L291"
  },
  {
    file: "num_str.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/Lancelot/blob/main/app/main.rb#L322"
  },
  {
    file: "process_running.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/Lancelot/blob/main/app/main.rb#L338"
  },
  {
    file: "root_dir.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/Lancelot/blob/main/app/main.rb#L347"
  },
  {
    file: "count_dir_slashes.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/Lancelot/blob/main/app/main.rb#L357"
  },
  {
    file: "filename.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/Lancelot/blob/main/app/main.rb#L389"
  },
  {
    file: "fetch_dir.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/Lancelot/blob/main/app/main.rb#L417"
  },
  {
    file: "secs_to_str.rb",
    language: "Ruby",
    src: "https://github.com/Rabios/Lancelot/blob/main/app/main.rb#L220"
  }
];

function randomize_code() {
  var random_code = codes[Math.floor(Math.random() * codes.length)];
  document.getElementById("random-source-code").href = random_code.src;
  document.getElementById("random-source-code-lang").innerHTML = "LANGUAGE: " + random_code.language;

  // Create an iframe, append it to this document where specified
  var gist_iframe = document.createElement("iframe");
  gist_iframe.setAttribute("width", "100%");
  gist_iframe.id = "gist_iframe";
  
  // Thanks goes to Jeremiah Lee for implementation of dynamic gist embedding: https://github.com/jeremiahlee
  // See the gist: https://gist.github.com/jeremiahlee/1748966
  var gist_iframe_div = document.getElementById("gist_iframe_div");
  gist_iframe_div.innerHTML = "";
  gist_iframe_div.appendChild(gist_iframe);
  
  // Create the iframe's document
  var gist_iframe_html = `<html><body onload="parent.set_iframe_size(document.body.scrollHeight);"><script type="text/javascript" src="https://gist.github.com/Rabios/49efa3c4a9c54f83a7e75a6620d9cd74.js?file=${random_code.file}"></script></body></html>`;
  
  // Set iframe's document with a trigger for this document to adjust the height
  var gist_iframe_doc = gist_iframe.document;
  
  if (gist_iframe.contentDocument) {
    gist_iframe_doc = gist_iframe.contentDocument;
  } else if (gist_iframe.contentWindow) {
    gist_iframe_doc = gist_iframe.contentWindow.document;
  }
  
  gist_iframe_doc.open();
  gist_iframe_doc.writeln(gist_iframe_html);
  gist_iframe_doc.close();
}

function set_iframe_size(h) {
  var i = document.getElementById("gist_iframe");
  i.style.height = parseInt(h) + "px";
}
