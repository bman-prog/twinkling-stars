let sta: Sprite;
let star_sprites : Sprite[] = []
while (true) {
    for (let i = 0; i < 10; i++) {
        sta = sprites.create(img`
                    . . . . . . . b b . . . . . . .
                    . . . . . . b d d b . . . . . .
                    . . . . . b d 5 5 d b . . . . .
                    . . . . b b 5 5 5 5 b b . . . .
                    . . . . b 5 5 5 5 5 5 b . . . .
                    b b b b b 5 5 5 5 1 1 d b b b b
                    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b
                    b d d 5 5 5 5 5 5 1 1 1 5 d d b
                    . b d d 5 5 5 5 5 5 5 5 d d b .
                    . . b b 5 5 5 5 5 5 5 5 b b . .
                    . . c b 5 5 5 5 5 5 5 5 b c . .
                    . . c 5 5 5 5 d d 5 5 5 5 c . .
                    . . c 5 5 d b b b b d 5 5 c . .
                    . . c 5 d b c c c c b d 5 c . .
                    . . c c c c . . . . c c c c . .
                    . . . . . . . . . . . . . . . .
                `, SpriteKind.Player)
        sta.setPosition(randint(0, 120), randint(0, 120))
        star_sprites.push(sta)
        pause(100)
    }
    for (let star of star_sprites) {
        pause(100)
        star.setFlag(SpriteFlag.Invisible, true)
    }
}
