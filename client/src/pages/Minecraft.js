import React from "react";
import ServerTile from "../components/MC/MCServerTile";
import S8head from '../components/head/S8head';
import Rules from '../components/Rules'
import PluginHelp from "../components/MC/PluginHelp"
import "../components/css/minecraft/main.css"
import PluginHelpChild from "../components/MC/PluginHelpChild";
import Ranks from "../components/MC/Ranks";
import { Link } from "react-router-dom";

export default function Minecraft(){
    return(
        <React.Fragment>
            <S8head/>
            <div className="upper" id="mc-page">
                <section>
                    <div className="title">
                        <h1>S8 GAMING</h1>
                        <h2>COMMUNITY</h2>
                    </div>
                    <br/>
                    <h2>play.s8gaming.net</h2>
                    <br/>
                    <div id="mc-servers">
                        <ServerTile/>
                    </div>
                </section>
                <section>
                    <h2>General Server Information</h2>
                    <div>
                        <h3>What is S8 Running on</h3>
                        <ul className="minecraft-server-info">
                            <li><h4> - Ubuntu Server 20.04</h4></li>
                            <li><h4> - Dual CPU 16 cores 32 Threads at 2.6ghz base clock</h4></li>
                            <li><h4> - DDR3 4x8 2666 mhz Ram</h4></li>
                            <li><h4> - Self Hosted</h4></li>
                            <li><h4> - Props to <a style={{textDecoration:"underline"}} href="https://pterodactyl.io/">Pterodactyl.io</a> for helping run the server in a clean manor</h4></li>
                        </ul>
                        <h3>Auto Restarts every 6 hours</h3>
                        <h3 className="redButton nostylelink"><Link to="/signup">Sign Up for Staff Role</Link></h3>
                    </div>
                </section>
                <section>
                    <div id="mc-rules-global">
                        <Rules title="Global Rules">
                            <li>No Harrasment</li>
                            <li>No Cheating</li>
                            <li>Deity is Law</li>
                        </Rules>
                        <Rules title="Rules on Minecraft Servers">
                            <li>No Advertisements</li>
                            <li>No Spamming Chat</li>
                            <li>No Spamming Teleport Requests</li>
                        </Rules>
                        <Rules title="Rules on Survival Multiplayer (SMP)">
                            <li>No Harrasment</li>
                            <li>No Griefing</li>
                        </Rules>
                        <Rules title="Rules on PvP Survival">
                            <li>No Harrasment</li>
                        </Rules>
                    </div>
                </section>
                <section id="rank-section">
                    <h2>Minecraft Ranks (Each has 3 tiers, execpt for Legend)</h2>
                    <div id="ranks-container">
                        <Ranks rankName="Peasant" rankHour="1" homes="1" money="900" blocks="625" color="grey"/>
                        <Ranks rankName="Citizen" rankHour="4" homes="2" money="4,500" blocks="675" color="#79db23"/>
                        <Ranks rankName="Fighter" rankHour="7" homes="3" money="12,000" blocks="750" color="darkblue"/>
                        <Ranks rankName="Knight" rankHour="12" homes="4" money="22,500" blocks="865" color="blue"/>
                        <Ranks rankName="Noble Citizen" rankHour="19" homes="5" money="35,250" blocks="1,035" color="darkgreen"/>
                        <Ranks rankName="Jarl" rankHour="30" homes="6" money="52,000" blocks="1,290" color="darkred"/>
                        <Ranks rankName="Great Knight" rankHour="46" homes="7" money="69,000" blocks="1,675" color="#00d4d4"/>
                        <Ranks rankName="Lord" rankHour="70" homes="8" money="92,000" blocks="2,250" color="purple"/>
                        <Ranks rankName="Great Noble" rankHour="105" homes="9" money="120,000" blocks="3,115" color="#c600d4"/>
                        <Ranks rankName="Duke" rankHour="157" homes="10" money="153,000" blocks="3,910" color="orange"/>
                        <Ranks rankName="Bishop" rankHour="234" homes="11" money="195,000" blocks="5,602" color="#dbcb0f"/>
                        <Ranks rankName="Myth" rankHour="348" homes="12" money="270,000" blocks="8,141" color="red"/>
                        <Ranks rankName="Legend" rankHour="517" homes="15" money="10,000,000" blocks="12,025" color="#ffc400"/>
                    </div>
                    <h2>More Rewards coming later!</h2>
                </section>
                <section id="directory-section">
                    <h1>Plugin Help Directory</h1>
                    <div id="minecraft-directory">
                        <a className="redButton" href="#plugin-help-teams"><h2>Better Teams</h2></a>
                        <h4>Official Description: Better Teams is designed to encourage teamwork and a sense of community within a server, and the features include: Team Bank, Team Warps, Team Chat, Team Ranks</h4>
                        <a className="redButton" href="#plugin-help-essentials"><h2>Essentials</h2></a>
                        <h4>Very useful set of commands that essentials provides</h4>
                        <a className="redButton" href="#plugin-help-grief"><h2>Grief Prevention</h2></a>
                        <h4>This plugin counters griefers, it lets you create a plot that youuuu own, and you get to decide who can do what on that plot.
                        </h4>
                        <a className="redButton" href="#plugin-help-quest"><h2>Quests</h2></a>
                        <h4>Server designed missions that include Mining, Mob Hunting, and Building as objectives, and come with many elements to make quests very extensive!
                        </h4>
                    </div>
                </section>
                <PluginHelp
                    idkey="plugin-help-teams"
                    title="BetterTeams"
                    url="https://www.spigotmc.org/resources/quests.3711/?__cf_chl_jschl_tk__=c73304bf08965cc8e2abf60f2d793d4dbc076abf-1614022812-0-AWioB4Ab8Dm5dJZXpK-tt6VD2tJJw39bbKQAXM-GJQ-scJECzBT5adI8hNsjxC4o30l83yrMioJB9RGWZnBegi_ttOfR0NBUxarE7ku5EAWXuT0AH8Jl77s8ktgRd5rnjPYzxz4h-ljr9fmCgjsXxdzUUBrCfVSQV2p5bDqiPs3m4VE_-R0gFSacB_sH3OApr0w_CH9MR2g61QX0dFg2jFl26tvJKBuqrk5jkLfiE6NwiBCwbBWlf47ZdSL30GCob4nNjIttNiBo4PpU498n6bm9F7ux3kzYFY8q-kI2cDjEdAdvvyxiP8OjBE9hWvlsZzrNqkiFUEbOQh3rvwT0E6g"
                    description="Official Description: Better Teams is designed to encourage teamwork and a sense of community within a server, and the features include: Team Bank, Team Warps, Team Chat, Team Ranks"
                >
                    <div className="plugin-help-divider">
                        <h3>Commands Everyone Has Access To</h3>
                    </div>
                    <br/>
                    <PluginHelpChild title="/team or /team help">
                        <p>Shows a list of commands available to you.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team list">
                        <p>Shows a list of other teams available.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team info">
                        <p>Get information about a team or a member of a team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team top" >
                        <p>Get a list of the top ranking teams on the server</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team baltop" >
                        <p>Get a list of the top balance teams on the server</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team rank [Team]" >
                        <p>View the rank of a team on the server</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team join [Team]" >
                        <p>Join a team with their specified team name</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team leave" >
                        <p>Leave current team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team create [TeamName]" >
                        <p>Create a team with specified team name</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team home" >
                        <p>Teleport to current team's home location</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team warp [Password]" >
                        <p>Warp to a location set by team, password can be specified by team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team chat [Message]" >
                        <p>Send a message to current team's chat</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team chat [Message]" >
                        <p>Send a message to current team's chat</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team allychat [Message]" >
                        <p>Send a message to ally chat</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team echest" >
                        <p>Opens your team's ender chest</p>
                    </PluginHelpChild>
                    <br/>
                    <div className="plugin-help-divider">
                        <h3>Commands Only Team Leaders Have</h3>
                    </div>
                    <br/>
                    <PluginHelpChild title="/team disband">
                        <p>Remove all members and delete your team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team name [Name]">
                        <p>Rename your team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team description [Description]">
                        <p>Set the description of your team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team open">
                        <p>Toggle invite only or open to all players for people who want to join.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team promote [Member]">
                        <p>Promote a member of the team to the next rank</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team demote [Member]">
                        <p>Demote a member of the team to the last rank</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team title [Player/Me] [Title]">
                        <p>Set a title of a member or yourself</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team color [Color]">
                        <p>Choose a color for your team, only use the colors from the list.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team ally [Team]">
                        <p>Setup an alliance with another team, allowing for alliance chat and peace.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team neutral [Team]">
                        <p>Remove an alliance with another team, removing ally chat between the team and you.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team setowner [Member]">
                        <p>Set a new team leader for the team.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team chest removeall">
                        <p>Remove all claimed chests from the team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team rankup">
                        <p>Use your team score to rankup.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team tag [Tag]">
                        <p>Setup a new tag for your team.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team invite [Player]">
                        <p>Invite a new member to your team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team kick [Member]" >
                        <p>Kick a member from your team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team ban [Member]" >
                        <p>Ban a member from your team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team unban [Member]" >
                        <p>Unban a banned member from your team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team sethome" >
                        <p>Set the home location of your team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team delhome" >
                        <p>Delete your team home</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team setwarp [Warpname] [Password]">
                        <p>Setup a new warp for your team</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team delwarp [Warpname] [Password]">
                        <p>Delete a warp from your team, member needs password to do so, team leader does not.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team withdraw [Amount]">
                        <p>Withdraw funds from team bank.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team chest claim" >
                        <p>Claim the chest you are standing on</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team chest remove">
                        <p>Remove the claim from the chest you are standing on.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/team pvp">
                        <p>Toggle pvp amongst members of your team.</p>
                    </PluginHelpChild>
                </PluginHelp>
                <PluginHelp
                    idkey="plugin-help-essentials"
                    title="Essentials"
                    url="https://wiki.mc-ess.net/wiki/Main_Page"
                    description="Very useful set of commands that essentials provides"
                    >
                    <PluginHelpChild title="/help" >
                        <p>Will show all availble commands from all plugins for your usage.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/afk" >
                        <p>Sets yourself to afk (Away from keyboard).</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/rules" >
                        <p>Shows the rules in game.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/time" >
                        <p>Gets the world time.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/balance" >
                        <p>Gets your current balance on the server.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/worth [Hand/Inventory/Blocks]" >
                        <p>Gets the price of the current item(s), may that be what is directly what is in your hand, or your whole inventory, or a list of blocks.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/pay [Player] [Amount]" >
                        <p>Pay player x amount of currency.</p>
                    </PluginHelpChild>
                    <div className="plugin-help-divider">
                        <h3>Teleportation Commands</h3>
                    </div>
                    <PluginHelpChild title="/spawn" >
                        <p>Will return you to spawn.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/home" >
                        <p>Will list your homes you have set</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/sethome [Home Name]" >
                        <p>Sets a home, with a custom name. If you sleep in a bed, that will automatically be set</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/delhome [Home Name]" >
                        <p>Will delete a home you have set.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/tpa [Player]" >
                        <p>Sends a teleport request to another player</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/tpacancel" >
                        <p>Will cancel your last teleport request (/tpa [Player])</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/tpaccept" >
                        <p>Will accept a teleport request from another player</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/tpdeny" >
                        <p>Will deny a teleport request from another player</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/rtp" >
                        <p>Will randomly teleport you on the map. Not apart of essentials, but still a teleport command. This does have a cooldown.</p>
                    </PluginHelpChild>
                    <div className="plugin-help-divider">
                        <h3>Chat Commands</h3>
                    </div>
                    <PluginHelpChild title="/msg [Player] [message]" >
                        <p>Will message a player directly, will not show up in public chat.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/r [message]" >
                        <p>Lets you reply to a direct message. It is just a short hand for /msg [Player] [message] so you dont have to write it again after recieving a direct message.</p>
                    </PluginHelpChild>
                </PluginHelp>
                <PluginHelp
                    idkey="plugin-help-grief"
                    title="Grief Prevention"
                    url="https://www.spigotmc.org/resources/griefprevention.1884/"
                    description="This plugin counters griefers, it lets you create a plot that youuuu own, and you get to decide who can do what on that plot."
                >
                    <div className="plugin-help-divider">
                        <h3>Need to Know</h3>
                        <ul>
                            <li><p>- You will be allowed to make a claim once you hit rank Peasant, 1 hour on the server</p></li>
                            <li><p>- Will progressivly earn more blocks you can claim by playing will also owning a claim</p></li>
                            <li><p>- You will also gain a new max amount of claim space as rewards for ranks you gain</p></li>
                        </ul>
                    </div>
                    <div className="plugin-help-divider">
                        <h3>How to start</h3>
                    </div>
                    <PluginHelpChild title="/kits claim" >
                        <p>This will give you an essentials kit, which is basically just the tools needed to make your own claim. How to use these tools will be down a few more sections.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="/claim info" >
                        <p>This will give you stats about how many blocks you can claim, specific claims you own, and how many you can have. Right now, everyone can have 2.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="The Golden Shovel" >
                        <p>Left Click two blocks on the xz plane, and this will make your claim</p>
                    </PluginHelpChild>
                    <PluginHelpChild title="The Stick" >
                        <p>Right click on a set of land to see who owns it, and use it on your own to see your boundaries that you have set.</p>
                    </PluginHelpChild>
                    <div className="plugin-help-divider">
                        <h3>Trust Commands</h3>
                    </div>
                    <PluginHelpChild title = "/trust [Player] or /t [Player]" >
                        <p>When trusting a player, it will give them access to build rights, and /ContainerTrust, which also means /AccessTrust. When on a specific claim running this command, it will give the player access to that specific claim.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title = "/untrust [Player] or /ut [Player]">
                        <p>When you want to untrust a player to a specific claim or all claims, same rules apply as trust from above.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title = "/untrust all">
                        <p>Will remove all players from your trust list, giving you full control over the claim again, same rules apply when not standing on a claim.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title = "/AccessTrust [Player] or /at [Player]">
                        <p>Will allow a player only access to use your buttons, levers, and beds.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title = "/ContainerTrust [Player] or /ct [Player]">
                        <p>Includes /AccessTrust, and also allows a player to your crafting gear, containers, and animals.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title = "/PermissionTrust [Player] or /pt [Player]">
                        <p>Gives Player access to permissions on your claim, which means that they can increase, decrease, add others to the claim, but they can't remove you from the claim since you own it.</p>
                    </PluginHelpChild>
                    <PluginHelpChild title = "/TrustList">
                        <p>Shows a diagram of the players trusted on a specific claim if standing on that claim, otherwise all claims.</p>
                    </PluginHelpChild>
                    <div className="plugin-help-divider">
                        <h3>Making Sub Claims</h3>
                        <p>You can make sub sections of a claim that you own, which will allow you to give other players a piece of their own claim inside your claim. This is useful if a team leader owns a team base, but allows members their own sections on the base.</p>
                    </div>
                </PluginHelp>
                <PluginHelp
                    idkey="plugin-help-quest"
                    title="Quests"
                    url="https://www.spigotmc.org/resources/quests.3711/?__cf_chl_jschl_tk__=c73304bf08965cc8e2abf60f2d793d4dbc076abf-1614022812-0-AWioB4Ab8Dm5dJZXpK-tt6VD2tJJw39bbKQAXM-GJQ-scJECzBT5adI8hNsjxC4o30l83yrMioJB9RGWZnBegi_ttOfR0NBUxarE7ku5EAWXuT0AH8Jl77s8ktgRd5rnjPYzxz4h-ljr9fmCgjsXxdzUUBrCfVSQV2p5bDqiPs3m4VE_-R0gFSacB_sH3OApr0w_CH9MR2g61QX0dFg2jFl26tvJKBuqrk5jkLfiE6NwiBCwbBWlf47ZdSL30GCob4nNjIttNiBo4PpU498n6bm9F7ux3kzYFY8q-kI2cDjEdAdvvyxiP8OjBE9hWvlsZzrNqkiFUEbOQh3rvwT0E6g"
                    description="Server designed missions that include Mining, Mob Hunting, and Building as objectives, and come with many elements to make quests very extensive! If you are not a command person, don't worry, there is also a Quest Board setup outside the Community Center at the Old West Spawn."
                    >
                        <PluginHelpChild
                            title="/quests"
                        >
                            <p>It will show you the list of commands available to you.</p>
                        </PluginHelpChild>
                        <PluginHelpChild
                            title="/quests list"
                        >
                            <p>Will show you list of quests availble on the server.</p>
                        </PluginHelpChild>
                        <PluginHelpChild
                            title="/quests take [QuestName]"
                        >
                            <p>Used to start a quest, don't put brackets just quest name</p>
                        </PluginHelpChild>
                        <PluginHelpChild
                            title="/quests quit [QuestName]"
                        >
                            <p>Used to stop a quest, you need the quest name because you can have multiple quests at a time.</p>
                        </PluginHelpChild>
                        <PluginHelpChild
                            title="/quests info [QuestName]"
                        >
                            <p>Gets the info of the quest. (NTBC)</p>
                        </PluginHelpChild>
                        <PluginHelpChild
                            title="/quests journal"
                        >
                            <p>Takes out a quest journal, shows quest(s) progress. Don't put in chest or enderchest, the chest will break!</p>
                        </PluginHelpChild>
                        <PluginHelpChild
                            title="/quests top"
                        >
                            <p>Quest Leaderboards</p>
                        </PluginHelpChild>
                        <PluginHelpChild
                            title="/quests stats"
                        >
                            <p>Your player stats for the quest plugin. Quests Completed, Failed, etc.</p>
                        </PluginHelpChild>
                        <PluginHelpChild
                            title="Requirements"
                        >
                            <p>Each quest can have it's own requirements, say you need to have complete a previous quest, be apart of a 
                                certain rank, or holding a specific item. Another is time, we can hold contests that have time limitations on them.</p>
                        </PluginHelpChild>
                        <PluginHelpChild
                            title="Rewards"
                        >
                            <p>Some rewards can come in the form of tools, which can have detailed stats and lore, money, exp, special permissions, or even titles you can wear on your name!</p>
                        </PluginHelpChild>
                </PluginHelp>
                <section id="bottom">
                <footer>
                    <div className="title">
                        <h1>S8 GAMING</h1>
                        <h2>COMMUNITY</h2>
                    </div>
                    <h5>S8 Gaming's Website is subject to change</h5>
                </footer>
            </section>
            </div>
        </React.Fragment>
    )
}