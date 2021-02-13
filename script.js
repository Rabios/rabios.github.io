bubbly({
  colorStart: "#4c004c",
  colorStop: "#1a001a",
  bubbleFunc: function() { return "hsla(" + (Math.random() * 360).toString() + ", 100%, 50%, " + (Math.random() * 0.25).toString() + ")"; }
});

var projects = [
    {
        name: "rayport",
        description: "Awesome C99, Header-Only, rayfork wrapper for raylib!",
        url: "https://github.com/Rabios/rayport"
    },

    {
        name: "raylua",
        description: "LuaJIT bindings for raylib game programming library",
        url: "https://github.com/Rabios/raylua"
    },

    {
        name: "Crosskit",
        description: "Cross renderer for SVG, DOM, Canvas, WebGL",
        url: "https://github.com/Rabios/crosskit"
    },

    {
        name: "CLua",
        description: "Implementation of Lua via LuaJIT FFI and pure Lua code",
        url: "https://github.com/Rabios/CLua"
    },
    
    {
        name: "Telvisionation",
        description: "Archive of my old and deleted projects",
        url: "https://github.com/steria773-archive"
    },

    {
        name: "Pancake",
        description: "Tiny, Fast, and awesome HTML5 game framework!",
        url: "https://github.com/Rabios/Pancake"
    },
];

function project_info(i) {
    document.getElementById("projects").style.visibility = "visible";
    document.getElementById("name").innerHTML = projects[i].name;
    document.getElementById("description").innerHTML = projects[i].description;
    document.getElementById("url").innerHTML = projects[i].url;
    document.getElementById("url").href = projects[i].url;
}

