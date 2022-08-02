let image_map
let music_beijing
let music_shanghai
let music_guangzhou
let music_chengdu
let music_chongqing

const threshold = 30

const beijing = { x: 545 / 844, y: 134 / 390 }
const shanghai = { x: 605 / 844, y: 238 / 390 }
const guangzhou = { x: 526 / 844, y: 358 / 390 }
const chongqing = { x: 472 / 844, y: 259 / 390 }
const chengdu = { x: 436 / 844, y: 238 / 390 }

let population = ''
let SECOND_VALUE = 255
let duration = SECOND_VALUE

function preload() {
  image_map = loadImage('assets/map.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1)
  textAlign(CENTER, CENTER)
  textSize(50)

  music_beijing = createAudio('assets/beijing.m4a')
  music_shanghai = createAudio('assets/shanghai.m4a')
  music_guangzhou = createAudio('assets/guangzhou.mp3')
  music_chengdu = createAudio('assets/chengdu.mp3')
  music_chongqing = createAudio('assets/chongqing.mp3')

  beijing.x *= width
  beijing.y *= height
  shanghai.x *= width
  shanghai.y *= height
  guangzhou.x *= width
  guangzhou.y *= height
  chengdu.x *= width
  chengdu.y *= height
  chongqing.x *= width
  chongqing.y *= height
}

function draw() {
  background(255)
  image(image_map, 0, 0, width, height)

  fill(245, 250, 30, 200)
  stroke(245, 250, 30)
  const scale = 2
  circle(beijing.x, beijing.y, 21 / scale)
  circle(shanghai.x, shanghai.y, 24 / scale)
  circle(guangzhou.x, guangzhou.y, 22 / scale)
  circle(chengdu.x, chengdu.y, 16 / scale)
  circle(chongqing.x, chongqing.y, 31 / scale)

  if (duration > 0) {
    duration -= 1.5
    fill(255, 0, 0, duration)
    text(population, 150, 35)
  }
}

function mouseClicked() {
  if (dist(mouseX, mouseY, beijing.x, beijing.y) <= threshold) {
    population = '21,530,000'
    duration = SECOND_VALUE
    music_beijing.play()
  } else if (dist(mouseX, mouseY, shanghai.x, shanghai.y) <= threshold) {
    population = '24,280,000'
    duration = SECOND_VALUE
    music_shanghai.play()
  } else if (dist(mouseX, mouseY, guangzhou.x, guangzhou.y) <= threshold) {
    population = '22,000,000'
    duration = SECOND_VALUE
    music_guangzhou.play()
  } else if (dist(mouseX, mouseY, chengdu.x, chengdu.y) <= threshold) {
    population = '16,581,000'
    duration = SECOND_VALUE
    music_chengdu.play()
  } else if (dist(mouseX, mouseY, chongqing.x, chongqing.y) <= threshold) {
    population = '31,017,900'
    duration = SECOND_VALUE
    music_chongqing.play()
  }
}