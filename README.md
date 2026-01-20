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