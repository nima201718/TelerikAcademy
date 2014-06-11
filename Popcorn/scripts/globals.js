var stage,
    bricksLayer,
    ballLayer,
    paddleLayer,
    explosionsLayer,
    ctx,
    STAGE_WIDTH = 500,
    STAGE_HEIGHT = 350,
    BALL_START_X = 50,
    BALL_START_Y = 50,
    BALL_RADIUS = 5,
    BALL_COLOR = 'red',
    DIRECTION_X = 2,
    DIRECTION_Y = 6,
    MAX_X_SPEED = 4,
    PADDLE_WIDTH = 100,
    PADDLE_HEIGHT = 5,
    PADDLE_COLOR = 'black',
    PADDLE_START_X = STAGE_WIDTH / 2 - PADDLE_WIDTH / 2,
    PADDLE_START_Y = STAGE_HEIGHT - PADDLE_HEIGHT,
    GAME_OVER = false,
    RIGHT_DOWN = false,
    LEFT_DOWN = false,
    BRICK_WIDTH = 40,
    BRICK_HEIGHT = 15,
    BRICK_SPACING = 1,
    BRICK_COLOR = 'black',
    BRICK_ROW_COUNT = 5,
    PRODUCIBLE_OBJECTS = ['ShootingPaddle', 'LongerPaddle','MultipleBalls', 'FireBall', 'BOMB'];