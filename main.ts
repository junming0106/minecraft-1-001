player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
    }
})
