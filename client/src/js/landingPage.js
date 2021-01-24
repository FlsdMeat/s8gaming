function addTop() {
    var everything = document.createElement("div");
    everything.setAttribute("class", "overBanner");
    everything.innerHTML = `
                <div id="sideNav" class="nav">
                    <div class="navMenu">
                        <p>Navigation</p>
                        <a href="https://www.meat-mining.us">Home</a>
                        <a href="https://www.meat-mining.us/minecraft">Minecraft</a>
                    </div>
                    <button onclick="nav()" class="navbutton">
                        <img id = "servericon" src="img/server-icon.png">
                    </button>
                </div>
                <div class="frame">
                    <div class="innerFrameImgs">
                        <button onclick="changeFrame(1)"><img id="discordImg" src="img/discordLogo.jpg"></button>
                        <button><img id="tsImg" src="img/teamspeakLogo.png" onclick="changeFrame(2)"></button>
                    </div>
                    <button onclick="changeFrame('exit')" id="back">&#8594;</button>
                    <div id="discord">
                        <iframe height="600px" width="300px" src="https://discord.com/widget?id=711791563805556787&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                    <div id="tsBox">
                        <div id="ts">
                            <div id="ts3viewer_1117613" style=""> </div>
                            <script src="https://static.tsviewer.com/short_expire/js/ts3viewer_loader.js"></script>
                            <script>
                                
                                ts3v_display.init(ts3v_url_1, 1117613, 100);
                            </script>
                        </div>
                    </div>
                </div>
    `;
    document.getElementById("top").appendChild(everything);
}