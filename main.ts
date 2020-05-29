namespace SpriteKind {
    export const item_block = SpriteKind.create()
    export const coin = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 f 5 f 5 f 5 f 5 f 5 f 5 f 5 f 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.item_block, SpriteKind.item_block, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, myTiles.tile1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item_block, function (sprite, otherSprite) {
    if (mySprite.vy < 0) {
        otherSprite.destroy()
        if (Math.percentChance(50)) {
            mySprite3 = sprites.create(img`
. . . . . . . e c 7 . . . . . . 
. . . . e e e c 7 7 e e . . . . 
. . c e e e e c 7 e 2 2 e e . . 
. c e e e e e c 6 e e 2 2 2 e . 
. c e e e 2 e c c 2 4 5 4 2 e . 
c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 2 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, SpriteKind.Food)
        } else {
            mySprite3 = sprites.create(img`
. . b b b . . 
. b 5 5 5 b . 
b 5 d 3 d 5 b 
b 5 3 5 1 5 b 
c 5 3 5 1 d c 
c 5 d 1 d d c 
. f d d d f . 
. . f f f . . 
`, SpriteKind.coin)
        }
        mySprite3.setPosition(otherSprite.x, otherSprite.y)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite.vy > 0) {
        mySprite.vy = -110
        otherSprite.destroy()
        if (number_of_bounce > 0) {
            info.changeScoreBy(number_of_bounce)
            number_of_bounce += 1
        } else {
            info.changeScoreBy(1)
            number_of_bounce += 1
        }
    } else {
        info.changeLifeBy(-1)
        pause(1000)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -110
    }
})
let mySprite4: Sprite = null
let number_of_bounce = 0
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
`, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(
            hex`3c001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010100000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000003000000000000000101010101000000000000000000000000030000000000000000000000000003000000000000000000000000000000000000000000000000000000010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000001010101010101010100000000000000000000000000000000000004000000000000000005010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.builtin.forestTiles0,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
info.setLife(3)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
scene.cameraFollowSprite(mySprite)
mySprite.setFlag(SpriteFlag.Ghost, false)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
for (let index = 0; index < 5; index++) {
    mySprite2 = sprites.create(img`
f 4 4 4 4 4 4 4 f 4 4 4 4 4 4 f 
4 f 4 4 4 4 4 f 4 4 4 4 4 4 f 4 
4 4 f 4 4 4 4 4 f 4 4 4 4 f 4 4 
4 4 4 f 4 4 4 f 4 4 4 4 f 4 4 4 
4 4 4 4 f 4 4 4 f 4 4 f 4 4 4 4 
4 4 4 4 4 f 4 f 4 4 f 4 4 4 4 4 
4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 
f 4 f 4 f 4 4 f f 4 f 4 f 4 f 4 
4 f 4 f 4 f 4 f f 4 4 f 4 f 4 f 
4 4 4 4 4 4 f 4 4 f 4 4 4 4 4 4 
4 4 4 4 4 f 4 4 f 4 f 4 4 4 4 4 
4 4 4 4 f 4 4 f 4 4 4 f 4 4 4 4 
4 4 4 f 4 4 4 4 f 4 4 4 f 4 4 4 
4 4 f 4 4 4 4 f 4 4 4 4 4 f 4 4 
4 f 4 4 4 4 4 4 f 4 4 4 4 4 f 4 
f 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f 
`, SpriteKind.item_block)
    tiles.placeOnRandomTile(mySprite2, myTiles.tile1)
}
forever(function () {
    pause(2000)
    mySprite4 = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite4, myTiles.tile2)
    mySprite4.setFlag(SpriteFlag.BounceOnWall, true)
    mySprite4.vx = 80
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        number_of_bounce = 0
    }
})
