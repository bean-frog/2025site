export default function Tech() {
  function Item({name, link}){
    return (<strong><a rel="noreferrer" target="_blank" className="underline" href={link}>{name}</a></strong>)
  }
  return (
    <div className="p-6 w-full h-full flex flex-col items-center justify-center transition">
      <h1 className="text-xl font-bold">Tech Stuff</h1>
              <div className="flex flex-col justify-center p-4">
                 <ul>
                  <li>I use Windows 10 on my home setup, made bearable with <Item name="winutil" link="https://github.com/christitustech/winutil"/> and <Item name="Glaze WM" link="https://github.com/glzr-io/glazewm" /></li>
                  <li>On my laptops, I use Arch btw</li>
                  <li>Most of my Arch setups include <Item name="Hyprland" link="https://hyprland.org"/>, <Item name="Waybar" link="https://github.com/alexays/waybar"/>, <Item name="kitty" link="https://sw.kovidgoyal.net/kitty"/> and <Item name="fish" link="https://fishshell.com"/></li>
                  <li>Sometimes I use <Item name="XFCE" link="https://xfce.org"/> or <Item name="Plasma" link="https://kde.org/plasma-desktop"/></li>
                  <li>You can find my dotfiles <Item name="here" link="https://github.com/bean-frog/dotfiles"/>, though they may be outdated</li>
                  <li>I use <Item name="Obsidian" link="https://obsidian.md"/> to take notes, both for classes and just in general</li>
                  <li>I edit single files, like configs, using <Item name="micro" link="https://github.com/zyedidia/micro"/></li>
                  <li>For coding projects, I use <Item name="VSCodium" link="https://vscodium.com"/></li>
                  <li>I usually browse the web with <Item name="Brave" link="https://brave.com"/>, but on slower machines <Item name="Thorium" link="https://thorium.rocks"/> is a lifesaver</li>
           
                 </ul>
            </div>
    </div>
  )
}
