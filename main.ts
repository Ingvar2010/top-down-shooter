controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    p1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . f f . . . . . . . . . 
        `],
    200,
    true
    )
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
	
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    p2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e d f d d f d e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 f f f f 8 . . . . . 
        . . . . . d f . . f d . . . . . 
        . . . . . 2 2 . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e d f d d f d e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 f f f f 8 . . . . . 
        . . . . . d f . . f d . . . . . 
        . . . . . . . . . 2 2 . . . . . 
        `],
    200,
    true
    )
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    p1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d f . . . . . . . 
        . . . . . e d d d . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . c . a a a . . . . . 
        . . . . f c c . . . a . . . . . 
        . . . . f . . . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d f . . . . . . . 
        . . . . . e d d d . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . c . a . . . . . . . 
        . . . . . . c . a . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d f . . . . . . . 
        . . . . . e d d d . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . a . c c c . . . . . 
        . . . . f a a . . . c . . . . . 
        . . . . f . . . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d f . . . . . . . 
        . . . . . e d d d . . . . . . . 
        . . . . . e e d d . . . . . . . 
        . . . . . e e d . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . a . c . . . . . . . 
        . . . . . . a . c . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `],
    200,
    true
    )
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    p1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . f d e e . . . . . 
        . . . . . . . d d d e . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . . d e e . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . a a a . c . . . . . . 
        . . . . . a . . . c c f . . . . 
        . . . . f f . . . . . f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . f d e e . . . . . 
        . . . . . . . d d d e . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . . d e e . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . . . a . c . . . . . . 
        . . . . . . . a . c . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . f d e e . . . . . 
        . . . . . . . d d d e . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . . d e e . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . c c c . a . . . . . . 
        . . . . . c . . . a a f . . . . 
        . . . . f f . . . . . f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . f d e e . . . . . 
        . . . . . . . d d d e . . . . . 
        . . . . . . . d d e e . . . . . 
        . . . . . . . . d e e . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . . . c . a . . . . . . 
        . . . . . . . c . a . . . . . . 
        . . . . . . f f f f . . . . . . 
        `],
    200,
    true
    )
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    p1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e d f d d f d e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e d f d d f d e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 a a a a 7 . . . . . 
        . . . . . d a . . a d . . . . . 
        . . . . . . . . . f f . . . . . 
        `],
    200,
    true
    )
})
let p1: Sprite = null
let p2: Sprite = null
p2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e d d d d e e . . . . 
    . . . . e d d d d d d e . . . . 
    . . . . e d f d d f d e . . . . 
    . . . . e d d d d d d e . . . . 
    . . . . e e d d d d e e . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 8 f f f f 8 . . . . . 
    . . . . . d f . . f d . . . . . 
    . . . . . 2 2 . . 2 2 . . . . . 
    `, SpriteKind.Player)
p1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e d d d d e e . . . . 
    . . . . e d d d d d d e . . . . 
    . . . . e d f d d f d e . . . . 
    . . . . e d d d d d d e . . . . 
    . . . . e e d d d d e e . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 a a a a 7 . . . . . 
    . . . . . d a . . a d . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(p1)
scene.cameraFollowSprite(p1)
controller.player2.moveSprite(p2)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, p1)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, p2)
