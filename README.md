# 拯救村莊-雞蛋商人

## Step 1：先認識使用指令啟動程式
先放一個聊天積木。
在遊戲裡按下「T」或是「Enter」後輸入 run。
程式就會開始執行。
現在還不會出現動物，只是先把開關準備好。

```blocks
player.onChat("run", function () {

})
```

---

## Step 2：叫出一隻雞
在onChatCommand積木裡面，
加入生成動物的積木。
CHICKEN 是雞。
pos(0, 0, 0) 是在玩家站的地方。
聊天輸入 run，就會看到一隻雞。

```blocks
player.onChat("run", function () {
    mobs.spawn(CHICKEN, pos(0, 0, 0))
})
```

---

## Step 3：一次出現兩隻雞
再放一次一樣的生成積木。
每一行就是叫一隻雞。
在遊戲聊天視窗輸入 run。
你會看到兩隻雞站在你旁邊。

```blocks
player.onChat("run", function () {
    mobs.spawn(CHICKEN, pos(0, 0, 0))
    mobs.spawn(CHICKEN, pos(0, 0, 0))
})
```

---

## Step 4：用重複幫忙一直生雞
現在雞變多會很累。
改用重複的積木。
數字代表做幾次。
現在先設定 3 次。
聊天輸入 run，會出現 3 隻雞。

```blocks
player.onChat("run", function () {
    for (let index = 0; index < 3; index++) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
    }
})
```

---

## Step 5：讓老闆更加開心
把 3 改成 10。
每跑一次，就會生一隻雞。
聊天輸入 run。
你會看到很多雞出現。

```blocks
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
    }
})
```



> 在 [https://junming0106.github.io/minecraft-1-001/](https://junming0106.github.io/minecraft-1-001/) 打開此頁面

## 作為擴充功能使用

可以在 MakeCode 中將此儲存庫新增為**擴充功能**。

* 開啟 [https://minecraft.makecode.com/](https://minecraft.makecode.com/)
* 按一下**新專案**
* 按一下工具齒輪選單下的**擴充功能**
* 搜索 **https://github.com/junming0106/minecraft-1-001** 並匯出

## 編輯此專案

編輯 MakeCode 中的儲存庫。

* 開啟 [https://minecraft.makecode.com/](https://minecraft.makecode.com/)
* 按一下**匯入**，然後按一下**匯入 URL**
* 貼上 **https://github.com/junming0106/minecraft-1-001** 並按一下匯入

#### 中繼資料 (用於搜索、渲染)

* for PXT/minecraft
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