var codes = [
    {
        code: `
        _C.array = function(ctype, ...)
          local args = { ... }
          if (#args == 1) then
            if (ctype == "char") then
              return ffi.new(ctype.."[?]", args[1])
            else
              return ffi.new(ctype.."["..args[1].."]")
            end
          else
            return ffi.new(ctype.."["..#args.."]", args)
          end
        end`,
        language: "lua",
        src: "https://github.com/Rabios/CLua/blob/master/src/ctypes.lua"
    },

    {
        code:
        `
        -- Custom ipairs by mine :)
        _C.super_ipairs = function(...)
          p = { ... }
          i = p[1]
          t = p[2]
          f = p[3]
          flush = p[4]
          for tv = 1, #t, 1 do
            if type(f) == "function" then
              i = i + 1
              f(i)
            end
          end
          -- You can flush and destory tay/table after loop if you don't want to use it later ;)
          if flush and flush == true and not (#t == 0) then
            t = nil
          end
          p = nil
        end`,
        language: "lua",
        src: "https://github.com/Rabios/CLua/blob/master/src/runtime.lua"
    },

    {
        code:
        `
        p.v.play = function(v, x, y, w, h) {
            if (p.d.unknown(x)) x = 0;
            if (p.d.unknown(y)) y = 0;
            if (p.d.unknown(w)) w = p.g.context.canvas.width;
            if (p.d.unknown(h)) h = p.g.context.canvas.height;
            if (!p.videos[v].ended) {
                p.g.image(p.videos[v], x, y, w, h);
                p.videos[v].play();
                if (p.videos[v].loop) {
                    p.g.image(p.videos[v], x, y, w, h);
                    p.videos[v].play();
                }
            }
        };`,
        language: "javascript",
        src: "https://github.com/Rabios/Pancake/blob/master/src/video.js"
    },

    {
        code:
        `
        function correct_tables(t1, t2)
          local check = 0
          if (#t1 > 0 and #t2 > 0) then
            if (#t2 == #t1) then
              for a in ipairs(t2) do
                if (t2[a] == t1[a]) then
                  check = check + 1
                end
              end
              return (check == #t2)
            end
          end
        end`,
        language: "lua",
        src: "https://github.com/Rabios/ICECREAMBOY/blob/master/logic.lua"
    },

    {
        code:
        `
        void FreeMode() {
            UpdateCamera(&gamecam);
            CameraLogic();
            BeginDrawing();
            ClearBackground(backcolor);         
            BeginMode3D(gamecam);
            Draw3DDefaults(env,nightmode,ppos);
            DrawWeapon(1);            
            CombatLogic();
            EndMode3D();            
            GameGUI();
            DrawFPS(10,10);
            DrawTextEx(f2,"BACK: BACKSPACE",(Vector2){ 10.0f,GetScreenHeight() - 120.0f },32,1.0f,BLACK);
            if (IsKeyPressed(KEY_BACKSPACE)) scene = 2;
            EndDrawing();    
            TraceLog(LOG_INFO,"FREEMODE STARTED SUCCESSFULLY!!!");
        }`,
        language: "c",
        src: "https://github.com/Rabios/Tyrius/blob/master/tyrius.c"
    },

    {
        code:
        `
        function update_palette()
          for p in ipairs(icecreams) do
            rl.DrawRectangle((p * 200) - 200, rl.GetScreenHeight() - 200, 200, 200, icecreams[p][2])
            rl.DrawRectangleLines((p * 200) - 200, rl.GetScreenHeight() - 200, 200, 200, rl.BLACK)
            if rl.CheckCollisionRecs(rl.Rectangle((p * 200) - 200, rl.GetScreenHeight() - 200, 200, 200), mouserec()) then
              if rl.IsMouseButtonPressed(0) then
                if not (balls_count > balls_limit) then
                  rl.PlaySound(addball_sound)
                  table.insert(balls, icecreams[p][2])
                  balls_count = balls_count + 1
                end
              end
              rl.DrawText(icecreams[p][1], (p * 200) - 200, rl.GetScreenHeight() - 200, 24, rl.WHITE)
            end
            if rl.IsMouseButtonPressed(1) then
              if (#balls > 0) then
                table.remove(balls, #balls)
                balls_count = 1
              end
            end
          end
        end`,
        language: "lua",
        src: "https://github.com/Rabios/ICECREAMBOY/blob/master/logic.lua"
    },

    {
        code:
        `
        global map
        global colors
        
        def load() {
          map = [
            [ 1, 2, 3, 4, 5 ],
            [ 5, 4, 3, 1, 1 ],
            [ 1, 5, 1, 3, 4 ],
            [ 4, 1, 5, 3, 2 ],
            [ 5, 2, 4, 1, 3 ]
          ]
          colors = [
            [ 0, 0, 0 ],
            [ 255, 0, 0 ],
            [ 0, 255, 0 ],
            [ 0, 0, 255 ],
            [ 255, 255, 255 ],
            [ 255, 0, 255 ]
          ]
        }
        
        def draw() {
          for (var i = 0; i < map.size(); ++i) {
            for (var j = 0; j < map[i].size(); ++j) {
              if (!(map[i][j] == map.size())) {
                love.graphics.setColor(colors[map[i][j]][0], colors[map[i][j]][1], colors[map[i][j]][2])
                love.graphics.rectangle("fill", j * 20, i * 20, 20, 20)
              }
            }
          }
        }`,
        language: "chaiscript",
        src: "https://github.com/Rabios/chailove-examples-collection/blob/master/tilemaps.chai"
    },

    {
        code:
        `
        function update_heal()
          if healbag.draw then
            healbag.x = healbag.x - speed
            rl.DrawTexturePro(heal_image, rl.Rectangle(0, 0, heal_image.width, heal_image.height), rl.Rectangle(healbag.x, healbag.y, 64, 64), rl.Vector2(0, 0), 0, flash())
            if rl.CheckCollisionRecs(rl.Rectangle(healbag.x, healbag.y, 64, 64), rl.Rectangle(player.x, player.y, player.w, player.h)) then
              rl.PlaySound(heal_sound)
              health = health + heal
              if health >= 100 then
                ships = ships + 1
                health = health - 100
              end
              healbag.draw = false
            end
          end
        end
        `,
        language: "lua",
        src: "https://github.com/Rabios/TARGET/blob/master/logic.lua"
    },

    {
        code: `
        p.g.gradientRect = function(x, y, w, h, content) {
            var linear = p.g.c.createLinearGradient(x, y, w, h);
            for (var loopdlg = 0; loopdlg < content.length; loopdlg++) linear.addColorStop(content[loopdlg][0], content[loopdlg][1]);
            p.g.color(linear, linear);
            if (p.g.mode == p.g.FILL) p.g.c.fillRect(x, y, w, h);
            if (p.g.mode == p.g.STROKE) p.g.c.strokeRect(x, y, w, h);
            if (p.g.mode == p.g.BOTH)
            {
                p.g.c.fillRect(x, y, w, h);
                p.g.c.strokeRect(x, y, w, h);
            }
        };`,
        language: "javascript",
        src: "https://github.com/Rabios/Pancake/blob/master/src/graphics.js"
    },

    {
        code: `
        _C.coroutine.resume = function(c, ...)
          if (not c.dead) or (c.status == "suspended" or c.status == "normal") then
            c.fun(...)
            c.status = "running"
            local ccount = 1
            local running_coroutines = 0
            _C.ipairs(ccount, _C.coroutine.coroutines, function(ccount)
              if (_C.coroutine.coroutines[ccount].status == "running") then
                running_coroutines = running_coroutines + 1
              end
            end)
            if (running_coroutines > 1) then c.status = "normal" end
            if (c.running_times == c.running_limit) then
              _C.coroutine.kill(c)
            else
              c.running_times = c.running_times + 1
            end
            if (not c.yield_args == nil) then return c.yield_args end
            ccount = nil
            running_coroutines = nil
          end
        end`,
        language: "lua",
        src: "https://github.com/Rabios/CLua/blob/master/src/coroutine.lua"
    },

    {
        code: `
        _C.math.random = function(...)
          local r = { ... }
          if (#r == 0) then
            return ffi.C.rand() % 0
          elseif (#r == 1) then
            return ffi.C.rand() % r[1]
          elseif (#r == 2) then
            return _C.math.floor(ffi.C.rand() % r[2]) + r[1]
          end
          r = nil
        end`,
        language: "lua",
        src: "https://github.com/Rabios/CLua/blob/master/src/math.lua"
    },

    {
        code: `
        _C.table.concat = function(t, s)
          local result = ""
          for str in _C.ipairs(t, str) do
            if (type(t[str]) == "string") then
              if (str == #t) then s = "" end
              result = result..(t[str]..s)
            elseif (type(t[str]) == "number") then
              if (str == #t) then s = "" end
              result = result..(_C.tostring(t[str])..s)
            end
          end
          return result
        end`,
        language: "lua",
        src: "https://github.com/Rabios/CLua/blob/master/src/table.lua"
    },

    {
        code: `
        function update_portal()
          if portal.draw then
            portal.x = portal.x - speed
            rl.DrawTexturePro(portal_image, rl.Rectangle(0, 0, portal_image.width, portal_image.height), rl.Rectangle(portal.x, portal.y, 64, 64), rl.Vector2(0, 0), 0, flash())
            if rl.CheckCollisionRecs(rl.Rectangle(portal.x, portal.y, 64, 64), rl.Rectangle(player.x, player.y, player.w, player.h)) then
              portal.draw = false
              paused = true
              current_scene = 5
            end
          end
        end`,
        language: "lua",
        src: "https://github.com/Rabios/TARGET/blob/master/logic.lua"
    },

    {
        code: `
        function update_orders()
          if (#orders > 0) then
            rl.DrawRectangleLines(rl.GetScreenWidth() - 200, 0, 200, 200, rl.GOLD)
            rl.DrawTexturePro(cone, texrec(cone), rl.Rectangle((rl.GetScreenWidth() - (32 * 3.5)), rl.GetScreenHeight() - 600, 32, 32), rl.Vector2(0, 0), 0, rl.WHITE)
            if orders[current_order] then
              for rb in ipairs(orders[current_order]) do
                rl.DrawTexturePro(ball, texrec(ball), rl.Rectangle((rl.GetScreenWidth() - (32 * 3.5)), (rl.GetScreenHeight() - 600) - (rb * 32), 32, 32), rl.Vector2(0, 0), 0, orders[current_order][rb])
              end
              if rl.IsKeyPressed(rl.KEY_A) or rl.IsKeyPressed(rl.KEY_LEFT) then
                if not ((current_order - 1) == 0) and orders[current_order - 1] then
                  current_order = current_order - 1
                end
              elseif rl.IsKeyPressed(rl.KEY_D) or rl.IsKeyPressed(rl.KEY_RIGHT) then
                if not ((current_order + 1) > orders_limit) and orders[current_order + 1] then
                  current_order = current_order + 1
                end
              end
            end
          end
        end`,
        language: "lua",
        src: "https://github.com/Rabios/ICECREAMBOY/blob/master/logic.lua"
    },

    {
        code: `
        -- Play random hit sound
        function play_hit_sound()
          onetime = 0
          number = rl.GetRandomValue(1, 4)
          if onetime == 0 then
            rl.PlaySound(_G["hit"..tostring(number).."_sound"])
            onetime = 1
          end
        end`,
        language: "lua",
        src: "https://github.com/Rabios/TARGET/blob/master/utils.lua"
    }
];

function randomize_code() {
    var random_code = codes[Math.floor(Math.random() * codes.length)];
    document.getElementById("edit").innerHTML = random_code.code;
    document.getElementById("edit").className = random_code.language;
    document.getElementById("random-source-code").href = random_code.src;
    hljs.initHighlighting();
}